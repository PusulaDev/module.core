import {
    FetchHTTPClient,
    ICoreModule,
    MemoryCache,
    IController,
    IClassConstructor,
    globalModule,
    IProviderConstructor,
    IProvider,
} from "..";

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

    const mockController = (
        controller: new (...args: any[]) => IController,
        key: string,
        dependencies?: (string | IClassConstructor)[]
    ) =>
        module.registerController(controller, {
            dependencies,
            key,
        });

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
        mockController,
        getCache,
        getProvider,
        clear,
    };
};
