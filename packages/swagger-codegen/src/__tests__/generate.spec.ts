import { generateApi } from "swagger-typescript-api";
import { afterEach, describe, expect, it, vi } from "vitest";
import { generate, generateMultiple } from "../generate";
import fs from "fs";
import path from "path";
import { GenerateMultipleApiOptions } from "../types";

vi.mock('swagger-typescript-api', () => {
    const generateApi = vi.fn();
    return {
        generateApi
    }
})

vi.mock('fs', () => {
    return {
        default: {
            writeFile: vi.fn(),
            writeFileSync: vi.fn(),
            existsSync: vi.fn(),
            mkdirSync: vi.fn(),
            rmSync: vi.fn()
        }
    };
})

const getDefaultOptions = () => ({
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
    name: "api.ts",
    templates: path.resolve(__dirname, "../../src/templates"),
    output: path.resolve(process.cwd(), "./src/__generated__")
})

describe("Generate", () => {

    afterEach(() => {
        vi.clearAllMocks()
    })

    it("should call generateApi", async () => {
        (generateApi as any).mockResolvedValueOnce({ files: [] });
        await generate({ url: 'test' });

        expect(generateApi).toBeCalledTimes(1);
        expect(generateApi).toHaveBeenCalledWith({
            ...getDefaultOptions(),
            url: 'test',
        })
    })

    it('should call generateApi 3 times for generateMultiple', async () => {
        (generateApi as any).mockResolvedValueOnce({ files: [{ name: 'http-client.ts' }] });
        (generateApi as any).mockResolvedValueOnce({ files: [{ name: 'http-client.ts' }] });
        (generateApi as any).mockResolvedValueOnce({ files: [{ name: 'http-client.ts' }] });
        (generateApi as any).mockResolvedValueOnce({ files: [{ name: 'http-client.ts' }] });

        (fs.existsSync as any).mockResolvedValue(true);
        const options: GenerateMultipleApiOptions = {
            endpoints: [{ name: 'test', url: 'http://test.com' },
            { name: 'test1', url: 'http://test1.com' },
            { name: 'test2', url: 'http://test2.com', typeSuffix: 'V2' },
            { name: 'test3', url: 'http://test3.com', typePrefix: 'Test3_' },
            ]
        }

        await generateMultiple(options);


        expect(generateApi).toHaveBeenCalledTimes(4);
        expect(fs.rmSync).toHaveBeenCalledTimes(3);

        expect(generateApi).toHaveBeenCalledWith(expect.objectContaining({
            ...getDefaultOptions(),
            url: options.endpoints[0].url,
            deleteHttpClient: false,
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[0].name}`),
            hooks: expect.objectContaining({})
        }))

        expect(generateApi).toHaveBeenCalledWith(expect.objectContaining({
            ...getDefaultOptions(),
            url: options.endpoints[1].url,
            deleteHttpClient: true,
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[1].name}`),
            hooks: expect.objectContaining({})
        }))

        expect(generateApi).toHaveBeenCalledWith(expect.objectContaining({
            ...getDefaultOptions(),
            url: options.endpoints[2].url,
            deleteHttpClient: true,
            typeSuffix: 'V2',
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[2].name}`),
            hooks: expect.objectContaining({})
        }))

        expect(generateApi).toHaveBeenCalledWith(expect.objectContaining({
            ...getDefaultOptions(),
            url: options.endpoints[3].url,
            deleteHttpClient: true,
            typePrefix: 'Test3_',
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[3].name}`),
            hooks: expect.objectContaining({})
        }))

        const indexContent = `export * from "./test";\nexport * from "./test1";\nexport * from "./test2";\nexport * from "./test3";\n`
        const indexPath = path.resolve(process.cwd(), "./src/__generated__/index.ts");

        const moduleContent = 'export * from "../module";\n';
        const modulePath = path.resolve(process.cwd(), "./src/__generated__/module.ts");

        const utilsContent = 'export * from "../utils";\n';
        const utilsPath = path.resolve(process.cwd(), "./src/__generated__/utils.ts");


        expect(fs.writeFileSync).toHaveBeenCalledWith(indexPath, indexContent)
        expect(fs.writeFileSync).toHaveBeenCalledWith(modulePath, moduleContent)
        expect(fs.writeFileSync).toHaveBeenCalledWith(utilsPath, utilsContent)
    })
})