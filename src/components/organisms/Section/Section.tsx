import type { ReactNode } from "react";
import "./Section.css";
import Title from "../../atoms/Title/Title";

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
}

const Section = ({title, children, id} :SectionProps) => {
  return (
    <section id={id} className="section fade-in-section">
      <Title level={1} className="section-title">{title}</Title>
      {children}
    </section>
  )
}

export default Section;