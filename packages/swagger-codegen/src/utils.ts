import path from "path";
import { GenerateApiOutput, ParsedRoute } from "swagger-typescript-api";
import fs from "fs";
import { GenerateApiEndpoint } from "./types";

export const httpClientFileName = "http-client.ts"

function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export const generateIndex = (data: GenerateApiOutput, output: string) => {
    const { files } = data;

    const imports = files.map(({ fileName }) => `export * from "./${fileName.replace(".ts", "")}";`).join("\n");

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
    const httpClientFile = data.files.find(e => e.fileName === httpClientFileName);

    if (!httpClientFile) return;

    const filePath = path.join(output, httpClientFile.fileName);

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

export const useNameModifiers = () => {
    const types = new Set<string>();
    const providers = new Map<string, Set<string>>();

    const checkAndMakeNameUnique = (options: GenerateApiEndpoint, list: Set<string>, name: string) => {
        let newName = name;
        if (list.has(newName)) {
            console.info(`Not unique, finding new for => ${newName} ...`)

            if (!newName.startsWith(options.name)) {
                newName = `${options.name}${capitalizeFirstLetter(newName)}`;
                console.info(`Trying new name  => ${newName} ...`)
                newName = checkAndMakeNameUnique(options, list, newName)
            }
            else {
                const lastChar = name.charAt(name.length - 1);
                const lastCharNumber = Number(lastChar);
                const isNotNan = !Number.isNaN(lastCharNumber);

                if (isNotNan) {
                    newName = newName.replace(lastChar, '');
                }

                const count = isNotNan ? lastCharNumber + 1 : 2;
                newName = `${newName}${count}`;
                newName = checkAndMakeNameUnique(options, list, newName)
            }
            console.info(`Found new name  => ${newName} !`)
        }
        return newName;
    }

    const checkAndAddUniqueName = (options: GenerateApiEndpoint, list: Set<string>, name: string) => {
        const newName = checkAndMakeNameUnique(options, list, name);
        list.add(newName);
        return newName;
    }


    const formatTypeName = (options: GenerateApiEndpoint, typeName: string, replaceWordsMap?: Record<string, string>) => {
        let res = checkAndAddUniqueName(options, types, typeName)

        if (replaceWordsMap)
            Object.entries(replaceWordsMap).forEach(
                ([key, value]) => (res = res.replace(key, value))
            );

        return res;
    }

    const formatRouteData = (options: GenerateApiEndpoint, routeData: ParsedRoute) => {
        const { providerSuffix: suffix, providerPrefix: prefix, name } = options;

        if (suffix) {
            routeData.namespace += suffix;
        }

        if (prefix) {
            routeData.namespace = `${prefix}${routeData.namespace}`
        }

        const otherValues = [...providers].reduce((prev: Set<string>, [key, values]) => {
            if (key !== name)
                return new Set([...prev, ...values])

            return prev;
        }, new Set<string>())


        routeData.namespace = checkAndMakeNameUnique(options, otherValues, routeData.namespace)

        let currentSet = providers.get(name);
        if (!currentSet) {
            currentSet = new Set();
            providers.set(name, currentSet);
        }

        currentSet.add(routeData.namespace)

        return routeData;
    }

    return { formatTypeName, formatRouteData };
}

