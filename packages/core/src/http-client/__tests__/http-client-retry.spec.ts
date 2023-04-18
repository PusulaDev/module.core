import { beforeEach, describe, expect, test, vi } from "vitest";
import { FetchHTTPClient } from "../fetch-http-client";
import { globalModule } from "../../global-module";
import { CustomServerError } from "../../custom-errors";
import { mockFetchAllResponseWithError, mockFetchResponseWithError } from "../__mocks__/fetch.mock";
import type { RetryOnErrorOptions } from "../types/retry-on-error-options";
import { EnumRequestMethod } from "../types";

describe("Http Client Retry", () => {
    beforeEach(() => {
        vi.clearAllMocks();
        globalModule.clear();
        fetchMock.resetMocks();
    });

    const createOptions = (maxRetryCount?: number) =>
        ({
            retryCondition: vi.fn(),
            beforeRetry: vi.fn(),
            maxRetryCount,
        } satisfies RetryOnErrorOptions);

    const createClient = (retryOnErrorOptions: RetryOnErrorOptions) =>
        new FetchHTTPClient({
            baseUrl: "test.com",
            retryOnErrorOptions,
        });

    const mockReject = () => mockFetchAllResponseWithError(404, "not found", "error");
    const getExpectedError = () => new CustomServerError({ code: "404", message: "404: not found. error" });

    test("retries request on retryOn is matched", async () => {
        mockFetchResponseWithError(404, "not found", "error");

        const retryOnErrorOptions = createOptions();

        const client = createClient(retryOnErrorOptions);

        retryOnErrorOptions.retryCondition.mockReturnValueOnce(true);
        retryOnErrorOptions.retryCondition.mockReturnValueOnce(false);

        await client.post("test", { test: "test" });

        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledWith({
            error: getExpectedError(),
            url: "test",
            data: { test: "test" },
            method: EnumRequestMethod.POST,
        });

        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledTimes(1);
        expect(retryOnErrorOptions.retryCondition).toHaveBeenCalledTimes(1);
    });

    test("stop on maxRetryCount reached", async () => {
        mockReject();

        const retryOnErrorOptions = createOptions(5);

        retryOnErrorOptions.retryCondition.mockReturnValue(true);

        const client = createClient(retryOnErrorOptions);

        await expect(() => client.post("test", { test: "test" })).rejects.toEqual(getExpectedError());

        expect(retryOnErrorOptions.retryCondition).toHaveBeenCalledTimes(5);
        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledTimes(5);
    });

    test("stops on default retry count reached", async () => {
        mockReject();

        const retryOnErrorOptions = createOptions();

        retryOnErrorOptions.retryCondition.mockReturnValue(true);

        const client = createClient(retryOnErrorOptions);

        await expect(() => client.post("test", { test: "test" })).rejects.toEqual(getExpectedError());

        expect(retryOnErrorOptions.retryCondition).toHaveBeenCalledTimes(3);
        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledTimes(3);
    });

    test("starts maxRetryCount from 0 on new request", async () => {
        mockReject();

        const retryOnErrorOptions = createOptions(2);

        retryOnErrorOptions.retryCondition.mockReturnValue(true);

        const client = createClient(retryOnErrorOptions);

        await expect(() => client.post("test", { test: "test" })).rejects.toEqual(getExpectedError());

        expect(retryOnErrorOptions.retryCondition).toHaveBeenCalledTimes(2);
        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledTimes(2);

        await expect(() => client.post("test", { test: "test" })).rejects.toEqual(getExpectedError());

        expect(retryOnErrorOptions.retryCondition).toHaveBeenCalledTimes(4);
        expect(retryOnErrorOptions.beforeRetry).toHaveBeenCalledTimes(4);
    });
});
