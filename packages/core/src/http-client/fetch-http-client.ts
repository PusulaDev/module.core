import { createFormData, ensureObject, urlUtils } from "../utils";
import {
    contentTypeKey,
    EnumContentType,
    EnumRequestMethod,
    EnumResponseFormat,
    type IHTTPClient,
    type IHTTPClientOptions,
} from "./index";
import { CustomError, CustomHttpClientError, CustomServerError, EnumCustomErrorType } from "../custom-errors";
import { type RequestOptions, type RetryOnErrorOptions, EnumQueryStringMultipleValueFormat } from "./types";
import { globalModule } from "../global-module";
import type { RequestDataMapValue } from "./types/request-options.interface";

export class FetchHTTPClient implements IHTTPClient {
    private readonly baseUrl: string;
    private readonly createErrorFn?: IHTTPClientOptions["createErrorFn"];
    private readonly preventRequestDuplication?: boolean;
    private readonly responseFormat?: EnumResponseFormat;
    private readonly defaultRetryCount = 3;
    private readonly queryStringFormat?: EnumQueryStringMultipleValueFormat;
    private retryOnErrorOptions?: RetryOnErrorOptions;
    private pendingRequests = new Map<string, Promise<Response>>();
    private headers?: Record<string, string>;

    private requestRetryCounts = new Map<string, number>();

    constructor(options: IHTTPClientOptions) {
        this.baseUrl = this.createBaseUrl(options);
        this.headers = options.headers;
        this.createErrorFn = options.createErrorFn;
        this.preventRequestDuplication = options.preventRequestDuplication;
        this.responseFormat = options.responseFormat;
        this.retryOnErrorOptions = options.retryOnErrorOptions;
        this.queryStringFormat = options.queryStringFormat ?? EnumQueryStringMultipleValueFormat.Encoded;
    }

    setRetryOnErrorOptions(options: RetryOnErrorOptions) {
        this.retryOnErrorOptions = options;
    }

    createAbortController() {
        return new AbortController();
    }

    getPendingRequests() {
        return this.pendingRequests;
    }

    async request<TRequest, TResponse = undefined>(
        url: string,
        method: EnumRequestMethod,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        const copiedData = data ? (JSON.parse(JSON.stringify(data)) as TRequest) : data;

        const key = this.createKey(url, method, copiedData);

        try {
            const res = await this.handleRequest({
                url,
                data: copiedData,
                options,
                key,
                method,
            });
            this.requestRetryCounts.delete(key);
            return res;
        } catch (e) {
            return this.handleErrorWithRetry(e as CustomError, {
                key,
                url,
                data: copiedData,
                method,
                options,
            });
        }
    }

    private async handleErrorWithRetry<TRequest, TResponse = undefined>(
        e: CustomError,
        requestOptions: {
            url: string;
            method: EnumRequestMethod;
            data?: TRequest;
            options?: RequestOptions<TRequest>;
            key: string;
        }
    ): Promise<TResponse | undefined> {
        const { url, key, options, data, method } = requestOptions;

        const count = this.requestRetryCounts.get(key) ?? 0;
        const maxRetryCount = this.retryOnErrorOptions?.maxRetryCount ?? this.defaultRetryCount;

        if (
            count < maxRetryCount &&
            this.retryOnErrorOptions?.retryCondition({ error: e, url, data, method })
        ) {
            await this.retryOnErrorOptions?.beforeRetry({ error: e, url, data, method });
            this.requestRetryCounts.set(key, count + 1);
            return this.request(url, method, data, options);
        } else {
            this.requestRetryCounts.delete(key);
            this.handleError(e, key);
        }
    }

