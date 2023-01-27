import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Logger } from "../logger";

describe("Logger", () => {
    const logStyle = "font-weight:500;border-left:2px solid steelblue; padding-left:3px;";

    beforeEach(() => {
        vi.spyOn(console, "log").mockImplementationOnce(() => {});
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("should console log text", () => {
        const logger = new Logger({
            logStyle,
        });

        logger.log("some logging");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%csome logging", logStyle);
    });

    it("should console log undefined text", () => {
        const logger = new Logger({
            logStyle,
        });

        logger.log("some logging", undefined);

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%csome logging undefined", logStyle);
    });

    it("should console log multiple values", () => {
        const logger = new Logger({
            logStyle,
        });

        logger.log("test", 2, true);

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%ctest 2 true", logStyle);
    });

    it("should console log object types after styled values", () => {
        const logger = new Logger({
            logStyle,
        });

        logger.log([1, 2, 3], "test");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%ctest", logStyle, [1, 2, 3]);
    });

    it("should console log function name ", () => {
        const logger = new Logger({
            logStyle,
        });

        const classFunction = class Test {};

        logger.log(classFunction, "hohoho");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%chohoho", logStyle, classFunction);
    });

    it("should not call console when disabled ", () => {
        const logger = new Logger({
            disabled: true,
        });

        logger.log("asd");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledTimes(0);
    });

    it("should set disabled with disable method ", () => {
        const logger = new Logger();
        logger.disable();

        logger.log("test");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledTimes(0);
    });

    it("should set disabled false with enable method", () => {
        const logger = new Logger();
        logger.disable();

        logger.enable();

        logger.log("test");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%ctest", "");
    });

    it("should log on method call with args", () => {
        const logger = new Logger({
            logStyle,
        });

        class Test {
            @logger.logMethod()
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            get(_: number, __: string) {}
        }

        new Test().get(1, "ali");

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("%cTest => get() 1 ali", logStyle);
    });
});
