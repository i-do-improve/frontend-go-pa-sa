module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: 'next/core-web-vitals',
  rules: {
    'no-unused-expressions': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    'function-paren-newline': ['error', 'multiline'],
    '@typescript-eslint/object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],
    'no-trailing-spaces': ['error', { 'ignoreComments': false }],
  }
};
