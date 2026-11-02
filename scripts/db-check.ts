// Verifies the two locales are structurally in sync: every content table has the
// same positions for 'en' and 'pt-br', array columns have matching lengths, and
// ui_strings has the same key structure. Exits non-zero on drift.
// Usage: npm run db:check
import { Pool } from "@neondatabase/serverless";

try {
  process.loadEnvFile();
} catch {
  // no .env file — rely on the environment
}

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

// table -> text[] columns whose lengths must match across locales
const TABLES: Record<string, string[]> = {
  nav_items: [],
  about_paragraphs: [],
  about_stats: [],
  experiences: ["highlights", "tags"],
  education: [],
  skill_groups: ["items"],
  behavioral_signals: [],
  behavioral_strengths: [],
  behavioral_traits: [],
  certifications: [],
  recommendations: [],
  projects: ["tags"],
};

function shape(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(shape);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([k, v]) => [k, shape(v)])
    );
  }
  return typeof value;
}

const pool = new Pool({ connectionString: url });
const problems: string[] = [];

try {
  for (const [table, arrays] of Object.entries(TABLES)) {
    const lens = arrays.map((c) => `coalesce(cardinality(${c}), 0) AS ${c}`).join(", ");
    const { rows } = await pool.query(
      `SELECT locale, position${lens ? ", " + lens : ""} FROM ${table} ORDER BY locale, position`
    );
    const byLocale = (loc: string) =>
      JSON.stringify(
        rows.filter((r) => r.locale === loc).map(({ locale: _locale, ...rest }) => rest)
      );
    if (byLocale("en") !== byLocale("pt-br")) {
      problems.push(`${table}: rows or array lengths differ between en and pt-br`);
    }
  }

  const { rows: ui } = await pool.query("SELECT locale, strings FROM ui_strings");
  const uiShape = (loc: string) =>
    JSON.stringify(shape(ui.find((r) => r.locale === loc)?.strings ?? null));
  if (uiShape("en") === "null" || uiShape("pt-br") === "null") {
    problems.push("ui_strings: missing a locale");
  } else if (uiShape("en") !== uiShape("pt-br")) {
    problems.push("ui_strings: key structure differs between en and pt-br");
  }
} finally {
  await pool.end();
}

if (problems.length) {
  console.error(problems.map((p) => `✗ ${p}`).join("\n"));
  process.exit(1);
}
console.log("✓ en and pt-br are in sync.");
