import { useNavigate } from "react-router-dom";
import type { Project } from "../../../types/serviceTypes";
import "./CardProject.css";

interface CardProjectProps {
  project: Project
  className: string
}

const CardProject = ({ project, className }: CardProjectProps) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if (project.slug) {
      navigate(`/projeto/${project.slug}`);
    }
  };

  return (
    <li className={className} onClick={handleCardClick}>
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