import type { IHTTPClientConstuctor, IHTTPClientOptions } from "../http-client";
import type { IProviderConstructor } from "../provider";
import type { ICoreModule, RegisterProviderOptions } from "../module";
import type { IInjectableDecorators } from "./types/injectable-decorators.interface";
import type { IClassConstructor } from "../shared";
import { getConstructorArgNames, getConstructorArgNamesAfterFirst } from "./reflection.helper";

export class InjectableDecorators implements IInjectableDecorators {
    private module: ICoreModule | null = null;

    setModule(module: ICoreModule) {
        this.module = module;
    }

    client(options: IHTTPClientOptions) {
        return (clientConstructor: IHTTPClientConstuctor) => {
            this.module?.registerHttpClient(clientConstructor, options);
        };
    }

    provider(options?: Omit<RegisterProviderOptions, "dependencies">) {
        return (target: IProviderConstructor) => {
            const dependencies = getConstructorArgNamesAfterFirst(target);
            this.module?.registerProvider(target, { ...options, dependencies });
        };
    }

    other(key?: string) {
        return (target: IClassConstructor) => {
            const dependencies = getConstructorArgNames(target);
            this.module?.register(target, {
                key,
                dependencies,
            });
        };
    }
}
