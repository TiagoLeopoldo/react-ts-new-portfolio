import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  title: string;
  children: ReactNode;
}

const Section = ({title, children} :SectionProps) => {
  return (
    <section id="projects" className="section fade-in-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

export default Section;