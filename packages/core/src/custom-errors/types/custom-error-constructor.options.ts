import type { TranslateArgs } from "../../localization";
import type { ICustomError } from "../index";

export interface CustomErrorConstructorOptions extends ICustomError {
    message: string;
    translate?: boolean;
    translateArgs?: TranslateArgs;
}
