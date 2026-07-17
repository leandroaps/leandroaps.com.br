---
name: update-content
description: Update resume/portfolio content — experience, skills, projects, certifications, recommendations, or any text on the site. Ensures the English and Portuguese locale files stay in sync.
---

# Update site content

All site content lives in two JSON files, one per locale:

| File                            | Locale             | Route    |
| ------------------------------- | ------------------ | -------- |
| `app/content/resume.json`       | English            | `/`      |
| `app/content/resume.pt-br.json` | Portuguese (pt-BR) | `/pt-br` |

Both must conform to `ResumeData` in `app/home/types.ts` and must keep **identical structure** — same fields, same array ordering. Only string values differ (translated).

## Rules

1. **Edit both files for every content change.** If the user only supplies text in one language, translate it for the other file (pt-BR uses natural Brazilian Portuguese, matching the tone of the existing entries) and tell the user you translated it so they can review.
2. **Never hardcode text in components.** If a change seems to require touching a `.tsx` file for wording, the string belongs in the JSON under `ui` (see `UIStrings` in `types.ts`) — add it there and thread it through props.
3. **Structural changes** (new field, removed field) also require updating `app/home/types.ts` and any component consuming it — that's the `add-section` skill's territory.
4. Keep proper nouns, company names, tech/tag names (React, TypeScript, Scrum…) untranslated in both locales, consistent with existing entries.
5. Keep `experience` in reverse-chronological order; match the existing `period` string format used by neighboring entries in each locale.

## Verify

`npm run typecheck` catches shape drift between the JSONs and `ResumeData` (the loaders cast the imports). Then check both `/` and `/pt-br` render the change. Run `npm run test:run` — some tests assert on content strings and may need fixture updates.
