---
name: add-section
description: Add a new content section to the portfolio page (e.g. Awards, Talks, Publications). Walks through the full chain — types, database table + loader + content for both locales, component, test, and wiring into home.tsx and the nav.
---

# Add a new portfolio section

Every section follows the same data flow. A new section touches **six places**; missing any one breaks typecheck or leaves a locale untranslated.

## 1. Types — `app/home/types.ts`

- Add an interface for the section's item shape (e.g. `Award`).
- Add the data field to `ResumeData` (e.g. `awards: Award[];`).
- Add a heading entry to `UIStrings.sections` — plain `SectionHeading` (`label` + `title`), or a dedicated `...Strings extends SectionHeading` interface if the section needs extra UI strings (see `BehavioralProfileStrings` for the pattern).

## 2. Database — schema, loader, and content for both locales

Content lives in Neon (see the `update-content` skill for running SQL with `npm run db:sql`).

1. **Schema** — add a table to `db/schema.sql` following the existing pattern: `locale text NOT NULL REFERENCES locales(code)`, `position int NOT NULL`, one column per field (`text[]` for string arrays), `PRIMARY KEY (locale, position)`. Apply with `npm run db:migrate` (idempotent, `CREATE TABLE IF NOT EXISTS`). Changing an existing table needs an explicit `ALTER TABLE` run via `db:sql` — `CREATE TABLE IF NOT EXISTS` won't alter it; also update `schema.sql` so it describes the current state.
2. **Loader** — in `app/lib/resume.server.ts`, add a `SELECT ... WHERE locale = ${locale} ORDER BY position` to the `Promise.all` and map it into the returned `ResumeData`. Results are cast, so **tsc will not catch a mismatch** between the columns selected and the interface — keep them in sync by hand.
3. **Parity check** — add the table (and its `text[]` columns) to `TABLES` in `scripts/db-check.ts`.
4. **Content** — insert rows for **both** `en` and `pt-br` with the same positions, and add the heading to `ui_strings` for both locales: `UPDATE ui_strings SET strings = jsonb_set(strings, '{sections,<name>}', '{"label": "...", "title": "..."}') WHERE locale = 'en';`. Confirm the SQL with the user before writing.

All user-visible strings live in the database — never hardcode display text in components.

## 3. Component — `app/home/components/<Name>Section.tsx`

Copy the pattern from an existing simple section (`EducationSection.tsx` or `CertificationsSection.tsx`):

- Named export function component, props = data + `heading` (or `strings`).
- Section element with an `id` matching the nav href, `SectionLabel` for the heading, Tailwind utility classes inline (Tailwind v4, no config file — theme lives in `app/app.css`).
- Reuse `Tag` for tag pills and `SeeOnLinkedIn` where relevant.
- Scroll-reveal animation comes from `useScrollAnimation` in `home.tsx` — follow whatever animation class convention the sibling sections use.

## 4. Test — `app/home/components/<Name>Section.test.tsx`

Mirror an existing test (e.g. `SectionLabel.test.tsx`, `BehavioralProfileSection.test.tsx`): Vitest + Testing Library, jsdom, render with minimal fixture data, assert visible text.

## 5. Wire up — `app/home/home.tsx`

Import the component and render it in `Welcome` at the right position in the page order, passing `data.<field>` and `ui.sections.<name>`.

## 6. Navigation (if the section should appear in the navbar)

Insert a `nav_items` row (`label`, `href = '#<section-id>'`) for **both** locales at the matching position (shift later rows first — see `update-content`).

## Finish

Run `npm run db:check`, then the `verify` skill (typecheck, lint, test:run, build), and check both `/` and `/pt-br` in the dev server.
