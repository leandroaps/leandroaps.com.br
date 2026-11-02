import type { ReactNode } from "react";
import { Link } from "react-router";
import { ArrowUpRight, Moon, Sun } from "lucide-react";
import logoDark from "@assets/leandroaps_logo_dark.png";
import logoLight from "@assets/leandroaps_logo_light.png";
import type { UIStrings } from "@/home/types";
import { GitHubIcon, GridIcon, LinkedInIcon, ListIcon, MediumIcon } from "@/home/icons";
import { OTHER_LOCALE, PATHS, PROJECTS_ANCHOR, type Locale, type Page } from "@/lib/routes";
import { toggleTheme } from "@/lib/theme";

export const socials = [
  { label: "GitHub", href: "https://github.com/leandroaps", Icon: GitHubIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/leandroaps", Icon: LinkedInIcon },
  { label: "Medium", href: "https://medium.com/@leandroaps", Icon: MediumIcon },
] as const;

const [github, linkedin, medium] = socials;

/**
 * Sun/moon button. The visible icon is driven by CSS (`light:` variant on the
 * <html data-theme> attribute), so prerendered HTML never mismatches on hydration.
 */
export function ThemeToggle({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
    >
      <Sun className="h-4 w-4 light:hidden" aria-hidden="true" />
      <Moon className="hidden h-4 w-4 light:block" aria-hidden="true" />
    </button>
  );
}

function LanguageSwitch({ ui, locale, page }: { ui: UIStrings; locale: Locale; page: Page }) {
  return (
    <a
      href={PATHS[OTHER_LOCALE[locale]][page]}
      hrefLang={OTHER_LOCALE[locale] === "pt-br" ? "pt-BR" : "en"}
      aria-label={ui.languageSwitch.ariaLabel}
      className="text-xs font-medium uppercase tracking-wide whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
    >
      {ui.languageSwitch.label}
    </a>
  );
}

export function SiteLayout({
  ui,
  locale,
  page,
  children,
}: {
  ui: UIStrings;
  locale: Locale;
  page: Page;
  children: ReactNode;
}) {
  const paths = PATHS[locale];
  const onProfile = page === "profile";
  const tab =
    "relative z-10 flex h-10 w-14 items-center justify-center transition-colors duration-300";
  const footerGroups = [
    { title: ui.footer.networking, link: linkedin },
    { title: ui.footer.code, link: github },
    { title: ui.footer.reading, link: medium },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 bg-background/80 px-6 py-5 backdrop-blur-md lg:px-20 lg:py-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to={paths.home}
            className="flex shrink-0 items-center gap-3 text-xs font-medium uppercase tracking-[0.12em] whitespace-nowrap transition-opacity hover:opacity-70"
          >
            <img
              src={logoDark}
              alt=""
              width={28}
              height={28}
              className="h-7 w-7 rounded-lg light:hidden"
            />
            <img
              src={logoLight}
              alt=""
              width={28}
              height={28}
              className="hidden h-7 w-7 rounded-lg light:block"
            />
            <span className="hidden sm:block">
              {ui.site.name}
              <span className="block text-muted-foreground lg:ml-2 lg:inline">
                {ui.site.location}
              </span>
            </span>
          </Link>

          <nav
            aria-label={ui.nav.label}
            className="relative flex shrink-0 items-center rounded-full bg-pill shadow-md md:absolute md:left-1/2 md:-translate-x-1/2"
          >
            <span
              className={`absolute top-0 h-full w-14 rounded-full bg-foreground transition-all duration-300 ease-out ${
                onProfile ? "left-14" : "left-0"
              }`}
            />
            <Link
              to={paths.home}
              aria-label={ui.nav.home}
              aria-current={onProfile ? undefined : "page"}
              className={`${tab} ${onProfile ? "text-muted-foreground hover:text-foreground" : "text-background"}`}
            >
              <GridIcon />
            </Link>
            <Link
              to={paths.profile}
              aria-label={ui.nav.profile}
              aria-current={onProfile ? "page" : undefined}
              className={`${tab} ${onProfile ? "text-background" : "text-muted-foreground hover:text-foreground"}`}
            >
              <ListIcon />
            </Link>
          </nav>

          <div className="flex shrink-0 items-center gap-4 md:gap-5">
            <div className="hidden items-center gap-5 md:flex">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex items-center text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon />
                </a>
              ))}
              <a
                href={`${paths.home}#${PROJECTS_ANCHOR[locale]}`}
                className="text-xs font-medium uppercase tracking-wide whitespace-nowrap"
              >
                {ui.nav.projects}
              </a>
            </div>
            <LanguageSwitch ui={ui} locale={locale} page={page} />
            <ThemeToggle label={ui.theme.toggle} />
          </div>
        </div>
      </header>

      <main className="pt-24 lg:pt-28">{children}</main>

      <footer className="mt-24 bg-footer text-footer-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <h2 className="mb-16 text-4xl font-bold leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
            {ui.footer.title}
          </h2>
          <div className="mb-16 grid grid-cols-1 gap-10 md:grid-cols-3">
            {footerGroups.map(({ title, link: { label, href, Icon } }) => (
              <div key={title}>
                <p className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-footer-muted">
                  {title}
                </p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  <Icon />
                  {label}
                  <ArrowUpRight
                    className="h-4 w-4 text-footer-muted transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-5 border-t border-border pt-8">
            <div className="flex items-center gap-5">
              <LanguageSwitch ui={ui} locale={locale} page={page} />
              <ThemeToggle label={ui.theme.toggle} />
            </div>
            <p className="text-center text-xs text-footer-muted">{ui.footer.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{children}</p>;
}
