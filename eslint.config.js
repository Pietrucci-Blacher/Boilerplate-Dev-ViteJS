import js from '@eslint/js';
import globals from 'globals';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPromise from 'eslint-plugin-promise';
import eslintPluginSonarjs from 'eslint-plugin-sonarjs';
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintPluginSecurity from 'eslint-plugin-security';
import htmlEslintParser from '@html-eslint/parser';
import htmlEslintPlugin from '@html-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2025,
      },
    },
    plugins: {
      import: eslintPluginImport,
      unicorn: eslintPluginUnicorn,
      promise: eslintPluginPromise,
      sonarjs: eslintPluginSonarjs,
      'jsx-a11y': eslintPluginJsxA11y,
      security: eslintPluginSecurity,
    },
    rules: {
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
      ...eslintPluginPromise.configs.recommended.rules,
      ...eslintPluginSonarjs.configs.recommended.rules,
      ...eslintPluginJsxA11y.configs.recommended.rules,
      ...eslintPluginSecurity.configs.recommended.rules,

      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always'],
      'func-style': ['error', 'expression'],
      'camelcase': 'off',
      'no-extra-semi': 'error',
      'default-case': 'error',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-console': 'warn',
      'no-misleading-character-class': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-nested-ternary': 'error',
      'no-new': 'error',
      'no-new-object': 'error',
      'no-new-symbol': 'error',
      'no-new-wrappers': 'error',
      'no-obj-calls': 'error',
      'no-path-concat': 'error',
      'no-promise-executor-return': 'error',
      'no-return-await': 'error',
      'no-script-url': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-shadow-restricted-names': 'error',
      'no-sparse-arrays': 'error',
      'no-template-curly-in-string': 'error',
      'no-this-before-super': 'error',
      'prefer-numeric-literals': 'error',
      'prefer-object-spread': 'error',
      'prefer-promise-reject-errors': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'prefer-template': 'error',
      'require-atomic-updates': 'error',
      'symbol-description': 'error',
      'no-unreachable-loop': 'error',
      'unicorn/prefer-module': 'error',
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/default': 'error',
      'import/namespace': 'error',
      'import/no-duplicates': 'error',
    },
  },
  {
    files: ['**/*.html'],
    plugins: {
      '@html-eslint': htmlEslintPlugin,
    },
    languageOptions: {
      parser: htmlEslintParser,
    },
    rules: {
      ...htmlEslintPlugin.configs.recommended.rules,
    },
  },
];