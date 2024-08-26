module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["alloy", "alloy/react", "alloy/typescript"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "unused-imports", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    // Import Sort
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    // Unused Imports
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: "latest",
  },
};
