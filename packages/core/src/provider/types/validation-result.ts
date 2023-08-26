import type { EnumValidationResultType } from "./validation-result-type.enum";

export interface ValidationResult {
    name: string;
    results: { type: EnumValidationResultType; value?: unknown }[];
}
