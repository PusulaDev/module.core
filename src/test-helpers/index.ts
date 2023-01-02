import {
    FetchHTTPClient,
    globalModule,
    IClassConstructor,
    ICoreModule,
    IProvider,
    IProviderConstructor,
    MemoryCache,
} from "..";
import type { DependencyType } from "@/module/core-module.interface";

export const createMock = (
    module: ICoreModule,
    options: { cacheKey?: string; mockClientOnClear?: boolean; onlyClearInstances?: boolean } = {}
) => {
    const { cacheKey = "SessionStorageCache", mockClientOnClear = true, onlyClearInstances = true } = options;

    const mockHttpClient = () => module.registerHttpClient(FetchHTTPClient, { baseUrl: "localhost:9999" });

    const mockSessionCache = () => module.register(MemoryCache, { key: cacheKey });
    const getCache = () => module.resolve<MemoryCache>(cacheKey);

    const mockProvider = <T extends IProvider>(provider: IProviderConstructor<T>, key: string) =>
        module.registerProvider(provider, { key });

    const getProvider = <T extends IProvider>(key: string) => module.resolveProvider<T>(key);

    const mock = <T>(constructor: IClassConstructor<T>, key: string, dependencies?: DependencyType[]) =>
        module.register(constructor, {
            dependencies,
            key,
        });

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
        getCache,
        getProvider,
        get,
        clear,
    };
};
