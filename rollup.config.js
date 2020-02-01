import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss-modules";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";

export default {
  input: "src/lib/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
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
