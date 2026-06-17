import { useScrollAnimation } from "./hooks";
import { NavBar } from "./components/NavBar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { SkillsSection } from "./components/SkillsSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
// import { RecommendationsSection } from "./components/RecommendationsSection";

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
      {/* <RecommendationsSection /> */}
      <Footer />
    </div>
  );
}
