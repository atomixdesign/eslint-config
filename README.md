## Installation

```shell
yarn add --dev eslint @atomixdesign/eslint-config
```

Add the following into your `.eslintrc` file:

```json
{
  "extends": "@atomixdesign/eslint-config/recommended"
}
```

## Usage with React

Also include the following npm dependencies:

```shell
yarn add --dev eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

And use the React config instead in your `.eslintrc`:

```json
{
  "extends": "@atomixdesign/eslint-config/react"
}
```