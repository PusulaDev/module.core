import type { CustomError } from "../../custom-errors";
import type { EnumRequestMethod } from "./request-method.enum";

export interface RetryOnErrorMethodOptions {
    error: CustomError;
    url: string;
    data?: unknown;
    method: EnumRequestMethod;
}

export interface RetryOnErrorOptions {
    retryCondition: (options: RetryOnErrorMethodOptions) => boolean;
    beforeRetry: (options: RetryOnErrorMethodOptions) => Promise<void>;
    /**
     * default : 3
     */
    maxRetryCount?: number;
}
