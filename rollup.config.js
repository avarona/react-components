import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss-modules";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

const ENV = process.env.NODE_ENV;

export default {
  input: "src/lib/index.ts",
  output: [
    {
      file: ENV === "production" ? pkg.main : "build/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: ENV === "production" ? pkg.module : "build/index.es.js",
      format: "es",
      sourcemap: true
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript(),
    postcss({ modules: true }),
    babel({
      exclude: "node_modules/**"
    }),
    commonjs()
  ]
};
