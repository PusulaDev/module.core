import type { EnumResponseFormat, IAbortController } from "../../http-client";

export type ProviderRequestOptions = {
    raceId?: string;
    headers?: Record<string, string>;
    responseFormat?: EnumResponseFormat;
    abortController?: IAbortController;
    invalidateCache?: boolean;
};
