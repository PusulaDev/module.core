import type { IClassConstructor } from "src/shared";
import type { AppLayerUnionType, KeyUnionType } from "./core-module.interface";
import type { ConstructorOptions } from "./dependency-maps";
import type { DependencyResolveOptions } from "./resolve-options";

export type CreateInstanceOptions<TConstructor extends IClassConstructor> = {
    constructorMap: Map<string, ConstructorOptions<TConstructor>>;
    instanceMap: Map<string, any>;
    key: KeyUnionType;
    dependenciesMapFn?: (
        dependencies: AppLayerUnionType[],
        constructorObj: ConstructorOptions<TConstructor>
    ) => AppLayerUnionType[];
} & DependencyResolveOptions;
