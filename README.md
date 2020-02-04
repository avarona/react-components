# React Components [![Netlify Status](https://api.netlify.com/api/v1/badges/7cbffe63-a9d1-4088-bc70-6692885ad263/deploy-status)](https://app.netlify.com/sites/react-components-lib/deploys)

[Check them out](https://react-components-lib.netlify.com/)

### `yarn start:storybook`

#### Example

```
yarn start:storybook
```

Run the app in development mode through storybook.

Create a component in `src/lib` and a story in `src/stories`

Open [http://localhost:9009](http://localhost:9009) to view it in the browser

### `yarn test`

#### Example

```
yarn test
yarn test:watch
yarn test:coverage
```

Launches the test runner.

Append `:watch` to run in interactive watch mode and `:coverage` to print out the test code coverage.

### `yarn build`

#### Example

```
yarn build
yarn build:storybook
yarn build:production
```

Builds the app in development or production environments.

- **`build`** bundles `src/lib` to the dev `build` folder
- **`build:production`** bundles `src/lib` to the prod `dist` folder
- **`build:storybook`** bundles `src/stories` to the `storybook-static` folder that is deployed to netlify

### `yarn eject`

This library is not yet ejected from CRA.

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
