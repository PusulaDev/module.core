import { globalModule } from "../global-module/global-module";

/**
 * Don't use with async methods
 */
export const measurePerformance = (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown;

    descriptor.value = function (...args: any[]) {
        const performanceUtil = globalModule.getPerformanceUtil();

        let res: unknown;

        const className = (target as (...args: unknown[]) => unknown).constructor.name;
        const name = `${className}:${String(propertyKey)}`;

        performanceUtil?.measureFunc(() => (res = originalMethod.apply(this, args)), name);

        return res;
    };

    return descriptor;
};
