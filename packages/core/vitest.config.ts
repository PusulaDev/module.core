import { createVitestConfig } from "@pusula/module.core-vite-config";

export default createVitestConfig({
    test: {
        environment: "jsdom",
        include: ["**/*.spec.ts"],
        setupFiles: [
            "./setup-vitest.js"
        ]
    },
    emitDecoratorMetaData: true
});
