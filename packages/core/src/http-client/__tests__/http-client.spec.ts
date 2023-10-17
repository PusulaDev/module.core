import { beforeEach, describe, expect, it, vi } from "vitest";
import { FetchHTTPClient } from "../fetch-http-client";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithError,
    mockFetchResponseWithTimeout,
} from "../__mocks__/fetch.mock";
import { CustomHttpClientError, EnumCustomErrorType } from "../../custom-errors";
import { globalModule } from "../../global-module";
import { type IHTTPClientOptions, EnumResponseFormat, EnumQueryStringMultipleValueFormat } from "../types";

describe("Http Client", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        globalModule.clear();
    });

    describe("Upload", () => {
        it("should call post with form data and content-type header", () => {
            mockFetchJSONResponse({ id: 1 });

            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
                headers: {
                    "content-type": "application/json",
                },
            });

            const formData = new FormData();
            formData.append("file", new Blob());

            void api.upload("upload", formData);

            expect(fetch).toBeCalledWith("http://test.com/upload", {
                method: "POST",
                headers: {
                    "content-type": "multipart/form-data",
                },
                body: formData,
            });
        });
    });

    describe("Cancelation", () => {
        it("should cancel request for get", async () => {
            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
            });

            const abortController = api.createAbortController();
            abortController.abort();

            await expect(api.get("test", undefined, { abortController })).rejects.toEqual(
                new CustomHttpClientError({
                    type: EnumCustomErrorType.AbortedRequest,
                    message: "Aborted request",
                })
            );
        });

        it("should cancel request for post", async () => {
            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
            });

            const abortController = api.createAbortController();
            abortController.abort();

            await expect(api.post("test", undefined, { abortController })).rejects.toEqual(
                new CustomHttpClientError({
                    type: EnumCustomErrorType.AbortedRequest,
                    message: "Aborted request",
                })
            );
        });
    });

    describe("Prevent Request Duplication", () => {
        it("should prevent second same request for post", async () => {
            mockFetchResponseWithTimeout({ id: 1 }, 100);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            await Promise.all([api.post("test", { id: 1 }), api.post("test", { id: 1 })]);

            expect(fetch).toHaveBeenCalledTimes(1);
        });

        it("should prevent second same request for get", async () => {
            mockFetchResponseWithTimeout({ id: 1 }, 100);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            await Promise.all([api.get("test?id=1"), api.get("test?id=1")]);

            expect(fetch).toHaveBeenCalledTimes(1);
        });

        it("should use new object response for duplicated requests", async () => {
            const response = { id: 1 };
            mockFetchResponseWithTimeout(response, 100);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            void api.post("test", { id: 1 });
            const res = await api.post("test", { id: 1 });
            response.id = 2;

            expect(res).not.toEqual(response);
        });

        it("should clear from pending requests if there is an error", async () => {
            mockFetchResponseWithError(404);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            try {
                await api.post("test");
            } catch (e) {
                /* empty */
            }

            const pendingRequests = api.getPendingRequests();

            expect(pendingRequests.size).toBe(0);
        });

        it("should not prevent second if preventRequestDuplication is false", () => {
            mockFetchJSONResponse({ id: 1 });

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
            });

            void api.get("test?id=1");

            mockFetchJSONResponse({ id: 1 });

            void api.get("test?id=1");

            expect(fetch).toHaveBeenCalledTimes(2);
        });
    });

    describe("Header", () => {
        it("should change header with key and value", () => {
            mockFetchJSONResponse({ data: 1 });

            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
            });

            api.setHeader("x-app-key", "123Asd");

            void api.get("test");

            expect(fetch).toBeCalledWith("http://test.com/test", {
                method: "GET",
                headers: {
                    "x-app-key": "123Asd",
                },
            });
        });

        it("should merge with shared header", () => {
            mockFetchJSONResponse({ data: 1 });

            const client = new FetchHTTPClient({
                baseUrl: "http://test.com",
                headers: {
                    initial: "1",
                },
            });

            globalModule.addToSharedHeaders({ shared: "2" });

            void client.get("get");

            expect(fetch).toBeCalledWith("http://test.com/get", {
                method: "GET",
                headers: {
                    initial: "1",
                    shared: "2",
                },
            });
        });

        it("should merge with request headers", () => {
            mockFetchJSONResponse({ data: 1 });

            const client = new FetchHTTPClient({
                baseUrl: "http://test.com",
                headers: {
                    initial: "1",
                },
            });

            const headers = {
                "content-type": "application/x-www-url-encoded",
            };

            void client.get("get", undefined, { headers });

            expect(fetch).toBeCalledWith("http://test.com/get", {
                method: "GET",
                headers: {
                    initial: "1",
                    ...headers,
                },
            });
        });

        it("should remove header with key", () => {
            mockFetchJSONResponse({ id: 1 });

            const client = new FetchHTTPClient({
                baseUrl: "http://a.com",
                headers: {
                    "test-header": "asd",
                },
            });

            client.removeHeader("test-header");

            void client.get("get");

            expect(fetch).toBeCalledWith("http://a.com/get", { method: "GET" });
        });
    });

    describe("Options", () => {
        it("should use options", () => {
            const options: IHTTPClientOptions = {
                baseUrl: "http://test.com/",
                headers: {
                    "content-type": "application/json",
                },
                preventRequestDuplication: false,
                responseFormat: EnumResponseFormat.Json,
                queryStringFormat: EnumQueryStringMultipleValueFormat.Encoded,
                createErrorFn: (response: Error) => {
                    return new Error(response.message);
                },
                retryOnErrorOptions: {
                    beforeRetry: () => Promise.resolve(),
                    retryCondition: () => true,
                    maxRetryCount: 3,
                },
            };

            const api = new FetchHTTPClient(options);

            expect(api.httpClientOptions).toEqual(options);
        });
    });
});
