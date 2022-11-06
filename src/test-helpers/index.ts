import {
    FetchHTTPClient,
    ICoreModule,
    MemoryCache,
    SessionStorageCache,
    CoreProvider,
    IHTTPClient,
    IController,
    IClassConstructor,
} from "..";

export const createMock = (module: ICoreModule) => {
    const mockHttpClient = () => module.registerHttpClient(FetchHTTPClient, { baseUrl: "localhost:9999" });

    const mockSessionCache = () => module.register(MemoryCache, { key: SessionStorageCache.name });

    const mockProvider = <T extends CoreProvider>(provider: new (client: IHTTPClient) => T, key: string) =>
        module.registerProvider(provider, { key });

    const mockController = (
        controller: new (...args: any[]) => IController,
        dependencies: (string | IClassConstructor)[]
    ) =>
        module.registerController(controller, {
            dependencies,
        });

    return {
        mockHttpClient,
        mockSessionCache,
        mockProvider,
        mockController,
    };
};
