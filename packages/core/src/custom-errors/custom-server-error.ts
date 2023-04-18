import { CustomError } from "./custom-error";
import { EnumAppLayer } from "../shared";
import { EnumCustomErrorType } from "./statics/custom-error-type.enum";
import type { CustomErrorConstructorOptions } from "./types";

export class CustomServerError extends CustomError {
    constructor(options: Omit<CustomErrorConstructorOptions, "layer" | "type">) {
        super({
            layer: EnumAppLayer.Server,
            type: EnumCustomErrorType.Server,
            ...options,
        });
    }
}
