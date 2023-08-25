import { globalModule } from "src/global-module";
import { EnumValidationResultType, type ValidationResult, type ValidationProperty } from "./types";

export const validate = <T>({ value, properties }: { value?: T; properties: ValidationProperty<T>[] }) => {
    const validationResults: ValidationResult[] = [];

    properties.forEach((property) => {
        const propValue = value?.[property.name];

        const res = validateProp(property, propValue);
        if (res.length)
            validationResults.push({
                name: property.name.toString(),
                validationResults: res,
            });
    });

    return validationResults;
};

const createErrorMessage = (result: ValidationResult) => {
    const localization = globalModule.ensureGetLocalization();
    const validations = result.validationResults.map((e) => localization.translate(e)).join(", ");
    return `${result.name}: ${validations}`;
};

export const validateAndThrow = <T>(options: { value?: T; properties: ValidationProperty<T>[] }) => {
    const res = validate(options);

    if (!res.length) return;

    const message = res.map((e) => createErrorMessage(e)).join("\r\n");

    throw message;
};

const validateProp = <T>(prop: ValidationProperty<T>, value: unknown) => {
    const validationResults: EnumValidationResultType[] = [];

    if (prop.rules.isRequired) {
        if (value === undefined || value === null || value === "")
            validationResults.push(EnumValidationResultType.required);
    }

    if (prop.rules.pattern) {
        const pattern = new RegExp(prop.rules.pattern);
        if (typeof value !== "string" || !pattern.test(value))
            validationResults.push(EnumValidationResultType.pattern);
    }

    if (prop.rules.uniqueItems) {
        if (!(value instanceof Array) || value.some((e) => value.filter((d) => d === e).length > 1))
            validationResults.push(EnumValidationResultType.uniqueItems);
    }

    if (prop.rules.minLength) {
        if (typeof value !== "string" || value.length < prop.rules.minLength)
            validationResults.push(EnumValidationResultType.minLength);
    }

    if (prop.rules.maxLength) {
        if (typeof value !== "string" || value.length < prop.rules.maxLength)
            validationResults.push(EnumValidationResultType.maxLength);
    }

    if (prop.rules.minimum) {
        if (
            typeof value !== "number" ||
            (prop.rules.exclusiveMinimum ? prop.rules.minimum <= value : prop.rules.minimum < value)
        )
            validationResults.push(EnumValidationResultType.minimum);
    }

    if (prop.rules.maximum) {
        if (
            typeof value !== "number" ||
            (prop.rules.exclusiveMaximum ? prop.rules.maximum >= value : prop.rules.maximum > value)
        )
            validationResults.push(EnumValidationResultType.maximum);
    }

    return validationResults;
};
