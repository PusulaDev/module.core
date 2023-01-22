import "reflect-metadata";
import type { IClassConstructor } from "../shared";
import type { DependencyType } from "../module";
import { ensureDependenyOptions } from "../utils/ensure-object.util";

export const INJECTION_TOKEN_METADATA_KEY = "injectionTokens";

export const getConstructorArgNames = (target: IClassConstructor): DependencyType[] => {
    const types = (Reflect.getMetadata("design:paramtypes", target) as unknown[]) || [];

    const injectionTokens =
        (Reflect.getOwnMetadata(INJECTION_TOKEN_METADATA_KEY, target) as Record<
            string,
            Partial<DependencyType>
        >) || {};

    for (const key in injectionTokens) {
        const token = injectionTokens[key];

        const definedKey = types[+key];

        if (ensureDependenyOptions(token)) {
            if (!token.key && definedKey) {
                token.key = definedKey as string;
            }
        }

        if (token) types[+key] = token;
    }

    return types as DependencyType[];
};

export const getConstructorArgNamesAfterFirst = (target: IClassConstructor) => {
    const [, ...dependencies] = getConstructorArgNames(target);
    return dependencies;
};

export const defineInjectionTokenMetaData =
    (token: Partial<DependencyType>) =>
    (target: any, _propertyKey: string | symbol, parameterIndex: number) => {
        const descriptors =
            (Reflect.getOwnMetadata(
                INJECTION_TOKEN_METADATA_KEY,
                target as (...args: unknown[]) => unknown
            ) as Partial<DependencyType>[]) || {};

        descriptors[parameterIndex] = token;

        Reflect.defineMetadata(
            INJECTION_TOKEN_METADATA_KEY,
            descriptors,
            target as (...args: unknown[]) => unknown
        );
    };
