// Loads portfolio content from Neon. Runs only at build time: both routes are
// prerendered (ssr: false), so their loaders execute during `react-router build`.
import { neon } from "@neondatabase/serverless";
import type {
  AboutStat,
  BehavioralStrength,
  BehavioralTrait,
  Certification,
  Education,
  Experience,
  NavItem,
  Project,
  Recommendation,
  ResumeData,
  SkillGroup,
  UIStrings,
} from "@/home/types";

export type Locale = "en" | "pt-br";

function getSql() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL is not set — add it to .env (see .env.example).");
  }
  return neon(url);
}

export async function getResume(locale: Locale): Promise<ResumeData> {
  const sql = getSql();

  const [
    ui,
    nav,
    paragraphs,
    stats,
    experience,
    education,
    skills,
    signals,
    topStrengths,
    traits,
    certifications,
    recommendations,
    projects,
  ] = await Promise.all([
    sql`SELECT strings FROM ui_strings WHERE locale = ${locale}`,
    sql`SELECT label, href FROM nav_items WHERE locale = ${locale} ORDER BY position`,
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
    sql`SELECT name, issuer FROM certifications WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT text FROM recommendations WHERE locale = ${locale} ORDER BY position`,
    sql`SELECT title, company, description, tags
        FROM projects WHERE locale = ${locale} ORDER BY position`,
  ]);

  if (ui.length === 0) {
    throw new Error(`No content for locale "${locale}" in the database (ui_strings is empty).`);
  }

  return {
    ui: ui[0].strings as UIStrings,
    nav: nav as NavItem[],
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
    certifications: certifications as Certification[],
    recommendations: recommendations as Recommendation[],
    projects: projects as Project[],
  };
}
