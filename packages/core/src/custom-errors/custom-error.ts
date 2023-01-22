import { globalModule } from "../global-module";
import type { EnumAppLayer } from "../shared";
import type { EnumCustomErrorType } from "./statics/custom-error-type.enum";
import type { CustomErrorConstructorOptions, ICustomError } from "./types";

export class CustomError extends Error implements ICustomError {
    layer: EnumAppLayer;
    type: EnumCustomErrorType;
    children?: Error[];

    constructor(options: CustomErrorConstructorOptions) {
        let message = options.message;

        if (options.translate)
            message =
                globalModule.getLocalization()?.translate(options.message ?? "", options.translateArgs) ?? "";

        super(message);
        this.layer = options.layer;
        this.type = options.type;
        this.children = options.children;
    }
}
