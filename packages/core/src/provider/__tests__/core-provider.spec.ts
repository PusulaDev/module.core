import { beforeEach, describe, expect, it, vi } from "vitest";
import { EnumContentType, EnumResponseFormat, FetchHTTPClient } from "../../http-client";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithTimeout,
    mockFetchTxtResponse,
} from "../../http-client/__mocks__/fetch.mock";
import { CoreProvider } from "../core-provider";
import type { ICachableRequestConfig, IRequestConfig } from "../types";
import { ICache, MemoryCache } from "../../cache";

import {
    CustomHttpClientError,
    CustomProviderError,
    CustomServerError,
    EnumCustomErrorType,
} from "../../custom-errors";
import { globalModule, setDefaultUtils } from "../../global-module";
import { mockLocalization } from "src/global-module/__mocks__/global.module.mock";

describe("Data Provider", () => {
    const headers = {
        "content-type": EnumContentType.Json,
    };
    const client = new FetchHTTPClient({
        baseUrl: "http://test.com",
        headers,
        responseFormat: EnumResponseFormat.Json,
    });

    setDefaultUtils();

    beforeEach(() => {
        vi.restoreAllMocks();
    });

    it("should post using options", async () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
        };

        await provider.post(config, { id: 1 });

        expect(fetch).toBeCalledWith("http://test.com/getPatient", {
            method: "POST",
            body: JSON.stringify({ id: 1 }),
            headers,
        });
    });

    it("should send response format from config to the client", async () => {
        const data = "test";
        mockFetchTxtResponse(data);

        const provider = new CoreProvider(client);
        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
            responseFormat: EnumResponseFormat.Text,
        };

        const res = await provider.post(config, { id: 1 });

        expect(res).toEqual(data);
    });

    it("should send response format from options to the client", async () => {
        const data = "test";
        mockFetchTxtResponse(data);

        const provider = new CoreProvider(client);
        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
            responseFormat: EnumResponseFormat.Json,
        };

        const res = await provider.post(
            config,
            { id: 1 },
            {
                responseFormat: EnumResponseFormat.Text,
            }
        );

        expect(res).toEqual(data);
    });

    it("should post using headers", async () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
        };

        await provider.post(
            config,
            { id: 1 },
            {
                headers: {
                    test: "1",
                },
            }
        );

        expect(fetch).toBeCalledWith("http://test.com/getPatient", {
            method: "POST",
            body: JSON.stringify({ id: 1 }),
            headers: { ...headers, test: "1" },
        });
    });

    it("should post using all headers combined", async () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
            headers: {
                "config-header": "test",
            },
        };

        const methodHeader = {
            test: "1",
        };

        await provider.post(
            config,
            { id: 1 },
            {
                headers: methodHeader,
            }
        );

        expect(fetch).toBeCalledWith("http://test.com/getPatient", {
            method: "POST",
            body: JSON.stringify({ id: 1 }),
            headers: { ...headers, ...config.headers, ...methodHeader },
        });
    });

    it("should post with baseUrl added to url", async () => {
        mockFetchJSONResponse({ id: 1 });

        class TestProvider extends CoreProvider {
            protected baseUrl = "giganto";
        }

        const provider = new TestProvider(client);
        const config: IRequestConfig = { url: "haleluya" };
        await provider.post(config);

        expect(fetch).toBeCalledWith("http://test.com/giganto/haleluya", {
            method: "POST",
            headers,
        });
    });

    it("should get using options", async () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);
        await provider.get({ url: "getTest" });

        expect(fetch).toBeCalledWith("http://test.com/getTest", {
            method: "GET",
            headers,
        });
    });

    it("should upload ", async () => {
        mockFetchJSONResponse({ id: 1 });
        const provider = new CoreProvider(client);

        const formData = new FormData();
        formData.append("file", new Blob());

        await provider.upload("upload", formData);

        expect(fetch).toBeCalledWith("http://test.com/upload", {
            method: "POST",
            headers: {
                "content-type": "multipart/form-data",
            },
            body: formData,
        });
    });

    it("should prevent race condition and abort previous not finished requests", async () => {
        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ search: string }, { id: number }> = {
            url: "testRace",
        };

        mockFetchResponseWithTimeout({ id: 1 }, 200);
        mockFetchResponseWithTimeout({ id: 2 }, 300);
        mockFetchResponseWithTimeout({ id: 12 }, 100);

        const firstRequest = provider.post(config, { search: "t" }, { raceId: "1" });
        const secondRequest = provider.post(config, { search: "tes" }, { raceId: "1" });
        const response = provider.post(config, { search: "test" }, { raceId: "1" });

        await expect(() => firstRequest).rejects.toEqual(
            new CustomServerError({
                message: "Aborted request",
            })
        );
        await expect(() => secondRequest).rejects.toEqual(
            new CustomServerError({
                message: "Aborted request",
            })
        );

        const res = await response;
        expect(res).toEqual({ id: 12 });
    });

    it("should not abort finished request on race condition", async () => {
        const provider = new CoreProvider(client);

        mockFetchResponseWithTimeout({ id: 1 }, 100);
        const firstResponse = await provider.get(
            { url: "testRace", responseFormat: EnumResponseFormat.Json },
            { search: "te" },
            {
                raceId: "1",
            }
        );

        mockFetchResponseWithTimeout({ id: 2 }, 110);
        const secondResponse = await provider.get(
            { url: "testRace", responseFormat: EnumResponseFormat.Json },
            { search: "test" },
            {
                raceId: "1",
            }
        );

        expect(firstResponse).toEqual({ id: 1 });
        expect(secondResponse).toEqual({ id: 2 });
    });

    it("should throw error if cache prop is not defined for cachablePost", async () => {
        const provider = new CoreProvider(client);

        const config: ICachableRequestConfig<undefined, number> = {
            url: "test",
            cacheKey: "caches",
        };

        await expect(() => provider.cachablePost(config)).rejects.toEqual(
            new CustomProviderError({
                type: EnumCustomErrorType.Construction,
                message: "'cache' property must be defined.",
            })
        );
    });

    it("should get values from cache when cachablePost is called second time", async () => {
        const mockResponse = [{ id: 1 }, { id: 2 }];
        mockFetchJSONResponse(mockResponse);

        class CachebleProvider extends CoreProvider {
            cache: ICache = new MemoryCache();
        }

        const provider = new CachebleProvider(client);
        const config: ICachableRequestConfig<undefined, { id: number }[]> = {
            url: "getAll",
            cacheKey: "item",
            responseFormat: EnumResponseFormat.Json,
        };

        const firstResponse = await provider.cachablePost(config);

        mockFetchJSONResponse([]);

        const secondResponse = await provider.cachablePost(config);

        expect(firstResponse).toEqual(mockResponse);
        expect(secondResponse).toEqual(mockResponse);
        expect(fetch).toBeCalledTimes(1);
    });

    it("should call fetch if invalidate cache true ", async () => {
        const mockResponse = [{ id: 1 }, { id: 2 }];
        mockFetchJSONResponse(mockResponse);

        class CachebleProvider extends CoreProvider {
            cache: ICache = new MemoryCache();
        }

        const provider = new CachebleProvider(client);
        const config: ICachableRequestConfig<undefined, { id: number }[]> = {
            url: "getAll",
            cacheKey: "item",
            responseFormat: EnumResponseFormat.Json,
        };

        const firstResponse = await provider.cachableGet(config);

        mockFetchJSONResponse([]);

        const secondResponse = await provider.cachableGet(config, undefined, { invalidateCache: true });

        expect(firstResponse).toEqual(mockResponse);
        expect(secondResponse).toEqual([]);
        expect(fetch).toBeCalledTimes(2);
    });

    it("should validate request with validation function", async () => {
        const provider = new CoreProvider(client);

        type TestRequest = { model: { name: string } };
        const config: IRequestConfig<TestRequest, number> = {
            url: "test",
            validateRequest: (req?: TestRequest): void => {
                if (!req || req.model.name.length < 2) throw "error";
            },
        };

        await expect(() => provider.post(config)).rejects.toEqual(
            new CustomProviderError({
                type: EnumCustomErrorType.RequestValidation,
                message: "error",
            })
        );
    });

    it("should validate request with validation function", async () => {
        globalModule.setLocalization(mockLocalization);

        const provider = new CoreProvider(client);

        type TestRequest = { name: string };
        const config: IRequestConfig<TestRequest, number> = {
            url: "test",
            validationProperties: [
                {
                    name: "name",
                    type: "string",
                    rules: { isRequired: true },
                },
            ],
        };

        await expect(() => provider.post(config)).rejects.toEqual(
            new CustomProviderError({
                type: EnumCustomErrorType.RequestValidation,
                message: "name: required",
            })
        );
    });

    it("should validate response with validation function", async () => {
        const mockResponse: unknown[] = [];
        mockFetchJSONResponse(mockResponse);

        const provider = new CoreProvider(client);
        const config: IRequestConfig<number, number[]> = {
            url: "test",
            validateResponse: (req?: number[]) => {
                if (!req?.length) throw "error";
            },
            responseFormat: EnumResponseFormat.Json,
        };

        await expect(() => provider.post(config)).rejects.toEqual(
            new CustomProviderError({
                type: EnumCustomErrorType.ResponseValidation,
                message: "error",
            })
        );
    });

    it("should abort the request when abort method called", async () => {
        const mockResponse: unknown[] = [];
        mockFetchJSONResponse(mockResponse);

        const provider = new CoreProvider(client);

        const config: IRequestConfig<number, number> = {
            url: "test",
        };

        const controller = new AbortController();

        const promise = provider.post(config, 1, { abortController: controller });

        controller.abort("test");

        await expect(() => promise).rejects.toEqual(
            new CustomHttpClientError({
                type: EnumCustomErrorType.AbortedRequest,
                message: "Aborted request",
            })
        );
    });

    it("should add query parameters to url", async () => {
        const provider = new CoreProvider(client);
        const config: IRequestConfig<{ name?: string; id?: string; age?: number }, void> = {
            url: "test/${id}",
            queryKeys: ["name", "age"],
        };

        await provider.post(config, { id: "1", age: 12, name: "salih" });

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=salih&age=12", {
            method: "POST",
            headers,
            body: JSON.stringify({}),
        });
    });
    it("should add only defined query parameters to url", async () => {
        const provider = new CoreProvider(client);
        const config: IRequestConfig<{ name?: string; id?: string; age?: number }, void> = {
            url: "test/${id}",
            queryKeys: ["name"],
        };

        await provider.post(config, { id: "1", age: 12, name: "salih" });

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=salih", {
            method: "POST",
            headers,
            body: JSON.stringify({ age: 12 }),
        });
    });

    it("should add only not empty and not undefined query parameters to url", async () => {
        const provider = new CoreProvider(client);
        const config: IRequestConfig<{ name?: string; id?: string; age?: number; title?: string }, void> = {
            url: "test/${id}",
            queryKeys: ["name", "age", "title"],
        };

        await provider.post(config, { id: "1", age: 12, name: "" });

        expect(fetch).toBeCalledWith("http://test.com/test/1?age=12", {
            method: "POST",
            headers,
            body: JSON.stringify({ name: "" }),
        });
    });
});
