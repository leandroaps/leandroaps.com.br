import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { NavBar } from "./components/NavBar";
import { ProjectsSection } from "./components/ProjectsSection";
import { RecommendationsSection } from "./components/RecommendationsSection";
import { SkillsSection } from "./components/SkillsSection";
import { useScrollAnimation } from "./hooks";

export function Welcome() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white text-[#222222]">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <RecommendationsSection />
      <Footer />
    </div>
  );
}
