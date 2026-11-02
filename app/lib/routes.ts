// URL map for both locales. Shared by the route modules, the layout (pill nav,
// language switch) and root.tsx (hreflang / OG tags). Keep in sync with
// app/routes.ts and the prerender list in react-router.config.ts.
export type Locale = "en" | "pt-br";
export type Page = "home" | "profile";

export const PATHS: Record<Locale, Record<Page, string>> = {
  en: { home: "/", profile: "/profile" },
  "pt-br": { home: "/pt-br", profile: "/pt-br/perfil" },
};

/** Anchor id of the projects section on the home page. */
export const PROJECTS_ANCHOR: Record<Locale, string> = {
  en: "projects",
  "pt-br": "projetos",
};

export const OTHER_LOCALE: Record<Locale, Locale> = { en: "pt-br", "pt-br": "en" };

export function routeFromPath(pathname: string): { locale: Locale; page: Page } {
  const path = pathname.replace(/\/+$/, "") || "/";
  const locale: Locale = path === "/pt-br" || path.startsWith("/pt-br/") ? "pt-br" : "en";
  const page: Page = path === PATHS[locale].profile ? "profile" : "home";
  return { locale, page };
}
