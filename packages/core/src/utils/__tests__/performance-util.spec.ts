/*eslint-disable*/
import { afterEach, describe, expect, it, vi } from "vitest";
import { PerformanceUtil } from "../performance.util";
import type { IPerformance } from "../types";

describe("Performance", () => {

    afterEach(() => {
        vi.restoreAllMocks()
    })

    class MockPerformance implements IPerformance {
        mark(_: string) {}

        measure(_: string) {}

        clearMarks() {}

        clearMeasures() {}

        getEntriesByName(_: string) {
            return [];
        }
    }

    const performanceUtil = new PerformanceUtil(new MockPerformance());

    it("should log to console performance duration of function", () => {
        const spy = vi.spyOn(console,'log')

        performanceUtil.measureFunc(() => {
            return 2 + 3;
        }, "add");


        expect(spy).toHaveBeenCalledTimes(1);
    });
});
