import { beforeEach, describe, expect, it, vi } from "vitest";
import { mockPerformanceUtil } from "../../global-module/__mocks__/global.module.mock";
import { measurePerformance } from "../performance.decorator";
import { globalModule } from "../../global-module";

describe("Performance", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should log to class and name of function", () => {
        vi.spyOn(console, "log").mockImplementation(() => {});
        globalModule.setPerformanceUtil(mockPerformanceUtil);

        class Test {
            @measurePerformance
            test() {
                return 1 + 1;
            }
        }

        const test = new Test();
        test.test();

        // eslint-disable-next-line no-console
        expect(console.log).toHaveBeenCalledWith("Test:test");
    });
});
