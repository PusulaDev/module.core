import { EnumContentType, EnumResponseFormat, FetchHTTPClient } from "@/http-client";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithTimeout,
    mockFetchTxtResponse,
} from "@/http-client/__mocks__/fetch.mock";
import { CoreProvider } from "../core-provider";
import fetchMock from "jest-fetch-mock";
import type { ICachableRequestConfig, IRequestConfig } from "../types/request-config.interface";
import { ICache, MemoryCache } from "@/cache";

import { CustomServerError, EnumCustomErrorType } from "@/custom-errors";
import { CustomProviderError } from "@/custom-errors/custom-provider-error";

describe("Data Provider", () => {
    const headers = {
        "content-type": EnumContentType.Json,
    };
    const client = new FetchHTTPClient({ baseUrl: "http://test.com", headers });

    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.mockClear();
    });

    it("should post using options", () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
        };

        provider.post(config, { id: 1 });

        expect(fetchMock).toBeCalledWith("http://test.com/getPatient", {
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

    it("should post using headers", () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);

        const config: IRequestConfig<{ id: number }, number> = {
            url: "getPatient",
        };

        provider.post(
            config,
            { id: 1 },
            {
                headers: {
                    test: "1",
                },
            }
        );

        expect(fetchMock).toBeCalledWith("http://test.com/getPatient", {
            method: "POST",
            body: JSON.stringify({ id: 1 }),
            headers: { ...headers, test: "1" },
        });
    });

    it("should post using all headers combined", () => {
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

        provider.post(
            config,
            { id: 1 },
            {
                headers: methodHeader,
            }
        );

        expect(fetchMock).toBeCalledWith("http://test.com/getPatient", {
            method: "POST",
            body: JSON.stringify({ id: 1 }),
            headers: { ...headers, ...config.headers, ...methodHeader },
        });
    });

    it("should post with baseUrl added to url", () => {
        mockFetchJSONResponse({ id: 1 });

        class TestProvider extends CoreProvider {
            protected baseUrl: string = "giganto";
        }

        const provider = new TestProvider(client);
        const config: IRequestConfig = { url: "haleluya" };
        provider.post(config);

        expect(fetchMock).toBeCalledWith("http://test.com/giganto/haleluya", {
            method: "POST",
            headers,
        });
    });

    it("should get using options", () => {
        mockFetchJSONResponse({ id: 1 });

        const provider = new CoreProvider(client);
        provider.get({ url: "getTest" });

        expect(fetchMock).toBeCalledWith("http://test.com/getTest", {
            method: "GET",
            headers,
        });
    });

    it("should upload ", () => {
        mockFetchJSONResponse({ id: 1 });
        const provider = new CoreProvider(client);

        const formData = new FormData();
        formData.append("file", new Blob());

        provider.upload("upload", formData);

        expect(fetchMock).toBeCalledWith("http://test.com/upload", {
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
        const firstRequest = provider.post(config, { search: "t" }, { raceId: "1" });

        mockFetchResponseWithTimeout({ id: 2 }, 300);
        const secondRequest = provider.post(config, { search: "tes" }, { raceId: "1" });

        mockFetchResponseWithTimeout({ id: 12 }, 100);
        const response = await provider.post(config, { search: "test" }, { raceId: "1" });

        await expect(async () => await firstRequest).rejects.toEqual(new CustomServerError());

        await expect(async () => await secondRequest).rejects.toEqual(new CustomServerError());

        expect(response).toEqual({ id: 12 });
    });

    it("should not abort finished request on race condition", async () => {
        const provider = new CoreProvider(client);

        mockFetchResponseWithTimeout({ id: 1 }, 100);
        const firstResponse = await provider.get(
            { url: "testRace" },
            { search: "te" },
            {
                raceId: "1",
            }
        );

        mockFetchResponseWithTimeout({ id: 2 }, 110);
        const secondResponse = await provider.get(
            { url: "testRace" },
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
        };

        const firstResponse = await provider.cachablePost(config);

        mockFetchJSONResponse([]);

        const secondResponse = await provider.cachablePost(config);

        expect(firstResponse).toEqual(mockResponse);
        expect(secondResponse).toEqual(mockResponse);
        expect(fetchMock).toBeCalledTimes(1);
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

    it("should validate response with validation function", async () => {
        const provider = new CoreProvider(client);
        const config: IRequestConfig<number, number[]> = {
            url: "test",
            validateResponse: (req?: number[]) => {
                if (!req?.length) throw "error";
            },
        };

        await expect(() => provider.post(config)).rejects.toEqual(
            new CustomProviderError({
                type: EnumCustomErrorType.ResponseValidation,
                message: "error",
            })
        );
    });
});
