# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal site — two pages (home + profile) in two locales, with a light/dark theme — built with React Router 8 (framework mode), React 19, Tailwind CSS v4, TypeScript, and Vite. The visual design mirrors a Lovable reference project ("Noite suave" palette, Manrope).

## Commands

```bash
npm run dev          # Vite dev server (http://localhost:5173) — check /, /profile, /pt-br, /pt-br/perfil
npm run typecheck    # react-router typegen && tsc (regenerates ./+types/* route types first)
npm run lint         # eslint .   (lint:fix to autofix)
npm run format       # prettier --write .   (format:check to verify)
npm run test:run     # vitest run — use this, `npm test` is watch mode and never exits
npm run coverage     # vitest with v8 coverage (scoped to app/home/**)
npm run build        # react-router build → build/client (static prerendered output)

npx vitest run app/home/components/SiteLayout.test.tsx   # single test file
npx vitest run -t "<test name pattern>"                  # tests matching a name
npx wrangler dev                                         # serve build/client on the Workers runtime
```

The Husky pre-commit hook runs `lint-staged` (eslint --fix + prettier), then `npm run build` and `npm run test` — commits are slow and fail if the build or tests break.

## Architecture

**Content-driven, two locales, one component tree.** All text on the site lives in a Neon Postgres database (`DATABASE_URL` in `.env`, see `.env.example`). Schema is `db/schema.sql`: one table per section keyed by `(locale, position)` with `locale` ∈ `en` | `pt-br`, plus `ui_strings` holding the `UIStrings` object as JSONB per locale. `app/lib/resume.server.ts` `getContent(locale)` queries the tables the site renders and assembles a `SiteContent` (`app/home/types.ts`). Some older tables (`nav_items`, `behavioral_*`, `certifications`, `recommendations`, `projects`) are kept in the DB but no longer rendered; `db/backup/` holds JSON snapshots of earlier content.

```bash
npm run db:migrate                  # apply db/schema.sql (idempotent; does not ALTER existing tables)
npm run db:sql -- "<sql>"           # run SQL, print rows as JSON (no psql installed); -f <file> for scripts
npm run db:check                    # fail if en and pt-br drifted (positions, array lengths, ui_strings keys)
```

The database is the only source of content. Use the `update-content` skill for edits.

Four route modules — `app/routes/home.tsx` (`/`), `profile.tsx` (`/profile`), `home.pt-br.tsx` (`/pt-br`), `profile.pt-br.tsx` (`/pt-br/perfil`) — are near-identical: a `loader()` calling `getContent(locale)`, `meta()` from `pageMeta()` (`app/lib/seo.ts`), and a component rendering `HomePage` or `ProfilePage` (`app/home/components/`), both wrapped in `SiteLayout` (fixed header with the Início/Perfil pill nav, social icons, language switch and theme toggle; footer with the same toggles). URLs per locale live in `PATHS` (`app/lib/routes.ts`); `routeFromPath()` maps a pathname back to `{ locale, page }`. Loaders run only at build time (prerender), so **`npm run build` needs database access** and content changes in the DB go live only after a rebuild/deploy. `vite.config.ts` copies `DATABASE_URL` from `.env` into `process.env` for the loaders. Components never hardcode copy — headings, button labels, header and footer text all come from `data.ui` (`UIStrings`); only brand names/URLs (GitHub, LinkedIn, Medium) and the error screen copy in `root.tsx` live in code. Icons referenced from the DB are keys in `CONTENT_ICONS` (`app/home/icons.tsx`). Any content change must be made for **both** locales with identical structure (same rows and positions). The loader casts query results, so `tsc` does not catch shape drift — a column added to the schema must also be added to `types.ts`, the `SELECT` in `resume.server.ts`, and `TABLES` in `scripts/db-check.ts`.

**Rendering/deploy model.** `react-router.config.ts` sets `ssr: false` with `prerender: ["/", "/profile", "/pt-br", "/pt-br/perfil"]`, so the build emits static HTML for every page into `build/client`. That directory is deployed to Cloudflare Workers as static assets (`wrangler.jsonc`, SPA fallback). A new route must be added to `app/routes.ts`, the `prerender` list, `PATHS` and `SEO` (`app/lib/seo.ts`). The `Dockerfile` (react-router-serve) is a legacy alternative path.

**Locale-aware document head.** `app/root.tsx` `Layout` renders `<html lang>`, OG/Twitter tags and hreflang alternates for the current page from `SEO` (`app/lib/seo.ts`) — statically, so crawlers see them without JS. Route `meta()` reads the same map, so titles and OG tags cannot drift.

**Styling and theme.** Tailwind v4 with no config file — `app/app.css` defines the `oklch` design tokens (`:root` = dark "Noite suave", the default; `:root[data-theme="light"]` = light) and exposes them via `@theme inline` as semantic classes (`bg-background`, `bg-card`, `bg-footer`, `bg-pill`, `text-foreground`, `text-muted-foreground`, `text-primary`, `text-accent`, `border-border`…). Never use literal colors (`#hex`, `white`, `black`) — they would not follow the theme. The theme is toggled by `toggleTheme()` (`app/lib/theme.ts`), persisted in `localStorage`, and applied before first paint by an inline script in `root.tsx`. Theme-dependent markup uses the `light:` variant (e.g. the header logo swaps between `leandroaps_logo_dark.png` and `_light.png`) instead of React state, so prerendered HTML hydrates cleanly.

**Path aliases** (defined in `vite.config.ts`, `vitest.config.ts` and `tsconfig.json` — update all three): `@` → `app/`, `@assets` → `assets/`. Files in `public/` are served at the root (e.g. `/photo.jpg`); `assets/` is for imported images processed by `vite-plugin-image-optimizer`.

**Tests** are colocated `*.test.tsx` next to components (Vitest globals, jsdom, Testing Library; setup in `app/test/setup.ts`). Component tests render a `SiteContent` fixture (`app/test/fixtures.ts`) inside a `MemoryRouter`, so DB copy changes don't break them; structural changes to `UIStrings`/`SiteContent` require updating the fixture.

**TypeScript.** `tsc` is TypeScript 7 (installed as the `@typescript/native` alias), while the `typescript` package name points to `@typescript/typescript6` because typescript-eslint and other tools still need the TS 6 JavaScript API. Don't collapse these into a single `typescript` dependency until typescript-eslint supports TS 7.

## Project skills

`.claude/skills/` contains repo workflows — prefer them for these tasks:

- `update-content` — editing any site text (keeps both locales in sync in the DB, translation rules)
- `add-section` — adding a new section (types → DB table + loader + both locales → page component → test)
- `verify` — typecheck, lint, test:run, build before committing

## Notes

- `README.md` is outdated: it describes an `app/welcome/` directory, `data.ts`, and a `/resume` route that no longer exist. Trust the code.
