const tsEslint = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const playwright = require('eslint-plugin-playwright');

module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json', // Ensure this points to your tsconfig.json
      },
    },
    plugins: {
      '@typescript-eslint': tsEslint,
      'playwright': playwright,
    },
    rules: {
      ...tsEslint.configs['eslint-recommended'].rules,
      ...tsEslint.configs['recommended'].rules,
      ...playwright.configs.recommended.rules,
    },
  },
];