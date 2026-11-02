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
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap",
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

// Copy lives here, not in the database: the error screen must render even when
// the loader (and therefore the DB content) failed.
const ERROR_COPY = {
  en: {
    title: "Something went wrong",
    details: "An unexpected error occurred.",
    notFoundTitle: "Page not found",
    notFoundDetails: "The page you are looking for does not exist.",
    home: "Go to home page",
    homeHref: "/",
  },
  "pt-BR": {
    title: "Algo deu errado",
    details: "Ocorreu um erro inesperado.",
    notFoundTitle: "Página não encontrada",
    notFoundDetails: "A página que você procura não existe.",
    home: "Voltar para o início",
    homeHref: "/pt-br",
  },
} as const;

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { pathname } = useLocation();
  const copy = ERROR_COPY[pathname.startsWith("/pt-br") ? "pt-BR" : "en"];

  let code: string | undefined;
  let title: string = copy.title;
  let details: string = copy.details;
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    code = String(error.status);
    if (error.status === 404) {
      title = copy.notFoundTitle;
      details = copy.notFoundDetails;
    } else {
      details = error.statusText || details;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-6 text-center bg-background text-foreground">
      {code && <p className="text-xs font-semibold tracking-[0.2em] text-primary">{code}</p>}
      <h1 className="text-3xl lg:text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground max-w-md">{details}</p>
      <a
        href={copy.homeHref}
        className="mt-4 inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
      >
        {copy.home}
      </a>
      {stack && (
        <pre className="w-full max-w-4xl mt-6 p-4 overflow-x-auto text-left text-xs bg-card border border-border rounded-2xl">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
