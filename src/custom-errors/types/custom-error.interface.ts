import type { EnumAppLayer } from "../../shared";
import type { EnumCustomErrorType } from "../statics/custom-error-type.enum";

export interface ICustomError extends Error {
    type: EnumCustomErrorType;
    layer: EnumAppLayer;
}
