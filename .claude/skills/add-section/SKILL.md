---
name: add-section
description: Add a new content section to the portfolio page (e.g. Awards, Talks, Publications). Walks through the full chain — types, both locale JSONs, component, test, and wiring into home.tsx and the nav.
---

# Add a new portfolio section

Every section follows the same data flow. A new section touches **six places**; missing any one breaks typecheck or leaves a locale untranslated.

## 1. Types — `app/home/types.ts`

- Add an interface for the section's item shape (e.g. `Award`).
- Add the data field to `ResumeData` (e.g. `awards: Award[];`).
- Add a heading entry to `UIStrings.sections` — plain `SectionHeading` (`label` + `title`), or a dedicated `...Strings extends SectionHeading` interface if the section needs extra UI strings (see `BehavioralProfileStrings` for the pattern).

## 2. Content — both locale files, always together

- `app/content/resume.json` (English)
- `app/content/resume.pt-br.json` (Portuguese, pt-BR)

Add the data array and the `ui.sections.<name>` heading to **both** files with identical structure. The loaders cast these files to `ResumeData`, so typecheck fails if either file misses a field. All user-visible strings live in JSON — never hardcode display text in components.

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

Add a `NavItem` (`label` + `href: "#<section-id>"`) to the `nav` array in **both** locale JSONs.

## Finish

Run the `verify` skill (typecheck, lint, test:run, build) and check both `/` and `/pt-br` in the dev server.
