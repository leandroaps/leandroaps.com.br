import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "@eslint-react/eslint-plugin";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-config-prettier";

export default defineConfig(
  globalIgnores(["build/**", "node_modules/**", ".react-router/**"]),
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs["recommended-typescript"],
  reactHooks.configs.flat.recommended,
  prettier,
  {
    rules: {
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    },
  }
);
