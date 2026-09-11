import { ParsedRoute } from "swagger-typescript-api";
import { describe, expect, it } from "vitest";
import { useNameModifiers } from "../utils";

describe("Utils", () => {
    it("should use wordMap option and replace the names", () => {
        const { formatTypeName } = useNameModifiers();
        const type = 'TestTypeName';
        const expected = 'ChangedTypeName';

        const res = formatTypeName({ name: 'Test', url: 'test' }, type, { 'Test': 'Changed' });

        expect(res).toBe(expected)
    })

    it("should add a numeric suffix when the duplicate type already includes the endpoint name", () => {
        const { formatTypeName } = useNameModifiers();
        const endpoint = { name: 'Test', url: 'test' };
        const type = 'TestTypeName';
        const expected = 'TestTypeName2';

        formatTypeName(endpoint, type);
        const res = formatTypeName(endpoint, type);

        expect(res).toBe(expected)
    })

    it("should prefix a duplicate type with the endpoint name", () => {
        const { formatTypeName } = useNameModifiers();

        formatTypeName({ name: 'First', url: 'first' }, 'SharedType');
        const res = formatTypeName({ name: 'Second', url: 'second' }, 'SharedType');

        expect(res).toBe('SecondSharedType');
    })

    it("should prefix a conflicting provider name with the second endpoint name", () => {
        const { formatRouteData } = useNameModifiers();
        const routedata: ParsedRoute = { id: '1', namespace: 'test', jsDocLines: '' } as ParsedRoute;
        const routedata2: ParsedRoute = { id: '2', namespace: 'test', jsDocLines: '' } as ParsedRoute;

        formatRouteData({ name: 'test', url: 'test' }, routedata)
        const res = formatRouteData({ name: 'test2', url: 'test' }, routedata2);
        const expected = 'Test2Test';

        expect(routedata.namespace).toBe('Test');
        expect(res.namespace).toBe(expected)
    })
})
