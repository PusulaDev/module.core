import { generateApi } from "swagger-typescript-api";
import { afterEach, describe, expect, it, vi } from "vitest";
import { generate, generateMultiple, GenerateMultipleApiOptions } from "./generate";
import fs from "fs";
import path from "path";

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
    templates: path.resolve(__dirname, "../src/templates"),
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
        (generateApi as any).mockResolvedValue({ files: [{ name: 'http-client.ts' }] });
        (fs.existsSync as any).mockResolvedValue(true);
        const options: GenerateMultipleApiOptions = {
            endpoints: [{ name: 'test', url: 'http://test.com' },
            { name: 'test1', url: 'http://test1.com' },
            { name: 'test2', url: 'http://test2.com', typeSuffix: 'V2' }]
        }

        await generateMultiple(options);


        expect(generateApi).toHaveBeenCalledTimes(3);
        expect(fs.rmSync).toHaveBeenCalledTimes(2);

        expect(generateApi).toHaveBeenCalledWith({
            ...getDefaultOptions(),
            url: options.endpoints[0].url,
            deleteHttpClient: false,
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[0].name}`)
        })

        expect(generateApi).toHaveBeenCalledWith({
            ...getDefaultOptions(),
            url: options.endpoints[1].url,
            deleteHttpClient: true,
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[1].name}`)
        })

        expect(generateApi).toHaveBeenCalledWith({
            ...getDefaultOptions(),
            url: options.endpoints[2].url,
            deleteHttpClient: true,
            typeSuffix: 'V2',
            output: path.resolve(process.cwd(), `./src/__generated__/${options.endpoints[2].name}`)
        })

        const indexContent = `export * from "./test";\nexport * from "./test1";\nexport * from "./test2";\n`
        const indexPath = path.resolve(process.cwd(), "./src/__generated__/index.ts");

        expect(fs.writeFileSync).toHaveBeenCalledWith(indexPath, indexContent)
    })
})