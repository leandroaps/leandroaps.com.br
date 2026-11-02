// Per-page SEO copy. Read by each route's meta() (<title>, description) and by
// root.tsx, which renders the OG/Twitter tags and hreflang links statically so
// crawlers see them without JS.
import { PATHS, type Locale, type Page } from "./routes";

export const SITE_URL = "https://leandroaps.com.br";
export const OG_IMAGE = { url: `${SITE_URL}/photo.jpg`, width: 2000, height: 2565 };

interface PageSeo {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
}

export const SEO: Record<Locale, Record<Page, PageSeo>> = {
  en: {
    home: {
      title: "Leandro A. Siqueira — Technology, education and purpose-driven projects",
      description:
        "Senior front-end engineer and technical lead. Explore the GAEL and Bernardo projects and what's in progress.",
      ogTitle: "Leandro A. Siqueira",
      ogDescription: "Technology, education and purpose-driven projects.",
    },
    profile: {
      title: "Profile — Leandro A. Siqueira, Senior Front-End Engineer",
      description:
        "20+ years in front-end, React, TypeScript and technical leadership. Experience, education and skills.",
      ogTitle: "Profile — Leandro A. Siqueira",
      ogDescription:
        "20+ years in front-end, React, TypeScript and technical leadership. Experience, education and skills.",
    },
  },
  "pt-br": {
    home: {
      title: "Leandro A. Siqueira — Tecnologia, educação e projetos com propósito",
      description:
        "Engenheiro front-end sênior e líder técnico. Conheça os projetos GAEL, Bernardo e o que está em desenvolvimento.",
      ogTitle: "Leandro A. Siqueira",
      ogDescription: "Tecnologia, educação e projetos com propósito.",
    },
    profile: {
      title: "Perfil — Leandro A. Siqueira, Senior Front-End Engineer",
      description:
        "Mais de 20 anos em front-end, React, TypeScript e liderança técnica. Experiência, formação e habilidades.",
      ogTitle: "Perfil — Leandro A. Siqueira",
      ogDescription:
        "Mais de 20 anos em front-end, React, TypeScript e liderança técnica. Experiência, formação e habilidades.",
    },
  },
};

export function pageMeta(locale: Locale, page: Page) {
  const seo = SEO[locale][page];
  return [{ title: seo.title }, { name: "description", content: seo.description }];
}

export function absoluteUrl(locale: Locale, page: Page) {
  const path = PATHS[locale][page];
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
