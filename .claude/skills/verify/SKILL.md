---
name: verify
description: Verify changes in this portfolio project end-to-end — run typecheck, lint, tests, and build, and optionally exercise the dev server. Use after any code or content change, before committing.
---

# Verify changes

Run these from the repo root, in order. All must pass before a change is considered done.

```bash
npm run typecheck   # react-router typegen && tsc — regenerates route types first
npm run lint        # eslint .
npm run test:run    # vitest run (non-watch)
npm run build       # react-router build — catches SSR/build-only errors
```

Notes:

- `npm run typecheck` runs `react-router typegen` first. If route imports like `./+types/home` fail to resolve, run typecheck — the generated types in `.react-router/` are stale.
- `npm test` starts vitest in **watch mode** and never exits — always use `npm run test:run` in automation.
- Content edits to `app/content/resume.json` or `app/content/resume.pt-br.json` are cast to `ResumeData` in the route loaders, so `tsc` validates JSON shape against `app/home/types.ts`. A typecheck failure after a content edit usually means the JSON is missing a field or one locale drifted from the other.
- Husky + lint-staged run `eslint --fix` and `prettier --write` on commit; run `npm run format` yourself to avoid surprise diffs at commit time.

## Exercising the app

```bash
npm run dev         # Vite dev server (default http://localhost:5173)
```

Check both locales: `/` (English) and `/pt-br` (Portuguese). For the production/Workers build:

```bash
npm run build && npx wrangler dev   # serves build/client via Cloudflare Workers runtime
```
