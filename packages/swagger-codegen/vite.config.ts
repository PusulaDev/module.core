import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { resolve } from 'path'

const resolvePath = (str: string) => resolve(__dirname, str);

export default defineConfig({
    build: {
        sourcemap: true,
        lib: {
            entry: resolvePath("src/index.ts"),
            name: "index",
            fileName: "index",
        },
    },
    plugins: [
        dts({
            insertTypesEntry: true,
            skipDiagnostics: false,
            exclude: ["src/**/__tests__/*.ts","src/**/*.spec.ts"],
        }),
        peerDepsExternal(),
    ],
});
