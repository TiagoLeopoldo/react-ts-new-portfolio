import React from 'react';
import Button from '../../atoms/Button/Button';
import './ProjectLinks.css';
import ExternalIcon from '../../atoms/ExternalIcon/ExternalIcon';

interface ProjectLinksProps {
  deploy?: string;
  repository?: string;
  className?: string;
  github: boolean
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({ deploy, repository, className = '', github }) => {
  return (
    <div className={`project-links-molecule ${className}`}>
      {deploy && (
        <Button className=".btn-deploy" href={deploy} target="_blank" rel="noopener noreferrer" variant="primary">
          Visualizar Site <ExternalIcon />
        </Button>
      )}
      {repository && github && (
        <Button
          className=".btn-repo"
          href={repository}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
        >
          Repositório <ExternalIcon />
        </Button>
      )}
    </div>
  );
};

export default ProjectLinks;
