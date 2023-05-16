import type { IHTTPClient, IHTTPClientConstuctor, IHTTPClientOptions } from "../http-client";
import type { IProvider, IProviderConstructor } from "../provider";
import type { IDecorator, InjectableDecorators } from "../decorators";
import type { ICache, ICacheConstructor } from "../cache";
import type { EnumDependencyType, IClassConstructor } from "../shared";
import type { LocalizationTranslations } from "../localization";
import type { DependencyResolveOptions } from "./resolve-options";

export interface DependencyOptions {
    value?: unknown;
    type: EnumDependencyType;
    key?: string;
}

export type DependencyType = IClassConstructor | string | DependencyOptions;

export type RegisterClassOptions = {
    key?: string;
    dependencies?: DependencyType[];
};

export type RegisterProviderOptions = {
    key?: string;
    client?: IHTTPClientConstuctor | string;
} & RegisterClassOptions;

export type RegisterControllerOptions = {
    key?: string;
} & RegisterClassOptions;

export type ModuleBootstrapOptions<T = any> = {
    httpClient: IHTTPClient;
    httpClientKey?: string;
    translations?: LocalizationTranslations;
    config?: T;
};

export type KeyUnionType<T = unknown> =
    | string
    | IProviderConstructor
    | ICacheConstructor
    | IHTTPClientConstuctor
    | IClassConstructor<T>;

export type AppLayerUnionType = IProvider | ICache | IHTTPClient | unknown;

export interface ModuleConstructorOptions {
    key?: string;
    decorators?: IDecorator[];
    linkedModule?: boolean;
    register?: { constructor: new (...args: unknown[]) => unknown; options?: RegisterClassOptions }[];
}

export type ICoreModule = object & {
    bootstrap: (options?: ModuleBootstrapOptions) => Promise<ICoreModule> | ICoreModule;

    createInjectable: () => InjectableDecorators;

    setTranslations: (options: LocalizationTranslations) => ICoreModule;

    useDecorators: (...decorators: IDecorator[]) => ICoreModule;

    resolve: <T>(key: IClassConstructor<T> | string, options?: DependencyResolveOptions) => T;

    register: <T>(constructor: IClassConstructor<T>, options?: RegisterClassOptions) => ICoreModule;

    registerInstance: <T extends object>(obj: T, key?: string) => ICoreModule;
    registerProviderInstance: <T extends IProvider>(obj: T, key?: string) => ICoreModule;

    registerHttpClient: (client: IHTTPClientConstuctor, options: IHTTPClientOptions) => ICoreModule;

    registerHttpClientInstance: (client: IHTTPClient, key?: string) => ICoreModule;

    resolveHttpClient: <T extends IHTTPClient>(
        client?: IHTTPClientConstuctor,
        options?: DependencyResolveOptions
    ) => T;

    registerProvider: (provider: IProviderConstructor, options?: RegisterProviderOptions) => ICoreModule;

    resolveProvider: <T extends IProvider>(
        key: string | IProviderConstructor,
        options?: DependencyResolveOptions
    ) => T;

    clear: () => void;
    clearInstances: () => void;
};
