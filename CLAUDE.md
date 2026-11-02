# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

Personal portfolio site (single bilingual landing page) built with React Router 8 (framework mode), React 19, Tailwind CSS v4, TypeScript, and Vite.

## Commands

```bash
npm run dev          # Vite dev server (http://localhost:5173) — check both / and /pt-br
npm run typecheck    # react-router typegen && tsc (regenerates ./+types/* route types first)
npm run lint         # eslint .   (lint:fix to autofix)
npm run format       # prettier --write .   (format:check to verify)
npm run test:run     # vitest run — use this, `npm test` is watch mode and never exits
npm run coverage     # vitest with v8 coverage (scoped to app/home/**)
npm run build        # react-router build → build/client (static prerendered output)

npx vitest run app/home/components/NavBar.test.tsx   # single test file
npx vitest run -t "<test name pattern>"              # tests matching a name
npx wrangler dev                                     # serve build/client on the Workers runtime
```

The Husky pre-commit hook runs `lint-staged` (eslint --fix + prettier), then `npm run build` and `npm run test` — commits are slow and fail if the build or tests break.

## Architecture

**Content-driven, two locales, one component tree.** All text on the site lives in a Neon Postgres database (`DATABASE_URL` in `.env`, see `.env.example`). Schema is `db/schema.sql`: one table per section keyed by `(locale, position)` with `locale` ∈ `en` | `pt-br`, plus `ui_strings` holding the `UIStrings` object as JSONB per locale. `app/lib/resume.server.ts` `getResume(locale)` queries every table and assembles a `ResumeData` (`app/home/types.ts`).

```bash
npm run db:migrate                  # apply db/schema.sql (idempotent; does not ALTER existing tables)
npm run db:sql -- "<sql>"           # run SQL, print rows as JSON (no psql installed); -f <file> for scripts
npm run db:check                    # fail if en and pt-br drifted (positions, array lengths, ui_strings keys)
```

The database is the only source of content (the old `app/content/*.json` files were removed; they remain in git history). Use the `update-content` skill for edits.

Both route modules (`app/routes/home.tsx` → `/`, `home.pt-br.tsx` → `/pt-br`) are near-identical: a `loader()` calling `getResume(...)`, a locale-specific `meta()`, and a component rendering `<Welcome data={loaderData} />` from `app/home/home.tsx`. Loaders run only at build time (prerender), so **`npm run build` needs database access** and content changes in the DB go live only after a rebuild/deploy. `vite.config.ts` copies `DATABASE_URL` from `.env` into `process.env` for the loaders. `Welcome` composes every section in page order, passing each one its slice of data plus its UI strings from `data.ui` (`UIStrings`). Components never hardcode copy — headings, button labels, nav items, footer text all come from `ui`/`nav` in the JSON. Any content change must be made for **both** locales with identical structure (same rows and positions). The loader casts query results, so `tsc` no longer catches shape drift — a column added to the schema must also be added to `types.ts`, the `SELECT` in `resume.server.ts`, and `TABLES` in `scripts/db-check.ts`.

**Rendering/deploy model.** `react-router.config.ts` sets `ssr: false` with `prerender: ["/", "/pt-br"]`, so the build emits static HTML for both locales into `build/client`. That directory is deployed to Cloudflare Workers as static assets (`wrangler.jsonc`, SPA fallback). A new route must be added to both `app/routes.ts` and the `prerender` list. The `Dockerfile` (react-router-serve) is a legacy alternative path.

**Locale-aware document head.** `app/root.tsx` `Layout` picks OG/Twitter tags, `<html lang>`, and hreflang alternates from the pathname (`/pt-br*` → pt-BR). These are hardcoded on purpose so crawlers see them without JS; keep them in sync with the route `meta()` titles/descriptions when those change.

**Styling.** Tailwind v4 with no config file — `@import "tailwindcss"` plus globals in `app/app.css`. Scroll-reveal animations use the `.animate-on-scroll` / `.is-visible` classes, toggled by `useScrollAnimation()` (`app/home/hooks.ts`), called once in `Welcome`.

**Path aliases** (defined in both `vite.config.ts` and `vitest.config.ts` — update both): `@` → `app/`, `@assets` → `assets/`, `@hooks` → `app/home/hooks`, `@utils` → `app/home/utils`. Files in `public/` are served at the root (e.g. `/photo.jpg`); `assets/` is for imported images processed by `vite-plugin-image-optimizer`.

**Tests** are colocated `*.test.tsx` next to components (Vitest globals, jsdom, Testing Library; setup in `app/test/setup.ts`). Some tests assert on content strings, so copy changes may require fixture updates.

## Project skills

`.claude/skills/` contains repo workflows — prefer them for these tasks:

- `update-content` — editing any site text (keeps both locale JSONs in sync, translation rules)
- `add-section` — adding a new page section (types → both JSONs → component → test → `home.tsx` → nav)
- `verify` — typecheck, lint, test:run, build before committing

## Notes

- `README.md` is partially outdated: it describes an `app/welcome/` directory, `data.ts`, and a `/resume` route that no longer exist. Trust the code.
