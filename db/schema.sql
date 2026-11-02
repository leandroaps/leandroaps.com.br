-- Portfolio content schema (Neon / Postgres).
-- Every content table is keyed by (locale, position): `locale` is 'en' or 'pt-br',
-- `position` is the 0-based display order. Both locales must have the same rows.
-- Apply with: npm run db:migrate

CREATE TABLE IF NOT EXISTS locales (
  code text PRIMARY KEY
);
INSERT INTO locales (code) VALUES ('en'), ('pt-br') ON CONFLICT DO NOTHING;

-- UI copy (headings, labels, footer text). Nested and fixed-shape, so it is
-- stored as one JSONB document per locale matching the UIStrings type.
CREATE TABLE IF NOT EXISTS ui_strings (
  locale  text PRIMARY KEY REFERENCES locales(code),
  strings jsonb NOT NULL
);

CREATE TABLE IF NOT EXISTS nav_items (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  label    text NOT NULL,
  href     text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS about_paragraphs (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  text     text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS about_stats (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  stat     text NOT NULL,
  label    text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS experiences (
  locale     text   NOT NULL REFERENCES locales(code),
  position   int    NOT NULL,
  company    text   NOT NULL,
  role       text   NOT NULL,
  period     text   NOT NULL,
  location   text   NOT NULL,
  highlights text[] NOT NULL DEFAULT '{}',
  tags       text[] NOT NULL DEFAULT '{}',
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS education (
  locale      text NOT NULL REFERENCES locales(code),
  position    int  NOT NULL,
  institution text NOT NULL,
  degree      text NOT NULL,
  field       text NOT NULL,
  year        text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS skill_groups (
  locale   text   NOT NULL REFERENCES locales(code),
  position int    NOT NULL,
  category text   NOT NULL,
  items    text[] NOT NULL DEFAULT '{}',
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS behavioral_signals (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  text     text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS behavioral_strengths (
  locale      text NOT NULL REFERENCES locales(code),
  position    int  NOT NULL,
  rank        int  NOT NULL,
  title       text NOT NULL,
  description text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS behavioral_traits (
  locale      text NOT NULL REFERENCES locales(code),
  position    int  NOT NULL,
  title       text NOT NULL,
  description text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS certifications (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  name     text NOT NULL,
  issuer   text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS recommendations (
  locale   text NOT NULL REFERENCES locales(code),
  position int  NOT NULL,
  text     text NOT NULL,
  PRIMARY KEY (locale, position)
);

CREATE TABLE IF NOT EXISTS projects (
  locale      text   NOT NULL REFERENCES locales(code),
  position    int    NOT NULL,
  title       text   NOT NULL,
  company     text   NOT NULL,
  description text   NOT NULL,
  tags        text[] NOT NULL DEFAULT '{}',
  PRIMARY KEY (locale, position)
);
