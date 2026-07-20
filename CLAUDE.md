# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BR7 — a single-page marketing site (Vite + React + Tailwind) for a branding/marketing studio.
Reconstructed in code from a reference site (not a pixel-perfect clone); the visual concept is a
"highway route" motif — BR-01…BR-08 codes for capabilities, an animated lane-strip divider, and
a Space Grotesk + Inter + IBM Plex Mono type system.

## Commands

```bash
npm install       # install deps
npm run dev        # start dev server at http://localhost:5173
npm run build       # production build to dist/
npm run preview      # preview the production build
```

There is no test suite, linter, or type checker configured in this repo.

## Architecture

Plain Vite + React (JSX, no TypeScript) with Tailwind for styling and framer-motion for animation.
No router, no state management, no data layer — it's a static one-pager.

`src/App.jsx` composes the page as a fixed sequence of section components, each owning its own
copy and layout:

```
Header → SectionNav → Hero → Intro → Trabalhos → Capacidades → Metodo → Contato → Footer
```

Each component in `src/components/` is self-contained: content, styling, and any local animation
state live directly in the file (no shared component library or prop-driven composition between
sections). Add new sections the same way — a new file in `src/components/`, imported and mounted
in `App.jsx`.

### Design tokens

All color/font/animation tokens are defined in `tailwind.config.js` and consumed via Tailwind
utility classes — don't hardcode hex values in components:

- **Colors**: `asphalt` (background, with `light`/`surface`/`border` variants), `chalk` (text,
  with `muted`/`faint` variants), `lane` (accent yellow, with `dim`), `brake` (accent red).
- **Fonts**: `font-display` (Space Grotesk headlines), `font-body` (Inter), `font-mono` (IBM Plex
  Mono, used for eyebrows/labels/uppercase tracking-wide text). Loaded via Google Fonts in
  `index.html`.
- **Motif utilities**: `.lane-strip` (dashed lane-marking bar) and `animate-lane-move` /
  `animate-marquee` keyframe animations in `src/index.css` / `tailwind.config.js` — reused for the
  signature scrolling divider (see `Hero.jsx`).

Global base styles (scrollbar hiding, selection color, focus ring, `prefers-reduced-motion`
handling) live in `src/index.css` under `@layer base`.

### Animation conventions

Section entrance animations use framer-motion `motion.*` components with `initial`/`animate`
props (fade + slight vertical translate, staggered via `delay`) rather than CSS transitions —
follow this pattern for new animated content instead of introducing a different animation
approach.

## Known gaps (see README)

- `Trabalhos.jsx` case cards are placeholder text — no client artwork linked yet.
