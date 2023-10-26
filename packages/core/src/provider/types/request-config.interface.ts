import type { RequestDataMap } from "src/http-client/types/request-options.interface";
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
    validationProperties?: ValidationProperty<TRequest>[];
    /**
     * adds query parameters to url with this keys if value exists
     */
    queryKeys?: string[];
    dataMaps?: RequestDataMap<TRequest>;
};

export type ValidationProperty<T> = {
    name: keyof T | string;
    type?: string;
    rules: {
        isRequired?: boolean;
        maxLength?: number;
        minLength?: number;
        minimum?: number;
        maximum?: number;
        exclusiveMinimum?: boolean;
        exclusiveMaximum?: boolean;
        pattern?: string;
        uniqueItems?: boolean;
    };
};

export type ICachableRequestConfig<TRequest = undefined, TResponse = undefined> = IRequestConfig<
    TRequest,
    TResponse
> & { cacheKey: string };
