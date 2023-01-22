import { generateApi as l } from "swagger-typescript-api";
import o from "path";
import { fileURLToPath as a } from "url";
import c from "fs";
const u = a(import.meta.url), i = o.dirname(u), m = (e, r) => {
  const { files: t } = e, s = t.map(({ name: n }) => `export * from "./${n.replace(".ts", "")}";`).join(`
`);
  c.writeFile(o.join(r, "index.ts"), s + `
`, (n) => {
    n ? (console.log(n), process.exit(1)) : console.log(`Codes are generated 
`);
  });
}, d = () => {
  const e = o.resolve(process.cwd(), "./src/module"), r = `import { CoreModule, SessionStorageCache } from "@pusula/module.core";

const coreModule = new CoreModule({ key: "CoreModule" });
coreModule.register(SessionStorageCache, { key: "SessionStorageCache" });
const injectable = coreModule.createInjectable();

export { coreModule, injectable };`;
  c.existsSync(e) || c.mkdirSync(e), c.writeFile(o.join(e, "index.ts"), r, (t) => {
    t ? (console.log(t), process.exit(1)) : (console.log(`module generated 
`), process.exit());
  });
}, C = async (e) => {
  const r = o.resolve(process.cwd(), "./src/__generated__"), t = o.resolve(i, "../src/templates");
  e.output = e.output || r, e.templates = e.templates || t, e.name = e.name || "api.ts";
  try {
    const s = await l({
      httpClientType: "fetch",
      generateClient: !0,
      generateResponses: !0,
      moduleNameIndex: 1,
      singleHttpClient: !0,
      cleanOutput: !0,
      sortTypes: !0,
      extractEnums: !0,
      extractRequestParams: !0,
      modular: !0,
      moduleNameFirstTag: !0,
      ...e
    });
    m(s, e.output), d();
  } catch (s) {
    console.error(s), process.exit(1);
  }
};
export {
  C as generate
};
//# sourceMappingURL=index.js.map
