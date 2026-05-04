# ExtraBrain Website and Help Center

This repository now serves the public `extrabrain.app` website and the static help center at `extrabrain.app/help/` from a single Astro codebase.

## Stack

- `Astro` for the marketing site and static build
- `Starlight` for the help center under `/help/`
- GitHub Pages for deployment

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build outputs to `dist/`.

## Content

- Marketing homepage: `src/pages/index.astro`
- Shared product facts, page registry, and schema helpers: `src/data/product.ts`
- Dynamic marketing pages: `src/pages/[...slug].astro`
- Help center articles: `src/content/docs/help`
- Public assets: `public/assets`
- Discovery operations checklist: `docs/discovery-ops-checklist.md`
