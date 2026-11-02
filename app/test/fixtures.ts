import type { SiteContent } from "@/home/types";

export const content: SiteContent = {
  ui: {
    site: { name: "Leandro A. Siqueira", location: "Campinas, SP" },
    nav: { label: "Principal", home: "Início", profile: "Perfil", projects: "Projetos" },
    languageSwitch: { label: "EN", ariaLabel: "View in English" },
    theme: { toggle: "Alternar tema claro/escuro" },
    footer: {
      title: "Vamos conversar.",
      networking: "Para networking",
      code: "Para código",
      reading: "Para leitura",
      copyright:
        "Designed and built with ❤️ by Leandro Aparecido de Siqueira. All rights reserved.",
    },
    home: {
      eyebrow: "Ideias constroem realidades melhores",
      name: "Leandro A. Siqueira",
      tagline: "Tecnologia, educação e projetos com propósito.",
      bio: "Bio de teste.",
      ctaProjects: "Ver projetos",
      ctaProfile: "Conhecer meu perfil",
      photoAlt: "Foto",
      photoBadge: "Campinas · SP",
      aboutEyebrow: "Um pouco sobre mim",
      aboutTitle: "Duas décadas",
      projectsTitle: "Projetos",
      projectsSubtitle: "Iniciativas",
      articlesTitle: "Artigos",
      articlesSubtitle: "Escrevo no Medium.",
      articlesAll: "Ver todos no Medium",
      articlesRead: "Ler no Medium",
    },
    profile: {
      location: "Campinas · São Paulo · Brasil",
      name: "Leandro Aparecido de Siqueira",
      headline: "Senior Front-End Engineer",
      photoAlt: "Foto",
      sections: {
        about: { label: "01 — Sobre", title: "Sobre mim" },
        experience: { label: "02 — Trabalho", title: "Experiência" },
        education: { label: "03 — Formação", title: "Educação" },
        skills: { label: "04 — Especialidades", title: "Habilidades" },
      },
    },
  },
  intro: [{ title: "Experiência", text: "Mais de 20 anos.", tone: "primary" }],
  sideProjects: [
    {
      name: "GAEL",
      url: "https://gael.org.br",
      domain: "gael.org.br",
      role: "Colaborador",
      description: "Educação.",
      icon: "book-open",
      tone: "primary",
    },
    {
      name: "Bernardo",
      url: "https://bernardo.pet",
      domain: "bernardo.pet",
      role: "Founder",
      description: "Cuidado com animais.",
      icon: "paw-print",
      tone: "accent",
    },
  ],
  articles: [
    {
      title: "Understanding the JavaScript Event Loop",
      description: "Como o event loop funciona.",
      url: "https://medium.com/@leandroaps/event-loop",
      published: "5 jan 2026",
    },
  ],
  about: {
    paragraphs: ["Parágrafo um.", "Parágrafo dois."],
    stats: [{ stat: "20+", label: "Anos de experiência" }],
  },
  experience: [
    {
      company: "Venturus",
      role: "Senior Front-End Software Engineer",
      period: "Jun 2023 – Mai 2026",
      location: "Campinas, SP",
      highlights: ["Performance 300%"],
      tags: ["React"],
    },
  ],
  education: [
    {
      institution: "PUC Campinas",
      degree: "Bacharelado",
      field: "Engenharia da Computação",
      year: "1998 – 2001",
    },
  ],
  skills: [{ category: "Frontend", items: ["React", "TypeScript"] }],
};
