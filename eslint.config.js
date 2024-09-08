import js from '@eslint/js';
import globals from 'globals';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import eslintPluginPromise from 'eslint-plugin-promise';
import htmlEslintParser from '@html-eslint/parser';
import htmlEslintPlugin from '@html-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 2024,
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
    },
    rules: {
      ...eslintPluginImport.configs.recommended.rules,
      ...eslintPluginUnicorn.configs.recommended.rules,
      ...eslintPluginPromise.configs.recommended.rules,

      // Style et formatage pour une meilleure lisibilité
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'quotes': ['error', 'single', { 'avoidEscape': true, 'allowTemplateLiterals': true }],
      'semi': ['error', 'always'],
      'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
      'object-curly-spacing': ['error', 'always'],
      'array-bracket-spacing': ['error', 'never'],
      'comma-dangle': ['error', 'always-multiline'],
      'arrow-parens': ['error', 'as-needed'],

      // ES6+ et fonctionnalités modernes
      'prefer-const': 'error',
      'prefer-destructuring': ['error', { 'object': true, 'array': false }],
      'prefer-template': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'no-var': 'error',
      'object-shorthand': 'error',
      'arrow-body-style': ['error', 'as-needed'],

      // Meilleures pratiques pour la performance et la lisibilité
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-param-reassign': 'error',
      'no-return-await': 'error',
      'require-await': 'error',
      'no-unused-expressions': 'error',
      'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'varsIgnorePattern': '^_' }],
      'no-use-before-define': ['error', { 'functions': false, 'classes': true, 'variables': true }],

      // Performance
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
      'prefer-object-spread': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
      'no-iterator': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],

      // Unicorn (pratiques modernes et performances)
      'unicorn/prefer-module': 'error',
      'unicorn/prefer-node-protocol': 'error',
      'unicorn/prefer-ternary': 'error',
      'unicorn/prefer-set-has': 'error',
      'unicorn/prefer-array-find': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-string-slice': 'error',
      'unicorn/prefer-date-now': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-array-for-each': 'error',
      'unicorn/no-array-reduce': 'warn',

      // Import (organisation et performance)
      'import/order': [
        'error',
        {
          'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
          'alphabetize': { 'order': 'asc', 'caseInsensitive': true }
        }
      ],
      'import/no-cycle': 'error',
      'import/no-duplicates': 'error',
      'import/no-useless-path-segments': 'error',

      // Promise (gestion asynchrone efficace)
      'promise/prefer-await-to-then': 'error',
      'promise/prefer-await-to-callbacks': 'error',
      'promise/no-return-wrap': 'error',
      'promise/no-nesting': 'warn',

      // Complexité et maintenabilité
      'complexity': ['warn', 12],
      'max-depth': ['warn', 3],
      'max-lines-per-function': ['warn', { 'max': 50, 'skipBlankLines': true, 'skipComments': true }],
      'max-params': ['warn', 3],
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