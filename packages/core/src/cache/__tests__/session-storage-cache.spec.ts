import { beforeEach, describe, expect, it } from "vitest";
import { globalModule } from "../../global-module";
import type { IEncyrptionUtil } from "../../utils";
import { SessionStorageCache } from "../session-storage-cache";

describe("Session Storage Cache", () => {
    let cache: SessionStorageCache;
    beforeEach(() => {
        globalModule.clear();
        cache = new SessionStorageCache();
    });

    it("should return null for not stored key", () => {
        const value = cache.get("wololo");

        expect(value).toBeNull();
    });

    it("should store value to session storage", () => {
        cache.set("oww", { id: 12 });

        const value = cache.get<{ id: number }>("oww");

        expect(value).toEqual({ id: 12 });
    });

    it("should remove value", () => {
        const key = "arrayy";

        cache.set(key, []);
        cache.remove(key);

        const value = cache.get(key);

        expect(value).toBeNull();
    });

    it("should clear cache", () => {
        cache.set("asd", "asd");
        cache.set("num", 1);

        cache.clear();

        const value = cache.get("asd");
        const value2 = cache.get("num");
        expect(value).toBeNull();
        expect(value2).toBeNull();
    });

    describe("Encrytion", () => {
        class TestEncryption implements IEncyrptionUtil {
            encrypt(value: string) {
                return value
                    .split("")
                    .map((e) => String.fromCharCode(e.charCodeAt(0) + 1))
                    .join("");
            }

            decrypt(value: string) {
                return value
                    .split("")
                    .map((e) => String.fromCharCode(e.charCodeAt(0) - 1))
                    .join("");
            }
        }

        it("should run registered ecryption algorithm", () => {
            const encryption = new TestEncryption();

            globalModule.setEncryptionUtil(encryption);

            const key = "test";
            const value = "ali";

            cache.set(key, value);

            const stored = sessionStorage.getItem(key);

            const result = cache.get(key);

            expect(stored).toBe("#bmj#");
            expect(result).toBe(value);
        });

        it("should run registered object ecryption algorithm", () => {
            const encryption = new TestEncryption();

            globalModule.setEncryptionUtil(encryption);

            const key = "test";
            const value = { name: "ali" };

            cache.set(key, value);

            const stored = sessionStorage.getItem(key);

            const result = cache.get(key);

            expect(stored).toBe("|#obnf#;#bmj#~");
            expect(result).toEqual(value);
        });
    });
});
