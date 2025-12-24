## Table of contents

- [Overview](#overview)
  - [Scenario](#scenario)
- [Built with](#built-with)
  - [React + Typescript + Vite](#react-typescript-vite)
  - [React Compiler](#react-compiler)
  - [Expanding the ESLint configuration](#expanding-the-eSLint-configuration)
- [Reflection](#reflection)
- [Author](#author)


## Overview

SBA - Recipe Discovery App

### Scenario
For this project, you will build a client-side “Recipe Discovery” application. This project will serve as a comprehensive demonstration of your mastery of advanced React concepts. The application will allow users to browse recipes by category, search for specific recipes, view detailed recipe information, and manage a personal list of “favorite” recipes.

You will use a free, public API for recipe data and implement a varietys of hooks, state management patterns, and routing solutions to create a feature-rich, single-page application (SPA).


## Built with
# React + Vite

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
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
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
## Reflection
  -- The most challenging part of the project for you.
  -- A brief explanation of a design decision you made (e.g., why you structured a hook a certain way, how you decided to manage a piece of state).

The most challenging part of this project was managing state across multiple concerns—routing, context, and persistence—while keeping the data flow predictable. Synchronizing URL parameters with Context state and localStorage required careful reasoning about where state should live and when it should change. Early iterations exposed issues like cascading renders, duplicated logic, and mismatched data shapes, which pushed me to slow down and be more deliberate in my architectural decisions rather than applying quick fixes.

A key design decision I made was to centralize domain logic inside Context providers and keep routed components as thin as possible. Components use useParams only to extract identifiers, while providers handle fetching, normalization, and persistence. This separation reduced complexity, prevented redundant effects, and made the application easier to debug and extend. The same principle guided my favorites implementation: Context is the source of truth, while localStorage is treated strictly as a persistence layer, updated only during intentional state changes.

Throughout the project, I was also intentional with my Git workflow. I made focused, descriptive commits that reflected a single logical change—such as refactoring context boundaries, fixing state synchronization, or normalizing API data—rather than bundling multiple concerns together. This made it easier to trace bugs, roll back changes, and reason about how the project evolved over time. Being disciplined with commits reinforced clearer thinking in my code and improved the overall maintainability of the project.

## Author

Patrice(Rice 🍚) Maxwell 
([thegrainofrice.com](https://www.thegrainofrice.com/))
([Linkedin](https://www.linkedin.com/in/patrice-maxwell))
