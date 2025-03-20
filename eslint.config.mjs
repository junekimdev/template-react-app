import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import stylisticPlugin from '@stylistic/eslint-plugin';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import hooksPlugin from 'eslint-plugin-react-hooks';

export default [
  {
    name: 'formatLint',
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    rules: {
      '@stylistic/semi': 'warn',
      '@stylistic/no-extra-semi': 'error',
      '@stylistic/no-mixed-spaces-and-tabs': 'warn',
    },
  },
  {
    name: 'jsLint',
    files: ['**/*.js', '**/*.mjs', '**/*.jsx'],
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: 'warn',
    },
  },
  {
    name: 'tsLint',
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { modules: true },
        ecmaVersion: 'latest',
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs['eslint-recommended'].rules,
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    name: 'nextLint',
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    name: 'reactLint',
    plugins: {
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
    },
    settings: {
      react: {
        version: 'detect', // You can add this if you get a warning about the React version when you lint
      },
    },
  },
  {
    name: 'reactHookLint',
    plugins: {
      'react-hooks': hooksPlugin,
    },
    rules: hooksPlugin.configs.recommended.rules,
  },
  {
    name: 'ignores',
    ignores: [
      // runtime data
      'pids',
      '*.pid',
      '*.seed',

      // dev-tools
      '*.js',
      '*.mjs',
      '*.ts',

      // testing
      'coverage/',

      // keys
      '*.pem',

      // production
      'build/',
      'release/',
      'dist/',
      'dll/',
      '.eslintcache',
      '.next/*',

      // debug
      '.idea',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',

      // logs
      'logs/',
      '*.log',

      // misc
      '.DS_Store',
      '.env*',
      '*.env',
      '.vscode/',
      'public/',
      'placeholder_*',
    ],
  },
];
