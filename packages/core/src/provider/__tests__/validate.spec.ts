import { describe, expect, test } from "vitest";
import { EnumValidationResultType, type ValidationProperty, type ValidationResult } from "../types";
import { validate } from "../validator";

describe("validate", () => {
    const cases: [{ value?: any; properties: ValidationProperty<any>[] }, ValidationResult[]][] = [
        [
            {
                value: {},
                properties: [],
            },
            [],
        ],
        [
            {
                value: {
                    name: "name",
                    code: "codecodecodecodecodecodecode",
                },
                properties: [
                    {
                        name: "name",
                        type: "string",
                        rules: {
                            isRequired: true,
                            maxLength: 128,
                        },
                    },
                    {
                        name: "code",
                        type: "string",
                        rules: {
                            isRequired: true,
                            minimum: 0,
                            maxLength: 16,
                        },
                    },
                ],
            },
            [{ name: "code", results: [{ type: EnumValidationResultType.maxLength, value: 16 }] }],
        ],
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
            [{ name: "id", results: [{ type: EnumValidationResultType.required }] }],
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
            [{ name: "name", results: [{ type: EnumValidationResultType.minLength, value: 10 }] }],
        ],
        [
            {
                value: { name: "" },
                properties: [
                    {
                        name: "name",
                        type: "string",
                        rules: { minLength: 10 },
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
            [{ name: "age", results: [{ type: EnumValidationResultType.minimum, value: 11 }] }],
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
            [{ name: "age", results: [{ type: EnumValidationResultType.maximum, value: 9 }] }],
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
            [
                {
                    name: "identity",
                    results: [
                        { type: EnumValidationResultType.pattern, value: "^[1-9]{1}[0-9]{9}[02468]{1}$" },
                    ],
                },
            ],
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
        [
            {
                value: { patient: { name: "salih" } },
                properties: [
                    {
                        name: "patient",
                        type: "object",
                        rules: { isRequired: true },
                        children: [
                            {
                                name: "id",
                                type: "string",
                                rules: { isRequired: true },
                            },
                        ],
                    },
                ],
            },
            [
                {
                    name: "patient.id",
                    results: [
                        {
                            type: EnumValidationResultType.required,
                        },
                    ],
                },
            ],
        ],
        [
            {
                value: { patient: { name: { localized: "" } } },
                properties: [
                    {
                        name: "patient",
                        type: "object",
                        rules: { isRequired: true },
                        children: [
                            {
                                name: "name",
                                type: "string",
                                rules: { isRequired: true },
                                children: [
                                    {
                                        name: "localized",
                                        type: "string",
                                        rules: { isRequired: true },
                                    },
                                ],
                            },
                            {
                                name: "id",
                                type: "string",
                                rules: { isRequired: true },
                            },
                        ],
                    },
                ],
            },
            [
                {
                    name: "patient.name.localized",
                    results: [
                        {
                            type: EnumValidationResultType.required,
                        },
                    ],
                },
                {
                    name: "patient.id",
                    results: [
                        {
                            type: EnumValidationResultType.required,
                        },
                    ],
                },
            ],
        ],
        [
            {
                value: { users: [{ name: "salih" }, {}] },
                properties: [
                    {
                        name: "users",
                        type: "array",
                        rules: {},
                        children: [
                            {
                                name: "name",
                                type: "string",
                                rules: { isRequired: true },
                            },
                        ],
                    },
                ],
            },
            [
                {
                    name: "users[1].name",
                    results: [
                        {
                            type: EnumValidationResultType.required,
                        },
                    ],
                },
            ],
        ],
        [
            { value: [{ id: "1" }, {}], properties: [{ name: "id", rules: { isRequired: true } }] },
            [
                {
                    name: "[1].id",
                    results: [
                        {
                            type: EnumValidationResultType.required,
                        },
                    ],
                },
            ],
        ],
    ];

    test.each(cases)(`validate options: %o, expected : %o`, (options, expected) => {
        const res = validate(options);
        expect(res).toEqual(expected);
    });
});
