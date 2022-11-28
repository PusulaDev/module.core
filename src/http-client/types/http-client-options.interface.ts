import type { URLOptions } from "../../utils/types/url-options.interface";
import type { EnumResponseFormat } from "./response-format.enum";

export interface IHTTPClientOptions extends Partial<URLOptions> {
    baseUrl?: string;
    headers?: Record<string, string>;
    preventRequestDuplication?: boolean;
    responseFormat?: EnumResponseFormat;
    createErrorFn?: (response: any) => Promise<Error> | Error;
}
