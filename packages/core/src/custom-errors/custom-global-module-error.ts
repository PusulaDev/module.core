import type { CustomErrorConstructorOptions, ICustomError } from "./types";
import { EnumAppLayer } from "../shared";
import type { EnumCustomErrorType } from "./statics/custom-error-type.enum";

export class CustomGlobalModuleError extends Error implements ICustomError {
    layer: EnumAppLayer = EnumAppLayer.GlobalModule;
    type: EnumCustomErrorType;
    children?: Error[];

    constructor(options: Omit<CustomErrorConstructorOptions, "layer">) {
        super(options.message);
        this.type = options.type;
        this.children = options.children;
    }
}
