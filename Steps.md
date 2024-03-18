# Steps used to create this Template

## 1. Create Vue project

```bash
npm create vue@latest
```

Options selected:

- Project name: `vue-template`
- Add TypeScript? `Yes`
- Add JSX Support? `No`
- Add Vue Router for Single Page Application development? `Yes`
- Add Pinia for state management? `Yes`
- Add Vitest for Unit Testing? `Yes`
- Add an End-to-End Testing Solution? `Playwright`
- Add ESLint for code quality? `Yes`
- Add Prettier for code formatting? `Yes`

```bash
npm install
```

```bash
npm run format
```

```bash
npm run dev
```

## 2. Refactor router

This was done to have the routing names easily accessible with types.

We extract the route basic info to its own file, so we can use it to centralize the routes information, without needing to rely on strings. This also allow for easy update of routes path or name, without needing to update everywhere they are used.

See `/src/router/routes.ts`, `/src/router/index.ts` and `/src/App.vue` for reference.
