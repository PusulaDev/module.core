import { generateApi as p } from "swagger-typescript-api";
const t = {}, u = (s, r) => {
  const { files: o } = s, n = o.map(({ name: e }) => `export * from "./${e.replace(".ts", "")}";`).join(`
`);
  t.writeFile(t.join(r, "index.ts"), n + `
`, (e) => {
    e ? (console.log(e), process.exit(1)) : (console.log(`Codes are generated 
`), process.exit());
  });
}, m = async (s) => {
  const r = t.resolve(process.cwd(), "./src/__generated__"), o = t.resolve(__dirname, "./src/templates"), { url: n, output: e = r, templates: c = o, name: l = "api.ts" } = s;
  try {
    const a = await p({
      name: l,
      output: e,
      url: n,
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
      templates: c
    });
    u(a, e);
  } catch (a) {
    console.error(a), process.exit(1);
  }
};
export {
  m as generate
};
//# sourceMappingURL=index.js.map
