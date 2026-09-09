# This Is Us: Boy Meets World

A static comic reader for a single comic. Built with React, TypeScript, Vite, and Tailwind CSS.

Comic pages are **not** stored in this repository. They live in the private [`dzmitrybakunovich/comic-pages`](https://github.com/dzmitrybakunovich/comic-pages) repo as `page-01.webp` … `page-15.webp`. The reader lists those files in `src/data/comic.ts` and loads them from `/comics/` at runtime.

For local development, copy the pages into `public/comics/` (gitignored). Deploy copies them in from the private repo before `vite build`, so GitHub Pages still serves the images.

## Local development

```bash
npm install
# Copy page-*.webp from the private comic-pages repo into public/comics/
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## GitHub Pages

Pushes to `main` deploy through `.github/workflows/deploy.yml`. In the repository settings, set Pages to **GitHub Actions**.

The workflow checks out `comic-pages` with the `COMIC_PAGES_DEPLOY_KEY` repository secret (read-only deploy key on the private repo).
