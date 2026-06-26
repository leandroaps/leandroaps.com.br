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

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <NavBar navItems={data.nav} />
      <HeroSection />
      <AboutSection about={data.about} />
      <EducationSection education={data.education} />
      <ExperienceSection experience={data.experience} />
      <SkillsSection skills={data.skills} />
      <BehavioralProfileSection behavioralProfile={data.behavioralProfile} />
      <CertificationsSection certifications={data.certifications} />
      <ProjectsSection projects={data.projects} />
      <RecommendationsSection recommendations={data.recommendations} />
      <Footer navItems={data.nav} />
    </div>
  );
}
