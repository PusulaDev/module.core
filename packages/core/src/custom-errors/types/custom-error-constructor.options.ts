import type { TranslateArgs } from "../../localization";
import type { EnumAppLayer } from "../../shared";
import type { EnumCustomErrorType } from "../index";

export type CustomErrorConstructorOptions = {
    layer: EnumAppLayer;
    type: EnumCustomErrorType;
    message?: string;
    details?: string;
    translate?: boolean;
    translateArgs?: TranslateArgs;
    children?: Error[];
};
