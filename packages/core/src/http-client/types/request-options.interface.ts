import type { IAbortController } from "./abort-controller.interface";
import type { EnumResponseFormat } from "./response-format.enum";
import type { EnumCreateQueryFormat } from "./create-query-format.enum";

export type RequestOptions = {
    abortController?: IAbortController;
    headers?: Record<string, string>;
    responseFormat?: EnumResponseFormat;
    queryFormat?: EnumCreateQueryFormat;
};
