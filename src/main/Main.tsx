import ProjectSection from "../components/organisms/ProjectSection/ProjectSection";
import HeroSection from "../components/organisms/HeroSection/HeroSection";
import Section from "../components/organisms/Section/Section";
import "./Main.css"
import ProfessionalSection from "../components/organisms/ProfessionalSection/ProfessionalSection";
import SkillsSection from "../components/organisms/SkillsSection/SkillsSection";


const Main = () => {
  return (
    <main className="main">
      <HeroSection />
      <Section id="projects" title="Projetos">
        <ProjectSection />
      </Section>
      <Section id="experience" title="Experiência Profissional">
        <ProfessionalSection />
      </Section>
      <Section id="skills" title="Habilidades">
        <SkillsSection />
      </Section>
    </main>
  )
}

export default Main;
