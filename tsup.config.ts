import type { Options } from "tsup";

export const tsup: Options = {
  splitting: false,
  clean: true,
  dts: true,
  // sourcemap: true,
  format: ["cjs", "esm"], // generate cjs and esm files
  // minify: true,
  // bundle: true,
  skipNodeModulesBundle: true,
  entryPoints: ["src/index.ts"],
  entry: ["src/**/index.ts"], //include all files under src
};
