import { describe, expect, it } from "vitest";
import { CustomError, EnumCustomErrorType } from "../../custom-errors";
import { EnumAppLayer, ActionGuardValidationResult } from "../../shared";
import { createActionGuard, ValidatorFunc } from "../action-guard";

describe("Action Guard", () => {
    const cases: [ValidatorFunc<any>, any, ActionGuardValidationResult][] = [
        [
            (options: string) => options === "ali",
            "test",
            {
                valid: false,
            },
        ],
        [
            (options: string) => options === "ali",
            "ali",
            {
                valid: true,
            },
        ],
    ];

    it.each(cases)(
        "use validator %j, options %j, expect = %j",
        async (validator: ValidatorFunc<any>, options: any, expected: ActionGuardValidationResult) => {
            const actionGuard = createActionGuard(validator);

            const res = await actionGuard.validate(options);

            expect(res).toEqual(expected);
        }
    );

    it("should return throw error", async () => {
        const error = new CustomError({
            message: "Error",
            type: EnumCustomErrorType.Permission,
            layer: EnumAppLayer.Logic,
        });
        const actionGuard = createActionGuard((options: number) => {
            if (options < 10) throw error;

            return true;
        });

        const res = await actionGuard.validate(8);
        const expected: ActionGuardValidationResult = {
            valid: false,
            error: new CustomError({
                message: "Error",
                type: EnumCustomErrorType.Permission,
                layer: EnumAppLayer.Logic,
            }),
        };
        expect(res).toEqual(expected);
    });

    it("should wait for promise", async () => {
        const actionGuard = createActionGuard((options: boolean) => {
            return new Promise((resolve) => {
                setTimeout(() => resolve(options), 100);
            });
        });

        const res = await actionGuard.validate(true);
        const expected: ActionGuardValidationResult = {
            valid: true,
        };
        expect(res).toEqual(expected);
    });
});
