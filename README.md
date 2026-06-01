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

GitHub Pages deployment is included in `.github/workflows/deploy.yml`. For Cloudflare Pages or Vercel, use:

- Build command: `bun run docs:build`
- Output directory: `docs/.vitepress/dist`
