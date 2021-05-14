import clean from "rollup-plugin-clean"
import sizes from "rollup-plugin-sizes"

import { generateMeta } from "./plugin/rollup-plugin-userscript-meta"

// rollup.config.js
export default {
  input: "src/script.js",
  output: {
    dir: "dist",
    format: "iife",
  },
  plugins: [clean(), sizes(), generateMeta()],
}
