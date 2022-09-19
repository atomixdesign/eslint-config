module.exports = {
  extends: [
    '@atomixdesign/eslint-config/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  plugins: [
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'react-hooks/rules-of-hooks': 'off',
  },
}