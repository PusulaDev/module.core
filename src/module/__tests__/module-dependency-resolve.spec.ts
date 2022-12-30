import { CustomModuleError, EnumCustomErrorType } from "@/custom-errors";
import { globalModule } from "@/global-module";
import { defaultLocalization, EnumLocalizationKeys } from "@/localization";
import { createModule, createNotLinkedModule, createRegisterHttpClient, createRegisterProvider, TestController, TestHttpClient, TestProvider } from "../__mocks__/module.mock";

describe("Module Dependency Resolve", () => {
    beforeEach(() => globalModule.clear())

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

        class Test {
            constructor() { }
        }
        module.register(Test);
        module.registerProvider(TestProvider, { dependencies: [Test] });

        const provider = module.resolve(TestProvider);
        expect(provider?.args?.[0]).toBeInstanceOf(Test);
    });

    it("should resolve Controller", () => {
        const module = createRegisterProvider();

        module.registerController(TestController, {
            dependencies: [TestProvider],
        });

        const controller = module.resolve(TestController);

        expect(controller).toBeInstanceOf(TestController);
    });

    it("should resolve Controller with dependencies", () => {
        const module = createRegisterProvider();

        class Test {
            constructor() { }
        }

        module.register(Test);

        module.registerController(TestController, {
            dependencies: [TestProvider, Test],
        });
        const controller = module.resolve(TestController);

        expect(controller?.args?.[0]).toBeInstanceOf(Test);
    });

    it("should resolve not found dependency at the other modules", () => {
        const module = createModule();
        const module2 = createModule('Module2');

        class Test {
        }

        module.register(Test);

        class TestWithDependency {
            constructor(public test: Test) { }
        }

        module2.register(TestWithDependency, { dependencies: [Test] })

        const testWithDependency = module2.resolve(TestWithDependency);

        expect(module).not.toEqual(module2);

        expect(testWithDependency).toBeInstanceOf(TestWithDependency);
        expect(testWithDependency.test).toBeInstanceOf(Test)
    })

    it("should throw not registered error when 'linkedModule' false and dependency is registered in another module", () => {
        const module = createModule();
        const module2 = createNotLinkedModule("Module2");
        class Test {
        }

        module.register(Test);

        class TestWithDependency {
            constructor(public test: Test) { }
        }

        module2.register(TestWithDependency, { dependencies: [Test] })

        expect(() => module2.resolve(TestWithDependency)).toThrow()
    })

    it("should throw not registered error when dependency is not registered in any module and shouldn't go infinete loop", () => {
        createModule();
        createModule("Module2");
        const module3 = createModule("Module3");

        class Test { }

        class TestWithDependency {
            constructor(public test: Test) { }
        }

        module3.register(TestWithDependency, { dependencies: [Test] })

        expect(() => module3.resolve(TestWithDependency)).toThrowError(new CustomModuleError({
            type: EnumCustomErrorType.Construction,
            message: EnumLocalizationKeys.NotRegisteredError,
            translateArgs: ["Test"],
            translate: true,
        }))
    })

    it("should throw cycle dependency error", () => {
        const module = createModule();

        class Test {
            constructor(public test2: Test2) { }
        }

        class Test2 {
            constructor(public test: Test) { }
        }

        module.register(Test, { dependencies: [Test2] });
        module.register(Test2, { dependencies: [Test] })

        expect(() => module.resolve(Test)).toThrowError(
            new CustomModuleError({
                type: EnumCustomErrorType.Construction,
                message: EnumLocalizationKeys.CycleDependencyError,
                translateArgs: ["Test"],
                translate: true
            })
        )
    })

    it("should throw cycle dependency error even with multiple modules", () => {
        const module = createModule();
        const module2 = createModule("Module2");

        class Test {
            constructor(public test2: Test2) { }
        }

        class Test2 {
            constructor(public test: Test3) { }
        }

        class Test3 {
            constructor(public test: Test) { }
        }

        module.register(Test, { dependencies: [Test2] });
        module.register(Test2, { dependencies: [Test3] });
        module2.register(Test3, { dependencies: [Test] })

        expect(() => module.resolve(Test)).toThrowError(
            new CustomModuleError({
                type: EnumCustomErrorType.Construction,
                message: EnumLocalizationKeys.CycleDependencyError,
                translateArgs: ["Test"],
                translate: true
            })
        )
    })

    it("should resolve any simple class instance", () => {
        const module = createModule();

        class TestClass { }

        module.register(TestClass);
        const resolved = module.resolve(TestClass);
        expect(resolved).toBeInstanceOf(TestClass);
    });

    it("should register and resolve class instance", () => {
        const module = createModule();

        class TestClass { }
        const instance = new TestClass();
        module.registerInstance(instance);

        const resolved = module.resolve(TestClass);
        expect(resolved).toEqual(instance);
    });

    it("should resolve any simple class instance by key", () => {
        const module = createModule();

        class TestClass { }

        module.register(TestClass);
        const resolved = module.resolve("TestClass");
        expect(resolved).toBeInstanceOf(TestClass);
    });

    it("should resolve any simple class with dependencies at constructor", () => {
        const module = createModule();

        class DepClass { }
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

    it("should resolve any simple class with dependency strings at constructor", () => {
        const module = createModule();

        class DepClass { }
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

    it("should throw error if cannot resolve because not registered", async () => {
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