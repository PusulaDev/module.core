import type { ICloneUtil, IDateUtil, IEncyrptionUtil, IObserver, IPerformanceUtil } from "../utils";
import type { ILocalization } from "../localization";
import type { DependencyResolveOptions, ICoreModule } from "../module";
import type { IClassConstructor } from "../index";
import { CustomGlobalModuleError, EnumCustomErrorType } from "../index";

declare global {
    interface Window {
        $globalModule?: GlobalModule;
    }
}

class GlobalModule {
    private modules = new Map<string, ICoreModule>();
    private localization: ILocalization | null = null;
    private cloneUtil: ICloneUtil | null = null;
    private encyrpctionUtil: IEncyrptionUtil | null = null;
    private performanceUtil: IPerformanceUtil | null = null;
    private dateUtil: IDateUtil | null = null;
    private observer: (new () => IObserver<any>) | null = null;
    private sharedHeaders: Record<string, string> = {};

    private createNotRegisteredErrorMessage(type: string) {
        const message = `${type} is not registered`;
        return new CustomGlobalModuleError({
            type: EnumCustomErrorType.Construction,
            message,
        });
    }

    setLocalization(localization: ILocalization) {
        this.localization = localization;
        return this;
    }

    getLocalization() {
        return this.localization;
    }

    ensureGetLocalization(): ILocalization {
        if (!this.localization) throw this.createNotRegisteredErrorMessage("Localization");

        return this.localization;
    }

    registerModule(module: ICoreModule, key: string) {
        this.modules.set(key, module);
        return this;
    }

    getModule<T extends ICoreModule>(name: string): T {
        return this.modules.get(name) as T;
    }

    setCloneUtil(util: ICloneUtil) {
        this.cloneUtil = util;
        return this;
    }

    ensureGetCloneUtil(): ICloneUtil {
        if (!this.cloneUtil) throw this.createNotRegisteredErrorMessage("Clone Util");
        return this.cloneUtil;
    }

    getCloneUtil() {
        return this.cloneUtil;
    }

    setEncryptionUtil(util: IEncyrptionUtil) {
        this.encyrpctionUtil = util;
        return this;
    }

    getEncryptionUtil() {
        return this.encyrpctionUtil;
    }

    ensureGetEncryptionUtil(): IEncyrptionUtil {
        if (!this.encyrpctionUtil) throw this.createNotRegisteredErrorMessage("Encryption Util");
        return this.encyrpctionUtil;
    }

    setPerformanceUtil(util: IPerformanceUtil) {
        this.performanceUtil = util;
        return this;
    }

    getPerformanceUtil() {
        return this.performanceUtil;
    }

    ensureGetPerformanceUtil(): IPerformanceUtil {
        if (!this.performanceUtil) throw this.createNotRegisteredErrorMessage("Performance Util");
        return this.performanceUtil;
    }

    setDateUtil(util: IDateUtil) {
        this.dateUtil = util;
        return this;
    }

    getDateUtil() {
        return this.dateUtil;
    }

    ensureGetDateUtil(): IDateUtil {
        if (!this.dateUtil) throw this.createNotRegisteredErrorMessage("Date Util");

        return this.dateUtil;
    }

    setObserver<T>(observer: new () => IObserver<T>) {
        this.observer = observer;
        return this;
    }

    createObserver<T>() {
        if (!this.observer) return;

        return new this.observer() as IObserver<T>;
    }

    addToSharedHeaders(header: Record<string, string>) {
        this.sharedHeaders = { ...this.sharedHeaders, ...header };
    }

    getSharedHeaders() {
        return this.sharedHeaders;
    }

    removeSharedHeaders(...keys: string[]) {
        keys.forEach((key) => delete this.sharedHeaders[key]);
    }

    resolveDependency<T>(
        key: IClassConstructor<T> | string,
        options?: DependencyResolveOptions & { currentModule?: string }
    ): T | undefined {
        const { currentModule, ...dependencyOptions } = options ?? { type: "locale", path: [] };

        dependencyOptions.type = "locale";
        dependencyOptions.dontThrowIfNotFound = true;

        for (const [name, module] of this.modules) {
            if (!currentModule || name !== currentModule) {
                const resolved = module.resolve<T>(key, dependencyOptions);
                if (resolved) return resolved;
            }
        }
    }

    clear() {
        this.localization = null;
        this.cloneUtil = null;
        this.encyrpctionUtil = null;
        this.performanceUtil = null;
        this.dateUtil = null;
        this.observer = null;
        this.sharedHeaders = {};
        this.modules.clear();
    }
}

const createGlobalModule = (): GlobalModule => {
    let globalModule = window.$globalModule;

    if (!globalModule) globalModule = window.$globalModule = new GlobalModule();

    return globalModule;
};

export const globalModule = createGlobalModule();
