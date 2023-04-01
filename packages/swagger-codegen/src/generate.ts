import { generateApi } from "swagger-typescript-api";
import path from "path";
import { fileURLToPath } from "url";
import {
    deleteHttpClient,
    generateIndex,
    generateModuleForMultiple,
    generateModuleIfNotExists,
    generateMultipleIndex,
    generateUtilsForMultiple,
    useNameModifiers
} from "./utils";
import { GenerateApiOptions, GenerateMultipleApiOptions } from "./types";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


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
        process.exit(1)
    }
};


export const generateMultiple = async (options: GenerateMultipleApiOptions) => {
    const { endpoints, hooks = {}, ...restOptions } = options;
    const output = path.resolve(process.cwd(), `./src/__generated__`);

    const { formatTypeName, formatRouteData } = useNameModifiers();

    for (let i = 0; i < endpoints.length; i++) {
        const endpoint = endpoints[i];

        const options: GenerateApiOptions = {
            ...restOptions,
            url: endpoint.url,
            deleteHttpClient: !!i,
            output: path.join(output, endpoint.name),
            hooks: {
                onFormatTypeName: (typeName) => formatTypeName(typeName),
                onCreateRoute: (routeData) => formatRouteData(endpoint, routeData),
                ...hooks
            }
        }

        if (endpoint.typePrefix)
            options.typePrefix = endpoint.typePrefix

        if (endpoint.typeSuffix)
            options.typeSuffix = endpoint.typeSuffix

        await generate(options)
    }

    generateMultipleIndex(endpoints, output);
    generateModuleForMultiple(output);
    generateUtilsForMultiple(output);
}