import { Link } from "react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Article, SideProject, SiteContent, Tone } from "@/home/types";
import { CONTENT_ICONS, MediumIcon } from "@/home/icons";
import { PATHS, PROJECTS_ANCHOR, type Locale } from "@/lib/routes";
import { Eyebrow, SiteLayout, socials } from "./SiteLayout";

const MEDIUM_URL = socials.find((s) => s.label === "Medium")!.href;

const TEXT_TONE: Record<Tone, string> = { primary: "text-primary", accent: "text-accent" };
const BG_TONE: Record<Tone, string> = { primary: "bg-primary", accent: "bg-accent" };

/** Linked projects render as an external link; work projects (no URL) as a plain card. */
function ProjectCard({ project }: { project: SideProject }) {
  const { name, url, subtitle, role, description, icon, tone } = project;
  const Icon = CONTENT_ICONS[icon];
  const body = (
    <>
      <div className="flex items-start justify-between gap-4">
        {Icon && <Icon className={`h-10 w-10 ${TEXT_TONE[tone]}`} strokeWidth={1.5} />}
        {role && (
          <span className="rounded-full border border-border px-3 py-1 text-xs whitespace-nowrap text-muted-foreground">
            {role}
          </span>
        )}
      </div>
      <div className="mt-6 flex min-h-14 flex-col justify-center">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className={`mt-1 ${TEXT_TONE[tone]} opacity-80`}>{subtitle}</p>
      </div>
      <div className={`mt-6 h-0.5 w-10 ${BG_TONE[tone]}`} />
      <div className="mt-6 flex items-end justify-between gap-4">
        <p className="min-h-[3rem] text-muted-foreground">{description}</p>
        {url && (
          <ArrowUpRight
            className={`h-5 w-5 shrink-0 transition group-hover:translate-x-1 ${TEXT_TONE[tone]}`}
            aria-hidden="true"
          />
        )}
      </div>
    </>
  );
  const card = "rounded-2xl border border-border bg-card p-8";

  return url ? (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`group ${card} transition hover:-translate-y-1 hover:border-primary/50`}
    >
      {body}
    </a>
  ) : (
    <article className={card}>{body}</article>
  );
}

function ArticleCard({
  article,
  readLabel,
  featured = false,
}: {
  article: Article;
  readLabel: string;
  featured?: boolean;
}) {
  const { title, description, url, published, badge, language } = article;
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className={`group flex flex-col rounded-2xl border bg-card transition hover:-translate-y-1 hover:border-primary/50 ${
        featured ? "mt-10 border-primary/40 p-8 md:p-10" : "border-border p-8"
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        {badge && (
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
            {badge}
          </span>
        )}
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{published}</p>
      </div>
      <h3
        lang={language}
        className={`mt-4 font-bold leading-snug ${featured ? "max-w-3xl text-2xl md:text-3xl" : "text-xl"}`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 flex-1 leading-relaxed text-muted-foreground ${featured ? "max-w-3xl md:text-lg" : ""}`}
      >
        {description}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        {readLabel}
        <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
      </span>
    </a>
  );
}

export function HomePage({ data, locale }: { data: SiteContent; locale: Locale }) {
  const { ui, intro, sideProjects, articles } = data;
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);
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
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sideProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-6xl border-t border-border px-6 pt-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{t.articlesTitle}</h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">{t.articlesSubtitle}</p>
          </div>
          <a
            href={MEDIUM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-border px-5 py-2.5 text-sm font-medium whitespace-nowrap transition hover:border-primary md:self-auto"
          >
            <MediumIcon />
            {t.articlesAll}
            <ArrowUpRight
              className="h-4 w-4 text-primary transition group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>
        {featuredArticles.map((article) => (
          <ArticleCard key={article.url} article={article} readLabel={t.articlesRead} featured />
        ))}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {regularArticles.map((article) => (
            <ArticleCard key={article.url} article={article} readLabel={t.articlesRead} />
          ))}
        </div>
      </section>
    </SiteLayout>
  );
}
