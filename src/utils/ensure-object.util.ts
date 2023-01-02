import type { DependencyOptions } from "@/module/core-module.interface";

export const ensureObject = (data: unknown): data is object =>
    typeof data === "object" && !Array.isArray(data) && !!data;

export const ensureDependenyOptions = (data: unknown): data is DependencyOptions =>
    ensureObject(data) && (data as DependencyOptions)["type"] !== undefined;
