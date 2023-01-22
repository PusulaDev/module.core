# Getting Started

Every module is a project. Which can use other modules and can be used from other modules.
Modules can have isolated or shared dependencies.

## Features

- Dependecy Injection with decorators
- Layers for organization. (HttpClient, DataProvider, Controller, Mapper, Cache ...)
- Utility classes.
- Most dependencies uses Interfaces including utility classes. So you can write your own implementation or use default
  implementations.

## Motivation

Main motivation is to orginaze complicated enterprise level frontend projects that has many different modules that
differs from each other in a way that business logic or application logic.

Organizes the part between backend and presentation of frontEnd. So there is no rendering part here.

Sits in between two side, from getting and sending data to backend to rendering html, listening events.

To be more spesific. Communicates with backend and frontEnd framework. (Vue, React or your own render code)

## Install

::: code-group

```shell [npm]
npm i @pusula/module.core --save
```

```shell [yarn]
yarn add @pusula/module.core
```
```shell [pnpm]
pnpm i @pusula/module.core
```
:::

## [Usage](#usage)

If you want to use dependency injection install reflect-metada and import it at the start of your project.

```typescript
import "reflect-metadata";
```

Also add experimental decorators and emit metadata options to tsconfig

```json

{
  "compilerOptions":{
    ...
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    ...
  }
}

```

Register utilities to globalModule if you want to use them

``` typescript
//Use default utils
setDefaultUtils();

//Or use default one or create your implemenatation and register that
globalModule.setLocalization(defaultLocalization);
globalModule.setCloneUtil(defaultCloneUtil);
globalModule.setEncryptionUtil(defaultEncryptionUtil);
globalModule.setPerformanceUtil(browserPerformanceUtil);
globalModule.setDateUtil(defaultDateUtil);

```

Usage:

```typescript
// returns dateUtil or null
const dateUtils = globalModule.getDateUtil()
dateUtils?.now();

// return dateUtil or throws error
const dateUtils = globalModule.ensureGetDateUtil()
dateUtils.now();

```