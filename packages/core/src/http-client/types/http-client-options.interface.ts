import type { URLOptions } from "../../utils";
import type { EnumResponseFormat } from "./response-format.enum";
import type { RetryOnErrorOptions } from "./retry-on-error-options";
import type { EnumQueryStringMultipleValueFormat } from "./query-string-multiple-value-format.enum";

export interface IHTTPClientOptions extends Partial<URLOptions> {
    baseUrl?: string;
    headers?: Record<string, string>;
    preventRequestDuplication?: boolean;
    responseFormat?: EnumResponseFormat;
    createErrorFn?: (response: any) => Promise<Error> | Error;
    retryOnErrorOptions?: RetryOnErrorOptions;
    queryStringFormat?: EnumQueryStringMultipleValueFormat;
}
