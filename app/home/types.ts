export type Tone = "primary" | "accent";

export interface AboutStat {
  stat: string;
  label: string;
}

export interface About {
  paragraphs: string[];
  stats: AboutStat[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

export interface Education {
  institution: string;
  degree: string;
  /** Full line shown on the profile, e.g. "MBA em Tecnologia da Informação". */
  field: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface IntroColumn {
  title: string;
  text: string;
  tone: Tone;
}

export interface SideProject {
  name: string;
  url: string;
  domain: string;
  role: string;
  description: string;
  /** Key of an icon in CONTENT_ICONS (app/home/icons.tsx). */
  icon: string;
  tone: Tone;
}

export interface Article {
  /** Original (English) title, same in both locales. */
  title: string;
  description: string;
  url: string;
  /** Display date, already localized (e.g. "Jul 22, 2026"). */
  published: string;
}

export interface SectionHeading {
  label: string;
  title: string;
}

export interface UIStrings {
  site: { name: string; location: string };
  nav: { label: string; home: string; profile: string; projects: string };
  languageSwitch: { label: string; ariaLabel: string };
  theme: { toggle: string };
  footer: {
    title: string;
    networking: string;
    code: string;
    reading: string;
    copyright: string;
  };
  home: {
    eyebrow: string;
    name: string;
    tagline: string;
    bio: string;
    ctaProjects: string;
    ctaProfile: string;
    photoAlt: string;
    photoBadge: string;
    aboutEyebrow: string;
    aboutTitle: string;
    projectsTitle: string;
    projectsSubtitle: string;
    articlesTitle: string;
    articlesSubtitle: string;
    articlesAll: string;
    articlesRead: string;
  };
  profile: {
    location: string;
    name: string;
    headline: string;
    photoAlt: string;
    sections: {
      about: SectionHeading;
      experience: SectionHeading;
      education: SectionHeading;
      skills: SectionHeading;
    };
  };
}

export interface SiteContent {
  ui: UIStrings;
  intro: IntroColumn[];
  sideProjects: SideProject[];
  articles: Article[];
  about: About;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
}
