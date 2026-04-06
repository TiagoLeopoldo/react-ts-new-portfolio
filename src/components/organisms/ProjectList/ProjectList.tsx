import type { Project } from "../../../types/serviceTypes";
import CardProject from "../../molecules/CardProject/CardProject";
import "./ProjectList.css";

interface ProjectListProps {
  projects: Project[];
}

const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <ul className="projects-grid">
      {projects.map((project) => {
        return <CardProject key={project.id} project={project} />
      })}
    </ul>
  )
}

export default ProjectList;