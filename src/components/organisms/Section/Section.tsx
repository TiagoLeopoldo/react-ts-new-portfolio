import type { ReactNode } from "react";
import "./Section.css";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section = ({title, children, id} :SectionProps) => {
  return (
    <section id={id} className="section fade-in-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  )
}

export default Section;