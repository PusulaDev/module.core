import type { IHTTPClientOptions } from "../http-client/types/http-client-options.interface";
import type { IHTTPClient, IHTTPClientConstuctor } from "../http-client/types/http-client.interface";
import type { IController, IControllerConstructor } from "../controller/controller.interface";
import type { IProvider, IProviderConstructor } from "../provider/types/provider.interface";
import type {
    AppLayerUnionType,
    ICoreModule,
    KeyUnionType,
    ModuleBootstrapOptions,
    ModuleConstructorOptions,
    RegisterClassOptions,
    RegisterControllerOptions,
    RegisterProviderOptions,
    ResolveType,
} from "./core-module.interface";
import type { IDecorator } from "../decorators/types/decorator.interface";
import { coreLogger } from "../logger/core.logger";
import { globalModule } from "../global-module/global-module";
import { EnumCustomErrorType, CustomModuleError } from "../custom-errors";
import type { IClassConstructor } from "../shared";
import { EnumLocalizationKeys } from "../localization/statics/localization-keys.enum";
import type { LocalizationTranslations } from "../localization";

type OtherConstructorOptions = {
    constructor: new (...args: any[]) => any;
    dependencies?: any[];
};

type HttpClientConstructorOptions = {
    constructor: IHTTPClientConstuctor;
    options: IHTTPClientOptions;
};

type ProviderConstructorOptions = {
    constructor: IProviderConstructor;
    client?: string;
} & OtherConstructorOptions;

type ControllerConstructorOptions = {
    constructor: IControllerConstructor<any>;
} & OtherConstructorOptions;

export class CoreModule implements ICoreModule {
    private readonly providerSuffix = "Provider";
    private readonly controllerSuffix = "Controller";
    private readonly clientSuffix = "HttpClient";

    private clientConstructors = new Map<string, HttpClientConstructorOptions>();
    private providerConstructors = new Map<string, ProviderConstructorOptions>();
    private controllerConstructors = new Map<string, ControllerConstructorOptions>();
    private othersConstructors = new Map<string, OtherConstructorOptions>();

    private clients = new Map<string, IHTTPClient>();
    private providers = new Map<string, IProvider>();
    private controllers = new Map<string, IController>();
    private others = new Map<string, any>();

    private linkedModule = true;

    constructor(options: ModuleConstructorOptions = {}) {
        const { decorators, key, linkedModule, register } = options;

        const registeredModule = globalModule.getModule(key ?? this.constructor as new () => CoreModule);
        if (registeredModule) return registeredModule as CoreModule;

        globalModule.registerModule(this, key);

        if (decorators?.length) this.useDecorators(...decorators);
        if (register?.length)
            register.forEach((r) => this.register(r.constructor, r.options));

        if (linkedModule !== undefined) this.linkedModule = linkedModule
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
        this.othersConstructors.set(name, {
            constructor,
            dependencies: options?.dependencies,
        });

        return this;
    }

    registerInstance<T extends object>(obj: T, key?: string) {
        const name: string = this.getName(key ?? obj.constructor.name);
        this.others.set(name, obj);
        return this;
    }

    /**
     * Checks 'Provider' | 'Controller' | 'HttpClient' suffix for key or name of class.
     * @param key
     */
    resolve<T extends AppLayerUnionType>(key: KeyUnionType<T>, locale: ResolveType = 'global'): T {
        let name = this.getName(key);

        if (this.isClient(name)) return this.resolveHttpClient(key as IHTTPClientConstuctor, locale) as T;

        if (this.isProvider(name)) return this.resolveProvider(key as IProviderConstructor, locale) as T;

        if (this.isController(name)) return this.resolveController(key as IControllerConstructor<any>, locale) as T;

        return this.resolveOther<T>(key, locale);

    }

    resolveFromGlobal<T extends AppLayerUnionType>(key: KeyUnionType<T>): T | undefined {
        if (this.linkedModule)
            return globalModule.resolveDependency(key, this)
    }

    registerHttpClientInstance(client: IHTTPClient, key?: string) {
        const name: string = this.getName(key ?? client.constructor.name);
        this.clients.set(name, client);

        return this;
    }

    registerHttpClient(client: IHTTPClientConstuctor, options: IHTTPClientOptions) {
        coreLogger.log("registerHttpClient", client, options);

        this.clientConstructors.set(client.name, { constructor: client, options });
        return this;
    }

    resolveHttpClient<T extends IHTTPClient>(client?: IHTTPClientConstuctor | string, locale: ResolveType = 'global'): T {
        let instance = this.resolveHttpClientInstance(client);
        if (instance) return instance;

        return this.createHttpClientInstance(client, locale) as T;
    }


    private resolveHttpClientInstance<T extends IHTTPClient>(client?: IHTTPClientConstuctor | string) {
        if (client) {
            const name = this.getName(client);
            return this.clients.get(name) as T;
        } else return this.clients.values().next().value;
    }

    private createHttpClientInstance(client?: IHTTPClientConstuctor | string, locale: ResolveType = 'global') {
        const name = client ? this.getName(client) : "HttpClient";

        const constructorObj = client
            ? this.clientConstructors.get(name)
            : this.clientConstructors.values().next().value;

        if (!constructorObj) {
            if (!locale) {
                const instanceFromGlobal = this.resolveFromGlobal(name);
                if (instanceFromGlobal) return instanceFromGlobal;
            }

            this.throwNotRegisteredError(name);
        }

        const instance = new constructorObj.constructor(constructorObj.options);
        this.registerHttpClientInstance(instance);

        return instance;
    }

