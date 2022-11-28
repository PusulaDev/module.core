import type { EnumResponseFormat } from "@/http-client";

export type ProviderRequestOptions = {
    raceId?: string;
    headers?: Record<string, string>;
    responseFormat?: EnumResponseFormat;
};
