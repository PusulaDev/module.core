import { FetchHTTPClient } from "../fetch-http-client";
import fetchMock from "jest-fetch-mock";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithError,
    mockFetchResponseWithTimeout,
} from "../__mocks__/fetch.mock";
import { CustomHttpClientError } from "@/custom-errors/custom-http-client-error";
import { EnumCustomErrorType } from "@/custom-errors/statics/custom-error-type.enum";
import { globalModule } from "@/global-module/global-module";

describe("Http Client", () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.mockClear();
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

            api.upload("upload", formData);

            expect(fetchMock).toBeCalledWith("http://test.com/upload", {
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
                new CustomHttpClientError({ type: EnumCustomErrorType.AbortedRequest })
            );
        });

        it("should cancel request for post", async () => {
            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
            });

            const abortController = api.createAbortController();
            abortController.abort();

            await expect(api.post("test", undefined, { abortController })).rejects.toEqual(
                new CustomHttpClientError({ type: EnumCustomErrorType.AbortedRequest })
            );
        });
    });

    describe("Prevent Request Duplication", () => {
        it("should prevent second same request for post", () => {
            mockFetchResponseWithTimeout({ id: 1 }, 4000);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            api.post("test", { id: 1 });
            api.post("test", { id: 1 });

            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        it("should prevent second same request for get", () => {
            mockFetchResponseWithTimeout({ id: 1 }, 4000);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            api.get("test?id=1");
            api.get("test?id=1");

            expect(fetchMock).toHaveBeenCalledTimes(1);
        });

        it("should use new object response for duplicated requests", async () => {
            const response = { id: 1 };
            mockFetchResponseWithTimeout(response, 100);

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
                preventRequestDuplication: true,
            });

            api.post("test", { id: 1 });
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
            } catch (e) {}

            const pendingRequests = api.getPendingRequests();

            expect(pendingRequests.size).toBe(0);
        });

        it("should not prevent second if preventRequestDuplication is false", () => {
            mockFetchJSONResponse({ id: 1 });

            const api = new FetchHTTPClient({
                baseUrl: "test.com",
            });

            api.get("test?id=1");

            mockFetchJSONResponse({ id: 1 });

            api.get("test?id=1");

            expect(fetchMock).toHaveBeenCalledTimes(2);
        });
    });

    describe("Header", () => {
        it("should change header with key and value", () => {
            mockFetchJSONResponse({ data: 1 });

            const api = new FetchHTTPClient({
                baseUrl: "http://test.com",
            });

            api.setHeader("x-app-key", "123Asd");

            api.get("test");

            expect(fetchMock).toBeCalledWith("http://test.com/test", {
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

            client.get("get");

            expect(fetchMock).toBeCalledWith("http://test.com/get", {
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

            client.get("get", undefined, { headers });

            expect(fetchMock).toBeCalledWith("http://test.com/get", {
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

            client.get("get");

            expect(fetchMock).toBeCalledWith("http://a.com/get", { method: "GET" });
        });
    });
});
