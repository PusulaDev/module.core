/*eslint-disable*/
import { describe, expect, it } from "vitest";
import type { IHTTPClient, IHTTPClientOptions } from "../../http-client";
import type { IProvider, IRequestConfig } from "../../provider";
import { createModule, createRegisterHttpClient, createRegisterProvider, TestProvider } from "../__mocks__/module.mock";
import { defaultLocalization, EnumLocalizationKeys } from "../../localization";
import { globalModule } from "../../global-module";

describe("Module Provider", () => {
    it("should throw error if api is not registered", () => {
        const module = createModule();
        module.registerProvider(TestProvider);

        defaultLocalization.setLang("en-us");
        defaultLocalization.setTranslations({
            "en-us": {
                [EnumLocalizationKeys.NotRegisteredError]: "error %s",
            },
        });
        globalModule.setLocalization(defaultLocalization);

        expect(() => module.resolveProvider(TestProvider)).toThrowError("error HttpClient");
    });

    it("should resolve provider with key", () => {
        const module = createRegisterProvider();
        const provider = module.resolveProvider<TestProvider>("TestProvider");

        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should resolve provider with class", () => {
        const module = createRegisterProvider();
        const provider = module.resolveProvider(TestProvider);

        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should register provider with class", () => {
        const module = createRegisterHttpClient();
        module.registerProvider(TestProvider);

        const provider = module.resolveProvider(TestProvider);

        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should register provider with key", () => {
        const module = createRegisterHttpClient();
        module.registerProvider(TestProvider, { key: "test_provider" });

        const provider = module.resolveProvider("test_provider");

        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should register provider with preffered Api", () => {
        const module = createRegisterHttpClient();
        let isInstanceOfTestApi2 = false;

        class TestApi2 implements IHTTPClient {
            constructor(_: IHTTPClientOptions) {}

            async get(_: string) {
                return null as any;
            }

            async post(_: string) {
                return null as any;
            }

            async patch(_: string) {
                return null as any;
            }

            async put(_: string) {
                return null as any;
            }

            async delete(_: string) {
                return null as any;
            }

            async request(_: string) {
                return null as any;
            }

            async upload(_: string, __: FormData) {
                return null as any;
            }

            setHeader(_: string) {}

            removeHeader(_: string) {}
        }

        class TestProvider2 implements IProvider {
            constructor(api: IHTTPClient) {
                isInstanceOfTestApi2 = api instanceof TestApi2;
            }

            get<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            post<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            put<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            patch<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            delete<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            request<TRequest = undefined, TResponse = undefined>(
                _: IRequestConfig<TRequest, TResponse>
            ): Promise<TResponse | undefined> {
                return null as any;
            }

            async upload(_: string, __: FormData) {
                return null as any;
            }
        }

        module.registerHttpClient(TestApi2, {});

        module.registerProvider(TestProvider2, { client: TestApi2 });
        module.resolveProvider(TestProvider2);

        expect(isInstanceOfTestApi2).toBe(true);
    });
});
