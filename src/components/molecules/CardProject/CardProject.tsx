import type { Project } from "../../../types/serviceTypes";
import "./CardProject.css";

interface CardProjectProps {
  project: Project;
}

const CardProject = ({ project }: CardProjectProps) => {


  return (
    <li className="project-card clickable">
      <div className="project-image">
        <img
          src={project.img}
          alt={project.name}
          onError={(e) => {
            e.currentTarget.src = "/fallback.png";
          }}
        />
      </div>

      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default CardProject;