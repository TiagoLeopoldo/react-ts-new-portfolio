import React, { useState } from 'react';
import Title from '../../atoms/Title/Title';
import Text from '../../atoms/Text/Text';
import StackList from '../../molecules/StackList/StackList';
import ProjectLinks from '../../molecules/ProjectLinks/ProjectLinks';
import ChallengeItem from '../../molecules/ChallengeItem/ChallengeItem';
import FeatureItem from '../../molecules/FeatureItem/FeatureItem';
import type { Project } from '../../../types/serviceTypes';
import './ProjectDetails.css';

interface ProjectDetailsProps {
  project: Project;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project }) => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <div className="project-details">
      {/* Hero Section */}
      <section className="project-details-hero section-detail">
        <div className="hero-content">
          <div className="hero-text">
            <Title level={1}>{project.name}</Title>
            <Text variant="lg" color="secondary" className="hero-description">
              {project.longDescription || project.description}
            </Text>
            <ProjectLinks deploy={project.deploy} repository={project.repository} github={project.github} />
          </div>
          <div className="hero-image-container">
            <img src={project.img} alt={project.name} className="hero-image" />
          </div>
        </div>
      </section>

      {/* Context Section */}
      {project.context && (
        <section className="project-details-context section-detail">
          <div className="context-container">
            <Title level={2}>Contexto e Motivação</Title>
            <Text variant="lg" className="context-text">
              {project.context}
            </Text>
          </div>
        </section>
      )}

      {/* Challenges Section */}
      {project.challenges && project.challenges.length > 0 && (
        <section className="project-details-challenges section-detail">
          <Title level={2} className="section-header">Desafios e Soluções</Title>
          <div className="challenges-grid">
            {project.challenges.map((challenge, index) => (
              <ChallengeItem key={index} title={challenge.title} description={challenge.description} />
            ))}
          </div>
        </section>
      )}

      {/* Architecture Section */}
      {project.architecture && (
        <section className="project-details-architecture section-detail">
          <div className="architecture-grid">
            <div className="architecture-content">
              <Title level={2}>Arquitetura e Stack</Title>
              <Text variant="lg" className="architecture-text">
                {project.architecture.description}
              </Text>
            </div>
            <div className="architecture-stack">
              <Title level={4} className="stack-title">Tecnologias Utilizadas</Title>
              <StackList technologies={project.architecture.techStack} />
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      {project.features && project.features.length > 0 && (
        <section className="project-details-features section-detail">
          <Title level={2} className="section-header">Funcionalidades Principais</Title>
          <div className="features-grid">
            {project.features.map((feature, index) => (
              <FeatureItem key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-details-gallery section-detail">
          <Title level={2} className="section-header">Galeria</Title>
          <div className="gallery-grid">
            {project.gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.src} alt={image.alt || `Gallery item ${index + 1}`} className="gallery-image" onClick={() => setActiveImage(image.src)} />
              </div>
            ))}
          </div>
        </section>
      )}

      {activeImage && (
        <div className="lightbox" onClick={() => setActiveImage(null)}>
          <img
            src={activeImage}
            alt="imagem em zoom"
            className="lightbox-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>

  );
};

export default ProjectDetails;
