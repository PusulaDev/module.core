import type { CustomError } from "../../custom-errors";

export type ActionGuardValidationResult = {
    valid: boolean;
    error?: CustomError;
};
