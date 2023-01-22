import type { EnumAppLayer } from "../../shared";
import type { EnumCustomErrorType } from "../index";
import type { TranslateArgs } from "packages/core/src/localization";

export type CustomErrorConstructorOptions = {
    layer: EnumAppLayer;
    type: EnumCustomErrorType;
    message?: string;
    translate?: boolean;
    translateArgs?: TranslateArgs;
    children?: Error[];
};
