import type { PluginOption, UserConfig } from "vite";
import type { UserConfig as VitestUserConfig } from "vitest/config";
import dts from "vite-plugin-dts";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "./swc";
import { resolve } from "path";

export type Options = UserConfig & {
    emitDecoratorMetaData: boolean;
    entryPath?: string;
};

export const createViteConfig = (
    options: Options = { emitDecoratorMetaData: true }
): UserConfig => {
    const deafultEntry = resolve(process.cwd(), "./src/index.ts");
    const excludedRoutes = ["src/**/__tests__/*.ts", "src/**/*.spec.ts"];

    const {
        entryPath = deafultEntry,
        emitDecoratorMetaData,
        plugins: optionPlugins,
        ...otherOptions
    } = options;

    options.entryPath =
        options.entryPath ?? resolve(process.cwd(), "./src/index.ts");

    const plugins = [
        dts({
            insertTypesEntry: true,
            skipDiagnostics: false,
            exclude: excludedRoutes,
        }),
        peerDepsExternal(),
        ...(optionPlugins ?? []),
    ];

    if (emitDecoratorMetaData)
        plugins.push(
            swc.vite(),
            swc.rollup({
                exclude: excludedRoutes,
                minify: true,
                jsc: {
                    keepClassNames: true,
                },
            })
        );

    return {
        build: {
            sourcemap: true,
            lib: {
                entry: entryPath,
                name: "index",
                fileName: "index",
            },
        },
        plugins,
        ...otherOptions,
    };
};

export const createVitestConfig = (
    options: Options = { emitDecoratorMetaData: true }
): VitestUserConfig => {
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
