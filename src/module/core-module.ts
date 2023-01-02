import type { IHTTPClientOptions } from "@/http-client";
import type { IHTTPClient, IHTTPClientConstuctor } from "../http-client/types/http-client.interface";
import type { IProvider, IProviderConstructor } from "@/provider";
import type {
    AppLayerUnionType,
    DependencyOptions,
    DependencyType,
    ICoreModule,
    KeyUnionType,
    ModuleBootstrapOptions,
    ModuleConstructorOptions,
    RegisterClassOptions,
    RegisterProviderOptions,
} from "./core-module.interface";
import type { IDecorator } from "@/decorators";
import { coreLogger } from "@/logger/core.logger";
import { globalModule } from "@/global-module";
import { CustomModuleError, EnumCustomErrorType } from "@/custom-errors";
import type { IClassConstructor } from "@/shared";
import { EnumDependencyType } from "@/shared";
import type { LocalizationTranslations } from "@/localization";
import { EnumLocalizationKeys } from "@/localization";
import type {
    ConstructorMap,
    ConstructorOptions,
    HttpClientConstructorOptions,
    InstanceMap,
    OtherConstructorOptions,
    ProviderConstructorOptions,
} from "./dependency-maps";
import type { DependencyResolveOptions } from "./resolve-options";
import { ensureDependenyOptions } from "@/utils/ensure-object.util";

export class CoreModule implements ICoreModule {
    private readonly providerSuffix = "Provider";
    private readonly clientSuffix = "HttpClient";
    private key;

    private constructors: ConstructorMap = {
        clients: new Map<string, HttpClientConstructorOptions>(),
        providers: new Map<string, ProviderConstructorOptions>(),
        others: new Map<string, OtherConstructorOptions>(),
    };

    private instances: InstanceMap = {
        clients: new Map<string, IHTTPClient>(),
        providers: new Map<string, IProvider>(),
        others: new Map<string, any>(),
    };

    private linkedModule = true;

    constructor(options: ModuleConstructorOptions = {}) {
        const { decorators, key, linkedModule, register } = options;

        this.key = key ?? this.constructor.name;

        const registeredModule = globalModule.getModule(this.key);
        if (registeredModule) return registeredModule as CoreModule;

        globalModule.registerModule(this, this.key);

        if (decorators?.length) this.useDecorators(...decorators);
        if (register?.length) register.forEach((r) => this.register(r.constructor, r.options));

        if (linkedModule !== undefined) this.linkedModule = linkedModule;
    }

    bootstrap(options?: ModuleBootstrapOptions) {
        if (options) {
            this.registerHttpClientInstance(options.httpClient, options.httpClientKey);

            if (options.translations) this.setTranslations(options.translations);
        }

        return this;
    }

    setTranslations(options: LocalizationTranslations) {
        globalModule.getLocalization()?.setTranslations(options);
        return this;
    }

    @coreLogger.logMethod()
    useDecorators(...decorators: IDecorator[]) {
        decorators.forEach((decorator) => decorator.setModule(this));
        return this;
    }

    register<T>(constructor: new (...args: any[]) => T, options?: RegisterClassOptions): ICoreModule {
        const name = this.getName(options?.key ?? constructor);
        this.constructors.others.set(name, {
            constructor,
            dependencies: options?.dependencies,
        });

        return this;
    }

    registerInstance<T extends object>(obj: T, key?: string) {
        const name: string = this.getName(key ?? obj.constructor.name);
        this.instances.others.set(name, obj);
        return this;
    }

    /**
     * Checks 'Provider'  | 'HttpClient' suffix for key or name of class.
     * @param key
     * @param options
     */
    resolve<T extends AppLayerUnionType>(key: KeyUnionType<T>, options?: DependencyResolveOptions): T {
        const name = this.getName(key);

        if (this.isClient(name)) return this.resolveHttpClient(key as IHTTPClientConstuctor, options) as T;

        if (this.isProvider(name)) return this.resolveProvider(key as IProviderConstructor, options) as T;

        return this.resolveOther<T>(key, options);
    }

    resolveFromGlobal<T extends AppLayerUnionType>(
        key: KeyUnionType<T>,
        options: DependencyResolveOptions
    ): T | undefined {
        if (this.linkedModule && options.type !== "locale")
            return globalModule.resolveDependency(key, { ...options, currentModule: this.key });
    }

