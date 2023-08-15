import { EnumAppLayer } from "../../shared";
import { beforeEach, describe, expect, it } from "vitest";
import { createModule } from "../../module/__mocks__/module.mock";
import { globalModule } from "../global-module";
import {
    mockCloneUtil,
    mockDateUtil,
    mockEncyrpctionUtil,
    mockLocalization,
    MockObserver,
    mockPerformanceUtil,
} from "../__mocks__/global.module.mock";
import { CustomError, EnumCustomErrorType } from "../../custom-errors";

describe("Global Module", () => {
    beforeEach(() => {
        globalModule.clear();
    });

    it("should get registered localization", () => {
        globalModule.setLocalization(mockLocalization);

        const resolved = globalModule.getLocalization();
        expect(resolved).toEqual(mockLocalization);
    });

    it("should register module", () => {
        const key = "Module1";
        const module = createModule();
        globalModule.registerModule(module, key);
        const resolved = globalModule.getModule(key);
        expect(resolved).toEqual(module);
    });

    it("should get registered clone util", () => {
        globalModule.setCloneUtil(mockCloneUtil);

        const resolved = globalModule.getCloneUtil();
        expect(resolved).toEqual(mockCloneUtil);
    });

    it("shoul get registered encryption util", () => {
        globalModule.setEncryptionUtil(mockEncyrpctionUtil);

        const resolved = globalModule.getEncryptionUtil();
        expect(resolved).toEqual(mockEncyrpctionUtil);
    });

    it("should get registered performance util", () => {
        globalModule.setPerformanceUtil(mockPerformanceUtil);

        const resolved = globalModule.getPerformanceUtil();
        expect(resolved).toEqual(mockPerformanceUtil);
    });

    it("should get registered dateUtil", () => {
        globalModule.setDateUtil(mockDateUtil);

        const resolved = globalModule.getDateUtil();
        expect(resolved).toEqual(mockDateUtil);
    });

    it("should create observer", () => {
        globalModule.setObserver(MockObserver);
        const observer = globalModule.createObserver<string>();
        expect(observer).toBeInstanceOf(MockObserver);
    });

    it("should throw error at ensureGetLocalization if not set", () => {
        expect(() => globalModule.ensureGetLocalization()).toThrowError("Localization is not registered");
    });

    it("should throw error at ensureGetCloneUtil if not set", () => {
        expect(() => globalModule.ensureGetCloneUtil()).toThrowError("Clone Util is not registered");
    });

    it("should throw error at ensureGetPerformanceUtil if not set", () => {
        expect(() => globalModule.ensureGetPerformanceUtil()).toThrowError(
            "Performance Util is not registered"
        );
    });

    it("should throw error at ensureGetDateUtil if not set", () => {
        expect(() => globalModule.ensureGetDateUtil()).toThrowError("Date Util is not registered");
    });

    it("should throw error at ensureGetEncryptionUtil if not set", () => {
        expect(() => globalModule.ensureGetEncryptionUtil()).toThrowError(
            "Encryption Util is not registered"
        );
    });

    it("should add to shared headers", () => {
        globalModule.addToSharedHeaders({ test: "1" });
        const headers = globalModule.getSharedHeaders();
        expect(headers).toEqual({ test: "1" });
    });

    it("should combine shared headers", () => {
        globalModule.addToSharedHeaders({ test: "1" });
        globalModule.addToSharedHeaders({ test2: "2" });
        const headers = globalModule.getSharedHeaders();
        expect(headers).toEqual({ test: "1", test2: "2" });
    });

    it("should remove shared headers by key", () => {
        globalModule.addToSharedHeaders({ test: "1" });
        globalModule.addToSharedHeaders({ test2: "2" });
        globalModule.removeSharedHeaders("test");
        const headers = globalModule.getSharedHeaders();
        expect(headers).toEqual({ test2: "2" });
    });

    it("should resolve dependency from any module", () => {
        const module = createModule();

        class Test { }

        module.register(Test);

        const resolved = globalModule.resolveDependency(Test);

        expect(resolved).toBeInstanceOf(Test);
    });

    it("should call custom error listeners", () => {
        let isCalled = false;
        let isCalled2 = false;
        globalModule.setCustomErrorListener(() => (isCalled = true));
        globalModule.setCustomErrorListener(() => (isCalled2 = true));

        new CustomError({ layer: EnumAppLayer.Cache, type: EnumCustomErrorType.AbortedRequest, message: "" });

        expect(isCalled).toBe(true);
        expect(isCalled2).toBe(true);
    });

    it("should turn on translate at custom error", () => {
        globalModule.useTranslateAsDefault();

        expect(globalModule.isTranslateDefault).toBe(true);
    });

    it("should clear", () => {
        globalModule.setLocalization(mockLocalization);
        globalModule.setCloneUtil(mockCloneUtil);
        globalModule.setEncryptionUtil(mockEncyrpctionUtil);
        globalModule.setPerformanceUtil(mockPerformanceUtil);
        globalModule.setDateUtil(mockDateUtil);
        globalModule.setObserver(MockObserver);
        globalModule.addToSharedHeaders({ test: "1" });
        globalModule.useTranslateAsDefault();

        const key = "Module1";
        const module = createModule(key);
        globalModule.registerModule(module, key);

        globalModule.clear();

        const localization = globalModule.getLocalization();
        const resolvedModule = globalModule.getModule(key);
        const clone = globalModule.getCloneUtil();
        const encyription = globalModule.getEncryptionUtil();
        const performance = globalModule.getPerformanceUtil();
        const dateUtil = globalModule.getDateUtil();
        const observer = globalModule.createObserver<string>();
        const headers = globalModule.getSharedHeaders();
        const isTranslateDefault = globalModule.isTranslateDefault;

        expect(localization).toBe(null);
        expect(clone).toBe(null);
        expect(encyription).toBe(null);
        expect(performance).toBe(null);
        expect(dateUtil).toBe(null);
        expect(resolvedModule).toBe(undefined);
        expect(observer).toBe(undefined);
        expect(headers).toEqual({});
        expect(isTranslateDefault).toBe(false);
    });
});
