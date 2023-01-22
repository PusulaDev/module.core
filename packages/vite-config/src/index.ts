import type { UserConfigExport } from "vite";
import type { UserConfigExport as VitestUserConfigExport } from "vitest/config";
import dts from "vite-plugin-dts";
// @ts-ignore
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import swc from "./swc";
import { resolve } from "path";

export type Options = UserConfigExport & {
    emitDecoratorMetaData: boolean;
    entryPath?: string;
}

export const createViteConfig = (
    options: Options = { emitDecoratorMetaData: true }
): UserConfigExport => {

    options.entryPath = options.entryPath ?? resolve(process.cwd(), "./src/index.ts");

    const plugins = [
        dts({
            insertTypesEntry: true,
            logDiagnostics: true,
            exclude: ["src/**/__tests__/*.ts", "src/**/*.spec.ts"]
        }),
        peerDepsExternal()
    ];

    if (options.emitDecoratorMetaData)
        plugins.push(
            swc.vite(),
            swc.rollup({
                exclude: ["src/**/__tests__/*.ts", "src/**/*.spec.ts"],
                minify: true,
                jsc: {
                    keepClassNames: true
                }
            })
        );

    return {
        build: {
            sourcemap: true,
            lib: {
                entry: options.entryPath,
                name: "index",
                fileName: "index"
            }
        },
        plugins,
        ...options
    };
};

export const createVitestConfig = (options: Options = { emitDecoratorMetaData: true }): VitestUserConfigExport => ({
    test: {
        environment: "jsdom",
        include: ["**/*.spec.ts"]
    },
    plugins: options.emitDecoratorMetaData ? [swc.vite(), swc.rollup()] : [],
    ...options
});
