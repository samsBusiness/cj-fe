module.exports = {
  root: true,
  env: {browser: true, es2020: true},
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:sonarjs/recommended",
    "plugin:unicorn/recommended",
    "airbnb",
    "prettier",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  settings: {react: {version: "18.2"}},
  plugins: ["react-refresh", "simple-import-sort"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      {allowConstantExport: true},
    ],
    "unicorn/filename-case": "off",
  },
};