    registerHttpClientInstance(client: IHTTPClient, key?: string) {
        const name: string = this.getName(key ?? client.constructor.name);
        this.instances.clients.set(name, client);

        return this;
    }

    registerHttpClient(client: IHTTPClientConstuctor, options: IHTTPClientOptions) {
        coreLogger.log("registerHttpClient", client, options);

        this.constructors.clients.set(client.name, { constructor: client, options });
        return this;
    }

    resolveHttpClient<T extends IHTTPClient>(
        client?: IHTTPClientConstuctor | string,
        options?: DependencyResolveOptions
    ): T {
        const instance = this.resolveHttpClientInstance<T>(client);
        if (instance) return instance;

        return this.createHttpClientInstance(client, options) as T;
    }

    registerProvider(provider: IProviderConstructor, options?: RegisterProviderOptions) {
        const name = options?.key ?? provider.name;

        const clientName = options?.client ? this.getName(options.client) : undefined;

        this.constructors.providers.set(name, {
            client: clientName,
            constructor: provider,
            dependencies: options?.dependencies,
        });

        return this;
    }

    resolveProvider<T extends IProvider>(
        key: string | IProviderConstructor,
        options?: DependencyResolveOptions
    ): T {
        const instance = this.resolveProviderInstance<T>(key);
        if (instance) return instance;

        return this.createProviderInstance<T>(key, options);
    }

    @coreLogger.logMethod()
    clear() {
        this.clearConstructors();
        this.clearInstances();
    }

    @coreLogger.logMethod()
    clearConstructors() {
        this.constructors.clients.clear();
        this.constructors.providers.clear();
        this.constructors.others.clear();
    }

    @coreLogger.logMethod()
    clearInstances() {
        this.instances.clients.clear();
        this.instances.providers.clear();
        this.instances.others.clear();
    }

    private resolveHttpClientInstance<T extends IHTTPClient>(client?: IHTTPClientConstuctor | string) {
        if (client) {
            const name = this.getName(client);
            return this.instances.clients.get(name) as T;
        } else return this.instances.clients.values().next().value as T;
    }

    private ensureOptions(options?: DependencyResolveOptions): DependencyResolveOptions {
        return options ?? { path: [] };
    }

    private createHttpClientInstance(
        client?: IHTTPClientConstuctor | string,
        options?: DependencyResolveOptions
    ) {
        const name = client ? this.getName(client) : "HttpClient";

        const constructorObj = client
            ? this.constructors.clients.get(name)
            : (this.constructors.clients.values().next().value as HttpClientConstructorOptions);

        options = this.ensureOptions(options);
        this.checkAndPushPath(name, options);

        if (!constructorObj) {
            const instanceFromGlobal = this.resolveFromGlobal(name, options);
            if (instanceFromGlobal) return instanceFromGlobal;

            this.throwNotRegisteredError(name, options.parentName);
        }

        const instance = new constructorObj.constructor(constructorObj.options);
        this.registerHttpClientInstance(instance);

        return instance;
    }

    private resolveProviderInstance<T extends IProvider>(key: string | IProviderConstructor): T | undefined {
        if (typeof key === "string") return this.instances.providers.get(key) as T;
        else return this.resolveByConstructor<T>(this.instances.providers, key);
    }

    private createProviderInstance<T extends IProvider>(
        key: string | IProviderConstructor,
        options?: DependencyResolveOptions
    ): T {
        return this.createInstance<T, IProviderConstructor>({
            constructorMap: this.constructors.providers,
            instanceMap: this.instances.providers,
            key,
            ...this.ensureOptions(options),
            dependenciesMapFn: (dependencies: unknown[], constructorObj: ProviderConstructorOptions) => {
                const client = this.resolveHttpClient(constructorObj.client);
                return [client, ...dependencies];
            },
        });
    }

    private resolveOther<T>(key: KeyUnionType, options?: DependencyResolveOptions): T {
        const instance = this.resolveOtherInstance<T>(key);
        if (instance) return instance;

        return this.createOtherInstance<T>(key, options);
    }

    private resolveOtherInstance<T>(key: KeyUnionType): T | undefined {
        const name = this.getName(key);
        return this.instances.others.get(name) as T | undefined;
    }

    private createOtherInstance<T>(key: KeyUnionType, options?: DependencyResolveOptions) {
        return this.createInstance<T, IClassConstructor>({
            constructorMap: this.constructors.others,
            instanceMap: this.instances.others,
            key,
            ...this.ensureOptions(options),
        });
    }

