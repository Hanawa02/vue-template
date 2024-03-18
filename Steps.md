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

## 3. Add Tailwind

Following [Tailwind guide for Vite](https://tailwindcss.com/docs/guides/vite):

```bash
npm install -D tailwindcss postcss autoprefixer
```

```bash
npx tailwindcss init -p
```

Update `tailwind.config.js` with

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {}
  },
  plugins: []
}
```

## 4. Add Storybook

Following [Storybook Guide for Vue with Vite](https://storybook.js.org/docs/get-started/vue3-vite)

```bash
npx storybook@latest init
```

Replace config in `/.storybook/main.ts` for `docs` to enable auto generating a docs page for the stories:

```ts
docs: {
  autodocs: true
}
```

Removed the `stories` folder with demo component and stories.

Added css styles to `./storybook/preview.ts`:

```ts
// This is needed to apply tailwind and other styles to the stories preview
import '../src/assets/main.css'
```

### 5. Add Vue Fire

Following [Vue Fire Instructions]()

```bash
npm i vuefire firebase
```

create `./src/database/fireabase.ts`

update `./main.ts` with:

```ts
// ...
import { VueFire } from 'vuefire'
import { firebaseApp } from './database/firebase'
// ...

const app = createApp(App)
// ...

app.use(VueFire, {
  firebaseApp
})
```