    registerProvider(provider: IProviderConstructor, options?: RegisterProviderOptions) {
        const name = options?.key ?? provider.name;

        const clientName = options?.client ? this.getName(options.client) : undefined;

        this.providerConstructors.set(name, {
            client: clientName,
            constructor: provider,
            dependencies: options?.dependencies,
        });

        return this;
    }

    resolveProvider<T extends IProvider>(key: string | IProviderConstructor, locale: ResolveType = 'global'): T {
        const instance = this.resolveProviderInstance<T>(key);
        if (instance) return instance;

        return this.createProviderInstance(key, locale) as T;
    }

    private resolveProviderInstance<T extends IProvider>(key: string | IProviderConstructor): T | undefined {
        if (typeof key === "string") return this.providers.get(key) as T;
        else return this.resolveByConstructor<T>(this.providers, key);
    }

    private createProviderInstance(key: string | IProviderConstructor, locale: ResolveType = 'global') {
        return this.createInstance({
            constructorMap: this.providerConstructors,
            instanceMap: this.providers,
            key,
            locale,
            dependenciesMapFn: (dependencies: any[], constructorObj: ProviderConstructorOptions) => {
                const client = this.resolveHttpClient(constructorObj.client);
                return [client, ...dependencies];
            }
        })
    }

    registerController<TController extends IController>(
        controller: IControllerConstructor<TController>,
        options?: RegisterControllerOptions
    ) {
        const name = options?.key ?? controller.name;

        let dependencies = options?.dependencies;

        this.controllerConstructors.set(name, {
            constructor: controller,
            dependencies: dependencies,
        });

        return this;
    }

    resolveController<T extends IController>(key: string | IControllerConstructor<T>, locale: ResolveType = 'global'): T {
        const instance = this.resolveControllerInstance(key);
        if (instance) return instance;

        return this.createControllerInstance(key, locale) as T;
    }

    private resolveControllerInstance<T extends IController>(key: string | IControllerConstructor<T>) {
        if (typeof key === "string") return this.controllers.get(key) as T;
        return this.resolveByConstructor<T>(this.controllers, key);
    }

    private createControllerInstance(key: string | IControllerConstructor<any>, locale: ResolveType = 'global') {
        return this.createInstance({
            constructorMap: this.controllerConstructors, instanceMap: this.controllers, key, locale
        });
    }

    @coreLogger.logMethod()
    clear() {
        this.clearConstructors();
        this.clearInstances();
    }

    @coreLogger.logMethod()
    clearConstructors() {
        this.clientConstructors.clear();
        this.providerConstructors.clear();
        this.controllerConstructors.clear();
        this.othersConstructors.clear();
    }

    @coreLogger.logMethod()
    clearInstances() {
        this.clients.clear();
        this.providers.clear();
        this.controllers.clear();
        this.others.clear();
    }

    private resolveOther<T>(key: KeyUnionType, locale?: ResolveType): T {
        const instance = this.resolveOtherInstance<T>(key);
        if (instance) return instance;

        return this.createOtherInstance(key, locale);
    }

    private resolveOtherInstance<T>(key: KeyUnionType): T | undefined {
        const name = this.getName(key);
        return this.others.get(name) as T | undefined;
    }

    private createOtherInstance(key: KeyUnionType, locale?: ResolveType) {
        return this.createInstance({
            constructorMap: this.othersConstructors, instanceMap: this.others, key, locale
        });
    }

    private createInstance(
        options: {
            constructorMap: Map<string, OtherConstructorOptions>,
            instanceMap: Map<string, any>,
            key: string | IClassConstructor,
            dependenciesMapFn?: (dependencies: any[], constructorObj: any) => any[],
            locale?: ResolveType
        }
    ) {
        const { constructorMap, instanceMap, key, dependenciesMapFn, locale } = options;

        const name = this.getName(key);
        const constructorObj = constructorMap.get(name);

        if (!constructorObj) {
            if (locale === 'global') {
                const instanceFromGlobal = this.resolveFromGlobal(name);
                if (instanceFromGlobal) return instanceFromGlobal;
            }

            this.throwNotRegisteredError(name);
        }

        let dependencies = this.resolveDependencies(constructorObj.dependencies ?? []);

        if (dependenciesMapFn) dependencies = dependenciesMapFn(dependencies, constructorObj);

        const instance = new constructorObj.constructor(...dependencies);
        instanceMap.set(name, instance);
        return instance;
    }

    private resolveDependencies(dependencies: any[]): any[] {
        return dependencies.map((e) => {
            if (typeof e === "function" || typeof e === "string") return this.resolve(e);
            else e;
        });
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

    private isController(key: string | IControllerConstructor<any>) {
        return this.getName(key).includes(this.controllerSuffix);
    }

    private isClient(key: string | IHTTPClientConstuctor) {
        return this.getName(key).includes(this.clientSuffix);
    }

    private throwNotRegisteredError(key: string): never {
        throw new CustomModuleError({
            type: EnumCustomErrorType.Construction,
            message: EnumLocalizationKeys.NotRegisteredError,
            translateArgs: [key],
            translate: true,
        });
    }
}
