export type IPerformanceUtil = {
    measureFunc: (body: () => void, name: string) => void;
};
