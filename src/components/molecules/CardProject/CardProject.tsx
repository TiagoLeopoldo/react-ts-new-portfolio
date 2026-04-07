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

      <div className="project-actions">
        {project.deploy && (
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-deploy"
            onClick={(e) => e.stopPropagation()}
          >
            Ver Projeto
          </a>
        )}
        <a
          href={project.repository}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-repo"
          style={{ display: project.github ? "block" : "none" }}
          onClick={(e) => e.stopPropagation()}
        >
          Repositório
        </a>
      </div>
    </li>
  );
}

export default CardProject;