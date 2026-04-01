import type { Project } from "../../../types/serviceTypes";
import "./CardProject.css";

interface CardProjectProps {
  project: Project;
}

const CardProject = ({ project }: CardProjectProps) => {


  return (
    <li className="project-card clickable">
      <div className="project-image">
      {/*}  { project ? (
          <img src="#" alt={project.name} />
        ) : (
          <div className="image-fallback">
            <span>{project.name}</span>
          </div>
        )} */}
      </div>

      <div className="project-content">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
    </li>
  );
}

export default CardProject;