# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

A single-page personal portfolio site for Manik Chaudhary, built with Next.js 14 (App Router) and originally scaffolded via v0.dev. The entire site is one page (`app/page.tsx`) composed of section components rendered in sequence.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run build    # production build
npm run start    # run production build
npm run lint     # next lint
```

There is no test suite configured in this repo.

Note: both `package-lock.json` and `pnpm-lock.yaml` are present — check which one is actually in use before adding dependencies, and update only that one to avoid diverging lockfiles.

## Architecture

- **Single-page composition**: `app/page.tsx` renders one long scrolling page by stacking section components in order: `Hero → About → Experience → Projects → Skills → Certifications → Contact`, each wrapped in shared background layers (`ParticleBackground`, `FloatingClouds`) and `Navigation`. To add/reorder/remove a section of the site, edit this file; each section itself lives in its own file under `components/`.
- **Section components are self-contained**: each file in `components/*.tsx` (e.g. `hero.tsx`, `about.tsx`, `experience.tsx`) owns its own content, layout, and Framer Motion animation logic. Content (bio text, job history, project descriptions, skill lists) is hardcoded inline in these components rather than pulled from a CMS or data file — update the relevant component directly to change copy.
- **No client-side routing**: navigation between sections (`components/navigation.tsx`) works via in-page anchor scrolling (`#home`, `#about`, etc.), not Next.js routes. There's effectively only one route in `app/`.
- **Styling**: Tailwind CSS with shadcn/ui conventions (`components.json`, `components/ui/*`). Design tokens (colors, radius) are CSS variables consumed via `tailwind.config.ts`; dark background/foreground colors are also frequently hardcoded as inline hex styles (e.g. `#0e0f0f`, `#5eead4`, `#facc15`) directly in section components rather than solely through Tailwind theme classes — match this pattern when touching visual styling in existing sections.
- **`components/ui/`** is the standard shadcn/ui primitive library (accordion, dialog, dropdown, etc.) generated via the shadcn CLI per `components.json`. Most of these are not currently used by the portfolio sections but are available scaffolding — treat them as generated/vendor code rather than hand-edit targets.
- **Decorative/background components** (`particle-background.tsx`, `floating-clouds.tsx`) are canvas/DOM animations mounted once at the page root and rendered behind all content (`z-0`), independent of section content.
- **Static assets** (resume PDF, certificate PDF, placeholder images) live in `public/` and are referenced directly by path (e.g. the Hero section links to `/Manik_Chaudhary_resume.pdf`).

## Build configuration notes

- `next.config.mjs` disables ESLint and TypeScript error checking during `next build` (`ignoreDuringBuilds` / `ignoreBuildErrors`) and disables Next's image optimization (`images.unoptimized`). Builds will succeed even with type/lint errors present — don't rely on `npm run build` as a correctness check.
