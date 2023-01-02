import { defineInjectionTokenMetaData } from "./reflection.helper";
import { EnumDependencyType } from "@/shared";

export const inject = (token: string) => defineInjectionTokenMetaData(token);
export const injectLazy = (token: string) => {
    return defineInjectionTokenMetaData({ key: token, type: EnumDependencyType.Lazy });
};
export const injectStatic = (token?: string) =>
    defineInjectionTokenMetaData({ key: token, type: EnumDependencyType.Static });
