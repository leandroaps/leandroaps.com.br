import type { ResumeData } from "./types";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { BehavioralProfileSection } from "./components/BehavioralProfileSection";
import { SkillsSection } from "./components/SkillsSection";
import { useScrollAnimation } from "./hooks";

export function Welcome({ data }: { data: ResumeData }) {
  useScrollAnimation();
  const { ui } = data;

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <NavBar navItems={data.nav} languageSwitch={ui.languageSwitch} />
      <HeroSection hero={ui.hero} />
      <AboutSection about={data.about} heading={ui.sections.about} />
      <EducationSection education={data.education} heading={ui.sections.education} />
      <ExperienceSection
        experience={data.experience}
        heading={ui.sections.experience}
        seeOnLinkedIn={ui.seeOnLinkedIn}
      />
      <SkillsSection
        skills={data.skills}
        heading={ui.sections.skills}
        seeOnLinkedIn={ui.seeOnLinkedIn}
      />
      <BehavioralProfileSection
        behavioralProfile={data.behavioralProfile}
        strings={ui.sections.behavioralProfile}
      />
      <CertificationsSection
        certifications={data.certifications}
        heading={ui.sections.certifications}
        seeOnLinkedIn={ui.seeOnLinkedIn}
      />
      <ProjectsSection projects={data.projects} heading={ui.sections.projects} />
      <RecommendationsSection
        recommendations={data.recommendations}
        strings={ui.sections.recommendations}
        seeOnLinkedIn={ui.seeOnLinkedIn}
      />
      <Footer navItems={data.nav} footer={ui.footer} />
    </div>
  );
}
