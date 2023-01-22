# @pusula/swagger-codegen

[![NPM badge](https://img.shields.io/npm/v/@pusula/swagger-codegen.svg)](https://www.npmjs.com/package/@pusula/swagger-codegen.core)

Generates swagger types and module.core providers with using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)

## Getting Started

Install package and dependencies

npm 
```shell
npm i --save-dev @pusula/swagger-codegen swagger-typescript-api
npm i @pusula/module.core
```

pnpm
```shell
pnpm i -D @pusula/swagger-codegen swagger-typescript-api
pnpm i @pusula/module.core
```

yarn
```shell
yarn add -dev @pusula/swagger-codegen swagger-typescript-api
yarn add @pusula/module.core
```

## Usage

```typescript
import { generate } from "@pusula/swagger-codegen";

generate({
    //output files will be placed under /src/__generated__ if you dont provide a output param
    //output: path.resolve(process.cwd(), "./src/__generated__"),
    //templates: path.resolve(__dirname,"./src/templates")
    url: 'http://api.com/swagger.json',
})
```

This will generate api types and @pusula/module.core providers. 
Check the [@pusula/module.core](https://github.com/PusulaDev/module.core) documentation for more details.
For more customization options check the documentation of [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)