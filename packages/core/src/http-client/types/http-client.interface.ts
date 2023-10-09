import type { IAbortController } from "./abort-controller.interface";
import type { IHTTPClientOptions } from "./http-client-options.interface";
import type { EnumRequestMethod } from "./request-method.enum";
import type { RequestOptions } from "./request-options.interface";

type ClientRequest = <TRequest, TResponse = undefined>(
    url: string,
    data?: TRequest,
    options?: RequestOptions
) => Promise<TResponse | undefined>;

export type IHTTPClient = {
    request: <TRequest, TResponse = undefined>(
        url: string,
        method: EnumRequestMethod,
        data?: TRequest,
        options?: RequestOptions<TRequest>
    ) => Promise<TResponse | undefined>;

    get: ClientRequest;
    post: ClientRequest;
    delete: ClientRequest;
    put: ClientRequest;
    patch: ClientRequest;

    upload: <TResponse = undefined>(url: string, formData: FormData) => Promise<TResponse | undefined>;

    setHeader(key: string, value: string): void;
    removeHeader(key: string): void;

    createAbortController?: () => IAbortController;
};

export type IHTTPClientConstuctor = new (options: IHTTPClientOptions) => IHTTPClient;
