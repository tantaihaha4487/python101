# Python101

Detailed beginner Python course in Thai first, followed by English. Built with VitePress and Bun.

The lessons include Mermaid diagrams for beginner-friendly explanations of control flow and the learning roadmap.

## Install

```bash
bun install
```

## Develop

```bash
bun run docs:dev
```

## Build

```bash
bun run docs:build
```

## Preview

```bash
bun run docs:preview
```

## Deploy

GitHub Pages deployment is included in `.github/workflows/deploy.yml`.

Vercel deployment is configured in `vercel.json`:

- Build command: `bun run docs:build`
- Install command: `bun install --frozen-lockfile`
- Output directory: `docs/.vitepress/dist`

For Cloudflare Pages, use the same build command and output directory.
