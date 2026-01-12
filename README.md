# React Atomic States Test

- Plain React (useSyncExternalStore)
  - state can be defined outside of react
  - useful for medium states, without context or any external library
  - can have selectors for performant re-renders
  - has automatic unsub for selectors, handled by the hook itself
  - cons
    - we have to manage listeners (simple and same logic always)
    - trigger emit event carefully (for all state mutations) (but react will only re-render if getSnapshot reference/value changes)
- Valtio (proxy object)
  - seems simple with inbuilt render optimization
  - would be nice for medium level states
  - has eslint: `eslint-plugin-valtio`
- Jotai (atomic)
  - simple but requires `const store = getDefaultStore(); store.set(categoriesAtom, categoriesResponse.data)` for setting atom state outside of components
- Zustand (redux-like)
  - can be made to work almost like rtk
  - selectors, reducers, actions, async actions
  - but without the need for registering as global slice key; as independent states
  - cons:
    - selectors can only be used inside template
    - they cannot be used in action handlers, async action handlers
    - initialization of state from props is still problematic
      - have to sync with a useEffect (same as context)
- PreactJS Signals
  - seems to use some transformer to change render behavior
  - Requires transform babel plugin
  - or `useSignals()` from `@preact/signals-react/runtime` in every component that uses signals

```js
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ["babel-plugin-react-compiler"],
          ["module:@preact/signals-react-transform"],
        ],
      },
    }),
  ],
});
```

- Stats Comparison: https://npmtrends.com/@preact/signals-core-vs-jotai-vs-recoil-vs-valtio-vs-zustand

## Use cases

- Pros
  - use as alternate to Context or large hooks and declare state outside of component files
- Cons
  - not able to use hooks, selectors, dispatch (useRouter, selectBrokerName, useDispatch, etc) in non-component files
    - but if we choose to use as complete state management, one store can access-values/trigger-actions from other stores

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
