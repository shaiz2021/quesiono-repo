// Read the existing TypeScript content without introducing a runtime dependency.
const ts = require("typescript");
const fs = require("fs");
const Module = require("module");
const resolve = Module._resolveFilename;
Module._resolveFilename = function (id, ...args) {
  return resolve.call(
    this,
    id.startsWith("@/") ? process.cwd() + "/src/" + id.slice(2) : id,
    ...args,
  );
};
require.extensions[".ts"] = function (module, file) {
  module._compile(
    ts.transpileModule(fs.readFileSync(file, "utf8"), {
      compilerOptions: {
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.ES2020,
      },
    }).outputText,
    file,
  );
};
