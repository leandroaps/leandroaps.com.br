// Per-page SEO copy. Read by each route's meta() (<title>, description) and by
// root.tsx, which renders keywords, canonical, OG/Twitter tags, hreflang links
// and the JSON-LD Person block statically so crawlers see them without JS.
import { PATHS, type Locale, type Page } from "./routes";

export const SITE_URL = "https://leandroaps.com.br";

/** 1200×630 sharing images (LinkedIn, Facebook, X). Source: scripts/og/og-image.html. */
export const OG_IMAGE: Record<Locale, { url: string; alt: string }> = {
  en: {
    url: `${SITE_URL}/og-en.jpg`,
    alt: "Leandro A. Siqueira — AI Front-End Engineer and Technical Lead (React, TypeScript)",
  },
  "pt-br": {
    url: `${SITE_URL}/og-pt-br.jpg`,
    alt: "Leandro A. Siqueira — AI Front-End Engineer e Líder Técnico (React, TypeScript)",
  },
};
export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

export const KEYWORDS: Record<Locale, string[]> = {
  en: [
    "Leandro Siqueira",
    "Leandro Aparecido de Siqueira",
    "AI Front-End Engineer",
    "Senior Front-End Engineer",
    "Front-End Developer",
    "Technical Lead",
    "React",
    "TypeScript",
    "Front-End Architecture",
    "Web Performance",
    "Spec-Driven Development",
    "AI Agents",
    "Agile",
    "Campinas",
    "Brazil",
  ],
  "pt-br": [
    "Leandro Siqueira",
    "Leandro Aparecido de Siqueira",
    "AI Front-End Engineer",
    "Engenheiro Front-End Sênior",
    "Desenvolvedor Front-End",
    "Líder Técnico",
    "React",
    "TypeScript",
    "Arquitetura Front-End",
    "Performance Web",
    "Spec-Driven Development",
    "Agentes de IA",
    "Ágil",
    "Campinas",
    "Brasil",
  ],
};

interface PageSeo {
  /** ≤ ~60 characters so search results don't truncate it. */
  title: string;
  /** ~140–160 characters. */
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export const SEO: Record<Locale, Record<Page, PageSeo>> = {
  en: {
    home: {
      title: "Leandro A. Siqueira — AI Front-End Engineer | React & TypeScript",
      description:
        "AI Front-End Engineer and technical lead with 20+ years in React, TypeScript and front-end architecture. Projects, articles on AI agents and career.",
      ogTitle: "Leandro A. Siqueira — AI Front-End Engineer",
      ogDescription:
        "20+ years building digital products with React and TypeScript. Projects, articles on AI agents and Spec-Driven Development, and career.",
    },
    profile: {
      title: "Profile — Leandro A. Siqueira, AI Front-End Engineer",
      description:
        "Résumé of Leandro A. Siqueira: 20+ years in front-end with React and TypeScript, technical leadership, Spec-Driven Development and AI agents.",
      ogTitle: "Profile — Leandro A. Siqueira",
      ogDescription:
        "Experience at CI&T, Venturus, Itaú, UOL and 3M; skills in React, TypeScript, front-end architecture and AI agents; recommendations.",
    },
  },
  "pt-br": {
    home: {
      title: "Leandro A. Siqueira — AI Front-End Engineer | React e TypeScript",
      description:
        "AI Front-End Engineer e líder técnico com mais de 20 anos em React, TypeScript e arquitetura front-end. Projetos, artigos sobre agentes de IA e carreira.",
      ogTitle: "Leandro A. Siqueira — AI Front-End Engineer",
      ogDescription:
        "Mais de 20 anos criando produtos digitais com React e TypeScript. Projetos, artigos sobre agentes de IA e Spec-Driven Development, e carreira.",
    },
    profile: {
      title: "Perfil — Leandro A. Siqueira, AI Front-End Engineer",
      description:
        "Currículo de Leandro A. Siqueira: mais de 20 anos em front-end com React e TypeScript, liderança técnica, Spec-Driven Development e agentes de IA.",
      ogTitle: "Perfil — Leandro A. Siqueira",
      ogDescription:
        "Experiência na CI&T, Venturus, Itaú, UOL e 3M; habilidades em React, TypeScript, arquitetura front-end e agentes de IA; recomendações.",
    },
  },
};

export function pageMeta(locale: Locale, page: Page) {
  const seo = SEO[locale][page];
  return [{ title: seo.title }, { name: "description", content: seo.description }];
}

export function absoluteUrl(locale: Locale, page: Page) {
  return `${SITE_URL}${PATHS[locale][page]}`;
}

/** schema.org Person — lets search engines connect the site to the same person on other profiles. */
export function personJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Leandro Aparecido de Siqueira",
    alternateName: "Leandro A. Siqueira",
    url: SITE_URL,
    image: `${SITE_URL}/photo.jpg`,
    jobTitle: "AI Front-End Engineer",
    worksFor: { "@type": "Organization", name: "CI&T", url: "https://ciandt.com" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Campinas",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    sameAs: [
      "https://www.linkedin.com/in/leandroaps",
      "https://github.com/leandroaps",
      "https://medium.com/@leandroaps",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "Front-End Architecture",
      "Web Performance",
      "Spec-Driven Development",
      "AI Agents",
      "Technical Leadership",
      "Agile",
    ],
    description: SEO[locale].home.description,
  };
}
