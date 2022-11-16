import type { EnumRequestMethod } from "@/http-client";
import type { IHTTPClient } from "../../http-client/types/http-client.interface";
import type { ProviderRequestOptions } from "./provider-request-options.interface";
import type { IRequestConfig } from "./request-config.interface";

export type ProviderRequest = <TRequest = undefined, TResponse = undefined>(
    config: IRequestConfig<TRequest, TResponse>,
    data?: TRequest,
    options?: ProviderRequestOptions
) => Promise<TResponse | undefined>;

export interface IProvider {
    request: <TRequest = undefined, TResponse = undefined>(
        config: IRequestConfig<TRequest, TResponse>,
        method: EnumRequestMethod,
        data?: TRequest,
        options?: ProviderRequestOptions
    ) => Promise<TResponse | undefined>;
    post: ProviderRequest;
    get: ProviderRequest;
    put: ProviderRequest;
    patch: ProviderRequest;
    delete: ProviderRequest;

    upload<TResponse = undefined>(url: string, formData: FormData): Promise<TResponse | undefined>;
}

export type IProviderConstructor = new (client: IHTTPClient, ...args: any[]) => IProvider;
