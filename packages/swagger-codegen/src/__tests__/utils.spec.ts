import { ParsedRoute } from "swagger-typescript-api";
import { describe, expect, it } from "vitest";
import { useNameModifiers } from "../utils";

describe("Utils", () => {
    it("should use wordMap option and replace the names", () => {
        const { formatTypeName } = useNameModifiers();
        const type = 'TestTypeName';
        const expected = 'ChangedTypeName';

        const res = formatTypeName(type, { 'Test': 'Changed' });

        expect(res).toBe(expected)
    })

    it("should add 1 to second same typename", () => {
        const { formatTypeName } = useNameModifiers();
        const type = 'TestTypeName';
        const expected = 'TestTypeName2';

        formatTypeName(type);
        const res = formatTypeName(type);

        expect(res).toBe(expected)
    })

    it("should add 1 to second group provider name", () => {
        const { formatRouteData } = useNameModifiers();
        const routedata: ParsedRoute = { id: '1', namespace: 'test', jsDocLines: '' } as ParsedRoute;
        const routedata2: ParsedRoute = { id: '2', namespace: 'test', jsDocLines: '' } as ParsedRoute;

        formatRouteData({ name: 'test', url: 'test' }, routedata)
        const res = formatRouteData({ name: 'test2', url: 'test' }, routedata2);
        const expected = 'test2';

        expect(res.namespace).toBe(expected)
    })
})