---
name: add-section
description: Add a new content section to the site (e.g. Awards, Talks, Publications) on the home or profile page. Walks through the full chain — types, database table + loader + content for both locales, page component, and test.
---

# Add a new section

The site has two pages per locale — home (`HomePage.tsx`) and profile (`ProfilePage.tsx`), both wrapped in `SiteLayout` — and every section follows the same data flow. A new section touches **five places**; missing any one breaks typecheck or leaves a locale untranslated.

## 1. Types — `app/home/types.ts`

- Add an interface for the section's item shape (e.g. `Award`).
- Add the data field to `SiteContent` (e.g. `awards: Award[];`).
- Add the section's UI strings: on the profile, a `SectionHeading` (`label` like `"05 — Prêmios"` + `title`) in `UIStrings.profile.sections`; on the home, title/subtitle keys in `UIStrings.home`.

## 2. Database — schema, loader, and content for both locales

Content lives in Neon (see the `update-content` skill for running SQL with `npm run db:sql`).

1. **Schema** — add a table to `db/schema.sql` following the existing pattern: `locale text NOT NULL REFERENCES locales(code)`, `position int NOT NULL`, one column per field (`text[]` for string arrays), `PRIMARY KEY (locale, position)`. Apply with `npm run db:migrate` (idempotent, `CREATE TABLE IF NOT EXISTS`). Changing an existing table needs an explicit `ALTER TABLE` run via `db:sql` — `CREATE TABLE IF NOT EXISTS` won't alter it; also update `schema.sql` so it describes the current state.
2. **Loader** — in `app/lib/resume.server.ts` (`getContent`), add a `SELECT ... WHERE locale = ${locale} ORDER BY position` to the `Promise.all` and map it into the returned `SiteContent`. Results are cast, so **tsc will not catch a mismatch** between the columns selected and the interface — keep them in sync by hand.
3. **Parity check** — add the table (and its `text[]` columns) to `TABLES` in `scripts/db-check.ts`.
4. **Content** — insert rows for **both** `en` and `pt-br` with the same positions, and add the UI strings to `ui_strings` for both locales with `jsonb_set`. Confirm the SQL with the user before writing.

All user-visible strings live in the database — never hardcode display text in components. Icons referenced from the DB are keys in `CONTENT_ICONS` (`app/home/icons.tsx`).

## 3. Component

Add the section inside `HomePage.tsx` or `ProfilePage.tsx`, matching its neighbours:

- Profile: wrap it in the local `Section` component (`heading` prop) — it renders the `Eyebrow`, the `h2` and the top border.
- Home: `mx-auto max-w-6xl border-t border-border px-6 pt-16` section with an `h2` + muted subtitle.
- Use only the semantic color classes (`bg-background`, `bg-card`, `text-foreground`, `text-muted-foreground`, `text-primary`, `text-accent`, `border-border`) — never hex or `white`/`black`; they adapt to the light/dark theme.

## 4. Test

Add the new data to `app/test/fixtures.ts` and assert the visible text in `HomePage.test.tsx` or `ProfilePage.test.tsx` (Vitest + Testing Library; render inside a `MemoryRouter`).

## 5. Header links (optional)

The header has no per-section nav (only the Início/Perfil pill). If the section needs a deep link, give it an `id` and link to it like the "Projetos" link in `SiteLayout.tsx`.

## Finish

Run `npm run db:check`, then the `verify` skill (typecheck, lint, test:run, build), and check `/`, `/profile`, `/pt-br` and `/pt-br/perfil` in both themes.
