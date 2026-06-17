export const NAV_ITEMS = [
  { label: "About Me", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  // { label: "Recommendations", href: "#recommendations" },
];

export const EXPERIENCE = [
  {
    company: "Venturus",
    role: "Senior Front-End Software Engineer",
    period: "Jun 2023 – May 2026",
    location: "Campinas, SP",
    highlights: [
      "Led performance overhaul boosting app performance by 300%",
      "Migrated to Vite, reducing bundle to <25% of original size",
      "Achieved 80%+ code coverage after Vitest migration",
      "Built enterprise apps with React, TypeScript & Ant Design",
    ],
    tags: ["React", "TypeScript", "Vite", "Vitest", "Ant Design"],
  },
  {
    company: "Pravaler",
    role: "Senior Front-End Software Engineer",
    period: "Mar 2023 – Jun 2023",
    location: "São Paulo, SP",
    highlights: [
      "Resolved critical issues and added features to Portal do Aluno",
      "Improved architecture and observability of the student portal",
    ],
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    company: "Itaú Unibanco",
    role: "Technical Lead",
    period: "Jan 2022 – Jan 2023",
    location: "São Paulo, Brazil",
    highlights: [
      "Led Ativos Community to deliver enterprise credit projects",
      "Applied INVEST principles, managed story scope and delivery",
      "Delivered 4 major features: Credit Menu PJ, Cadastro Positivo and more",
    ],
    tags: ["Angular", "Technical Lead", "Agile", "Design System"],
  },
  {
    company: "Vitat",
    role: "Technical Lead",
    period: "Jul 2021 – Dec 2021",
    location: "São Paulo",
    highlights: [
      "Defined front-end architecture for a health scheduling platform",
      "Facilitated Agile ceremonies and led performance reviews",
      "Ensured delivery quality through hands-on technical guidance",
    ],
    tags: ["Architecture", "Agile", "Technical Lead"],
  },
  {
    company: "UOL",
    role: "Agile Master & Senior Front-End Engineer",
    period: "Jan 2017 – Jun 2021",
    location: "São Paulo, Brazil",
    highlights: [
      "Contributed to SSO project improving auth flows for users",
      "Modernised class-based React to functional components + Hooks",
      "Built E2E and unit tests with Cypress & Browserstack",
      "Facilitated stand-ups, sprint planning and retrospectives",
      "Supported CI/CD pipelines with Docker, Kubernetes & Jenkins",
    ],
    tags: ["React", "Cypress", "Docker", "Kubernetes", "Agile Master"],
  },
  {
    company: "3M",
    role: "Senior Digital Project Lead",
    period: "Oct 2012 – Nov 2015",
    location: "Campinas, SP",
    highlights: [
      "Managed digital operations portfolio for Latin America",
      "Led IBM WCM vendor training across regional teams",
      "Liaison between technical and business stakeholders",
    ],
    tags: ["Project Management", "IBM WCM", "Latin America"],
  },
];

export const EDUCATION = [
  {
    institution: "Fundação Getulio Vargas",
    degree: "Master of Business Administration",
    field: "Information Technology",
    year: "2011",
  },
  {
    institution: "Universidade Paulista",
    degree: "Bachelor's Degree",
    field: "Digital Communication & Multimedia",
    year: "2003 – 2005",
  },
  {
    institution: "PUC Campinas",
    degree: "Bachelor's Degree",
    field: "Computer Engineering",
    year: "1998 – 2001",
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Ant Design",
      "Angular",
      "jQuery",
      "Bootstrap",
    ],
  },
  {
    category: "Tools & Infrastructure",
    items: [
      "Vite",
      "Webpack",
      "Vitest",
      "Cypress",
      "Browserstack",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git",
    ],
  },
  {
    category: "Practices & Leadership",
    items: [
      "Agile / Scrum",
      "Technical Leadership",
      "Performance Optimisation",
      "Accessibility & SEO",
      "CI/CD",
      "Code Review",
      "Team Mentoring",
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "Claude Code — The Practical Guide", issuer: "Anthropic" },
  {
    name: "Enterprise Agile: Changing Your Culture",
    issuer: "LinkedIn Learning",
  },
  { name: "Coding Exercises: React.js", issuer: "LinkedIn Learning" },
  { name: "Managing Virtual Teams", issuer: "LinkedIn Learning" },
  { name: "Building Modern Projects with React", issuer: "LinkedIn Learning" },
];

export const PROJECTS = [
  {
    title: "Front-End Performance Overhaul",
    company: "Venturus",
    description:
      "Migrated to Vite and Vitest, adopted pure CSS configurations, delivering a 300% performance gain and reducing bundle size by 75%.",
    tags: ["Vite", "Vitest", "CSS", "Performance"],
  },
  {
    title: "Portal do Aluno",
    company: "Pravaler",
    description:
      "Improved architecture, resolved critical bugs and enhanced observability of the student portal platform used by thousands of students.",
    tags: ["React", "TypeScript", "Architecture"],
  },
  {
    title: "Single Sign-On (SSO)",
    company: "UOL",
    description:
      "Contributed to the SSO project in collaboration with the UX team, improving authentication flows for millions of users.",
    tags: ["React", "SSO", "UX Collaboration"],
  },
  {
    title: "Ativos Banking Platform",
    company: "Itaú Unibanco",
    description:
      "Led delivery of 4 enterprise credit features: Cliente sem Crédito, Menu de Crédito PJ, Cadastro Positivo and Declaração de Faturamento.",
    tags: ["Angular", "Technical Lead", "Enterprise"],
  },
  {
    title: "Health Scheduling Platform",
    company: "Vitat",
    description:
      "Defined front-end architecture and technical standards for a health platform used by pharmacists and store managers.",
    tags: ["Architecture", "Scheduling", "Healthcare"],
  },
  {
    title: "Data Center Ops Tools",
    company: "UOL DIVEO",
    description:
      "Built interactive dashboards integrating REST/JSON services to control, monitor and automate core infrastructure operations.",
    tags: ["JavaScript", "jQuery", "REST", "Infrastructure"],
  },
];
