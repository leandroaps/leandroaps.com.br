---
name: update-content
description: Update site content — home intro, personal projects, Medium articles, profile (about, experience, education, skills), or any text on the site. Content lives in the Neon database; ensures the English and Portuguese locales stay in sync.
---

# Update site content

All site content lives in the Neon Postgres database (`DATABASE_URL` in `.env`). Schema: `db/schema.sql`. Every content table is keyed by `(locale, position)`:

| `locale` | Language           | Routes                    |
| -------- | ------------------ | ------------------------- |
| `en`     | English            | `/`, `/profile`           |
| `pt-br`  | Portuguese (pt-BR) | `/pt-br`, `/pt-br/perfil` |

Tables shown on the site: home — `home_intro`, `side_projects` (`url` and `role` optional: work projects without a public link have `url` NULL and the company in `subtitle`), `articles` (Medium; `title` stays in English in both locales, `published` is display text per locale); profile — `about_paragraphs`, `about_stats`, `experiences` (`tags` is not displayed), `education` (the profile shows `field`, which holds the full line), `skill_groups`, `behavioral_signals`, `behavioral_strengths`, `behavioral_traits`, `recommendations` (original text, identical in both locales). The tables `nav_items`, `certifications` and `projects` are kept in the database but no longer rendered.

`position` is the 0-based display order. UI copy (headings, labels, header, footer, hero) is the `strings` JSONB column in `ui_strings`, one row per locale, shaped like `UIStrings` in `app/home/types.ts`.

## Running SQL

There is no `psql`; use the project script:

```bash
npm run db:sql -- "SELECT position, name, issuer FROM certifications WHERE locale = 'en' ORDER BY position"
npm run db:sql -- -f /path/to/changes.sql   # for multi-statement edits
```

**Always read the current rows before changing them**, and wrap edits in `BEGIN; ... COMMIT;` so both locales change together or not at all. Show the user the SQL (or a summary of it) before running writes — this is the live content store. Snapshots of earlier content live in `db/backup/`.

## Common edits

- **Change text:** `UPDATE <table> SET <col> = '...' WHERE locale = '<loc>' AND position = <n>;` — once per locale.
- **Array columns** (`experiences.highlights`, `experiences.tags`, `skill_groups.items`, `projects.tags`) are `text[]`: `SET tags = ARRAY['React', 'TypeScript']` or `array_append(tags, 'Vite')`.
- **UI strings:** `UPDATE ui_strings SET strings = jsonb_set(strings, '{sections,about,title}', '"About Me"') WHERE locale = 'en';`
- **Insert at position n:** shift first, then insert, for each locale. The PK is `(locale, position)`, so shift in two steps to avoid collisions:
  ```sql
  BEGIN;
  UPDATE experiences SET position = position + 1000 WHERE locale = 'en' AND position >= 0;
  UPDATE experiences SET position = position - 999 WHERE locale = 'en' AND position >= 1000;
  INSERT INTO experiences (locale, position, company, role, period, location, highlights, tags)
    VALUES ('en', 0, ...);
  -- repeat for 'pt-br'
  COMMIT;
  ```
- **Delete:** delete the row in both locales, then close the gap the same two-step way.

Escape single quotes in SQL literals by doubling them (`'Leandro''s'`).

## Rules

1. **Change both locales for every content change**, with the same positions. If the user only supplies text in one language, translate it for the other (pt-BR uses natural Brazilian Portuguese, matching the tone of existing entries) and tell the user you translated it so they can review.
2. **Never hardcode text in components.** If wording seems to require a `.tsx` change, the string belongs in `ui_strings` (see `UIStrings` in `types.ts`) — add it there and thread it through props.
3. **Structural changes** (new column, new table) are the `add-section` skill's territory: `db/schema.sql`, `types.ts`, and `app/lib/resume.server.ts` must all change together.
4. Keep proper nouns, company names, tech/tag names (React, TypeScript, Scrum…) untranslated in both locales, consistent with existing entries.
5. Keep `experiences` in reverse-chronological order (position 0 = most recent); match the existing `period` format of neighboring rows in each locale.

## Verify

```bash
npm run db:check   # fails if en and pt-br drifted (row positions, array lengths, ui_strings keys)
npm run build      # loaders read the DB at build time — confirms the pages render
```

Then check the affected pages in both locales (`/`, `/profile`, `/pt-br`, `/pt-br/perfil` with `npm run dev`). DB changes reach the live site only after a rebuild + deploy — remind the user.
