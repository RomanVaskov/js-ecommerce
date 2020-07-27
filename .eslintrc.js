module.exports = {
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    'no-console': 0,
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-nested-ternary': 'off',
  },
}
