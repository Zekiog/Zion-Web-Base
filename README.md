# Zion Web-Base

Version 0.1.0-alpha.

This is a Vite, React, and TypeScript scaffold. The application source is not in the repository. There is no `src/` directory. `index.html` loads `/src/main.tsx`, so `npm run dev` does not serve an application.

There is no `public/` directory, no `docs/` directory, and no `.env.example`. The GitHub homepage field is empty, and GitHub Pages is not enabled. No site URL is stored in these files.

## What is here

- `index.html` — HTML shell. The script tag points at `/src/main.tsx`. The favicon link points at `/vite.svg`, which is not in the repository.
- `package.json` — scripts and dependencies.
- `vite.config.ts` — Vite config. The dev server port is 5173. Aliases point at `src/` paths that are not in the tree.
- `tsconfig.json` — TypeScript config. `include` is `src`.
- `tsconfig.node.json` — TypeScript config for `vite.config.ts`.
- `tailwind.config.js` — Tailwind. Content globs are `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`.
- `postcss.config.js` — PostCSS with Tailwind and Autoprefixer.
- `LICENSE` — MIT. Copyright 2025 Mehmet Zeki Oguz.
- `CHANGELOG.md`, `CONTRIBUTING.md`, `SECURITY.md`
- `.github/workflows/ci.yml` — runs on push and pull request to `main`, on Node 18 and 20.
- `.github/workflows/lint.yml`, `audit.yml`, and `repo-health-monitor.yml`
- `.github/social-preview.png`

## Dependencies

Declared in `package.json`:

- `react`, `react-dom`, `react-router-dom`, `zustand`, `axios`
- `vite`, `typescript`, `tailwindcss`, `postcss`, `autoprefixer`
- `eslint`, `@typescript-eslint/eslint-plugin`, `@typescript-eslint/parser`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`
- `@vitejs/plugin-react`, `@types/react`, `@types/react-dom`, `@types/node`

`package.json` does not list a Zano client library. The repository has no ESLint config file, no Prettier config, no test script, and no lockfile.

## Scripts

```bash
git clone https://github.com/Zekiog/Zion-Web-Base.git
cd Zion-Web-Base
npm install
```

- `npm run dev` runs `vite`. `src/main.tsx` is missing, so this does not serve an application.
- `npm run build` runs `tsc && vite build`. `tsc` includes `src`, which is missing.
- `npm run lint` runs ESLint. There is no ESLint config file in the repository.
- `npm run preview` runs `vite preview`.

`ci.yml` also runs `npm test`. `package.json` has no `test` script. The workflow runs `npm run type-check` only when that script exists. It does not.

## Repository

https://github.com/Zekiog/Zion-Web-Base
