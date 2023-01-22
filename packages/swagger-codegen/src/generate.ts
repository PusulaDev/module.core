import { generateApi, type GenerateApiOutput, type GenerateApiParams } from "swagger-typescript-api";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const generateIndex = (data: GenerateApiOutput, output: string) => {
    const { files } = data;

    const imports = files.map(({ name }) => `export * from "./${name.replace(".ts", "")}";`).join("\n");

    fs.writeFile(path.join(output, "index.ts"), imports + "\n", (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("Codes are generated \n");
        }
    });
};

const generateModule = () => {
    const moduleDirectory = path.resolve(process.cwd(), "./src/module");
    const moduleContent =
        `import { CoreModule, SessionStorageCache } from "@pusula/module.core";

const coreModule = new CoreModule({ key: "CoreModule" });
coreModule.register(SessionStorageCache, { key: "SessionStorageCache" });
const injectable = coreModule.createInjectable();

export { coreModule, injectable };`;

    if (!fs.existsSync(moduleDirectory)){
        fs.mkdirSync(moduleDirectory);
    }

    fs.writeFile(path.join(moduleDirectory, "index.ts"), moduleContent, (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("module generated \n");
            process.exit();
        }
    });
};

export const generate = async (options: GenerateApiParams) => {
    const defaultOutput = path.resolve(process.cwd(), "./src/__generated__");
    const defaultTemplates = path.resolve(__dirname, "../src/templates");

    options.output = options.output || defaultOutput;
    options.templates = options.templates || defaultTemplates;
    options.name = options.name || "api.ts";

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
            ...options
        });

        generateIndex(generateResult, options.output);
        generateModule()
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
};
