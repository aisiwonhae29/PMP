import globals from "globals";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    // declaring rules for all configed files.
    rules: {
      "semi": ["error", "always"],
      "no-unreachable": "error",
      "quotes": ["warn", "double"],
      "no-unused-vars": ["error"],
      "no-console": "off",
      "indent": ["error", 2],
      "no-trailing-spaces": "error"
    }
  },
  {
    files: ["**/*.mjs"],
    languageOptions: {
      sourceType: "module",
      globals: globals.node
    }
  },
  {
    ignores: ["node_modules/**", "dist/**", "*.min.js"]
  }
];
