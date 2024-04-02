module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  extends: [
    // Uses the recommended rules
    'eslint:recommended',
    'next',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:prettier/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
  ],
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 'latest', // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  plugins: ['@typescript-eslint', '@tanstack/query'],
  rules: {
    eqeqeq: 'warn',
    'no-mixed-spaces-and-tabs': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    React: 'writable', // NextJs does not require to import React into each component
  },
  ignorePatterns: ['/node_modules/*', '**/node_modules/*'],
  overrides: [],
  settings: {
    react: {
      version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
};
