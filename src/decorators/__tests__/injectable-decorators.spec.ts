/*eslint-disable*/

import type { IHTTPClient } from "@/http-client";
import type { IProvider } from "@/provider";
import {
    createModule,
    TestHttpClient,
} from "@/module/__mocks__/module.mock";
import { InjectableDecorators } from "..";
import { inject } from "@/decorators";
import { injectLazy, injectStatic } from "@/decorators/inject.decorator";

describe("Injectable Decorators", () => {
    const injectable = new InjectableDecorators();

    const createAndUseInject = () => {
        const module = createModule();
        module.useDecorators(injectable);
        return module;
    };

    it("should register api  with decorator", () => {
        const module = createAndUseInject();

        @injectable.client({})
        class TestApi implements IHTTPClient {
            constructor() {}
            async get() {
                return null as any;
            }
            async put() {
                return null as any;
            }
            async patch() {
                return null as any;
            }
            async delete() {
                return null as any;
            }
            async request() {
                return null as any;
            }
            async post() {
                return null as any;
            }
            async upload() {
                return null as any;
            }
            setHeader() {}
            removeHeader() {}
        }

        const api = module.resolveHttpClient();

        expect(api).toBeInstanceOf(TestApi);
    });

    it("should register provider with decorator", () => {
        const module = createAndUseInject();
        module.registerHttpClient(TestHttpClient, {});

        @injectable.provider()
        class TestProvider implements IProvider {
            constructor() {}
            async get() {
                return null as any;
            }
            async post() {
                return null as any;
            }
            async put() {
                return null as any;
            }
            async delete() {
                return null as any;
            }
            async patch() {
                return null as any;
            }
            async request() {
                return null as any;
            }
            async upload() {
                return null as any;
            }
        }

        const provider = module.resolveProvider(TestProvider);
        expect(provider).toBeInstanceOf(TestProvider);
    });

    it("should register provider with options and dependencies", () => {
        const module = createAndUseInject();
        module.registerHttpClient(TestHttpClient, {});

        class Test {}
        module.register(Test);

        @injectable.provider({ key: "test_p", client: TestHttpClient })
        class TestProvider implements IProvider {
            test: Test;
            client: IHTTPClient;
            constructor(client: IHTTPClient, test: Test) {
                this.test = test;
                this.client = client;
            }
            async get() {
                return null as any;
            }
            async post() {
                return null as any;
            }
            async put() {
                return null as any;
            }
            async delete() {
                return null as any;
            }
            async patch() {
                return null as any;
            }
            async request() {
                return null as any;
            }
            async upload() {
                return null as any;
            }
        }

        const provider = module.resolveProvider<TestProvider>("test_p");
        expect(provider).toBeInstanceOf(TestProvider);
        expect(provider?.client).toBeInstanceOf(TestHttpClient);
        expect(provider?.test).toBeInstanceOf(Test);
    });


    it("should register any other class with decorator", () => {
        const module = createAndUseInject();

        @injectable.other()
        class Test {}

        const resolved = module.resolve(Test);
        expect(resolved).toBeInstanceOf(Test);
    });

    it("should register any other class with dependencies injected", () => {
        const module = createAndUseInject();

        @injectable.other()
        class DepClass {}

        @injectable.other()
        class Test {
            dep: DepClass;
            constructor(dep: DepClass) {
                this.dep = dep;
            }
        }

        const resolved = module.resolve(Test);
        expect(resolved?.dep).toBeInstanceOf(DepClass);
    });

    it("should register with token", () => {
        const module = createAndUseInject();

        @injectable.other("A1")
        class DepClass {}

        @injectable.other()
        class Test {
            constructor(@inject("A1") public dep: any) {
            }
        }

        const resolved = module.resolve(Test);
        expect(resolved?.dep).toBeInstanceOf(DepClass);
    });

    it("should register with lazy dependency",() => {
        const module = createAndUseInject();

        @injectable.other()
        class Test{
        }

        @injectable.other()
        class Test2{
            constructor(@injectLazy("Test") public getTest:() => Test){}
        }

        const test2 = module.resolve(Test2);
        expect(test2).toBeInstanceOf(Test2);
        expect(test2?.getTest()).toBeInstanceOf(Test);
    })

    it("should register with static",() => {
        const module = createAndUseInject();
        const dep = "test";
        const dep2 = "test2";

        @injectable.other()
        class Test2{
            constructor(@injectStatic("dep2") public dep2:string,
                        @injectStatic("dep") public dep:string){}
        }

        const test2 = module.resolve(Test2,{dependencies:{dep,dep2}});
        expect(test2).toBeInstanceOf(Test2);
        expect(test2.dep).toBe(dep)
        expect(test2.dep2).toBe(dep2)
    })

    it("should register with static",() => {
        const module = createAndUseInject();
        const dep = "test";
        const dep2 = "test2";

        @injectable.other()
        class Test2{
            constructor(@injectStatic() public dep:string,@injectStatic() public dep2:string){}
        }

        const test2 = module.resolve(Test2,{dependencies:[dep,dep2]});
        expect(test2).toBeInstanceOf(Test2);
        expect(test2.dep).toBe(dep)
    })
});
