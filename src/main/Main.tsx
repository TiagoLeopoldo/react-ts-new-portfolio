import ProjectSection from "../components/organisms/ProjectSection/ProjectSection";
import HeroSection from "../components/organisms/HeroSection/HeroSection";
import Section from "../components/organisms/Section/Section";
import "./Main.css"


const Main = () => (
  <main className="main">
    <HeroSection/>
    <Section title="Projetos">
      <ProjectSection />
    </Section>
  </main>
)

export default Main;
