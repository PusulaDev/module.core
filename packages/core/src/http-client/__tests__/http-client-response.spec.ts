import { beforeEach, describe, expect, it, vi } from "vitest";
import { globalModule } from "../../global-module";
import { FetchHTTPClient } from "../fetch-http-client";
import { mockFetchJSONResponse, mockFetchTxtResponse } from "../__mocks__/fetch.mock";
import { EnumResponseFormat } from "../types";

describe("Http Client Response Type", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        globalModule.clear();
    });

    it("should return json type", async () => {
        const data = { data: "test" };
        mockFetchJSONResponse(data);

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            responseFormat: EnumResponseFormat.Json,
        });
        const res = await api.get("test");

        expect(res).toEqual(data);
    });

    it("should return text type", async () => {
        const data = "test";
        mockFetchTxtResponse(data);

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
            responseFormat: EnumResponseFormat.Text,
        });
        const res = await api.get("test");

        expect(res).toEqual(data);
    });

    it("should return text type because request config options has response format = text", async () => {
        const data = "test";
        mockFetchTxtResponse(data);

        const api = new FetchHTTPClient({
            baseUrl: "http://test.com",
        });

        const res = await api.get("test", undefined, {
            responseFormat: EnumResponseFormat.Text,
        });

        expect(res).toEqual(data);
    });
});
