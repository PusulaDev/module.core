import type { ResolveType } from "./resolve-type";

export interface DependencyResolveOptions {
    type?: ResolveType;
    dontThrowIfNotFound?: boolean;
    path?: string[];
    parentName?: string;
    dependencies?: Record<string, unknown> | unknown[];
}
