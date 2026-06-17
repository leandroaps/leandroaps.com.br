import { Welcome } from "../welcome/welcome";
import type { Route } from "./+types/home";

const SITE_URL = "https://leandroaps.com.br";
const OG_TITLE = "Leandro Aparecido de Siqueira — Senior Front-End Engineer";
const OG_DESCRIPTION =
  "Senior Front-End Engineer specializing in React & TypeScript with 20+ years building scalable web products. Technical Lead, Agile practitioner, based in Campinas, Brazil.";
const OG_IMAGE = `${SITE_URL}/nasa-w9sZL_hvNug-unsplash.jpg`;

export function meta({}: Route.MetaArgs) {
  return [
    { title: OG_TITLE },
    { name: "description", content: OG_DESCRIPTION },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: OG_TITLE },
    { property: "og:description", content: OG_DESCRIPTION },
    { property: "og:image", content: OG_IMAGE },
    { property: "og:image:width", content: "4240" },
    { property: "og:image:height", content: "2832" },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Leandro A. Siqueira" },

    // Twitter / X Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:url", content: SITE_URL },
    { name: "twitter:title", content: OG_TITLE },
    { name: "twitter:description", content: OG_DESCRIPTION },
    { name: "twitter:image", content: OG_IMAGE },
  ];
}

export default function Home() {
  return <Welcome />;
}
