import { CustomModuleError, EnumCustomErrorType } from "../../custom-errors";
import { globalModule } from "../../global-module";
import { defaultLocalization, EnumLocalizationKeys } from "../../localization";
import {
    createModule,
    createNotLinkedModule,
    createRegisterHttpClient,
    TestHttpClient,
    TestProvider,
} from "../__mocks__/module.mock";
import { EnumDependencyType } from "../../shared";

describe("Module Dependency Resolve", () => {
    beforeEach(() => globalModule.clear());

    it("should resolce HttpClient", () => {
        const module = createModule();
        module.registerHttpClient(TestHttpClient, { baseUrl: "test" });

        const client = module.resolve(TestHttpClient);
        expect(client).toBeInstanceOf(TestHttpClient);
    });

    it("should resolve Provider", () => {
        const module = createRegisterHttpClient();

        module.registerProvider(TestProvider);

        const provider = module.resolve(TestProvider);

        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should resolve Provider with dependencies", () => {
        const module = createRegisterHttpClient();

        class Test {}

        module.register(Test);
        module.registerProvider(TestProvider, { dependencies: [Test] });

        const provider = module.resolve(TestProvider);
        expect(provider?.args?.[0]).toBeInstanceOf(Test);
    });

    it("should resolve any simple class instance", () => {
        const module = createModule();

        class TestClass {}

        module.register(TestClass);
        const resolved = module.resolve(TestClass);
        expect(resolved).toBeInstanceOf(TestClass);
    });

    it("should resolve same instance with resolve method", () => {
        const module = createModule();

        class TestClass {}

        module.register(TestClass);

        const resolved = module.resolve(TestClass);
        const resolved2 = module.resolve(TestClass);

        expect(resolved).toEqual(resolved2);
    });

    it("should resolve new instance with newInstance parameter method", () => {
        const module = createModule();

        class TestClass {}

        module.register(TestClass);

        const resolved = module.resolve(TestClass);
        const resolved2 = module.resolve(TestClass, { newInstance: true });

        expect(resolved).not.toBe(resolved2);
    });

    it("should register and resolve class instance", () => {
        const module = createModule();

        class TestClass {}

        const instance = new TestClass();
        module.registerInstance(instance);

        const resolved = module.resolve(TestClass);
        expect(resolved).toBe(instance);
    });

    it("should resolve any simple class instance by key", () => {
        const module = createModule();

        class TestClass {}

        module.register(TestClass);
        const resolved = module.resolve<TestClass>("TestClass");
        expect(resolved).toBeInstanceOf(TestClass);
    });

    it("should resolve any simple class with dependencies at constructor", () => {
        const module = createModule();

        class DepClass {}

        class TestClass {
            dep: DepClass;

            constructor(dep: DepClass) {
                this.dep = dep;
            }
        }

        module.register(DepClass);
        module.register(TestClass, { dependencies: [DepClass] });

        const resolved = module.resolve(TestClass);
        expect(resolved?.dep).toBeInstanceOf(DepClass);
    });

    it("should resolve class with static dependency value", () => {
        const module = createModule();
        const dep = "test";

        class Test {
            constructor(public dep: string) {}
        }

        module.register(Test, { dependencies: [{ type: EnumDependencyType.Static, key: "dep" }] });
        const resolved = module.resolve(Test, { dependencies: { dep } });

        expect(resolved).toBeInstanceOf(Test);
        expect(resolved?.dep).toBe(dep);
    });

    it("should resolve class with static dependency value and dependencies as array", () => {
        const module = createModule();
        const dep = "test";

        class Test {
            constructor(public dep: string) {}
        }

        module.register(Test, { dependencies: [{ type: EnumDependencyType.Static }] });
        const resolved = module.resolve(Test, { dependencies: [dep] });

        expect(resolved).toBeInstanceOf(Test);
        expect(resolved?.dep).toBe(dep);
    });

    it("should resolve class with static fallback value", () => {
        const module = createModule();
        const dep = "test";

        class Test {
            constructor(public dep: string) {}
        }

        module.register(Test, {
            dependencies: [{ type: EnumDependencyType.Static, key: "dep", value: dep }],
        });
        const resolved = module.resolve(Test);

        expect(resolved).toBeInstanceOf(Test);
        expect(resolved?.dep).toBe(dep);
    });

    it("should resolve class lazy dependency", () => {
        const module = createModule();

        class Test {}

        class Test2 {
            constructor(public getTest: () => Test) {}
        }

        module.register(Test);
        module.register(Test2, { dependencies: [{ key: "Test", type: EnumDependencyType.Lazy }] });

        const test2 = module.resolve(Test2);

        expect(test2).toBeInstanceOf(Test2);
        expect(test2.getTest()).toBeInstanceOf(Test);
    });

    it("should resolve any simple class with dependency strings at constructor", () => {
        const module = createModule();

        class DepClass {}

        class TestClass {
            dep: DepClass;

            constructor(dep: DepClass) {
                this.dep = dep;
            }
        }

        module.register(DepClass);
        module.register(TestClass, { dependencies: ["DepClass"] });

        const resolved = module.resolve(TestClass);
        expect(resolved?.dep).toBeInstanceOf(DepClass);
    });

    it("should resolve not found dependency at the other modules", () => {
        const module = createModule();
        const module2 = createModule("Module2");

        class Test {}

        module.register(Test);

        class TestWithDependency {
            constructor(public test: Test) {}
        }

        module2.register(TestWithDependency, { dependencies: [Test] });

        const testWithDependency = module2.resolve(TestWithDependency);

        expect(module).not.toEqual(module2);

        expect(testWithDependency).toBeInstanceOf(TestWithDependency);
        expect(testWithDependency.test).toBeInstanceOf(Test);
    });

    it("should throw not registered error when 'linkedModule' false and dependency is registered in another module", () => {
        const module = createModule();
        const module2 = createNotLinkedModule("Module2");

        class Test {}

        module.register(Test);

        class TestWithDependency {
            constructor(public test: Test) {}
        }

        module2.register(TestWithDependency, { dependencies: [Test] });

        expect(() => module2.resolve(TestWithDependency)).toThrow();
    });

    it("should throw not registered error when dependency is not registered in any module and shouldn't go infinete loop", () => {
        createModule();
        createModule("Module2");
        const module3 = createModule("Module3");

        class Test {}

        class TestWithDependency {
            constructor(public test: Test) {}
        }

        module3.register(TestWithDependency, { dependencies: [Test] });

        expect(() => module3.resolve(TestWithDependency)).toThrowError(
            new CustomModuleError({
                type: EnumCustomErrorType.Construction,
                message: EnumLocalizationKeys.NotRegisteredError,
                translateArgs: ["Test"],
                translate: true,
            })
        );
    });

    it("should throw cycle dependency error", () => {
        const module = createModule();

        class Test {
            constructor(public test2: Test2) {}
        }

        class Test2 {
            constructor(public test: Test) {}
        }

        module.register(Test, { dependencies: [Test2] });
        module.register(Test2, { dependencies: [Test] });

        expect(() => module.resolve(Test)).toThrowError(
            new CustomModuleError({
                type: EnumCustomErrorType.Construction,
                message: EnumLocalizationKeys.CycleDependencyError,
                translateArgs: ["Test"],
                translate: true,
            })
        );
    });

    it("should throw cycle dependency error even with multiple modules", () => {
        const module = createModule();
        const module2 = createModule("Module2");

        class Test {
            constructor(public test2: Test2) {}
        }

        class Test2 {
            constructor(public test: Test3) {}
        }

        class Test3 {
            constructor(public test: Test) {}
        }

        module.register(Test, { dependencies: [Test2] });
        module.register(Test2, { dependencies: [Test3] });
        module2.register(Test3, { dependencies: [Test] });

        expect(() => module.resolve(Test)).toThrowError(
            new CustomModuleError({
                type: EnumCustomErrorType.Construction,
                message: EnumLocalizationKeys.CycleDependencyError,
                translateArgs: ["Test"],
                translate: true,
            })
        );
    });

    it("should not throw error if dependency is from far module", () => {
        const module = createModule();
        const module2 = createModule("Module2");
        const module3 = createModule("Module3");

        class Test {}

        class Test2 {
            constructor(public test: Test) {}
        }

        class Test3 {
            constructor(public test: Test2) {}
        }

        module.register(Test);
        module2.register(Test2, { dependencies: [Test] });
        module3.register(Test3, { dependencies: [Test2] });

        const resolved = module3.resolve(Test3);

        expect(resolved).toBeInstanceOf(Test3);
        expect(resolved.test).toBeInstanceOf(Test2);
        expect(resolved.test.test).toBeInstanceOf(Test);
    });

    it("should throw error if cannot resolve because not registered", () => {
        const module = createModule();
        defaultLocalization.setLang("en-us");
        defaultLocalization.setTranslations({
            "en-us": {
                [EnumLocalizationKeys.NotRegisteredError]: "error %s",
            },
        });
        globalModule.setLocalization(defaultLocalization);

        expect(() => module.resolve("test")).toThrowError("error test");
    });
});
