import { generateApi, ParsedRoute, type GenerateApiOutput, type GenerateApiParams } from "swagger-typescript-api";
import path from "path";
import { fileURLToPath } from "url";
import { createOnCreateRouteMethod, deleteHttpClient, generateIndex, generateModuleForMultiple, generateModuleIfNotExists, generateMultipleIndex, generateUtilsForMultiple } from "./utils";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

export const generate = async (options: GenerateApiOptions) => {
    const defaultOutput = path.resolve(process.cwd(), "./src/__generated__");
    const defaultTemplates = path.resolve(__dirname, "../src/templates");

    options.output = options.output || defaultOutput;
    options.templates = options.templates || defaultTemplates;
    options.name = options.name || "api.ts";

    const { createModuleIfNotExists = true } = options;

    try {
        const generateResult = await generateApi({
            httpClientType: "fetch",
            generateClient: true,
            generateResponses: true,
            moduleNameIndex: 1,
            singleHttpClient: true,
            cleanOutput: true,
            sortTypes: true,
            extractEnums: true,
            extractRequestParams: true,
            modular: true,
            moduleNameFirstTag: true,
            hooks: {},
            ...options,
        });

        if (!generateResult) throw new Error('No generate result');

        if (options.deleteHttpClient)
            deleteHttpClient(generateResult, options.output)

        generateIndex(generateResult, options.output);

        if (createModuleIfNotExists)
            generateModuleIfNotExists()

        return generateResult;
    } catch (e) {
        console.error(e);
    }
};


export const generateMultiple = async (options: GenerateMultipleApiOptions) => {
    const { endpoints, hooks, ...restOptions } = options;
    const output = path.resolve(process.cwd(), `./src/__generated__`);

    for (let i = 0; i < endpoints.length; i++) {
        const endpoint = endpoints[i];

        const modifiedHooks: GenerateApiOptions['hooks'] = {
            onCreateRoute: endpoint.providerSuffix ? createOnCreateRouteMethod({ suffix: endpoint.providerSuffix, prefix: endpoint.providerPrefix }) : undefined,
            ...(hooks ?? {})
        }

        const options: GenerateApiOptions = {
            ...restOptions,
            url: endpoint.url,
            deleteHttpClient: !!i,
            output: path.join(output, endpoint.name),
            hooks: modifiedHooks,
        }

        if (endpoint.typePrefix)
            options.typePrefix = endpoint.typePrefix

        if (endpoint.typeSuffix)
            options.typeSuffix = endpoint.typeSuffix

        if (endpoint.providerPrefix || endpoint.providerSuffix)
            options.hooks = {
                onCreateRoute: createOnCreateRouteMethod({ suffix: endpoint.providerSuffix, prefix: endpoint.providerPrefix }),
                ...(hooks ?? {})
            }

        await generate(options)
    }

    generateMultipleIndex(endpoints, output);
    generateModuleForMultiple(output);
    generateUtilsForMultiple(output);
}