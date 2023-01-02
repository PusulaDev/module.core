import type { IHTTPClient, IHTTPClientConstuctor } from "@/http-client/types/http-client.interface";
import type { IClassConstructor, IHTTPClientOptions, IProvider, IProviderConstructor } from "..";
import type { DependencyType } from "@/module/core-module.interface";

export type ConstructorOptions<T extends IClassConstructor | IProviderConstructor> = {
    constructor: T;
    dependencies?: DependencyType[];
};

export type OtherConstructorOptions = ConstructorOptions<IClassConstructor>;

export type HttpClientConstructorOptions = {
    constructor: IHTTPClientConstuctor;
    options: IHTTPClientOptions;
};

export type ProviderConstructorOptions = {
    constructor: IProviderConstructor;
    client?: string;
    dependencies?: DependencyType[];
};

export type ConstructorMap = {
    clients: Map<string, HttpClientConstructorOptions>;
    providers: Map<string, ProviderConstructorOptions>;
    others: Map<string, OtherConstructorOptions>;
};

export type InstanceMap = {
    clients: Map<string, IHTTPClient>;
    providers: Map<string, IProvider>;
    others: Map<string, any>;
};
