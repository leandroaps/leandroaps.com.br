# Leandro Aparecido de Siqueira — Portfolio

Personal portfolio and resume website for Leandro Aparecido de Siqueira, Senior Front-End Engineer based in Campinas, São Paulo, Brazil.

Live at: [leandroaps.com](https://leandroaps.com)

## Tech Stack

| Layer              | Technology                                      |
| ------------------ | ----------------------------------------------- |
| Framework          | [React Router 7](https://reactrouter.com) (SSR) |
| UI Library         | [React 19](https://react.dev)                   |
| Styling            | [Tailwind CSS v4](https://tailwindcss.com)      |
| Language           | TypeScript 5                                    |
| Build tool         | Vite 8                                          |
| Image optimization | vite-plugin-image-optimizer                     |

## Pages

| Route     | Description                                                                      |
| --------- | -------------------------------------------------------------------------------- |
| `/`       | Portfolio — Hero, About, Education, Experience, Skills, Certifications, Projects |
| `/resume` | Print-friendly resume — same data, traditional layout, browser PDF export        |

## Project Structure

```text
app/
├── routes.ts                        # Route definitions
├── routes/
│   ├── home.tsx                     # / — portfolio page
│   └── resume.tsx                   # /resume — printable resume
└── welcome/
    ├── welcome.tsx                  # Root orchestrator component
    ├── data.ts                      # All content data (experience, skills, etc.)
    ├── hooks.ts                     # useScrolled, useActiveSection, useScrollAnimation
    ├── icons.tsx                    # SVG icon components
    ├── utils/
    │   └── scroll.ts                # scrollToSection utility
    └── components/
        ├── shared.tsx               # SectionLabel, Tag
        ├── NavBar.tsx
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── EducationSection.tsx
        ├── ExperienceSection.tsx
        ├── SkillsSection.tsx
        ├── CertificationsSection.tsx
        ├── ProjectsSection.tsx
        ├── RecommendationsSection.tsx
        ├── Footer.tsx
        └── Resume.tsx
```

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command             | Description                  |
| ------------------- | ---------------------------- |
| `npm run dev`       | Start development server     |
| `npm run build`     | Production build             |
| `npm run start`     | Serve production build       |
| `npm run typecheck` | Run TypeScript type checking |
