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

Plain Vite + React (JSX, no TypeScript) with Tailwind for styling. Animation is split across two
libraries with distinct roles (see below). No router, no state management, no data layer — it's a
static one-pager.

`src/App.jsx` composes the page as a fixed sequence, each section owning its own copy, layout, and
local animation state (no shared component library or prop-driven composition between sections):

```
TargetCursor → Header → SectionNav → Hero → Intro → Trabalhos → Capacidades → Metodo → Contato → Footer
```

Add new sections the same way — a new file in `src/components/`, imported and mounted in
`App.jsx`.

### Animation stack

Two independent animation systems are used for different purposes — don't mix them up when adding
new motion:

- **framer-motion** — section entrance animations, via `motion.*` components with
  `initial`/`animate` props (fade + slight vertical translate, staggered via `delay`). Default
  choice for any new content that animates in on scroll/mount.
- **gsap** (+ `ScrollTrigger`) — used where framer-motion isn't enough: `TargetCursor.jsx` (custom
  cursor that snaps to `.cursor-target` elements — add that class to any element that should
  attract the cursor) and `PyramidRoute.jsx` (scroll-triggered timeline animation using
  `gsap.matchMedia()` gated on `prefers-reduced-motion: no-preference`).

`SectionBackground.jsx` wraps `PixelBlast.jsx`, a three.js/`postprocessing` WebGL pixel-particle
background effect. It's mounted per-section (Intro, Trabalhos, Capacidades, Metodo, Contato,
Footer) and lazy-activates via `IntersectionObserver` — it only renders the WebGL canvas once the
section scrolls into view, so don't remove that gating when reusing it. Pass `color`/`className`
to match the section's tone; the WebGL context is otherwise expensive, so avoid mounting more than
one active instance at a time.

### Design tokens

All color/font/animation tokens are defined in `tailwind.config.js` and consumed via Tailwind
utility classes — don't hardcode hex values in components:

- **Colors**: `asphalt` (background, with `light`/`surface`/`border` variants), `chalk` (text,
  with `muted`/`faint` variants), `lane` (accent pink/red, with `dim`), `brake` (accent orange).
- **Fonts**: `font-display` (Space Grotesk headlines), `font-body` (Inter), `font-mono` (IBM Plex
  Mono, used for eyebrows/labels/uppercase tracking-wide text). Loaded via Google Fonts in
  `index.html`.
- **Motif utilities**: `.lane-strip` (dashed lane-marking bar) and `animate-lane-move` /
  `animate-marquee` keyframe animations in `src/index.css` / `tailwind.config.js` — reused for the
  signature scrolling divider (see `Hero.jsx`).

Global base styles (scrollbar hiding, selection color, focus ring, `prefers-reduced-motion`
handling) live in `src/index.css` under `@layer base`.

## Known gaps (see README)

- `Trabalhos.jsx` case cards are placeholder text — no client artwork linked yet.
