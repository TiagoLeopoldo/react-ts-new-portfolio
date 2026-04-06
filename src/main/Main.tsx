import ProjectSection from "../components/organisms/ProjectSection/ProjectSection";
import HeroSection from "../components/organisms/HeroSection/HeroSection";
import Section from "../components/organisms/Section/Section";
import "./Main.css"
import ProfessionalSection from "../components/organisms/ProfessionalSection/ProfessionalSection";


const Main = () => {
  return (
    <main className="main">
      <HeroSection />
      <Section title="Projetos">
        <ProjectSection />
      </Section>
      <Section title="Experiência Profissional">
        <ProfessionalSection />
      </Section>
    </main>
  )
}

export default Main;
