import type { ProviderRequestOptions } from "./provider-request-options.interface";

export type IRequestConfig<TRequest = undefined, TResponse = undefined> = {
    url: string;
    /**
     * unique key for cache algorithm
     */
    cacheKey?: string;
    headers?: ProviderRequestOptions["headers"];

    /**
     * throw error message if request invalid
     */
    validateRequest?: (req?: TRequest) => void;
    /**
     * throw error message if response invalid
     */
    validateResponse?: (res?: TResponse) => void;
};

export type ICachableRequestConfig<TRequest = undefined, TResponse = undefined> = IRequestConfig<
    TRequest,
    TResponse
> & { cacheKey: string };
