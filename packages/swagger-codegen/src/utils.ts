import path from "path";
import { GenerateApiOutput, ParsedRoute } from "swagger-typescript-api";
import fs from "fs";

export const httpClientFileName = "http-client.ts"

export const generateIndex = (data: GenerateApiOutput, output: string) => {
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

export const deleteHttpClient = (data: GenerateApiOutput, output: string) => {
    const httpClientFile = data.files.find(e => e.name === httpClientFileName);

    if (!httpClientFile) return;

    const filePath = path.join(output, httpClientFile.name);

    if (fs.existsSync(filePath)) {
        fs.rmSync(filePath);
        const index = data.files.findIndex(e => e === httpClientFile);
        data.files.splice(index, 1);
    }
}

export const generateModuleIfNotExists = () => {

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


export const generateMultipleIndex = (endPointNames: { name: string }[], output: string) => {

    const imports = endPointNames.map(({ name }) => `export * from "./${name}";`).join("\n");

    try {
        fs.writeFileSync(path.join(output, "index.ts"), imports + "\n");
        console.log("Index generated \n");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export const generateModuleForMultiple = (output: string) => {
    const content = 'export * from "../module";\n';

    try {
        fs.writeFileSync(path.join(output, "module.ts"), content);
        console.log("module reexport generated \n");
    }
    catch (e) {
        console.log(e);
        process.exit(1);
    }
}


export const generateUtilsForMultiple = (output: string) => {
    const content = 'export * from "../utils";\n';

    try {
        fs.writeFileSync(path.join(output, "utils.ts"), content);
        console.log("utils reexport generated \n");
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