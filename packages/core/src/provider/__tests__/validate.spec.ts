import { describe, expect, test } from "vitest";
import { EnumValidationResultType, type ValidationProperty, type ValidationResult } from "../types";
import { validate } from "../validator";

describe("validate", () => {
    const cases: [{ value?: any; properties: ValidationProperty<any>[] }, ValidationResult[]][] = [
        [
            {
                value: {},
                properties: [
                    {
                        name: "id",
                        type: "string",
                        rules: { isRequired: true },
                    },
                ],
            },
            [{ name: "id", validationResults: [EnumValidationResultType.required] }],
        ],
        [
            {
                value: { name: "salih" },
                properties: [
                    {
                        name: "name",
                        type: "string",
                        rules: { isRequired: true, minLength: 10 },
                    },
                ],
            },
            [{ name: "name", validationResults: [EnumValidationResultType.minLength] }],
        ],
        [
            {
                value: { name: "salih", age: 10 },
                properties: [
                    {
                        name: "age",
                        type: "number",
                        rules: { isRequired: true, minimum: 10 },
                    },
                ],
            },
            [],
        ],
        [
            {
                value: { name: "salih", age: 10 },
                properties: [
                    {
                        name: "age",
                        type: "number",
                        rules: { isRequired: true, minimum: 10, exclusiveMinimum: true },
                    },
                ],
            },
            [{ name: "age", validationResults: [EnumValidationResultType.minimum] }],
        ],
        [
            {
                value: { name: "salih", age: 10 },
                properties: [
                    {
                        name: "age",
                        type: "number",
                        rules: { isRequired: true, maximum: 10 },
                    },
                ],
            },
            [],
        ],
        [
            {
                value: { name: "salih", age: 10 },
                properties: [
                    {
                        name: "age",
                        type: "number",
                        rules: { isRequired: true, maximum: 10, exclusiveMaximum: true },
                    },
                ],
            },
            [{ name: "age", validationResults: [EnumValidationResultType.maximum] }],
        ],
        [
            {
                value: { identity: "123123" },
                properties: [
                    {
                        name: "identity",
                        type: "string",
                        rules: { isRequired: true, pattern: "^[1-9]{1}[0-9]{9}[02468]{1}$" },
                    },
                ],
            },
            [{ name: "identity", validationResults: [EnumValidationResultType.pattern] }],
        ],
        [
            {
                value: { identity: "12121212122" },
                properties: [
                    {
                        name: "identity",
                        type: "string",
                        rules: { isRequired: true, pattern: "^[1-9]{1}[0-9]{9}[02468]{1}$" },
                    },
                ],
            },
            [],
        ],
    ];

    test.each(cases)(`validate options: %o, expected : %o`, (options, expected) => {
        const res = validate(options);
        expect(res).toEqual(expected);
    });
});
