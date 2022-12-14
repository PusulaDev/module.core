import { globalModule } from "../global-module";

const cloneDecorator = (
    deep: boolean,
    _: any,
    __: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor => {
    const originalMethod = descriptor.value as (...args: unknown[]) => unknown;

    descriptor.value = function (...args: any[]) {
        const cloneUtil = globalModule.getCloneUtil();

        const newArgs = cloneUtil
            ? args.map((arg) => (deep ? cloneUtil.cloneDeep<unknown>(arg) : cloneUtil.clone<unknown>(arg)))
            : args;

        return originalMethod.apply(this, newArgs);
    };

    return descriptor;
};

export const cloneArgs = (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor => {
    return cloneDecorator(false, target, propertyKey, descriptor);
};

export const cloneDeepArgs = (
    target: any,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor => {
    return cloneDecorator(true, target, propertyKey, descriptor);
};
