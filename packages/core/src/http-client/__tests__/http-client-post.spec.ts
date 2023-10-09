import { beforeEach, describe, expect, it, vi } from "vitest";
import { FetchHTTPClient } from "../fetch-http-client";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithError,
    mockRejectResponse,
} from "../__mocks__/fetch.mock";
import { CustomServerError } from "../../custom-errors";
import { contentTypeKey } from "../client-constants";
import { EnumContentType, EnumQueryStringMultipleValueFormat, EnumResponseFormat } from "../types";

describe("Http Client Post Method", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should call fetch with post method", async () => {
        mockFetchJSONResponse({ data: "test" });

        const headers = {
            "content-type": EnumContentType.Json,
        };
        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            headers,
            responseFormat: EnumResponseFormat.Json,
        });

        const res = await api.post<{ data: number }, { data: string }>("go", {
            data: 1,
        });

        expect(fetch).toBeCalledWith("http://test.com/go", {
            method: "POST",
            body: JSON.stringify({ data: 1 }),
            headers,
        });

        expect(res).toEqual({ data: "test" });
    });

    it("should throw error for error", async () => {
        mockRejectResponse(Error("Some server error"));

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.post("test")).rejects.toEqual(
            new CustomServerError({ message: "Some server error" })
        );
    });

    it("should throw error for not ok", async () => {
        mockFetchResponseWithError(500, "Not found");

        const api = new FetchHTTPClient({ baseUrl: "test.com" });

        await expect(api.post("test")).rejects.toEqual(new CustomServerError({ message: "500: Not found." }));
    });

    it("should create url encoded body if content type encoded", async () => {
        mockFetchJSONResponse({ data: "test" });

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        const data = { test: "1" };

        const headers = { [contentTypeKey]: EnumContentType.UrlEncoded };
        await api.post("test", data, { headers });

        expect(fetch).toBeCalledWith("http://test.com/test", {
            method: "POST",
            body: new URLSearchParams(data),
            headers,
        });
    });

    it("should create form data body if content type formdata", async () => {
        mockFetchJSONResponse({ data: "test" });

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        const data = { test: "1" };

        const headers = { [contentTypeKey]: EnumContentType.FormData };
        await api.post("test", data, { headers });

        const formData = new FormData();
        formData.append("test", "1");

        expect(fetch).toBeCalledWith("http://test.com/test", {
            method: "POST",
            body: formData,
            headers,
        });
    });

    it("should replace the query params with data and remove the data if matches", async () => {
        mockFetchJSONResponse({});

        const data = { id: 1, name: "ali" };

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.post("test/${id}?name=${name}", data);

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=ali", {
            method: "POST",
        });
        expect(data).toEqual({ id: 1, name: "ali" });
    });

    it("shouldn't modify the data ", async () => {
        mockFetchJSONResponse({});

        const data = { id: 1, name: "ali" };

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.post("test/${id}?name=${name}", data);
        expect(data).toEqual({ id: 1, name: "ali" });
    });

    it("should add queryKeys values to the query string", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.post("test/${id}", { id: 1, name: "ali" }, { queryKeys: ["name"] });

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=ali", {
            method: "POST",
        });
    });

    it("should add queryKeys values if they have value to the query string", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({ baseUrl: "http://test.com" });
        await api.post("test/${id}", { id: 1, name: "" }, { queryKeys: ["name"] });

        expect(fetch).toBeCalledWith("http://test.com/test/1", {
            method: "POST",
        });
    });

    it("should add queryKeys array value", async () => {
        mockFetchJSONResponse({});

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            queryStringFormat: EnumQueryStringMultipleValueFormat.CommaSeperated,
        });
        await api.post("test/${id}", { id: 1, items: ["ali", "veli"] }, { queryKeys: ["items"] });

        expect(fetch).toBeCalledWith("http://test.com/test/1?items=ali%2Cveli", {
            method: "POST",
        });
    });

    it("should separete query, body and route with dataMap options", async () => {
        mockFetchJSONResponse({});

        const headers = {
            "content-type": EnumContentType.Json,
        };

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            headers,
        });

        const request = { route: { id: 1 }, body: ["ali", "veli"], query: { name: "salih" } };

        await api.post("test/${id}", request, {
            queryKeys: ["name"],
            dataMaps: {
                body: "body",
                query: "query",
                route: "route",
            },
        });

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=salih", {
            method: "POST",
            body: JSON.stringify(request.body),
            headers,
        });
    });

    it("should separete query, body and route with method type dataMaps", async () => {
        mockFetchJSONResponse({});

        const headers = {
            "content-type": EnumContentType.Json,
        };

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            headers,
        });

        const request = { test: { id: 1 }, test2: ["ali", "veli"], test3: { name: "salih" } };

        await api.post("test/${id}", request, {
            queryKeys: ["name"],
            dataMaps: {
                body: (e) => e.test2,
                query: (e) => e.test3,
                route: (e) => e.test,
            },
        });

        expect(fetch).toBeCalledWith("http://test.com/test/1?name=salih", {
            method: "POST",
            body: JSON.stringify(request.test2),
            headers,
        });
    });
});
