# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

BR7 — a single-page marketing site (Vite + React + Tailwind) for a branding/marketing studio.
Reconstructed in code from a reference site (not a pixel-perfect clone); the visual concept is a
"highway route" motif — BR-01…BR-08 codes for capabilities, an animated lane-strip divider, and
a multi-family type system (see Design tokens).

## Commands

```bash
npm install       # install deps
npm run dev        # start dev server at http://localhost:5173
npm run build       # production build to dist/
npm run preview      # preview the production build
```

There is no test suite, linter, or type checker configured to run in CI. `tsconfig.json` exists
only to let editors typecheck the handful of `.tsx` files (`checkJs: false`, `noEmit: true`) —
it isn't wired into any script.

## Architecture

Vite + React, mixing plain JSX and a few `.tsx` files (no project-wide TypeScript migration —
new components can be written in either). Tailwind for styling. No router, no state management,
no data layer — it's a static one-pager.

`src/App.jsx` composes the page as a fixed sequence, each section owning its own copy, layout, and
local animation state (no shared component library or prop-driven composition between sections).
Current mounted order:

```
IntroLoader → Header → SectionNav → Hero → Manifesto → Trabalhos → Feed → Capacidades
  → Posicionamento → Contato → Footer
```

`IntroLoader` gates the page behind a first-visit progress animation (sets
`documentElement.style.overflow = hidden` until done). Several sections (`Intro`, `Metodo`,
`TargetCursor`, `Clients`) are imported/present in the tree but currently commented out in
`App.jsx` — check there before assuming a component is live. Add new sections the same way — a
new file in `src/components/`, imported and mounted in `App.jsx`.

### Animation stack

Three complementary tools are used for different purposes — don't mix them up when adding new
motion:

- **framer-motion** — section entrance animations, via `motion.*` components with
  `initial`/`animate` props (fade + slight vertical translate, staggered via `delay`). Default
  choice for any new content that animates in on scroll/mount. Also used for `IntroLoader`'s
  `AnimatePresence` exit.
- **gsap** (+ `ScrollTrigger`, `SplitText`) — used where framer-motion isn't enough:
  `TargetCursor.jsx` (custom cursor that snaps to `.cursor-target` elements — add that class to
  any element that should attract the cursor), `PyramidRoute.jsx` (scroll-triggered timeline
  animation using `gsap.matchMedia()` gated on `prefers-reduced-motion: no-preference`), and
  `SplitReveal.jsx` (reusable per-character/word scroll reveal wrapper — pass `as` for the tag,
  `delay`/`stagger`/`start` to tune timing).
- **Manual rAF loop** — `Feed.jsx`'s auto-scrolling client marquee drives its own
  `requestAnimationFrame` loop (constants `SPEED`, `RESUME_DELAY`) rather than using gsap/framer,
  since it needs continuous pause-on-hover/interaction control over a duplicated track.

`SectionBackground.jsx` wraps `PixelBlast.jsx`, a three.js/`postprocessing` WebGL pixel-particle
background effect. It's mounted per-section and lazy-activates via `IntersectionObserver` — it
only renders the WebGL canvas once the section scrolls into view, so don't remove that gating
when reusing it. Pass `color`/`className` to match the section's tone; the WebGL context is
otherwise expensive, so avoid mounting more than one active instance at a time.

### Design tokens

All color/font/animation tokens are defined in `tailwind.config.js` and consumed via Tailwind
utility classes — don't hardcode hex values in components:

- **Colors**: `asphalt` (background, with `light`/`surface`/`border` variants), `chalk` (text on
  dark backgrounds, with `muted`/`faint` variants), `ink` (inverted counterpart to `chalk` — text
  tones for sections on a light background, with `muted`/`faint`), `lane` (accent pink/red, with
  `dim`), `brake` (accent orange).
- **Fonts**: `font-display` (Archivo, standing in for Helvetica Now Display Black),
  `font-grotesk` (Space Grotesk), `font-body` (Inter), `font-mono` (IBM Plex Mono — used for
  eyebrows/labels/uppercase tracking-wide text), `font-serif` (Playfair Display). Loaded via
  Google Fonts in `index.html`.
- **Motif utilities**: `.lane-strip` (dashed lane-marking bar, via the `lane-dash` background
  image) and `animate-lane-move` / `animate-marquee` / `animate-stroke-shimmer` keyframe
  animations — reused for the signature scrolling divider (see `Hero.jsx`) and text-reveal
  effects.

Global base styles (scrollbar hiding, selection color, focus ring, `prefers-reduced-motion`
handling) live in `src/index.css` under `@layer base`.

## Known gaps (see README)

- `Trabalhos.jsx` case cards are placeholder text — no client artwork linked yet.
- `src/feedtest.jsx` is a standalone entry point for isolating `Feed.jsx` during development; it's
  not wired into `index.html`/`main.jsx` and isn't part of the built page.