    private checkAndPushPath(name: string, options: DependencyResolveOptions) {
        if (!options.path) options.path = [];

        if (options.path.includes(name)) {
            this.throwCycleDependencyError(name, options.parentName);
        }

        options.path.push(name);
    }

    private ensureParentName(name: string, options: DependencyResolveOptions) {
        if (!options.parentName) options.parentName = name;
    }

    private createInstance<T extends AppLayerUnionType, TConstructor extends IClassConstructor>(
        options: {
            constructorMap: Map<string, ConstructorOptions<TConstructor>>;
            instanceMap: Map<string, any>;
            key: KeyUnionType;
            dependenciesMapFn?: (
                dependencies: AppLayerUnionType[],
                constructorObj: ConstructorOptions<TConstructor>
            ) => AppLayerUnionType[];
        } & DependencyResolveOptions
    ): T {
        const { constructorMap, instanceMap, key, dependenciesMapFn, ...dependencyOptions } = options;

        const name = this.getName(key);
        const constructorObj = constructorMap.get(name);

        this.ensureParentName(name, dependencyOptions);

        if (!constructorObj) {
            const instanceFromGlobal = this.resolveFromGlobal(name, dependencyOptions);
            if (instanceFromGlobal) return instanceFromGlobal as T;

            this.throwNotRegisteredError(name, dependencyOptions.parentName);
        }

        this.checkAndPushPath(name, dependencyOptions);

        let dependencies = this.resolveDependencies(constructorObj.dependencies ?? [], dependencyOptions);

        if (dependenciesMapFn) dependencies = dependenciesMapFn(dependencies, constructorObj);

        const instance = new constructorObj.constructor(...dependencies);

        instanceMap.set(name, instance);
        return instance as T;
    }

    private resolveDependencies(
        dependencies: DependencyType[],
        options: DependencyResolveOptions
    ): AppLayerUnionType[] {
        return dependencies.map((e, i) => this.resolveDependency(e, i, options));
    }

    private resolveDependency(dependency: DependencyType, index: number, options: DependencyResolveOptions) {
        if (ensureDependenyOptions(dependency)) {
            return this.resolveDependencyWithType(dependency, index, options);
        } else if (typeof dependency === "function" || typeof dependency === "string")
            return this.resolve<AppLayerUnionType>(dependency as KeyUnionType, options);
        else return dependency;
    }

    private resolveDependencyWithType(
        dependency: DependencyOptions,
        index: number,
        options: DependencyResolveOptions
    ) {
        switch (dependency.type) {
            case EnumDependencyType.Static:
                if (!options.dependencies) return dependency.value;
                if (options.dependencies instanceof Array) {
                    return options.dependencies[index] ?? dependency.value;
                } else if (dependency.key) return options.dependencies?.[dependency.key] ?? dependency.value;
                break;
            case EnumDependencyType.Lazy:
                return () => this.resolve<AppLayerUnionType>(dependency.key as KeyUnionType, options);
            case EnumDependencyType.Class:
                return this.resolve<AppLayerUnionType>(dependency.key as KeyUnionType, options);
        }
    }

    private resolveByConstructor<T>(map: Map<string, any>, typeConstructor: new (...args: any[]) => any) {
        return map.get(typeConstructor.name) as T | undefined;
    }

    private getName(key: string | (new (options?: any) => any)) {
        return typeof key === "string" ? key : key.name;
    }

    private isProvider(key: string | IProviderConstructor) {
        return this.getName(key).includes(this.providerSuffix);
    }

    private isClient(key: string | IHTTPClientConstuctor) {
        return this.getName(key).includes(this.clientSuffix);
    }

    private throwNotRegisteredError(key: string, parent?: string): never {
        throw new CustomModuleError({
            type: EnumCustomErrorType.Construction,
            message: EnumLocalizationKeys.NotRegisteredError,
            translateArgs: parent ? [key, parent] : [key],
            translate: true,
        });
    }

    private throwCycleDependencyError(key: string, parent?: string): never {
        throw new CustomModuleError({
            type: EnumCustomErrorType.Construction,
            message: EnumLocalizationKeys.CycleDependencyError,
            translateArgs: parent ? [key, parent] : [key],
            translate: true,
        });
    }
}
