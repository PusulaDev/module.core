import type { URLOptions } from "../../utils";
import type { EnumResponseFormat } from "./response-format.enum";

export interface IHTTPClientOptions extends Partial<URLOptions> {
    baseUrl?: string;
    headers?: Record<string, string>;
    preventRequestDuplication?: boolean;
    responseFormat?: EnumResponseFormat;
    createErrorFn?: (response: any) => Promise<Error> | Error;
}
