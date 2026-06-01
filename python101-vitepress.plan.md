# Plan: Build `python101` beginner course with VitePress + Bun

## Goal
Create a beginner-friendly Python learning website using VitePress, managed with Bun. The site should present Thai content first, followed by English content. Thai pages should use the Kanit font and include full beginner-level explanations, examples, exercises, and projects.

## Current state
- Workspace: `/home/mashiro/Development/JavaScript/python101`
- Directory is currently empty.
- No package manager files, VitePress config, docs, or source files exist yet.

## Implementation approach

### 1. Initialize the Bun + VitePress project
- Create a minimal Bun project with `package.json` and a Bun lockfile.
- Add VitePress as a dev dependency.
- Add scripts: `docs:dev`, `docs:build`, and `docs:preview`.

Expected implementation commands:
```bash
bun init -y
bun add -d vitepress
```

### 2. Create the VitePress structure
Create:
```text
docs/
  index.md
  th/
    index.md
    setup.md
    basics.md
    input-output.md
    conditions.md
    loops.md
    data-structures.md
    functions.md
    files.md
    errors.md
    modules.md
    oop.md
    projects.md
    roadmap.md
  en/
    index.md
    setup.md
    basics.md
    input-output.md
    conditions.md
    loops.md
    data-structures.md
    functions.md
    files.md
    errors.md
    modules.md
    oop.md
    projects.md
    roadmap.md
  .vitepress/
    config.mts
    theme/
      index.ts
      custom.css
```

### 3. Configure Thai first, English second
- Landing page introduces Thai first, then English.
- Nav order: Thai, then English.
- Sidebars should keep Thai course material before English.
- Use `/th/` and `/en/` paths unless VitePress locale config is clearly better during implementation.

### 4. Add Kanit font for Thai
- Import Kanit from Google Fonts in `docs/.vitepress/theme/custom.css`.
- Apply `Kanit` to normal text, headings, nav, and sidebar.
- Keep code blocks monospace.

CSS direction:
```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap');

:root {
  --vp-font-family-base: 'Kanit', system-ui, sans-serif;
}

code, pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
}
```

### 5. Write full beginner content
Each lesson page should include:
- Simple explanation
- Why the topic matters
- Syntax examples
- Runnable code examples
- Common beginner mistakes
- Practice exercises
- Mini challenge
- Summary

Thai pages should be the primary detailed version. English pages should mirror the Thai structure and remain beginner-friendly.

### 6. Course content outline
Thai first:
1. Setup: Python, VS Code, terminal, running `.py` files
2. Basics: variables, strings, numbers, booleans, comments, `print()`
3. Input/output: `input()`, type conversion, simple calculator
4. Conditions: `if`, `elif`, `else`, comparisons, logical operators
5. Loops: `for`, `while`, `range()`, `break`, `continue`
6. Data structures: lists, tuples, dictionaries, sets
7. Functions: `def`, parameters, return values, scope
8. Files: reading/writing files, `with open(...)`
9. Errors: `try`, `except`, common beginner errors
10. Modules: imports, built-in modules, creating modules
11. OOP: classes, objects, attributes, methods, `__init__`
12. Projects: guided beginner projects
13. Roadmap: 4-week learning schedule and next steps

English section should follow the same order after Thai.

### 7. Beginner projects
Include detailed projects:
- Number guessing game
- Calculator
- To-do list
- Password generator
- Rock paper scissors
- Contact book
- Quiz app

Each project should include goal, concepts used, step-by-step guide, starter code, final code, and extra challenges.

### 8. VitePress polish
- Site title: `Python101`.
- Description: beginner Python course in Thai and English.
- Enable local search.
- Add previous/next page links.
- Add clean Thai and English sidebars.
- Add homepage cards linking to both tracks.

### 9. Validation
Verify:
- `bun install` succeeds.
- `bun run docs:dev` starts locally.
- `bun run docs:build` completes without errors.
- Thai appears before English in navigation.
- Kanit applies to Thai text.
- Code blocks remain monospace.
- All internal links work.

## Open questions
- Display title: `python101`, `Python101`, or something else?
- Should English be equally detailed, or should Thai be more detailed?
- Should deployment be included now, or local-only first?

## Recommended defaults
- Use `Python101` as the display title.
- Make Thai full-detail and English complete but concise.
- Build local docs first; add deployment later if requested.
