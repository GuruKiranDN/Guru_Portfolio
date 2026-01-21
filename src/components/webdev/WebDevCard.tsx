import React from 'react';
import { WebDevProject } from '../../types/webdev';
import '../../styles/WebDevCard.css';

interface WebDevCardProps {
  project: WebDevProject;
}

const WebDevCard: React.FC<WebDevCardProps> = ({ project }) => {
  return (
    <div className="webdev-card">
      <div className="webdev-image-container">
        <img src={project.previewImage} alt={project.title} className="webdev-image" />
        <div className="webdev-overlay">
          <a href={`#webdev/${project.id}`} className="view-webdev-btn">View Project</a>
        </div>
      </div>
      
      <div className="webdev-content">
        <h3 className="webdev-title">{project.title}</h3>
        <p className="webdev-description">{project.description}</p>
        
        <div className="webdev-meta">
          <div className="webdev-category">
            <span className="meta-label">Category:</span>
            <span className="meta-value">{project.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDevCard;

