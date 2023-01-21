import type { IHTTPClientConstuctor, IHTTPClientOptions } from "../../http-client";
import type { IProviderConstructor } from "../../provider";
import type { RegisterProviderOptions } from "../../module";
import type { IDecorator } from "./decorator.interface";
import type { IClassConstructor } from "../../shared";

export type IInjectableDecorators = IDecorator & {
    client: (options: IHTTPClientOptions) => (clientConstructor: IHTTPClientConstuctor) => void;
    provider: (
        options?: Omit<RegisterProviderOptions, "dependencies">
    ) => (providerConstructor: IProviderConstructor) => void;
    other: (key?: string) => (constructor: IClassConstructor) => void;
};
