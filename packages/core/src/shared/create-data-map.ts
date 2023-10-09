import type { RequestOptions } from "src/http-client";
import type { RequestDataMapValue } from "src/http-client/types/request-options.interface";

const getValueWithDataMap = <TRequest>(data: TRequest, mapper: RequestDataMapValue<TRequest>) => {
    if (typeof mapper === "function") return mapper(data);
    else return data[mapper as keyof TRequest];
};

export const createDataMap = <TRequest>(
    data?: TRequest,
    options?: Pick<RequestOptions<TRequest>, "dataMaps">
) => {
    const dataMap: { query: unknown; body: unknown; path: unknown } = {
        query: data,
        body: data,
        path: data,
    };

    if (data && options?.dataMaps) {
        if (options.dataMaps.body) {
            dataMap.body = getValueWithDataMap(data, options.dataMaps.body);
        }

        if (options.dataMaps.query) {
            dataMap.query = getValueWithDataMap(data, options.dataMaps.query);
        }

        if (options.dataMaps.path) {
            dataMap.path = getValueWithDataMap(data, options.dataMaps.path);
        }
    }
    return dataMap;
};
