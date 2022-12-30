import type { IHTTPClient, IHTTPClientConstuctor } from "@/http-client/types/http-client.interface";
import type { IController, IControllerConstructor, IHTTPClientOptions, IProvider, IProviderConstructor } from "..";

export type OtherConstructorOptions = {
    constructor: new (...args: any[]) => any;
    dependencies?: any[];
};

export type HttpClientConstructorOptions = {
    constructor: IHTTPClientConstuctor;
    options: IHTTPClientOptions;
};

export type ProviderConstructorOptions = {
    constructor: IProviderConstructor;
    client?: string;
} & OtherConstructorOptions;

export type ControllerConstructorOptions = {
    constructor: IControllerConstructor<any>;
} & OtherConstructorOptions;


export type ConstructorMap = {
    clients: Map<string, HttpClientConstructorOptions>,
    providers: Map<string, ProviderConstructorOptions>,
    controllers: Map<string, ControllerConstructorOptions>,
    others: Map<string, OtherConstructorOptions>,
}

export type InstanceMap = {
    clients: Map<string, IHTTPClient>,
    providers: Map<string, IProvider>,
    controllers: Map<string, IController>,
    others: Map<string, any>,
}