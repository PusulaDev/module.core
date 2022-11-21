import type { IAbortController } from "./abort-controller.interface";

export type RequestOptions = {
    abortController?: IAbortController;
    headers?: Record<string, string>;
};
