import type { EnumResponseFormat } from "../../http-client";
import type { ProviderRequestOptions } from "./provider-request-options.interface";

export type IRequestConfig<TRequest = undefined, TResponse = undefined> = {
    url: string;
    /**
     * unique key for cache algorithm
     */
    cacheKey?: string;
    headers?: ProviderRequestOptions["headers"];
    responseFormat?: EnumResponseFormat;
    /**
     * throw error message if request invalid
     */
    validateRequest?: (req?: TRequest) => void | Promise<void>;
    /**
     * throw error message if response invalid
     */
    validateResponse?: (res?: TResponse) => void | Promise<void>;
};

export type ICachableRequestConfig<TRequest = undefined, TResponse = undefined> = IRequestConfig<
    TRequest,
    TResponse
> & { cacheKey: string };
