import { globalModule } from "src/global-module";
import { EnumValidationResultType, type ValidationResult, type ValidationProperty } from "./types";
import { ensureObject } from "../utils";

export const validate = <T>({ value, properties }: { value?: T; properties: ValidationProperty<T>[] }) => {
    const validationResults: ValidationResult[] = [];

    properties.forEach((property) => {
        const propValue = value?.[property.name as keyof T];

        const res = validateProp(property, propValue);
        if (res.length)
            validationResults.push({
                name: property.name.toString(),
                results: res,
            });

        if (!property.children?.length) return;

        if (ensureObject(propValue)) {
            const childValidationResults = validate({ value: propValue, properties: property.children });
            childValidationResults.forEach((childRes) => {
                childRes.name = `${String(property.name)}.${childRes.name}`;
                validationResults.push(childRes);
            });
        } else if (propValue instanceof Array) {
            propValue.forEach((propItem, i) => {
                const childValidationResults = validate({
                    value: propItem,
                    properties: property.children,
                });
                childValidationResults.forEach((childRes) => {
                    childRes.name = `${String(property.name)}[${i}].${childRes.name}`;
                    validationResults.push(childRes);
                });
            });
        }
    });

    return validationResults;
};

const createErrorMessage = (result: ValidationResult) => {
    const localization = globalModule.ensureGetLocalization();
    const validations = result.results.map((e) => localization.translate(e.type, [e.value])).join(", ");
    return `${result.name}: ${validations}`;
};

export const validateAndThrow = <T>(options: { value?: T; properties: ValidationProperty<T>[] }) => {
    const res = validate(options);

    if (!res.length) return;

    const message = res.map((e) => createErrorMessage(e)).join("\r\n");

    throw message;
};

const validateProp = <T>(prop: ValidationProperty<T>, value: unknown) => {
    const validationResults: ValidationResult["results"] = [];

    const valueExists = value !== undefined && value !== null && value !== "";
    const valueNotExists = !valueExists;

    if (prop.rules.isRequired) {
        if (valueNotExists) validationResults.push({ type: EnumValidationResultType.required });
    }

    if (!valueExists) return validationResults;

    if (prop.rules.pattern) {
        const pattern = new RegExp(prop.rules.pattern);
        if (typeof value !== "string" || !pattern.test(value))
            validationResults.push({ type: EnumValidationResultType.pattern, value: prop.rules.pattern });
    }

    if (prop.rules.uniqueItems) {
        if (!(value instanceof Array) || value.some((e) => value.filter((d) => d === e).length > 1))
            validationResults.push({ type: EnumValidationResultType.uniqueItems });
    }

    if (prop.rules.minLength) {
        if (typeof value !== "string" || value.length < prop.rules.minLength)
            validationResults.push({ type: EnumValidationResultType.minLength, value: prop.rules.minLength });
    }

    if (prop.rules.maxLength) {
        if (typeof value !== "string" || value.length > prop.rules.maxLength)
            validationResults.push({ type: EnumValidationResultType.maxLength, value: prop.rules.maxLength });
    }

    if (prop.rules.minimum) {
        const minValue = prop.rules.exclusiveMinimum ? prop.rules.minimum + 1 : prop.rules.minimum;

        if (typeof value !== "number" || minValue > value)
            validationResults.push({ type: EnumValidationResultType.minimum, value: minValue });
    }

    if (prop.rules.maximum) {
        const maxValue = prop.rules.exclusiveMaximum ? prop.rules.maximum - 1 : prop.rules.maximum;

        if (typeof value !== "number" || maxValue < value)
            validationResults.push({ type: EnumValidationResultType.maximum, value: maxValue });
    }

    return validationResults;
};
