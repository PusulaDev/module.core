import { urlUtils } from "../utils/url.utils";
import { type IHTTPClient, type IHTTPClientOptions, EnumRequestMethod } from "./index";
import { CustomServerError } from "../custom-errors/custom-server-error";
import type { RequestOptions } from "./types/request-options.interface";
import { CustomHttpClientError } from "../custom-errors/custom-http-client-error";
import { EnumCustomErrorType } from "../custom-errors/statics/custom-error-type.enum";
import { globalModule } from "../global-module/global-module";

export class FetchHTTPClient implements IHTTPClient {
    private baseUrl: string;
    private headers?: Record<string, string>;
    private createErrorFn?: (response: Response) => Promise<Error>;
    private pendingRequests = new Map<string, Promise<Response>>();
    private preventRequestDuplication?: boolean;

    constructor(options: IHTTPClientOptions) {
        this.baseUrl = this.createBaseUrl(options);
        this.headers = options.headers;
        this.createErrorFn = options.createErrorFn;
        this.preventRequestDuplication = options.preventRequestDuplication;
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

    async upload<TResponse = undefined>(url: string, formData: FormData): Promise<TResponse | undefined> {
        try {
            return this.handleUpload(url, formData);
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

    private async handleUpload<TResponse = undefined>(url: string, formData: FormData): Promise<TResponse> {
        const response = await fetch(`${this.baseUrl}${url}`, {
            method: "POST",
            headers: {
                ...this.headers,
                "Content-Type": "multipart/form-data",
            },
            body: formData,
        });

        return this.handleResponse(response);
    }

    private createFetchInit(method: string, options?: RequestOptions, data?: unknown): RequestInit {
        const abortController = options?.abortController as AbortController | undefined;

        const isGet = method === "GET";

        let body: RequestInit["body"] = undefined;

        if (!isGet && data) body = JSON.stringify(data);

        return {
            method,
            headers: this.getHeaders(),
            body: body,
            signal: abortController?.signal,
        };
    }

    private getHeaders() {
        const merged = { ...globalModule.getSharedHeaders(), ...this.headers };
        if (Object.keys(merged).length) return merged;
    }

    private createQueryString = (data: unknown) => {
        const searchParams = new URLSearchParams(data as string).toString();
        return `?${searchParams}`;
    };

    private async handleRequest<TRequest, TResponse = undefined>(opts: {
        url: string;
        key: string;
        method: string;
        data?: TRequest;
        options?: RequestOptions;
    }): Promise<TResponse> {
        const { url, key, method, data, options } = opts;
        let customUrl = url;

        const pendingRequest = this.pendingRequests.get(key);
        const init = this.createFetchInit(method, options, data);

        if (method === EnumRequestMethod.GET && data) {
            customUrl += this.createQueryString(data);
        }

        let response: Response = await this.createResponse({
            url: customUrl,
            init,
            key: key,
            pendingRequest,
        });

        this.pendingRequests.delete(key);

        return this.handleResponse(response);
    }

    private createKey(url: string, method: string, data?: any) {
        return `${url}_${method}_${data ? JSON.stringify(data) : ""}`;
    }

    private async createResponse(options: {
        url: string;
        init: RequestInit;
        key: string;
        pendingRequest?: Promise<Response>;
    }): Promise<Response> {
        if (options.pendingRequest) return await options.pendingRequest;

        const request = fetch(`${this.baseUrl}${options.url}`, options.init);

        if (this.preventRequestDuplication) this.pendingRequests.set(options.key, request);

        return await request;
    }

    private async handleResponse(response: Response) {
        if (response.ok) return response.json();

        await this.handleResponseError(response);
    }

    private async handleResponseError(response: Response) {
        if (this.createErrorFn) throw await this.createErrorFn(response);

        const body = response.body ? ` ${response.body}` : "";
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
