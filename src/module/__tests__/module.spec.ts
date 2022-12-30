import type { IHTTPClient } from "../../http-client/types/http-client.interface";
import {
    createRegisterHttpClient,
    createRegisterController,
    TestHttpClient,
    TestController,
    TestProvider,
    createModule,
} from "../__mocks__/module.mock";
import { globalModule } from "@/global-module/global-module";
import { defaultLocalization } from "@/localization";

describe("Module", () => {
    beforeEach(() => {
        globalModule.clear();
    });

    it("should register on constructor", () => {
        const module = createModule();

        const resolved = globalModule.getModule("TestModule");
        expect(resolved).toEqual(module);
    });

    it("should register with given key to globalModule", () => {
        const key = "SuperModule";
        const module = createModule(key);
        const resolved = globalModule.getModule(key);

        expect(resolved).toEqual(module);
    });

    describe("bootstrap method", () => {
        it("should register httpClient", () => {
            const module = createModule();
            const client = new TestHttpClient({ baseUrl: "test" });

            module.bootstrap({ httpClient: client });

            const resolvedClient = module.resolveHttpClient();

            expect(resolvedClient).toBeInstanceOf(TestHttpClient);
        });

        it("should set translations", () => {
            globalModule.setLocalization(defaultLocalization);
            const client = new TestHttpClient({ baseUrl: "test" });

            const module = createModule();
            module.bootstrap({
                httpClient: client,
                translations: {
                    tr: { test: "test" },
                },
            });

            defaultLocalization.setLang("tr");
            const res = defaultLocalization.translate("test");
            expect(res).toBe("test");
        });
    });

    describe("Http Client Algorithm", () => {
        it("should set http-client implementation", () => {
            const module = createModule();
            const client = new TestHttpClient({ baseUrl: "test.com" });

            module.registerHttpClientInstance(client);

            const resolvedClient = module.resolveHttpClient(TestHttpClient);

            expect(resolvedClient).toEqual(client);
        });

        it("should resolve Http Client", () => {
            const module = createRegisterHttpClient();
            const api = module.resolveHttpClient();

            expect(api).toBeInstanceOf(TestHttpClient);
        });

        it("should resolve correct HttpClient", () => {
            const module = createRegisterHttpClient();

            class TestApi2 implements IHTTPClient {
                constructor() { }
                async get() {
                    return null as any;
                }
                async post() {
                    return null as any;
                }
                async put() {
                    return null as any;
                }
                async patch() {
                    return null as any;
                }
                async delete() {
                    return null as any;
                }
                async request() {
                    return null as any;
                }
                async upload() {
                    return null as any;
                }
                removeHeader() { }
                setHeader() { }
            }

            module.registerHttpClient(TestApi2, {});

            const api = module.resolveHttpClient(TestHttpClient);

            expect(api).toBeInstanceOf(TestHttpClient);
        });

        it("should clear all registered types", () => {
            const module = createRegisterController();

            class Test { }

            module.register(Test);
            module.clear();

            expect(() => module.resolveHttpClient()).toThrow();
            expect(() => module.resolveProvider(TestProvider)).toThrow();
            expect(() => module.resolveController(TestController)).toThrow();
            expect(() => module.resolve(Test)).toThrow();
        });

        it("should only clear the instances", () => {
            const module = createModule();
            class Test { }
            module.register(Test);

            const instance1 = module.resolve(Test);

            module.clearInstances();

            const instance2 = module.resolve(Test);
            expect(instance2).toBeInstanceOf(Test);
            expect(instance1).not.toBe(instance2);
        });
    });
});
