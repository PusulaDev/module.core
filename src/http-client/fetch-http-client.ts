import { createFormData, urlUtils } from "../utils";
import { EnumRequestMethod, type IHTTPClient, type IHTTPClientOptions } from "./index";
import { CustomHttpClientError, CustomServerError, EnumCustomErrorType } from "../custom-errors";
import type { RequestOptions } from "./types";
import { globalModule } from "../global-module";
import { ensureObject } from "..";
import { contentTypeKey, EnumContentType, EnumResponseFormat } from "./";

export class FetchHTTPClient implements IHTTPClient {
    private baseUrl: string;
    private headers?: Record<string, string>;
    private createErrorFn?: IHTTPClientOptions["createErrorFn"];
    private pendingRequests = new Map<string, Promise<Response>>();
    private preventRequestDuplication?: boolean;
    private responseFormat: EnumResponseFormat | undefined;

    constructor(options: IHTTPClientOptions) {
        this.baseUrl = this.createBaseUrl(options);
        this.headers = options.headers;
        this.createErrorFn = options.createErrorFn;
        this.preventRequestDuplication = options.preventRequestDuplication;
        this.responseFormat = options.responseFormat;
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
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        const key = this.createKey(url, method, data);

        try {
            return await this.handleRequest({
                url,
                data,
                options,
                key,
                method,
            });
        } catch (e) {
            this.handleError(e, url);
        }
    }

    async get<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.GET, data, options);
    }

    async post<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.POST, data, options);
    }

    async put<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.PUT, data, options);
    }

    async patch<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.PATCH, data, options);
    }

    async delete<TRequest, TResponse = undefined>(
        url: string,
        data?: TRequest,
        options?: RequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(url, EnumRequestMethod.DELETE, data, options);
    }

    async upload<TResponse = undefined>(
        url: string,
        formData: FormData,
        options?: RequestOptions
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
        const parts = url.split(/\$\{(?!\d)[\w????????????]*\}/);
        const args = url.match(/[^{}]+(?=})/g) || [];
        const parameters = args.map(
            (argument) => data[argument] || (data[argument] === undefined ? "" : data[argument])
        );

        const string = String.raw({ raw: parts }, ...parameters);
        args.forEach((arg) => data[arg] && delete data[arg]);

        return string;
    }

    private async handleUpload<TResponse = undefined>(
        url: string,
        formData: FormData,
        options?: RequestOptions
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
        headers: RequestOptions["headers"] = {}
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

    private createFetchInit(
        method: EnumRequestMethod,
        options?: RequestOptions,
        data?: unknown
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

    private createQueryString = (data: unknown) => {
        const searchParams = new URLSearchParams(data as string).toString();
        return searchParams ? `?${searchParams}` : "";
    };

    private async handleRequest<TRequest, TResponse = undefined>(opts: {
        url: string;
        key: string;
        method: EnumRequestMethod;
        data?: TRequest;
        options?: RequestOptions;
    }): Promise<TResponse | undefined> {
        const { url, key, method, data, options } = opts;
        let customUrl = url;

        if (ensureObject(data)) {
            customUrl = this.mergeUrlRouteParams(url, data as Record<string, unknown>);
        }

        if (method === EnumRequestMethod.GET && data) {
            customUrl += this.createQueryString(data);
        }

        const pendingRequest = this.pendingRequests.get(key);
        const init = this.createFetchInit(method, options, data);

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
        throw new Error(`${response.status}: ${response.statusText}.${body}`);
    }

    private handleError(error: unknown, key: string) {
        this.pendingRequests.delete(key);

        if (error instanceof DOMException && error.name == "AbortError")
            throw new CustomHttpClientError({
                type: EnumCustomErrorType.AbortedRequest,
            });

        throw new CustomServerError({ message: (error as Error).message });
    }

    private createBaseUrl(options: IHTTPClientOptions): string {
        if (options.baseUrl) return urlUtils.ensureLastCharacterToBeSlash(options.baseUrl);

        return urlUtils.createBaseUrl(options);
    }
}
