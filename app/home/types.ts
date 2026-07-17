export interface NavItem {
  label: string;
  href: string;
}

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
  field: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Recommendation {
  text: string;
}

export interface Project {
  title: string;
  company: string;
  description: string;
  tags: string[];
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

export interface SectionHeading {
  label: string;
  title: string;
}

export interface BehavioralProfileStrings extends SectionHeading {
  signalsLabel: string;
  topStrengthsLabel: string;
  topStrengthsSub: string;
  traitsLabel: string;
  traitsSub: string;
}

export interface RecommendationsStrings extends SectionHeading {
  introBefore: string;
  introLink: string;
  introAfter: string;
  authorLabel: string;
}

export interface LanguageSwitch {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface UIStrings {
  hero: {
    location: string;
    subtitle: string[];
  };
  sections: {
    about: SectionHeading;
    education: SectionHeading;
    experience: SectionHeading;
    skills: SectionHeading;
    behavioralProfile: BehavioralProfileStrings;
    certifications: SectionHeading;
    projects: SectionHeading;
    recommendations: RecommendationsStrings;
  };
  seeOnLinkedIn: string;
  footer: {
    tagline: string;
    navigationLabel: string;
    connectLabel: string;
    rights: string;
    builtWith: string;
    photoCredit: string;
  };
  languageSwitch: LanguageSwitch;
}

export interface ResumeData {
  ui: UIStrings;
  nav: NavItem[];
  about: About;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  behavioralProfile: BehavioralProfile;
  certifications: Certification[];
  recommendations: Recommendation[];
  projects: Project[];
}
