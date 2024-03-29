# module.core

[![NPM badge](https://img.shields.io/npm/v/@pusula/module.core.svg)](https://www.npmjs.com/package/@pusula/module.core)

### Table of contents

- [Module Based FrontEnd Orginazor](#module-based-frontend-orginazor)
    - [Features](#features)
    - [Motivation](#motivation)
        - [Install](#install)
        - [Usage](#usage)
    - [Layers](#layers)
        - [Module](#module)
        - [Global Module](#global-module)
        - [HTTPClient](#httpclient)
        - [Provider](#provider)
        - [Controller](#controller)
        - [Mapper](#mapper)
        - [Cache](#cache)
        - [Action Guard](#action-guard)
        - [Localizations](#localizations)
        - [Utilities](#utilities)

# Module Based FrontEnd Orginazor

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

## [Install](#install)

npm:

`npm i @pusula/module.core --save`

yarn:

`yarn add @pusula/module.core`

pnpm:

`pnpm i @pusula/module.core`

## [Usage](#usage)

If you want to use dependency injection install reflect-metada and import it at the start of your project.

```javascript
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
//use default one or create your implemenatation and register that
globalModule.setLocalization(defaultLocalization);
globalModule.setCloneUtil(defaultCloneUtil);
globalModule.setEncryptionUtil(defaultEncryptionUtil);
globalModule.setPerformanceUtil(browserPerformanceUtil);
globalModule.setDateUtil(defaultDateUtil);

// or use this method

setDefaultUtils();

//Usage:

// returns dateUtil or null
globalModule.getDateUtil()

// return dateUtil or throws error
globalModule.ensureGetDateUtil()
```

## [Layers](#layers)

### [Module](#module)

Keeps track of dependinces and provides them. Create a class that extends **CoreModule** .
If you use the module in the same package no need to give key.

But if you use module in different packages you must give key.

Because the bundle process minifies the names of classes.

```Typescript
class MyModule extends CoreModule {
    bootstrap(options?: ModuleBootstrapOptions) {
        super.bootstrap(options);
        //module spesific configurations
    }
}

//decorators optional : register decorators for dependency Injection

export const myModule = new MyModule({ key: "MyModule", decorators: [xInjectable] });
```

Create Dependency Injection Decorator if you want to use them.

```Typescript
export const xInjectable = new InjectableDecorators();
```

Use injectable decorator to inject dependencies.
You can use **class** or **@inject** decorator with token to inject.

```typescript
@injectable.other('A')
export class SomeNormalClass {
    constructor(private xController: XController, private yController: YControlller) {
    }
}

//With token
@injectable.other()
export class OtherClass {
    constructor(@inject('A') private someNormalClass: any)
}

// Lazy injection
@injectable.other()
export class OtherClass {
    constructor(@injectLazy("Test") private getTest: () => Test)
}

// With static values
@injectable.other()
export class OtherClass {
    constructor(private staticValue: number)
}

module.resolve(OtherClass, { dependencies: [12] })

```

Use module. HttpClient is required by default.

```Typescript
myModule.bootstrap({ httpClient, config: myConfig });
otherModule.bootstrap({ httpClient, config: otherConfig })
```

Use module resolve functions, or class constructor arguments.
Modules by default checks other modules if dependencies are not found.
You can close this feature for spesific module by giving `linkedModule: false`
at the constructor

```Typescript
const someFunction = () => {
  const xController = xModule.resolve(XController)
}
```

Mocking dependincies for testing.

Use createMock function returned methods for easy mocking.

```Typescript
describe("some test", () => {
    const { mockController, clear } = createMock(myModule);

    beforeEach(() => {
        clear();
    })

    it("should work", () => {
        class TestXController implements IXController {
            someFunc() {
            }
        }

        mockController(TestXController, { key: 'XController' });
    ....
    })
})
```

### [Global Module](#globalModule)

globalModule is the top level parent container. It contains some utility classes like :

- Localization
- CloneUtil
- EncryptionUtil
- PerformanceUtil
- DateUtil
- Observer
- SharedHeaders

These classes instances must be registered to globalModule before everything. There are default implementations, also
you can write your own implementation and register their instances.

```Typescript
globalModule.setLocalization(defaultLocalization)
globalModule.setCloneUtil(customCloneUtil);
...
```

### [HTTPClient](#httpClient)

Communicates with backend. There is a **FetchHttpClient** that uses Fetch api. You can write your own implementation.

HttpClient does not depend anything but some other layers depend on it . So create it first after globalModule and
module.

```Typescript
export const fetchClient = new FetchHTTPClient({
  hostName: "api.comed.com.tr",
  languagePrefix: "tr-tr",
  prefix: "api/json",
  headers: {
    "x-application-key": "/uq+fiM1AzYe7bHAJCixzg==",
    "content-type": "application/json",
  },
  createErrorFn,
});

----

myModule.bootstrap(httpClient:fetchClient);
otherModule.bootstrap(httpClient:fetchClient);

```

### [Provider](#provider)

Communicates with HTTPClient. I suggest that create one provider for each entity. implements **IProvider** but extending
from **CoreProvider** is highly suggested.

Auto injects first registered HttpClient as dependency.

```Typescript
@injectable.provider()
export class AuthProvider extends BaseProvider {
    protected baseUrl = "core/auth";

    signIn(request: SignInRequest) {
        return this.post(signInRequestConfig, request);
    }

    signOut(request: SignOutRequest) {
        return this.post(signOutRequestConfig, request);
    }

    getUser(request: GetUserRequest) {
        return this.get(getUserRequestConfig, request);
    }
}

-----

export const signInRequestConfig: IRequestConfig<
    SignInRequest,
    SignInResponseModel
> = {
    url: "signIn",
};

export const signOutRequestConfig: IRequestConfig<SignOutRequest, string> = {
    url: "signOut",
};

interface GetUserRequest {
    id: number,
    name?: string
}

/**
 * You can use ${param} from route params
 * client interpolates the url and uses the values in request
 */

export const getUserRequestConfig: IRequestConfig<GetUserRequest, User> = {
    url: "getUser/${id}",
};

```

### [Controller](#controller)

Presentation layer must communicates with controllers only for data transfers. Caching, mapping etc. is handled by
controller. Controller mostly uses other classes.

```Typescript


@injectable.controller()
export class AuthController implements IController {
    constructor(private provider: AuthProvider) {
    }

    async signIn(request: SignInRequest) {
        return this.provider.signIn(request);
    }
}

```

### [Mapper](#mapper)

Create map options between two interfaces. implements **IMapper<TSource,TTarget>** . There is a default implementation =
**CoreMapper**

```Typescript
interface FirstType {
  first: string;
  second: number;
}

interface SecondType {
  first: string;
  age: number;
  sum: string;
}

const mapper = new CoreMapper<FirstType, SecondType>();

mapper
  .forTarget("first")
  .forTarget("age", "second")
  .forTarget("sum", (from) => `${from.first} ${from.second}`);

const mapped = mapper.mapToTarget({ first: "orange", second: 231 });
```

### [Cache](#cache)

Implements **ICache** interface. There are two implementations. **MemoryCache**, **SessionStorageCache**

### [Action Guard](#action-guard)

Define an ActionGuard and run for validation.

```Typescript
const actionGuard = createActionGuard((options:number) => {
  if(options > 10) throw "Cannot be bigger than 10";

  return true;
}));

....

const res = await actionGuard.validate(12);
// res = { valid: false, errorMessage: 'Cannot be bigger than 10' }

const res2 = await actionGuard.validate(5);
//res = { valid: true}

```

### [Localizations](#localizations)

Register localization to globalModule and use it from there.
There is a defaultLocalization with basic abilities.

Use '%s' for using variables.

```Typescript

export const translations: LocalizationTranslations = {
    "en-us": {
        [EnumLocalizationKeys.HostNameError]:
            "hostName or proper hostNames must be defined",
        [EnumLocalizationKeys.NotRegisteredError]:
            'There is no class registered with key "%s"',
    },
    "tr-tr": {
        [EnumLocalizationKeys.HostNameError]:
            "Uygun hostName veya hostNames tanımlanmalı",
        [EnumLocalizationKeys.NotRegisteredError]:
            '"%s" keyi ile bir sınıf kayıt edilmedi',
    },
};

defaultLocalization.setTranslations(translations);
globalModule.setLocalization(defaultLocalization)

```

### [Utilities](#utilities)

Utility classes for making your life easier. Some of them used by other classes if theye are registered to globalModule.

| Utility          | Default             | Explanation                                                              |
|------------------|---------------------|--------------------------------------------------------------------------|
| ICLoneUtil       | defaultCloneUtil    | clone, cloneDeep values. Used by clone decorator                         |
| ILocalization    | defaultLocalization | translate strings. Used by CustomErrors.                                 |
| IDateUtil        | defaultDateUtil     | date functions                                                           |
| IEncryptUtil     | defaultEncryptUtil  | Encrypt and decrypt data. Used by Cache utils                            |
| IPerformanceUtil | performanceUtil     | Measure performance of code blocks. Used by measurePerformace decorator. |
| IObserver        | Observer            | publish subscribe data.                                                  |
