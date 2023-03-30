import { generateApi, ParsedRoute, type GenerateApiOutput, type GenerateApiParams } from "swagger-typescript-api";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

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
     * Add suffix for same named endpoints with different versions
     */
    providerSuffix?: string;
    typeSuffix?: string;
}

export interface GenerateMultipleApiOptions extends Omit<GenerateApiOptions, 'url'> {
    endpoints: GenerateApiEndpoint[]
}

const generateIndex = (data: GenerateApiOutput, output: string) => {
    const { files } = data;

    const imports = files.map(({ name }) => `export * from "./${name.replace(".ts", "")}";`).join("\n");

    try {
        fs.writeFileSync(path.join(output, "index.ts"), imports + "\n");
        console.log("Codes are generated \n");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
};

const deleteHttpClient = (data: GenerateApiOutput, output: string) => {
    const httpClientFile = data.files.find(e => e.name === 'http-client.ts');

    if (!httpClientFile) return;

    const filePath = path.join(output, httpClientFile.name);

    if (fs.existsSync(filePath)) {
        fs.rmSync(filePath);
    }
}

const generateModuleIfNotExists = () => {

    const moduleDirectory = path.resolve(process.cwd(), "./src/module");
    const filePath = path.join(moduleDirectory, "index.ts");

    if (fs.existsSync(filePath))
        return;


    const moduleContent =
        `import { CoreModule, SessionStorageCache } from "@pusula/module.core";

const coreModule = new CoreModule({ key: "CoreModule" });
coreModule.register(SessionStorageCache, { key: "SessionStorageCache" });
const injectable = coreModule.createInjectable();

export { coreModule, injectable };
`;

    if (!fs.existsSync(moduleDirectory)) {
        fs.mkdirSync(moduleDirectory);
    }

    try {
        fs.writeFileSync(path.join(moduleDirectory, "index.ts"), moduleContent);

        console.log("module generated \n");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }

};

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

    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};

const generateMultipleIndex = (endPointNames: { name: string }[], output: string) => {

    const imports = endPointNames.map(({ name }) => `export * from "./${name}";`).join("\n");

    try {
        fs.writeFileSync(path.join(output, "index.ts"), imports + "\n");
        console.log("Codes are generated \n");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}


export const createOnCreateRouteMethod = (suffix: string) => (routeData: ParsedRoute) => {
    routeData.raw.moduleName += suffix;
    routeData.namespace += suffix;
    return routeData;
}

export const generateMultiple = async (options: GenerateMultipleApiOptions) => {
    const { endpoints, ...restOptions } = options;
    const output = path.resolve(process.cwd(), `./src/__generated__`);

    for (let i = 0; i < endpoints.length; i++) {
        const e = endpoints[i];

        await generate({
            ...restOptions,
            url: e.url,
            deleteHttpClient: !!i,
            output: path.join(output, e.name),
            hooks: e.providerSuffix ? { onCreateRoute: createOnCreateRouteMethod(e.providerSuffix) } : undefined,
            typeSuffix: e.typeSuffix ?? restOptions.typeSuffix
        })
    }

    generateMultipleIndex(endpoints, output);
}