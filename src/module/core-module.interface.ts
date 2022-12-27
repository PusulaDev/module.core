import type { IHTTPClientOptions } from "../http-client/types/http-client-options.interface";
import type { IHTTPClient, IHTTPClientConstuctor } from "../http-client/types/http-client.interface";
import type { IController, IControllerConstructor } from "../controller/controller.interface";
import type { IProvider, IProviderConstructor } from "../provider/types/provider.interface";
import type { IDecorator } from "../decorators/types/decorator.interface";
import type { ICache } from "../cache";
import type { ICacheConstructor } from "../cache/cache.interface";
import type { IClassConstructor } from "../shared";
import type { LocalizationTranslations } from "../localization";

export type RegisterClassOptions = {
    key?: string;
    dependencies?: (IClassConstructor | string)[];
};

export type RegisterProviderOptions = {
    key?: string;
    client?: IHTTPClientConstuctor;
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

export type KeyUnionType<T = any> =
    | string
    | IProviderConstructor
    | IControllerConstructor<any>
    | ICacheConstructor
    | IHTTPClientConstuctor
    | (new () => T);

export type AppLayerUnionType = IProvider | IController | ICache | IHTTPClient;

export interface ModuleConstructorOptions {
    key?: string;
    decorators?: IDecorator[];
    linkedModule?: boolean;
    register?: { constructor: new (...args: unknown[]) => unknown; options?: RegisterClassOptions }[];
}

export type ModuleConstructor = (new (options?: ModuleConstructorOptions) => ICoreModule) & Function;

export type ResolveType = 'locale' | 'global';

export type ICoreModule = object & {
    bootstrap: (options?: ModuleBootstrapOptions) => Promise<ICoreModule> | ICoreModule;

    setTranslations: (options: LocalizationTranslations) => ICoreModule;

    useDecorators: (...decorators: IDecorator[]) => ICoreModule;

    resolve: <T extends AppLayerUnionType>(key: KeyUnionType<T>, type?: ResolveType) => T;
    register: <T>(constructor: new (...args: any[]) => T, options?: RegisterClassOptions) => ICoreModule;

    registerInstance: <T extends object>(obj: T, key?: string) => ICoreModule;

    registerHttpClient: (client: IHTTPClientConstuctor, options: IHTTPClientOptions) => ICoreModule;

    registerHttpClientInstance: (client: IHTTPClient, key?: string) => ICoreModule;

    resolveHttpClient: <T extends IHTTPClient>(client?: IHTTPClientConstuctor, locale?: ResolveType) => T;

    registerProvider: (provider: IProviderConstructor, options?: RegisterProviderOptions) => ICoreModule;

    resolveProvider: <T extends IProvider>(key: string | IProviderConstructor, locale?: ResolveType) => T;

    registerController: <TController extends IController>(
        controller: IControllerConstructor<TController>,
        options?: RegisterControllerOptions
    ) => ICoreModule;

    resolveController: <T extends IController>(key: string | IControllerConstructor<T>, locale?: ResolveType) => T;

    clear: () => void;
    clearInstances: () => void;
};
