import type { EnumAppLayer } from "../../shared";
import type { EnumCustomErrorType } from "..";
import type { TranslateArgs } from "src/localization";

export type CustomErrorConstructorOptions = {
    layer: EnumAppLayer;
    type: EnumCustomErrorType;
    message?: string;
    translate?: boolean;
    translateArgs?: TranslateArgs;
    children?: Error[];
};
