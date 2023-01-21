export interface ApiGenerateOptions {
    url: string;
    output?: string;
    templates?: string;
    /**
     * default: api.ts
     */
    name?: string;
}
export declare const generate: (options: ApiGenerateOptions) => Promise<void>;
