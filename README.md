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

The production build is configured to run under `/python101/` so it can be reverse-proxied from `https://docs.thanachot.xyz/python101/` without changing the browser URL. Local dev still runs from `/`.

GitHub Pages deployment is included in `.github/workflows/deploy.yml`.

Vercel deployment is configured in `vercel.json`:

- Build command: `bun run docs:build`
- Install command: `bun install --frozen-lockfile`
- Output directory: `docs/.vitepress/dist`
- Base path: `/python101/`
- Python101 project rewrites: `/python101/*` -> `/*`
- Social preview image: `docs/public/og-image.png`

The main `docs.thanachot.xyz` Vercel project needs matching reverse-proxy rewrites. Use `vercel.main-site.example.json` as the reference config:

```json
{
  "rewrites": [
    {
      "source": "/python101",
      "destination": "https://python101-three.vercel.app/python101/"
    },
    {
      "source": "/python101/:path*",
      "destination": "https://python101-three.vercel.app/python101/:path*"
    }
  ]
}
```

For Cloudflare Pages, use the same build command and output directory.
