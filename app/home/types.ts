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

export interface ResumeData {
  nav: NavItem[];
  about: About;
  experience: Experience[];
  education: Education[];
  skills: SkillGroup[];
  certifications: Certification[];
  recommendations: Recommendation[];
  projects: Project[];
}
