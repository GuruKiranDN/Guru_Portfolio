import React from 'react';
import { ResearchProject } from '../../types/research';
import '../../styles/ResearchCard.css';

interface ResearchCardProps {
  research: ResearchProject;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ research }) => {
  return (
    <div className="research-card">
      <div className="research-image-container">
        <img src={research.previewImage} alt={research.title} className="research-image" />
        <div className="research-overlay">
          <a href={`#research/${research.id}`} className="view-research-btn">View Research</a>
        </div>
      </div>
      
      <div className="research-content">
        <h3 className="research-title">{research.title}</h3>
        <p className="research-description">{research.description}</p>
        
        <div className="research-meta">
          <div className="research-category">
            <span className="meta-label">Category:</span>
            <span className="meta-value">{research.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchCard;

