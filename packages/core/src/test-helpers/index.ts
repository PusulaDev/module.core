import {
    FetchHTTPClient,
    globalModule,
    IClassConstructor,
    ICoreModule,
    IProvider,
    IProviderConstructor,
    MemoryCache,
} from "../index";
import type { DependencyType } from "../module";

export const createMock = (
    module: ICoreModule,
    options: { cacheKey?: string; mockClientOnClear?: boolean; onlyClearInstances?: boolean } = {}
) => {
    const getName = (key: string | IClassConstructor) => (typeof key === "string" ? key : key.name);

    const { cacheKey = "SessionStorageCache", mockClientOnClear = true, onlyClearInstances = true } = options;

    const mockHttpClient = () => module.registerHttpClient(FetchHTTPClient, { baseUrl: "localhost:9999" });

    const mockSessionCache = () => module.register(MemoryCache, { key: cacheKey });
    const getCache = () => module.resolve<MemoryCache>(cacheKey);

    const mockProvider = <T extends IProvider>(
        provider: IProviderConstructor<T>,
        key: string | IClassConstructor
    ) => module.registerProvider(provider, { key: getName(key) });

    const mockProviderInstance = <T extends object>(instance: T, key: string | IClassConstructor) =>
        module.registerProviderInstance(instance as IProvider, getName(key));

    const getProvider = <T extends IProvider>(key: string) => module.resolveProvider<T>(key);

    const mock = <T>(
        constructor: IClassConstructor<T>,
        key: string | IClassConstructor,
        dependencies?: DependencyType[]
    ) =>
        module.register(constructor, {
            dependencies,
            key: getName(key),
        });

    const mockInstance = <T extends object>(instance: T, key: string | IClassConstructor) => {
        module.registerInstance(instance, getName(key));
    };

    const get = <T extends IClassConstructor>(key: string) => module.resolve<T>(key);

    const clear = () => {
        globalModule.clear();
        if (onlyClearInstances) module.clearInstances();
        else module.clear();

        if (mockClientOnClear) mockHttpClient();
    };

    return {
        mockHttpClient,
        mockSessionCache,
        mockProvider,
        mock,
        mockInstance,
        mockProviderInstance,
        getCache,
        getProvider,
        get,
        clear,
    };
};
