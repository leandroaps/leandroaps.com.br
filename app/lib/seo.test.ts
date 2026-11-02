import { readFileSync } from "node:fs";
import path from "node:path";
import { PATHS, type Locale, type Page } from "./routes";
import { absoluteUrl, OG_IMAGE, personJsonLd, SEO } from "./seo";

const root = path.resolve(import.meta.dirname, "../..");
const locales = Object.keys(PATHS) as Locale[];
const pages = Object.keys(PATHS.en) as Page[];

/** Width/height from a baseline or progressive JPEG's SOF marker. */
function jpegSize(file: string) {
  const buf = readFileSync(file);
  let i = 2;
  while (i < buf.length) {
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xc2) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + len;
  }
  throw new Error(`no SOF marker in ${file}`);
}

describe("SEO copy", () => {
  it.each(locales.flatMap((l) => pages.map((p) => [l, p] as const)))(
    "%s %s has search-friendly title and description lengths",
    (locale, page) => {
      const seo = SEO[locale][page];
      expect(seo.title.length).toBeLessThanOrEqual(70);
      expect(seo.description.length).toBeGreaterThanOrEqual(110);
      expect(seo.description.length).toBeLessThanOrEqual(160);
    }
  );
});

describe("sharing images", () => {
  it.each(locales)("%s image exists in public/ at 1200×630", (locale) => {
    const file = path.join(root, "public", new URL(OG_IMAGE[locale].url).pathname);
    expect(jpegSize(file)).toEqual({ width: 1200, height: 630 });
  });
});

describe("sitemap.xml", () => {
  it("lists every page in both locales", () => {
    const xml = readFileSync(path.join(root, "public/sitemap.xml"), "utf8");
    for (const locale of locales) {
      for (const page of pages) {
        expect(xml).toContain(`<loc>${absoluteUrl(locale, page)}</loc>`);
      }
    }
  });
});

describe("personJsonLd", () => {
  it("serializes to valid JSON without closing the script tag", () => {
    const json = JSON.stringify(personJsonLd("pt-br"));
    expect(JSON.parse(json)["@type"]).toBe("Person");
    expect(json).not.toContain("</");
  });
});
