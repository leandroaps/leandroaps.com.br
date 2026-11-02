// Loads site content from Neon. Runs only at build time: every route is
// prerendered (ssr: false), so the loaders execute during `react-router build`.
import { neon } from "@neondatabase/serverless";
import type {
  AboutStat,
  Article,
  BehavioralStrength,
  BehavioralTrait,
  Education,
  Experience,
  IntroColumn,
  Recommendation,
  SideProject,
  SiteContent,
  SkillGroup,
  UIStrings,
} from "@/home/types";
import type { Locale } from "@/lib/routes";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set — add it to .env (see .env.example).");
  }
  return neon(url);
}

export async function getContent(locale: Locale): Promise<SiteContent> {
  const sql = getSql();

  const [
    ui,
    intro,
    sideProjects,
    articles,
    paragraphs,
    stats,
    experience,
    education,
    skills,
    signals,
    topStrengths,
    traits,
    recommendations,
  ] = await Promise.all([
    sql`SELECT strings FROM ui_strings WHERE locale = ${locale}`,
    sql`SELECT title, text, tone FROM home_intro WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT name, url, subtitle, role, description, icon, tone
          FROM side_projects WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT title, description, url, published
          FROM articles WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT text FROM about_paragraphs WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT stat, label FROM about_stats WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT company, role, period, location, highlights, tags
          FROM experiences WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT institution, degree, field, year
          FROM education WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT category, items FROM skill_groups WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT text FROM behavioral_signals WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT rank, title, description
          FROM behavioral_strengths WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT title, description FROM behavioral_traits WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT text FROM recommendations WHERE locale = ${locale} ORDER BY position`,
  ]);

  if (ui.length === 0) {
    throw new Error(`No content for locale "${locale}" in the database (ui_strings is empty).`);
  }

  return {
    ui: ui[0].strings as UIStrings,
    intro: intro as IntroColumn[],
    sideProjects: sideProjects as SideProject[],
    articles: articles as Article[],
    about: {
      paragraphs: paragraphs.map((r) => r.text as string),
      stats: stats as AboutStat[],
    },
    experience: experience as Experience[],
    education: education as Education[],
    skills: skills as SkillGroup[],
    behavioralProfile: {
      signals: signals.map((r) => r.text as string),
      topStrengths: topStrengths as BehavioralStrength[],
      traits: traits as BehavioralTrait[],
    },
    recommendations: recommendations as Recommendation[],
  };
}
