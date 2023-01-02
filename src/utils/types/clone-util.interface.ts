export type ICloneUtil = {
    clone: <T = unknown>(item: T) => T;
    cloneDeep: <T = unknown>(item: T) => T;
};
