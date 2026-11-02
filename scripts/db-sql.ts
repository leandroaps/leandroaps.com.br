// Runs SQL against DATABASE_URL and prints the resulting rows as JSON.
// Usage:
//   npm run db:sql -- "SELECT * FROM certifications WHERE locale = 'en'"
//   npm run db:sql -- -f path/to/changes.sql
// Multiple statements are allowed; wrap edits in BEGIN; ... COMMIT; to apply them atomically.
import { readFileSync } from "node:fs";
import { Pool } from "@neondatabase/serverless";

try {
  process.loadEnvFile();
} catch {
  // no .env file — rely on the environment
}

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

const args = process.argv.slice(2);
const text = args[0] === "-f" ? readFileSync(args[1], "utf8") : args.join(" ");
if (!text.trim()) {
  console.error('Usage: npm run db:sql -- "<sql>"  |  npm run db:sql -- -f <file.sql>');
  process.exit(1);
}

const pool = new Pool({ connectionString: url });
try {
  const result = await pool.query(text);
  for (const r of Array.isArray(result) ? result : [result]) {
    if (r.fields?.length) console.log(JSON.stringify(r.rows, null, 2));
    else console.log(`${r.command} ${r.rowCount ?? ""}`.trim());
  }
} finally {
  await pool.end();
}
