import { EnumAppLayer } from "../shared";
import { CustomError } from "./index";
import type { CustomErrorConstructorOptions } from "./types";

export class CustomCacheError extends CustomError {
    constructor(options: Omit<CustomErrorConstructorOptions, "layer">) {
        super({
            layer: EnumAppLayer.Cache,
            ...options,
        });
    }
}
