import AboutPage from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";
import SkillsPage from "./skills/page";
import TechStackPage from "./tech_stack/page";
import Experience from "./WorkExperience/page";
import FloatingArrowBtn from "@/components/common/FloatingArrowBtn";

export default function Home() {
  return (
    <section id="home static">
      <AboutPage />
      <SkillsPage />
      <TechStackPage />
      <Experience />
      <ProjectsPage />
      <ContactPage />
      <FloatingArrowBtn />
    </section>
  );
}
