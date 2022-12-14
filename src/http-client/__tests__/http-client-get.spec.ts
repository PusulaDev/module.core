import { FetchHTTPClient } from "../fetch-http-client";
import fetchMock from "jest-fetch-mock";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithError,
    mockFetchResponseWithStatus,
    mockRejectResponse,
} from "../__mocks__/fetch.mock";
import { CustomServerError } from "../../custom-errors";
import { EnumResponseFormat } from "../types";

describe("Http Client Get Method", () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.mockClear();
    });

    it("should call fetch with get method", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.get("test");

        expect(fetchMock).toBeCalledWith("http://test.com/test", {
            method: "GET",
        });
    });

    it("should not add multiple slashes between ", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.get("/test");

        expect(fetchMock).toBeCalledWith("http://test.com/test", {
            method: "GET",
        });
    });

    it("should call fetch with query params", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.get("test", { id: 1, name: "ali" });

        expect(fetchMock).toBeCalledWith("http://test.com/test?id=1&name=ali", {
            method: "GET",
        });
    });

    it("should call fetch withouth ? if data is empty", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.get("test");

        expect(fetchMock).toBeCalledWith("http://test.com/test", {
            method: "GET",
        });
    });

    it("should replace the route params with data and remove the data if matches", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.get("test/${id}", { id: 1, name: "ali" });

        expect(fetchMock).toBeCalledWith("http://test.com/test/1?name=ali", {
            method: "GET",
        });
    });

    it("should call fetch with correct url", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({
            hostName: "my-site.net",
            prefix: "api",
            protocol: "https",
        });

        await api.get("test");

        expect(fetchMock).toBeCalledWith("https://my-site.net/api/test", {
            method: "GET",
        });
    });

    it("should call fetch with correct headers", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({
            hostName: "site.com",
            protocol: "http",
            headers: {
                "x-api-key": "12-23-455",
                "Content-Type": "application/json",
            },
        });

        await api.get("test");

        expect(fetchMock).toBeCalledWith("http://site.com/test", {
            method: "GET",
            headers: {
                "x-api-key": "12-23-455",
                "Content-Type": "application/json",
            },
        });
    });

    it("should get value from response", async () => {
        mockFetchJSONResponse({ data: "test_result" });

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            responseFormat: EnumResponseFormat.Json,
        });
        const res = await api.get("test");

        expect(res).toEqual({ data: "test_result" });
    });

    it("should throw error for error", async () => {
        mockRejectResponse(Error("Some server error"));

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.get("test")).rejects.toEqual(
            new CustomServerError({ message: "Some server error" })
        );
    });

    it("should throw error for not ok", async () => {
        mockFetchResponseWithError(500, "Not found");

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.get("test")).rejects.toEqual(new CustomServerError({ message: "500: Not found." }));
    });

    it("should throw error with status and body", async () => {
        mockFetchResponseWithError(500, "Not found", "Body Error Message");

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.get("test")).rejects.toEqual(
            new CustomServerError({ message: "500: Not found. Body Error Message" })
        );
    });

    it("should create error with createErrorFn when not ok", async () => {
        mockFetchResponseWithError(404, "Not found", JSON.stringify({ errorMessage: "test error" }));

        const api = new FetchHTTPClient({
            baseUrl: "test.com",
            createErrorFn: async (response: Response) => {
                const responseObj = (await response.json()) as { errorMessage: string };
                return Error(`${responseObj.errorMessage}`);
            },
        });

        await expect(api.get("test")).rejects.toEqual(new CustomServerError({ message: "test error" }));
    });

    it("should return undefined when the response is empty", async () => {
        mockFetchResponseWithStatus(200, "");

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.get("test")).resolves.toBeUndefined();
    });
});
