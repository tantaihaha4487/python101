# AGENTS.md

## Project Shape
- This is a Bun-managed VitePress docs site, not a Python package despite the course content.
- Main content lives in `docs/th/` and `docs/en/`; keep the Thai and English tracks structurally mirrored when adding lessons.
- Navigation/sidebar lesson order is centralized in `docs/.vitepress/config.mts` via the `lessons` array, so new lesson pages also need config updates.
- The theme is only `docs/.vitepress/theme/index.ts` plus `custom.css`; Mermaid styling and the Kanit font are configured there.

## Commands
- Install with `bun install` locally; CI and Vercel use `bun install --frozen-lockfile`.
- Dev server: `bun run docs:dev`.
- Production build: `bun run docs:build`.
- Preview built site: `bun run docs:preview`.
- There are no repo scripts for lint, tests, or typecheck; use `bun run docs:build` as the main verification step.

## Deploy Gotchas
- Production builds use base path `/python101/` because `docs/.vitepress/config.mts` sets `base` from `NODE_ENV === 'production'`; local dev uses `/`.
- Static output is `docs/.vitepress/dist` for GitHub Pages, Vercel, and Cloudflare Pages.
- GitHub Pages deploy is `.github/workflows/deploy.yml` on pushes to `main`, running `bun install --frozen-lockfile` then `bun run docs:build`.
- Vercel rewrites `/python101` and `/python101/:path*` to the app root in `vercel.json`; the parent docs site reverse-proxy example is `vercel.main-site.example.json`.

## Content Notes
- The course is Thai-first with an English track; preserve beginner-friendly explanations, examples, exercises, projects, and Mermaid diagrams where relevant.
- Public assets referenced from config or docs should live under `docs/public/` so VitePress serves them from the configured base path.
