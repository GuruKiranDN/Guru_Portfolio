import React from 'react';
import { Project } from '../types';
import '../styles/ProjectCard.css';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img src={project.previewImage} alt={project.title} className="project-image" />
        <div className="project-overlay">
          <a href={`#project/${project.id}`} className="view-project-btn">View Project</a>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-meta">
          <div className="project-role">
            <span className="meta-label">Role:</span>
            <span className="meta-value">{project.role}</span>
          </div>
          
          <div className="project-technologies">
            <span className="meta-label">Technologies:</span>
            <div className="tech-tags">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
              {project.technologies.length > 3 && (
                <span className="tech-tag">+{project.technologies.length - 3}</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;