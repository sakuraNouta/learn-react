module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: {
    JSX: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        paths: ['packages/**/src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    amd: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended' // Make sure this is always the last element in the array.
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error']
  }
};
