(function(t,n){typeof exports=="object"&&typeof module<"u"?n(exports,require("swagger-typescript-api"),require("path"),require("url"),require("fs")):typeof define=="function"&&define.amd?define(["exports","swagger-typescript-api","path","url","fs"],n):(t=typeof globalThis<"u"?globalThis:t||self,n(t.index={},t.swaggerTypescriptApi,t.path,t.url,t.fs))})(this,function(t,n,r,l,u){"use strict";const d=l.fileURLToPath(typeof document>"u"&&typeof location>"u"?new(require("url")).URL("file:"+d).href:typeof document>"u"?location.href:document.currentScript&&document.currentScript.src||new URL("index.umd.cjs",document.baseURI).href),a=r.dirname(d),p=(e,s)=>{const{files:o}=e,c=o.map(({name:i})=>`export * from "./${i.replace(".ts","")}";`).join(`
`);u.writeFile(r.join(s,"index.ts"),c+`
`,i=>{i?(console.log(i),process.exit(1)):console.log(`Codes are generated 
`)})},m=()=>{const e=r.resolve(process.cwd(),"./src/module"),s=`import { CoreModule, SessionStorageCache } from "@pusula/module.core";

const coreModule = new CoreModule({ key: "CoreModule" });
coreModule.register(SessionStorageCache, { key: "SessionStorageCache" });
const injectable = coreModule.createInjectable();

export { coreModule, injectable };`;u.existsSync(e)||u.mkdirSync(e),u.writeFile(r.join(e,"index.ts"),s,o=>{o?(console.log(o),process.exit(1)):(console.log(`module generated 
`),process.exit())})},f=async e=>{const s=r.resolve(process.cwd(),"./src/__generated__"),o=r.resolve(a,"../src/templates");e.output=e.output||s,e.templates=e.templates||o,e.name=e.name||"api.ts";try{const c=await n.generateApi({httpClientType:"fetch",generateClient:!0,generateResponses:!0,moduleNameIndex:1,singleHttpClient:!0,cleanOutput:!0,sortTypes:!0,extractEnums:!0,extractRequestParams:!0,modular:!0,moduleNameFirstTag:!0,...e});p(c,e.output),m()}catch(c){console.error(c),process.exit(1)}};t.generate=f,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.cjs.map
