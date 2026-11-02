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
  /** Null for work projects without a public URL (card is not a link). */
  url: string | null;
  /** Domain for linked projects, company for work projects. */
  subtitle: string;
  /** Optional badge (e.g. "Founder"). */
  role: string | null;
  description: string;
  /** Key of an icon in CONTENT_ICONS (app/home/icons.tsx). */
  icon: string;
  tone: Tone;
}

export interface Article {
  /** Original title (in the article's language), same in both locales. */
  title: string;
  description: string;
  url: string;
  /** Display date, already localized (e.g. "Jul 22, 2026"). */
  published: string;
  /** Rendered as a full-width highlight above the other articles. */
  featured: boolean;
  /** Optional pill on the card, e.g. "Série · 5 artigos". */
  badge: string | null;
  /** BCP 47 tag of the article's language (lang attribute on the title). */
  language: string;
}

export interface BehavioralStrength {
  rank: number;
  title: string;
  description: string;
}

export interface BehavioralTrait {
  title: string;
  description: string;
}

export interface BehavioralProfile {
  signals: string[];
  topStrengths: BehavioralStrength[];
  traits: BehavioralTrait[];
}

export interface Recommendation {
  /** Original text, in the language the colleague wrote it (same in both locales). */
  text: string;
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
      behavioral: SectionHeading;
      recommendations: SectionHeading;
    };
    behavioral: {
      signalsLabel: string;
      topStrengthsLabel: string;
      topStrengthsSub: string;
      traitsLabel: string;
    };
    recommendations: {
      introBefore: string;
      introLink: string;
      introAfter: string;
      authorLabel: string;
      seeOnLinkedIn: string;
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
  behavioralProfile: BehavioralProfile;
  recommendations: Recommendation[];
}
