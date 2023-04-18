import type { EnumAppLayer } from "../../shared";
import type { EnumCustomErrorType } from "../statics/custom-error-type.enum";

export interface ICustomError extends Omit<Error, "name"> {
    type: EnumCustomErrorType;
    layer: EnumAppLayer;
    details?: string;
    children?: Error[];
    code?: string;
}
