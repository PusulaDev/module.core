import { EnumAppLayer } from "../shared";
import { CustomError } from "./custom-error";
import type { CustomErrorConstructorOptions } from "./types";

export class CustomControllerError extends CustomError {
    constructor(options: Omit<CustomErrorConstructorOptions, "layer">) {
        super({ layer: EnumAppLayer.Controller, ...options });
    }
}
