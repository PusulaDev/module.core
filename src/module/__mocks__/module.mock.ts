/* eslint-disable */

import type { IHTTPClient, IHTTPClientOptions } from "../../http-client";
import type { IProvider, IRequestConfig } from "../../provider";
import { CoreModule, ICoreModule } from "../index";
import type { ICache } from "../../cache";

export class TestModule extends CoreModule {
}

export class TestHttpClient implements IHTTPClient {
    constructor(_: IHTTPClientOptions) {
    }

    async get<TResponse = null>(_: string): Promise<TResponse> {
        return null as any;
    }

    async post(_: string) {
        return null as any;
    }

    async request(_: string) {
        return null as any;
    }

    async delete(_: string) {
        return null as any;
    }

    async put(_: string) {
        return null as any;
    }

    async patch(_: string) {
        return null as any;
    }

    async upload(_: string, __: FormData) {
        return null as any;
    }

    setHeader(_: string) {
    }

    removeHeader(_: string) {
    }
}

export class TestProvider implements IProvider {
    args: any[] | undefined;

    constructor(_: IHTTPClient, ...args: any[]) {
        this.args = args;
    }

    request<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    post<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    get<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    patch<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    put<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    delete<TRequest = undefined, TResponse = undefined>(
        _: IRequestConfig<TRequest, TResponse>
    ): Promise<TResponse | undefined> {
        return null as any;
    }

    upload(_: string, __: FormData) {
        return null as any;
    }
}

export class TestCache implements ICache {
    get(_: string) {
        return null as any;
    }

    set(_: string, __: any) {
    }

    remove(_: string) {
    }

    clear() {
    }
}

export const createModule = (key?: string) => {
    const testModule = new TestModule({ key });
    testModule.clear();
    return testModule;
};

export const createNotLinkedModule = (key?: string) => {
    const testModule = new TestModule({ key, linkedModule: false });
    testModule.clear();
    return testModule;
};

export const createRegisterHttpClient = (moduleArg?: ICoreModule) => {
    const module = moduleArg ?? createModule();
    module.registerHttpClient(TestHttpClient, {});
    return module;
};

export const createRegisterProvider = () => {
    const module = createRegisterHttpClient();
    module.registerProvider(TestProvider);
    return module;
};
