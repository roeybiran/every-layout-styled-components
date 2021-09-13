import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const extensions = [".ts", ".tsx"];

export default {
  input: ["src/index.ts"],
  output: [
    {
      dir: "dist",
      sourcemap: true,
      format: "esm",
      preserveModules: true,
    },
  ],
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      extensions,
      // https://github.com/rollup/plugins/tree/master/packages/babel#babelhelpers
      babelHelpers: "bundled",
      include: extensions.map((ext) => `src/**/*${ext}`),
    }),
  ],
  external: [
    ...Object.keys(pkg.devDependencies),
    ...Object.keys(pkg.peerDependencies),
  ],
};
