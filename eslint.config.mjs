// ESLint v9 flat config — compatible with TypeScript strict mode
import js from "@eslint/js"
import tseslint from "typescript-eslint"

export default tseslint.config(
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript strict recommended rules
  ...tseslint.configs.recommended,

  // Project-specific overrides
  {
    rules: {
      // Allow explicit any in tightly controlled places (use sparingly)
      "@typescript-eslint/no-explicit-any": "warn",

      // Enforce no unused vars (use _ prefix to ignore intentionally unused)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],

      // Allow empty interfaces (common in Next.js page props)
      "@typescript-eslint/no-empty-object-type": "off",
    },
  },

  // Ignore generated files and build output
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "*.config.js",
      "*.config.mjs",
      "*.config.ts",
    ],
  }
)
