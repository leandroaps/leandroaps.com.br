import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import bernardoLogo from "@assets/bernardo-logo.png";
import type { SiteContent, Tone } from "@/home/types";
import { CONTENT_ICONS } from "@/home/icons";
import { PATHS, PROJECTS_ANCHOR, type Locale } from "@/lib/routes";
import { Eyebrow, SiteLayout } from "./SiteLayout";

/** Images referenced by key from side_projects.logo. */
const PROJECT_LOGOS: Record<string, { src: string; width: number; height: number }> = {
  bernardo: { src: bernardoLogo, width: 976, height: 220 },
};

const TEXT_TONE: Record<Tone, string> = { primary: "text-primary", accent: "text-accent" };
const BG_TONE: Record<Tone, string> = { primary: "bg-primary", accent: "bg-accent" };

export function HomePage({ data, locale }: { data: SiteContent; locale: Locale }) {
  const { ui, intro, sideProjects, building } = data;
  const t = ui.home;

  return (
    <SiteLayout ui={ui} locale={locale} page="home">
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-12 pb-20 md:grid-cols-[1.4fr_1fr]">
        <div className="pointer-events-none absolute right-10 top-10 -z-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <Eyebrow>{t.eyebrow}</Eyebrow>
          <div className="mt-4 h-0.5 w-10 bg-primary" />
          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-6xl">{t.name}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{t.tagline}</p>
          <p className="mt-6 max-w-xl leading-relaxed text-muted-foreground">{t.bio}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`#${PROJECTS_ANCHOR[locale]}`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" /> {t.ctaProjects}
            </a>
            <Link
              to={PATHS[locale].profile}
              className="inline-flex items-center rounded-full border border-border px-6 py-3 font-medium transition hover:border-primary"
            >
              {t.ctaProfile}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto w-64 md:w-full md:max-w-sm">
          <div className="absolute -inset-3 rounded-[2rem] border border-border" />
          <img
            src="/photo.jpg"
            alt={t.photoAlt}
            width={2000}
            height={2565}
            fetchPriority="high"
            className="relative aspect-[4/5] w-full rounded-[1.5rem] object-cover"
          />
          <span className="absolute -bottom-4 left-6 rounded-full bg-card px-4 py-2 text-xs text-muted-foreground shadow-lg">
            {t.photoBadge}
          </span>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-border px-6 py-16">
        <Eyebrow>{t.aboutEyebrow}</Eyebrow>
        <h2 className="mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          {t.aboutTitle}
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {intro.map(({ title, text, tone }) => (
            <div key={title}>
              <div className={`h-0.5 w-10 ${BG_TONE[tone]}`} />
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id={PROJECTS_ANCHOR[locale]}
        className="mx-auto max-w-6xl scroll-mt-28 border-t border-border px-6 pt-16"
      >
        <h2 className="text-3xl font-bold">{t.projectsTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.projectsSubtitle}</p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {sideProjects.map(({ name, url, domain, role, description, icon, tone, logo }) => {
            const Icon = CONTENT_ICONS[icon];
            const image = logo ? PROJECT_LOGOS[logo] : undefined;
            return (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/50"
              >
                <div className="flex items-start justify-between gap-4">
                  {Icon && <Icon className={`h-10 w-10 ${TEXT_TONE[tone]}`} strokeWidth={1.5} />}
                  <span className="rounded-full border border-border px-3 py-1 text-xs whitespace-nowrap text-muted-foreground">
                    {role}
                  </span>
                </div>
                <div className="mt-6 flex h-14 flex-col justify-center">
                  {image ? (
                    <img
                      src={image.src}
                      alt={name}
                      width={image.width}
                      height={image.height}
                      className="h-12 w-auto max-w-full self-start object-contain object-left"
                    />
                  ) : (
                    <>
                      <h3 className="text-2xl font-bold">{name}</h3>
                      <p className={`mt-1 ${TEXT_TONE[tone]} opacity-80`}>{domain}</p>
                    </>
                  )}
                </div>
                <div className={`mt-6 h-0.5 w-10 ${BG_TONE[tone]}`} />
                <div className="mt-6 flex items-end justify-between gap-4">
                  <p className="min-h-[3rem] text-muted-foreground">{description}</p>
                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition group-hover:translate-x-1 ${TEXT_TONE[tone]}`}
                    aria-hidden="true"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl border-t border-border px-6 pt-16">
        <h2 className="text-3xl font-bold">{t.buildingTitle}</h2>
        <p className="mt-2 text-muted-foreground">{t.buildingSubtitle}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          {building.map(({ label, icon, tone }) => {
            const Icon = CONTENT_ICONS[icon];
            return (
              <span
                key={label}
                className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-4"
              >
                {Icon && <Icon className={`h-5 w-5 ${TEXT_TONE[tone]}`} aria-hidden="true" />}
                {label}
              </span>
            );
          })}
        </div>
      </section>
    </SiteLayout>
  );
}
