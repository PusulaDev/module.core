import { FetchHTTPClient } from "../fetch-http-client";
import fetchMock from "jest-fetch-mock";
import {
    mockFetchJSONResponse,
    mockFetchResponseWithError,
    mockRejectResponse,
} from "../__mocks__/fetch.mock";
import { CustomServerError } from "../../custom-errors/custom-server-error";
import { contentTypeKey } from "../client-constants";
import { EnumContentType } from "../types";

describe("Http Client Post Method", () => {
    fetchMock.enableMocks();

    beforeEach(() => {
        fetchMock.mockClear();
    });

    it("should call fetch with post method", async () => {
        mockFetchJSONResponse({ data: "test" });

        const headers = {
            "content-type": EnumContentType.Json,
        };
        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            headers,
        });

        const res = await api.post<{ data: number }, { data: string }>("go", {
            data: 1,
        });

        expect(fetchMock).toBeCalledWith("http://test.com/go", {
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

        expect(fetchMock).toBeCalledWith("http://test.com/test", {
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

        expect(fetchMock).toBeCalledWith("http://test.com/test", {
            method: "POST",
            body: formData,
            headers,
        });
    });
});
