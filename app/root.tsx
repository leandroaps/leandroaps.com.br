import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";

export const links: Route.LinksFunction = () => [
  { rel: "preload", href: "/photo.jpg", as: "image" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700;1,9..40,400&display=swap",
  },
];

const SITE_URL = "https://leandroaps.com.br";
const OG_IMAGE = `${SITE_URL}/robert-ritchie-JEicDFy5Cd8-unsplash.jpg`;

const OG_BY_LOCALE = {
  en: {
    lang: "en",
    ogLocale: "en_US",
    url: SITE_URL,
    title: "Leandro Aparecido de Siqueira — Senior Front-End Engineer",
    description:
      "Senior Front-End Engineer specializing in React & TypeScript with 20+ years building scalable web products. Technical Lead, Agile practitioner, based in Campinas, Brazil.",
  },
  "pt-BR": {
    lang: "pt-BR",
    ogLocale: "pt_BR",
    url: `${SITE_URL}/pt-br`,
    title: "Leandro Aparecido de Siqueira — Engenheiro Front-End Sênior",
    description:
      "Engenheiro Front-End Sênior especializado em React & TypeScript, com mais de 20 anos construindo produtos web escaláveis. Líder Técnico e praticante de metodologias ágeis, baseado em Campinas, Brasil.",
  },
} as const;

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const isPtBr = pathname === "/pt-br" || pathname.startsWith("/pt-br/");
  const og = OG_BY_LOCALE[isPtBr ? "pt-BR" : "en"];

  return (
    <html lang={og.lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Static OG/Twitter tags — must be hardcoded so crawlers see them without JS */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.title} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:width" content="4240" />
        <meta property="og:image:height" content="2832" />
        <meta property="og:locale" content={og.ogLocale} />
        <meta property="og:site_name" content="Leandro Aparecido de Siqueira" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={og.url} />
        <meta name="twitter:title" content={og.title} />
        <meta name="twitter:description" content={og.description} />
        <meta name="twitter:image" content={OG_IMAGE} />

        <link rel="alternate" hrefLang="en" href={SITE_URL} />
        <link rel="alternate" hrefLang="pt-BR" href={`${SITE_URL}/pt-br`} />
        <link rel="alternate" hrefLang="x-default" href={SITE_URL} />

        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
