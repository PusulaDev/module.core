import { GenerateApiParams } from "swagger-typescript-api";

export type GenerateApiOptions = GenerateApiParams & {
    deleteHttpClient?: boolean;
    createModuleIfNotExists?: boolean
}

export interface GenerateApiEndpoint {
    name: string;
    url: string;
    /**
     * Add suffix or prefix for same named endpoints with different versions
     */
    providerSuffix?: string;
    providerPrefix?: string;
    typeSuffix?: string;
    typePrefix?: string;
}

export interface GenerateMultipleApiOptions extends Omit<GenerateApiOptions, 'url'> {
    endpoints: GenerateApiEndpoint[]
}