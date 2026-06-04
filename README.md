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

## SEO indexing

The site supports IndexNow for faster search engine discovery of changed URLs.

- The IndexNow verification key is hosted from `public/e16d23bc33b94802ae3e36f59bea8a6a.txt` and deploys to `https://extrabrain.app/e16d23bc33b94802ae3e36f59bea8a6a.txt`.
- After GitHub Pages deploys, `.github/workflows/deploy-pages.yml` fetches `https://extrabrain.app/sitemap.xml` and submits the sitemap URLs to `https://api.indexnow.org/IndexNow`.
- Use Bing Webmaster Tools to verify submitted URLs are received and monitor indexing status.
