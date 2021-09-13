import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import pkg from "./package.json";

const extensions = [".ts", ".tsx"];
const external = [
  ...Object.keys(pkg.devDependencies),
  ...Object.keys(pkg.peerDependencies),
];

export default {
  input: ["src/index.ts"],
  output: {
    dir: "dist",
    sourcemap: true,
    format: "esm",
    preserveModules: true,
  },
  plugins: [
    resolve({
      extensions,
    }),
    babel({
      extensions,
      babelHelpers: "inline",
      include: extensions.map((ext) => `src/**/*${ext}`),
    }),
  ],
  external,
};
