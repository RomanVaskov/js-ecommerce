module.exports = {
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 11,
  },
  rules: {
    semi: 'off',
    'arrow-parens': 'off',
    'comma-dangle': 'off',
    'require-jsdoc': 'off',
    'operator-linebreak': 'off',
    'linebreak-style': ['error', 'windows'],
    'object-curly-spacing': ['error', 'never'],
    'no-console': 0,
    'no-tabs': ['error', {allowIndentationTabs: true}],
    'no-underscore-dangle': 'off',
    indent: 'off',
    'import/prefer-default-export': 'off',
  },
}
