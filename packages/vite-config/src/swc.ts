import path from "path";
import defu from "defu";
import { createUnplugin } from "unplugin";
import { createFilter, FilterPattern } from "@rollup/pluginutils";
import { loadTsConfig } from "load-tsconfig";

import { transform, JscConfig, Options as SwcOptions, ModuleConfig, JscTarget } from "@swc/core";
import { resolveId } from "./resolve";

export type Options = SwcOptions & {
    include?: FilterPattern;
    exclude?: FilterPattern;
    tsconfigFile?: string | boolean;
    module?: ModuleConfig;
    target?: JscTarget;
};

export default createUnplugin(
    ({ tsconfigFile, minify, include, exclude, target, ...options }: Options = {}) => {
        const filter = createFilter(include || /\.[jt]sx?$/, exclude || /node_modules/);

        return {
            name: "swc",
            resolveId,
            async transform(code, id) {
                if (!filter(id)) return null;

                const compilerOptions =
                    tsconfigFile === false
                        ? {}
                        : loadTsConfig(
                            path.dirname(id),
                            tsconfigFile === true ? undefined : tsconfigFile
                        )?.data?.compilerOptions || {};

                const isTs = /\.tsx?$/.test(id);

                let jsc: JscConfig = {
                    parser: {
                        syntax: isTs ? "typescript" : "ecmascript",
                    },
                    transform: {},
                    target: target ?? "es2015"
                };

                if (compilerOptions.jsx && jsc.parser && jsc.transform) {
                    Object.assign(jsc.parser, {
                        [isTs ? "tsx" : "jsx"]: true,
                    });
                    Object.assign(jsc.transform, {
                        react: {
                            pragma: compilerOptions.jsxFactory,
                            pragmaFrag: compilerOptions.jsxFragmentFactory,
                            importSource: compilerOptions.jsxImportSource,
                        },
                    });
                }

                if (compilerOptions.experimentalDecorators && jsc.parser && jsc.transform) {
                    // class name is required by type-graphql to generate correct graphql type
                    jsc.keepClassNames = true;
                    Object.assign(jsc.parser, {
                        decorators: true,
                    });
                    Object.assign(jsc.transform, {
                        legacyDecorator: true,
                        decoratorMetadata: compilerOptions.emitDecoratorMetadata,
                    });
                }

                if (compilerOptions.target) {
                    jsc.target = compilerOptions.target;
                }

                if (options.jsc) {
                    jsc = defu(options.jsc, jsc);
                }

                const result = await transform(code, {
                    filename: id,
                    sourceMaps: true,
                    ...options,
                    jsc,
                    module: options.module
                });
                return {
                    code: result.code,
                    map: result.map && JSON.parse(result.map),
                };
            },

            vite: {
                config() {
                    return {
                        esbuild: false,
                    };
                },
            },

            rollup: {
                async renderChunk(code, chunk) {
                    if (minify) {
                        const result = await transform(code, {
                            sourceMaps: true,
                            minify: true,
                            filename: chunk.fileName,
                            jsc: {
                                target: target ?? "es2015"
                            }
                        });
                        return {
                            code: result.code,
                            map: result.map,
                        };
                    }
                    return null;
                },
            },
        };
    }
);
