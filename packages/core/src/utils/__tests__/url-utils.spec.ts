import { beforeEach, describe, expect, it, vi } from "vitest";
import { globalModule } from "../../global-module";
import { defaultLocalization, EnumLocalizationKeys } from "../../localization";
import type { URLOptions } from "../types";
import { urlUtils } from "../url.utils";

describe("URL Utils", () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    global.window = Object.create(window);

    beforeEach(() => {
        vi.stubGlobal("location", {
            host: "test.com",
        });
    });

    const testTable: [URLOptions, string][] = [
        [
            {
                protocol: "http",
                hostName: "test.com",
            },
            "http://test.com/",
        ],
        [
            {
                protocol: "https",
                hostName: "test.com",
            },
            "https://test.com/",
        ],
        [
            {
                hostName: "test.com",
            },
            "//test.com/",
        ],
        [
            {
                hostName: "test.com",
                prefix: "json",
            },
            "//test.com/json/",
        ],
        [
            {
                hostName: "test.com",
                prefix: "json",
                languagePrefix: "tr-tr",
            },
            "//test.com/tr-tr/json/",
        ],
        [
            {
                hostNames: {
                    "test.com": "testapi.com",
                },
                prefix: "json",
                languagePrefix: "tr-tr",
            },
            "//testapi.com/tr-tr/json/",
        ],
    ];

    it.each(testTable)("should use %j options and create %s", (options, expected) => {
        const result = urlUtils.createBaseUrl(options);
        expect(result).toBe(expected);
    });

    it("should throw error if hostName and hostNames is not defined", () => {
        defaultLocalization.setLang("en-us");
        defaultLocalization.setTranslations({
            "en-us": {
                [EnumLocalizationKeys.HostNameError]: "error",
            },
        });
        globalModule.setLocalization(defaultLocalization);

        expect(() => urlUtils.createBaseUrl({})).toThrowError("error");
    });
});
