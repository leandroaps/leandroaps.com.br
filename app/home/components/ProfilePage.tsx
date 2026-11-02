import type { ReactNode } from "react";
import { ArrowUpRight, Quote } from "lucide-react";
import type { SectionHeading, SiteContent } from "@/home/types";
import type { Locale } from "@/lib/routes";
import { Eyebrow, SiteLayout, socials } from "./SiteLayout";

const LINKEDIN_RECOMMENDATIONS = "https://www.linkedin.com/in/leandroaps/details/recommendations/";

function SubLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
      {children}
    </p>
  );
}

function Section({ heading, children }: { heading: SectionHeading; children: ReactNode }) {
  return (
    <section className="mx-auto mt-20 max-w-6xl border-t border-border px-6 pt-16">
      <Eyebrow>{heading.label}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold">{heading.title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function ProfilePage({ data, locale }: { data: SiteContent; locale: Locale }) {
  const { ui, about, experience, education, skills, behavioralProfile, recommendations } = data;
  const t = ui.profile;

  return (
    <SiteLayout ui={ui} locale={locale} page="profile">
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-12 md:grid-cols-[auto_1fr]">
        <img
          src="/photo.jpg"
          alt={t.photoAlt}
          width={2000}
          height={2565}
          className="h-48 w-40 rounded-3xl object-cover"
        />
        <div>
          <Eyebrow>{t.location}</Eyebrow>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{t.name}</h1>
          <p className="mt-3 text-lg text-primary">{t.headline}</p>
          <div className="mt-5 flex flex-wrap gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                <Icon />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <Section heading={t.sections.about}>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="grid gap-4">
            {about.stats.map((s) => (
              <div key={s.stat} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-4xl font-bold text-accent">{s.stat}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section heading={t.sections.experience}>
        <div className="grid gap-6 md:grid-cols-2">
          {experience.map((job) => (
            <article
              key={job.company + job.period}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <h3 className="text-xl font-bold">{job.company}</h3>
              <p className="text-primary">{job.role}</p>
              <p className="mt-1 text-xs text-muted-foreground">
                {job.period} · {job.location}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="text-accent">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section heading={t.sections.education}>
        <div className="divide-y divide-border">
          {education.map((e) => (
            <div key={e.institution} className="grid gap-1 py-5 md:grid-cols-[10rem_1fr]">
              <span className="text-sm text-muted-foreground">{e.year}</span>
              <div>
                <p className="font-semibold">{e.institution}</p>
                <p className="text-sm text-muted-foreground">{e.field}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section heading={t.sections.skills}>
        <div className="grid gap-8 md:grid-cols-2">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <h3 className="font-semibold">{category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section heading={t.sections.behavioral}>
        <SubLabel>{t.behavioral.signalsLabel}</SubLabel>
        <div className="mt-4 flex flex-wrap gap-2">
          {behavioralProfile.signals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              {signal}
            </span>
          ))}
        </div>

        <div className="mt-12">
          <SubLabel>{t.behavioral.topStrengthsLabel}</SubLabel>
          <p className="mt-1 text-sm text-muted-foreground">{t.behavioral.topStrengthsSub}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {behavioralProfile.topStrengths.map((s) => (
              <div key={s.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="text-4xl font-bold text-accent">#{s.rank}</p>
                <h3 className="mt-3 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <SubLabel>{t.behavioral.traitsLabel}</SubLabel>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {behavioralProfile.traits.map((trait) => (
              <div key={trait.title} className="rounded-2xl border border-border p-5">
                <h3 className="font-semibold">{trait.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section heading={t.sections.recommendations}>
        <p className="-mt-4 mb-10 text-muted-foreground">
          {t.recommendations.introBefore}
          <a
            href={LINKEDIN_RECOMMENDATIONS}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground underline underline-offset-4 hover:text-primary"
          >
            {t.recommendations.introLink}
          </a>
          {t.recommendations.introAfter}
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {recommendations.map(({ text }) => (
            <figure
              key={text}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <Quote className="h-6 w-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {text}
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-4 text-sm">
                <span className="font-medium">{t.recommendations.authorLabel}</span>
                <a
                  href={LINKEDIN_RECOMMENDATIONS}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 whitespace-nowrap text-primary"
                >
                  {t.recommendations.seeOnLinkedIn}
                  <ArrowUpRight
                    className="h-4 w-4 transition group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
}
