import type { PluginOption, UserConfig } from "vite";
import type { UserConfig as VitestUserConfig } from "vitest/config";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "./swc";
import { resolve } from "path";
import { JscTarget, ModuleConfig } from "@swc/core";
import { exec } from "child_process";

export type Options = UserConfig & {
    /**
     * default: true
     */
    emitDecoratorMetaData?: boolean;
    entryPath?: string;
    minify?: boolean;
    /**
     * default: {type:"es6"}
     */
    module?: ModuleConfig
    /**
     * default: es2018
     */
    target?: JscTarget
    tsconfig?: string
};

function tscPlugin(config?: { tsconfig: string }) {
    const tsConfigName = config?.tsconfig ?? "./tsconfig.json"
    return {
        name: "tsc-plugin",
        async writeBundle() {
            return new Promise((resolve, reject) => {
                console.log("Type checking with tsc...");

                exec(`tsc --declaration --emitDeclarationOnly --declarationDir dist --project ${tsConfigName}`,
                    (error, stdout, stderr) => {
                        if (stdout) {
                            if (error) console.error(stdout);
                            else console.log(stdout);
                        }
                        if (stderr) {
                            console.error(stderr);
                        }
                        if (error) {
                            reject(new Error(`Type checking with tsc failed with error code ${error.code}`));
                            return;
                        }
                        resolve(true);
                    });
            })
        },
    };
}

export const createViteConfig = (
    options: Options = {}
): UserConfig => {
    const deafultEntry = resolve(process.cwd(), "./src/index.ts");
    const excludedRoutes = ["src/**/__tests__/*.ts", "src/**/*.spec.ts"];

    options.minify = options.minify ?? true;
    options.emitDecoratorMetaData = options.emitDecoratorMetaData ?? true,
        options.target = options.target ?? "es2018";
    options.module = options.module ?? { type: "es6" }

    const {
        entryPath = deafultEntry,
        emitDecoratorMetaData,
        tsconfig,
        plugins: optionPlugins,
        ...otherOptions
    } = options;

    options.entryPath =
        options.entryPath ?? resolve(process.cwd(), "./src/index.ts");

    const plugins = [
        tscPlugin({
            tsconfig
        }),
        peerDepsExternal(),
        ...(optionPlugins ?? []),
    ];

    if (emitDecoratorMetaData)
        plugins.push(
            swc.vite(),
            swc.rollup({
                exclude: excludedRoutes,
                minify: options.minify,
                jsc: {
                    keepClassNames: true,
                    target: options.target,
                },
            })
        );

    return {
        build: {
            minify: options?.minify,
            sourcemap: true,
            lib: {
                entry: entryPath,
                name: "index",
                fileName: "index",
            },
            ...(options?.build ?? {})
        },
        plugins,
        ...otherOptions,
    };
};

export const createVitestConfig = (
    options: Options = {}
): VitestUserConfig => {
    options.emitDecoratorMetaData = options.emitDecoratorMetaData ?? true;
    const { plugins = [], ...otherOptions } = options;

    return {
        test: {
            environment: "jsdom",
            include: ["**/*.spec.ts"],
        },
        plugins: (options.emitDecoratorMetaData
            ? [swc.vite(), swc.rollup(), ...plugins]
            : plugins) as PluginOption[],
        ...otherOptions,
    };
};
