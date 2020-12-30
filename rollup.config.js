import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import { string } from "rollup-plugin-string";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: [
    {
      file: "dist/bundle.cjs.js",
      format: "cjs",
      exports: "auto",
    },
    {
      file: "dist/bundle.esm.js",
      format: "esm",
    },
    {
      name: "Spinner",
      file: "dist/bundle.umd.js",
      format: "umd",
      globals: {
        react: "React",
      },
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: "node_modules/**",
      babelHelpers: "bundled",
    }),
    string({
      include: "**/*.css",
    }),
    production && terser(),
  ],
  external: ["react"],
};
