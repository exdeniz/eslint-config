'use strict'

module.exports = {
  extends: 'standard',
  plugins: [
    'jest',
    'security'
  ],
  rules: {
    'import/export': 'off',
    'import/first': 'off',
    'import/no-absolute-path': 'off',
    'import/no-duplicates': 'off',
    'import/no-webpack-loader-syntax': 'off',

    'jest/no-identical-title': 'error',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',

    'security/detect-unsafe-regex': 'error',
    'security/detect-buffer-noassert': 'error',
    'security/detect-child-process': 'error',
    'security/detect-disable-mustache-escape': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-no-csrf-before-method-override': 'error',
    'security/detect-non-literal-fs-filename': 'error',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-non-literal-require': 'error',
    'security/detect-object-injection': 'error',
    'security/detect-possible-timing-attacks': 'error',
    'security/detect-pseudoRandomBytes': 'error',

    'nonblock-statement-body-position': 'error',
    'computed-property-spacing': ['error', 'never'],
    'array-bracket-spacing': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'func-name-matching': 'error',
    'no-useless-return': 'error',
    'consistent-return': 'error',
    'multiline-ternary': ['error', 'never'],
    'no-nested-ternary': 'error',
    'block-scoped-var': 'error',
    'no-invalid-this': 'error',
    'global-require': 'error',
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'no-lonely-if': 'error',
    'valid-jsdoc': 'error',
    'func-style': ['error', 'declaration'],
    'no-shadow': 'error',
    'max-len': [2, 80],
    'no-new': 'off'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  }
}
