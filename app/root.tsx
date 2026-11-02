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
import { PATHS, routeFromPath } from "./lib/routes";
import { absoluteUrl, OG_IMAGE, SEO } from "./lib/seo";
import { THEME_INIT_SCRIPT } from "./lib/theme";
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
    href: "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();
  const { locale, page } = routeFromPath(pathname);
  const seo = SEO[locale][page];
  const url = absoluteUrl(locale, page);
  const lang = locale === "pt-br" ? "pt-BR" : "en";

  return (
    // data-theme is set by THEME_INIT_SCRIPT before hydration
    <html lang={lang} suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Must run inline before first paint to avoid a theme flash; the content is a
            static constant (no user input), so injecting it is safe. */}
        {/* eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />

        {/* Static OG/Twitter tags — rendered at build time so crawlers see them without JS */}
        <meta name="author" content="Leandro A. Siqueira" />
        <meta property="og:type" content={page === "profile" ? "profile" : "website"} />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={seo.ogTitle} />
        <meta property="og:description" content={seo.ogDescription} />
        <meta property="og:image" content={OG_IMAGE.url} />
        <meta property="og:image:width" content={String(OG_IMAGE.width)} />
        <meta property="og:image:height" content={String(OG_IMAGE.height)} />
        <meta property="og:locale" content={locale === "pt-br" ? "pt_BR" : "en_US"} />
        <meta property="og:site_name" content="Leandro A. Siqueira" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={url} />
        <meta name="twitter:title" content={seo.ogTitle} />
        <meta name="twitter:description" content={seo.ogDescription} />
        <meta name="twitter:image" content={OG_IMAGE.url} />

        <link rel="alternate" hrefLang="en" href={absoluteUrl("en", page)} />
        <link rel="alternate" hrefLang="pt-BR" href={absoluteUrl("pt-br", page)} />
        <link rel="alternate" hrefLang="x-default" href={absoluteUrl("en", page)} />

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
    notFoundTitle: "Page not found",
    notFoundDetails: "The page you're looking for doesn't exist or has been moved.",
    errorTitle: "This page didn't load",
    errorDetails: "Something went wrong on our end. You can try refreshing or head back home.",
    retry: "Try again",
    home: "Go home",
  },
  "pt-br": {
    notFoundTitle: "Página não encontrada",
    notFoundDetails: "A página que você procura não existe ou foi movida.",
    errorTitle: "Esta página não carregou",
    errorDetails: "Algo deu errado do nosso lado. Tente recarregar ou volte para o início.",
    retry: "Tentar de novo",
    home: "Voltar ao início",
  },
} as const;

const primaryButton =
  "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90";

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  const { pathname } = useLocation();
  const { locale } = routeFromPath(pathname);
  const copy = ERROR_COPY[locale];
  const home = PATHS[locale].home;

  if (isRouteErrorResponse(error) && error.status === 404) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-7xl font-bold text-foreground">404</h1>
          <h2 className="mt-4 text-xl font-semibold text-foreground">{copy.notFoundTitle}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{copy.notFoundDetails}</p>
          <div className="mt-6">
            <a href={home} className={primaryButton}>
              {copy.home}
            </a>
          </div>
        </div>
      </main>
    );
  }

  const stack = import.meta.env.DEV && error instanceof Error ? error.stack : undefined;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{copy.errorTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.errorDetails}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button type="button" onClick={() => window.location.reload()} className={primaryButton}>
            {copy.retry}
          </button>
          <a
            href={home}
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-card"
          >
            {copy.home}
          </a>
        </div>
        {stack && (
          <pre className="mt-6 overflow-x-auto rounded-md border border-border bg-card p-4 text-left text-xs">
            <code>{stack}</code>
          </pre>
        )}
      </div>
    </main>
  );
}