    async get<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.GET, data, options);
    }

    async post<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.POST, data, options);
    }

    async put<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.PUT, data, options);
    }

    async patch<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.PATCH, data, options);
    }

    async delete<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.DELETE, data, options);
    }

    async upload<TResponse = undefined>(
        url: string,
        formData: FormData,
        options?: RequestOptions<undefined>
    ): Promise<TResponse | undefined> {
        try {
            return this.handleUpload(url, formData, options);
        } catch (e) {
            this.handleError(e, url);
        }
    }

    setHeader(key: string, value: string) {
        if (!this.headers) this.headers = {};

        this.headers[key] = value;
    }

    removeHeader(key: string) {
        delete this.headers?.[key];

        const isHeadersEmpty = !Object.keys(this.headers ?? {}).length;

        if (isHeadersEmpty) this.headers = undefined;
    }

    private mergeUrlRouteParams(url: string, data: Record<string, unknown>) {
        const parts = url.split(/\$\{(?!\d)[\wæøåÆØÅ]*\}/);
        const args = url.match(/[^{}]+(?=})/g) || [];
        const parameters = args.map(
            (argument) => data[argument] || (data[argument] === undefined ? "" : data[argument])
        );

        const string = String.raw({ raw: parts }, ...parameters);
        args.forEach((arg) => data[arg] && this.removeWithKey(data, arg));

        return string;
    }

    private async handleUpload<TResponse = undefined>(
        url: string,
        formData: FormData,
        options?: RequestOptions<undefined>
    ): Promise<TResponse | undefined> {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            headers: {
                ...this.headers,
                [contentTypeKey]: EnumContentType.FormData,
            },
            body: formData,
        });

        return this.handleResponse<TResponse>(response, options?.responseFormat);
    }

    private checkContentType = (key: string, value: string, contentType: string) =>
        String(key).toLowerCase() === contentTypeKey && String(value).toLowerCase().indexOf(contentType) > -1;

    private createBody = (
        method: EnumRequestMethod,
        data?: unknown,
        headers: RequestOptions<undefined>["headers"] = {}
    ) => {
        let body: RequestInit["body"] = undefined;
        const isGet = method === "GET";

        if (isGet || !data) return body;

        const isContentTypeJson = Object.entries(headers).some(([key, value]) =>
            this.checkContentType(key, value, EnumContentType.Json)
        );

        const isContentTypeUrlEncoded = Object.entries(headers).some(([key, value]) =>
            this.checkContentType(key, value, EnumContentType.UrlEncoded)
        );

        const isContentTypeFormData = Object.entries(headers).some(([key, value]) =>
            this.checkContentType(key, value, EnumContentType.FormData)
        );

        if (isContentTypeJson) body = JSON.stringify(data);
        else if (isContentTypeUrlEncoded && ensureObject(data))
            body = new URLSearchParams(data as Record<string, string>);
        else if (isContentTypeFormData && ensureObject(data))
            body = createFormData(data as Record<string, string>);

        return body;
    };

    private createFetchInit<TRequest>(
        method: EnumRequestMethod,
        options?: RequestOptions<TRequest>,
        data?: TRequest
    ): RequestInit {
        const abortController = options?.abortController as AbortController | undefined;

        const headers = this.getHeaders(options?.headers);
        const body = this.createBody(method, data, headers);

        return {
            method,
            headers: headers,
            body: body,
            signal: abortController?.signal,
        };
    }

    private getHeaders(additionalHeaders?: RequestOptions["headers"]) {
        const merged = { ...globalModule.getSharedHeaders(), ...this.headers, ...additionalHeaders };
        if (Object.keys(merged).length) return merged;
    }

    private checkValueForQueryString<T>(value: T) {
        return value !== undefined && value !== "";
    }

    private createQueryString = (data: unknown, queryKeys?: string[]) => {
        if (data && typeof data === "object") {
            const searchParams = new URLSearchParams();

            const entriesWithValue: { key: string; value: unknown }[] = [];

            if (queryKeys?.length) {
                queryKeys.forEach((key) => {
                    const value = data[key as keyof typeof data] as unknown;
                    if (this.checkValueForQueryString(value)) entriesWithValue.push({ key, value });
                });
            } else {
                Object.entries(data).forEach(([key, value]) => {
                    if (this.checkValueForQueryString(value))
                        entriesWithValue.push({ key, value: value as unknown });
                });
            }

            if (entriesWithValue.length) {
                entriesWithValue.forEach(({ key, value }) => {
                    this.removeWithKey(data, key);

                    if (Array.isArray(value)) {
                        this.addArrayToSearchParams({ searchParams, key, value });
                    } else {
                        searchParams.set(key, value as string);
                    }
                });
                const queryString = searchParams.toString();
                return queryString ? `?${queryString}` : "";
            }
            return "";
        }

        const searchParams = new URLSearchParams(data as string).toString();
        return searchParams ? `?${searchParams}` : "";
    };

    private removeWithKey<T>(data: T, key: string) {
        delete data[key as keyof typeof data];
    }

    private addArrayToSearchParams({
        searchParams,
        value,
        key,
    }: {
        searchParams: URLSearchParams;
        value: unknown[];
        key: string;
    }) {
        if (this.queryStringFormat === EnumQueryStringMultipleValueFormat.Encoded) {
            searchParams.append(key, `[${value.join(",")}]`);
        } else if (this.queryStringFormat === EnumQueryStringMultipleValueFormat.CommaSeperated) {
            searchParams.append(key, value.join(","));
        } else if (this.queryStringFormat === EnumQueryStringMultipleValueFormat.MultiParameter) {
            value.forEach((item) => {
                searchParams.append(key, item as string);
            });
        }
    }

    private getValueWithDataMap<TRequest>(data: TRequest, mapper: RequestDataMapValue<TRequest>) {
        if (typeof mapper === "function") return mapper(data);
        else return data[mapper as keyof TRequest];
    }

    private createDataMap<TRequest>(data?: TRequest, options?: RequestOptions<TRequest>) {
        const dataMap: { query: unknown; body: unknown; path: unknown } = {
            query: data,
            body: data,
            path: data,
        };

        if (data && options?.dataMaps) {
            if (options.dataMaps.body) {
                dataMap.body = this.getValueWithDataMap(data, options.dataMaps.body);
            }

            if (options.dataMaps.query) {
                dataMap.query = this.getValueWithDataMap(data, options.dataMaps.query);
            }

            if (options.dataMaps.path) {
                dataMap.path = this.getValueWithDataMap(data, options.dataMaps.path);
            }
        }
        return dataMap;
    }

    private async handleRequest<TRequest, TResponse = undefined>(opts: {
        url: string;
        key: string;
        method: EnumRequestMethod;
        data?: TRequest;
        options?: RequestOptions<TRequest>;
    }): Promise<TResponse | undefined> {
        const { url, key, method, data, options } = opts;
        let customUrl = url;

        const dataMap = this.createDataMap(data, options);

        if (ensureObject(dataMap.path)) {
            customUrl = this.mergeUrlRouteParams(url, dataMap.path as Record<string, unknown>);
        }

        if (dataMap.query !== undefined && (method === EnumRequestMethod.GET || options?.queryKeys?.length)) {
            customUrl += this.createQueryString(dataMap.query, options?.queryKeys);
        }

        const pendingRequest = this.pendingRequests.get(key);
        const init = this.createFetchInit(method, options, dataMap.body as TRequest);

        const response: Response = await this.createResponse({
            url: customUrl,
            init,
            key: key,
            pendingRequest,
        });

        this.pendingRequests.delete(key);

        return this.handleResponse<TResponse>(response, options?.responseFormat);
    }

    private createKey(url: string, method: string, data?: any) {
        return `${url}_${method}_${data ? JSON.stringify(data) : ""}`;
    }

    private ensureNoStartingSlashOnUrl = (url: string) => {
        if (url.indexOf("/") === 0) return url.substring(1);
        return url;
    };

    private async createResponse(options: {
        url: string;
        init: RequestInit;
        key: string;
        pendingRequest?: Promise<Response>;
    }): Promise<Response> {
        if (options.pendingRequest) return await options.pendingRequest;
        const url = this.ensureNoStartingSlashOnUrl(options.url);

        const combinedUrl = `${this.baseUrl}${url}`;

        const request = fetch(combinedUrl, options.init);

        if (this.preventRequestDuplication) this.pendingRequests.set(options.key, request);

        return await request;
    }

    private async handleResponse<T>(response: Response, format?: EnumResponseFormat): Promise<T | undefined> {
        if (!response.ok) await this.handleResponseError(response);

        const mergedFormat = format ?? this.responseFormat;

        const text = await response.clone().text();
        if (!text) return;

        switch (mergedFormat) {
            case EnumResponseFormat.Json:
                return (await response.clone().json()) as T;
            case EnumResponseFormat.FormData:
                return (await response.clone().formData()) as T;
            case EnumResponseFormat.Blob:
                return (await response.clone().blob()) as T;
            case EnumResponseFormat.ArrayBuffer:
                return (await response.clone().arrayBuffer()) as T;
            case EnumResponseFormat.Text:
            default:
                return (await response.clone().text()) as T;
        }
    }

    private async handleResponseError(response: Response) {
        if (this.createErrorFn) throw await this.createErrorFn(response);

        const body = response.body ? ` ${String(response.body)}` : "";
        const message = `${response.status}: ${response.statusText}.${body}`;

        throw new CustomServerError({
            message,
            code: response.status.toString(),
        });
    }

    private handleError(error: unknown, key: string) {
        this.pendingRequests.delete(key);

        if (error instanceof DOMException && error.name == "AbortError")
            throw new CustomHttpClientError({
                type: EnumCustomErrorType.AbortedRequest,
                message: "Aborted request",
            });

        if (error instanceof CustomError) {
            throw new CustomServerError({ message: error.message, code: error.code, details: error.details });
        }

        if (error instanceof Error) {
            throw new CustomServerError({ message: error.message });
        }

        throw new CustomServerError({ message: JSON.stringify(error) });
    }

    private createBaseUrl(options: IHTTPClientOptions): string {
        if (options.baseUrl) return urlUtils.ensureLastCharacterToBeSlash(options.baseUrl);

        return urlUtils.createBaseUrl(options);
    }
}
