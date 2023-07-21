# Learn Performance - Webpack code-splitting demo

## Usage

1. `npm install` to install dependencies.
2. `npm run build -- [config]` to build the project with the selected `[config]` and generate the bundle report.
3. `npm start` to start a local server and preview the project.

## Project Structure

- `main.js` is the entry point of the project and imports `lodash`.
- `form-validation.js` is dynamically imported if/when a user interacts with a form element. It imports `date-fns` and `uuid`.
- `admin.js` is dynamically imported if the URL contains `?admin`. It imports `date-fns` and `uuid`.

## Configurations

### `async`

The default webpack configuration. It splits out common modules `date-fns` and `uuid` into a separate bundle.

![async](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/assets/8075326/732edd46-b5cc-4dcf-9658-f57b03327ea7)

### `initial`

The `initial` configuration splits out `lodash` into a separate bundle but `date-fns` and `uuid` are duplicated into the dynamic imports `form-validation.js` and `admin.js`.

![initial](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/assets/8075326/634c9800-fbf4-43b6-8971-6fda1c8ede72)

### `maxSize`

This configuration uses `chunks: all` and `maxSize: 20000`. The output is 3 common chunks, `main.js`, `form-validation.js`, and `admin.js`.

![maxSize](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/assets/8075326/27a7e34c-ad17-4623-921c-eaab6fb2751a)

### `false`

Disables `SplitChunksPlugin`. The output is `main.js`, `form-validation.js`, and `admin.js`. `date-fns` and `uuid` are duplicated in the dynamic imports and `lodash` is included in `main.js`. (not recommended)

![false](https://github.com/kevinfarrugia/learn-performance-webpack-code-splitting/assets/8075326/8e1e9ba1-9aaa-49ba-9383-48557bd3c206)

## Resources

- [Webpack Code Splitting](https://webpack.js.org/guides/code-splitting/)
