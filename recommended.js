module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  rules: {
    'indent': ['error', 2],
    'semi': ['warn', 'never'],
    'quotes': ['warn', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'padded-blocks': ['error', 'never'],
    'padding-line-between-statements': ['error',
      { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
      { 'blankLine': 'always', 'prev': 'block-like', 'next': '*' },
      { 'blankLine': 'always', 'prev': '*', 'next': 'block-like' },
      { 'blankLine': 'always', 'prev': '*', 'next': ['const', 'let', 'var'] },
      { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*'},
      { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var']},
    ],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_|returns|type|of',
      'ignoreRestSiblings': true,
    }],
    '@typescript-eslint/member-delimiter-style': ['warn', {
      'multiline': {
        'delimiter': 'none',
      },
    }],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  }
}