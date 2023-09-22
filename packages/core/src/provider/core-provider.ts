import { EnumRequestMethod, IAbortController, IHTTPClient, RequestOptions } from "../http-client";
import type { IProvider } from "./index";
import type { ICachableRequestConfig, IRequestConfig, ProviderRequestOptions } from "./types";
import type { ICache } from "../cache";
import { CustomProviderError, EnumCustomErrorType } from "../custom-errors";
import { validateAndThrow } from "./validator";
import { urlToHttpOptions } from "url";

export class CoreProvider implements IProvider {
    protected baseUrl: string | null = null;
    protected cache?: ICache;
    private client: IHTTPClient;
    private abortControllers = new Map<string, IAbortController>();

    constructor(client: IHTTPClient) {
        this.client = client;
    }

    async request<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        method: EnumRequestMethod,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        await this.validateRequest(config, data);

        const requestOptions = this.createRequestOptions(config, options);

        const computedUrl = this.createUrl(config.url, config.queryKeys, data);

        const response = await this.tryClientRequest(
            () => this.client.request<TRequest, TResponse>(computedUrl, method, data, requestOptions),
            options
        );

        await this.validateResponse<TRequest, TResponse>(config, response);
        return response;
    }

    async get<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(config, EnumRequestMethod.GET, data, options);
    }

    async post<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(config, EnumRequestMethod.POST, data, options);
    }

    async put<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(config, EnumRequestMethod.PUT, data, options);
    }

    async patch<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(config, EnumRequestMethod.PATCH, data, options);
    }

    async delete<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.request(config, EnumRequestMethod.DELETE, data, options);
    }

    async cachableRequest<TRequest = undefined, TResponse = undefined>(
        config: ICachableRequestConfig<TRequest, TResponse>,
        method: EnumRequestMethod,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        if (!this.cache)
            throw new CustomProviderError({
                type: EnumCustomErrorType.Construction,
                message: "'cache' property must be defined.",
            });

        if (options?.invalidateCache) this.cache.remove(config.cacheKey);

        const cached = this.getFromCache<TResponse>(config.cacheKey);
        if (cached != undefined) return cached;

        const response = await this.request(config, method, data, options);

        this.saveToCache(config.cacheKey, response);

        return response;
    }

    async cachablePost<TRequest = undefined, TResponse = undefined>(
        config: ICachableRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.cachableRequest(config, EnumRequestMethod.POST, data, options);
    }

    async cachableGet<TRequest = undefined, TResponse = undefined>(
        config: ICachableRequestConfig<TRequest, TResponse>,
        data?: TRequest,
        options?: ProviderRequestOptions
    ): Promise<TResponse | undefined> {
        return this.cachableRequest(config, EnumRequestMethod.GET, data, options);
    }

    async upload<TResponse = undefined>(url: string, formData: FormData): Promise<TResponse | undefined> {
        const computedUrl = this.createUrl(url);

        return this.client.upload<TResponse>(computedUrl, formData);
    }

    protected getFromCache<T>(key: string) {
        return this.cache?.get(key) as T | undefined;
    }

    protected saveToCache<T>(key: string, value: T) {
        if (value != undefined) this.cache?.set(key, value);
    }

    private createUrl<TRequest>(
        url: string,
        keys?: IRequestConfig<TRequest, unknown>["queryKeys"],
        data?: TRequest
    ): string {
        const urlWithBase = this.baseUrl ? `${this.baseUrl}/${url}` : url;

        if (!keys?.length || data === undefined || data === null) return urlWithBase;

        const keysWithValue = keys.filter((key) => {
            const value = data[key];
            return value !== undefined;
        });

        if (keysWithValue.length) {
            return `${urlWithBase}?${keysWithValue
                .map((key) => `${String(key)}=\${${String(key)}}`)
                .join("&")}`;
        }

        return urlWithBase;
    }

    private async tryClientRequest<TResponse>(
        request: () => Promise<TResponse | undefined>,
        options?: ProviderRequestOptions
    ) {
        try {
            const response = await request();
            this.clearAbortControllers(options);

            return response;
        } catch (e) {
            this.clearAbortControllers(options);

            throw e;
        }
    }

    private createRequestOptions<TRequest, TResponse>(
        config: IRequestConfig<TRequest, TResponse>,
        options?: ProviderRequestOptions
    ): RequestOptions {
        const requestOptions: RequestOptions = {
            responseFormat: options?.responseFormat ?? config.responseFormat,
        };

        const headers = { ...(options?.headers ?? {}), ...(config.headers ?? {}) };

        if (Object.keys(headers).length) requestOptions.headers = headers;

        requestOptions.abortController = this.handleAbortAndCreateAbortController(options);

        return requestOptions;
    }

    private handleAbortAndCreateAbortController(options?: ProviderRequestOptions) {
        if (options?.abortController) return options.abortController;

        if (!options?.raceId || !this.client.createAbortController) return;

        this.abortPreviousRequest(options.raceId);

        const abortController = this.client.createAbortController();
        this.abortControllers.set(options.raceId, abortController);

        return abortController;
    }

    private abortPreviousRequest(raceId: string) {
        const abortController = this.abortControllers.get(raceId);
        if (abortController) abortController.abort();

        return abortController;
    }

    private clearAbortControllers(options?: ProviderRequestOptions) {
        if (!options?.raceId) return;

        this.abortControllers.delete(options?.raceId);
    }

    private async validateRequest<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        data: TRequest | undefined
    ) {
        try {
            if (config.validateRequest) {
                await config.validateRequest?.(data);
            }

            if (config.validationProperties?.length) {
                validateAndThrow({ value: data, properties: config.validationProperties });
            }
        } catch (e) {
            throw new CustomProviderError({
                type: EnumCustomErrorType.RequestValidation,
                message: e as string,
            });
        }
    }

    private async validateResponse<TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        response: TResponse | undefined
    ) {
        try {
            await config.validateResponse?.(response);
        } catch (e) {
            throw new CustomProviderError({
                type: EnumCustomErrorType.ResponseValidation,
                message: e as string,
            });
        }
    }
}
