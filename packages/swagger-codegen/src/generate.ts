import { generateApi, type GenerateApiOutput } from "swagger-typescript-api";
import path from "path";
import fs from "fs";

export interface ApiGenerateOptions {
    url: string,
    /**
     * default ./src/__generated__
     */
    output?: string
    /**
     * default: templates at the pacakge folder.
     */
    templates?: string
    /**
     * default: api.ts
     */
    name?: string
}

const generateIndex = (data:GenerateApiOutput,output:string) => {
    const { files } = data;

    const imports = files.map(({ name }) => `export * from "./${name.replace(".ts", "")}";`).join("\n");

    fs.writeFile(path.join(output, "index.ts"), imports + "\n", (err) => {
        if (err) {
            console.log(err);
            process.exit(1);
        } else {
            console.log("Codes are generated \n");
            process.exit();
        }
    });
}

export const generate = async (options: ApiGenerateOptions) => {
    const defaultOutput = path.resolve(process.cwd(), "./src/__generated__");
    const defaultTempaltes = path.resolve(__dirname, "./src/templates")
    const { url, output = defaultOutput, templates = defaultTempaltes,name = "api.ts" } = options;

    try {
        const generateResult = await generateApi({
            name,
            output,
            url,
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
            templates
        })

        generateIndex(generateResult,output);
    }catch (e){
        console.error(e);
        process.exit(1);
    }
};
