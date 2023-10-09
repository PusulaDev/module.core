import type { IAbortController } from "./abort-controller.interface";
import type { EnumResponseFormat } from "./response-format.enum";

export type RequestDataMapValue<TRequest> = string | keyof TRequest | ((data: TRequest) => unknown);

export interface RequestDataMap<TRequest> {
    body: RequestDataMapValue<TRequest>;
    path?: RequestDataMapValue<TRequest>;
    query?: RequestDataMapValue<TRequest>;
}

export interface RequestOptions<TRequest = unknown> {
    abortController?: IAbortController;
    headers?: Record<string, string>;
    responseFormat?: EnumResponseFormat;
    queryKeys?: string[];
    dataMaps?: RequestDataMap<TRequest>;
}
