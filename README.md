# Legacy .eslintrc (eslint <= 8)

## Installation

```shell
yarn add --dev eslint@^8.0.0 @atomixdesign/eslint-config@^1.0.0
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

# eslint.config.js (eslint >= 9)

## Installation
```shell
yarn add --dev eslint @atomixdesign/eslint-config
```

Add the following into your `eslint.config.mjs` file (note the .mjs, not .js):

```js
import config from "@atomixdesign/eslint-config"

export default [
    ...config
];
```

## Usage with React

Add the additional react config into your `eslint.config.mjs` file (note the .mjs, not .js):

```js
import config from "@atomixdesign/eslint-config"
import reactConfig from "@atomixdesign/eslint-config/react"

export default [
    ...config,
    ...reactConfig
];
```

