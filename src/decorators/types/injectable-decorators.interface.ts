import type { IHTTPClientOptions } from "../../http-client/types/http-client-options.interface";
import type { IHTTPClientConstuctor } from "../../http-client/types/http-client.interface";
import type { IProviderConstructor } from "../../provider/types/provider.interface";
import type { RegisterProviderOptions } from "../../module/core-module.interface";
import type { IDecorator } from "./decorator.interface";
import type { IClassConstructor } from "../../shared";

export type IInjectableDecorators = IDecorator & {
    client: (options: IHTTPClientOptions) => (clientConstructor: IHTTPClientConstuctor) => void;
    provider: (
        options?: Omit<RegisterProviderOptions, "dependencies">
    ) => (providerConstructor: IProviderConstructor) => void;
    other: (key?: string) => (constructor: IClassConstructor) => void;
};
