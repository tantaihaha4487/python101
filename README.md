# Python101

Python101 is a beginner-friendly Python course built as a bilingual documentation site. The course is Thai-first, with a mirrored English track for learners who prefer English or want to compare terminology between both languages.

The site is built with VitePress and Bun. It focuses on clear explanations, small runnable examples, practice tasks, mini projects, and Mermaid diagrams that make programming flow easier to understand.

## Project Goals

- Teach Python from the ground up for first-time programmers
- Keep Thai and English lessons structurally aligned
- Explain concepts with examples, exercises, and visual diagrams
- Provide a lightweight docs site that is easy to build, deploy, and maintain
- Support deployment under the `/python101/` base path

## Tech Stack

- VitePress for the documentation site
- Bun for package management and scripts
- Mermaid for diagrams inside lessons
- GitHub Pages, Vercel, or Cloudflare Pages for static hosting

## Project Structure

```text
docs/
  .vitepress/
    config.mts          # Site config, navigation, sidebar, base path
    theme/              # Custom theme entry and CSS
  th/                   # Thai lessons
  en/                   # English lessons
  public/               # Static assets served by VitePress
```

Lesson order is managed in `docs/.vitepress/config.mts`. When adding a new lesson, add the Thai and English pages and update the shared lesson list so both tracks stay mirrored.

## Install

```bash
bun install
```

## Develop

```bash
bun run docs:dev
```

The local dev server runs from `/`.

## Build

```bash
bun run docs:build
```

The production build outputs static files to `docs/.vitepress/dist`.

## Preview

```bash
bun run docs:preview
```

## Content Workflow

1. Add or edit lesson content in `docs/th/` and `docs/en/`.
2. Keep both language tracks structurally mirrored where possible.
3. Update `docs/.vitepress/config.mts` when adding new lessons or changing navigation.
4. Put public assets in `docs/public/` so they work with the configured base path.
5. Run `bun run docs:build` before committing changes.

## Deploy

The production build is configured to run under `/python101/` so it can be reverse-proxied from `https://docs.thanachot.xyz/python101/` without changing the browser URL. Local development still runs from `/`.

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
