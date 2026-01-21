import React, { useEffect, useState } from 'react';
import { WebDevProject } from '../../../types/webdev';
import { getWebDevProjectById } from '../../../data/webDevProjects';
import '../../../styles/webdev/WebDevModal.css';
import '../../../styles/webdev/UnicornMarkModal.css';

interface UnicornMarkModalProps {
  webDevId: string;
  onClose: () => void;
}

const UnicornMarkModal: React.FC<UnicornMarkModalProps> = ({ webDevId, onClose }) => {
  const [project, setProject] = useState<WebDevProject | null>(null);
  const [activeSection, setActiveSection] = useState('theme');

  useEffect(() => {
    const fetchProject = () => {
      const foundProject = getWebDevProjectById(webDevId);
      if (foundProject) {
        setProject(foundProject);
      }
    };

    fetchProject();
  }, [webDevId]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(`webdev-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  if (!project) {
    return null;
  }

  const mediumsMaterials = Array.isArray(project.mediumsMaterials) 
    ? project.mediumsMaterials 
    : [project.mediumsMaterials];

  return (
    <div className="webdev-modal-overlay">
      <div className="webdev-modal-container">
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div className="webdev-modal-header">
          <div className="webdev-header-content">
            <h2 className="webdev-title">{project.title}</h2>
            <p className="webdev-category">{project.category}</p>
          </div>
        </div>

        {project.coverImage && (
          <div className="cover-image-wrapper">
            <img src={project.coverImage} alt={`${project.title} cover`} className="cover-image" />
          </div>
        )}
        
        <div className="webdev-modal-nav">
          <div className="webdev-nav-links">
            <button
              className={`nav-link ${activeSection === 'theme' ? 'active' : ''}`}
              onClick={() => scrollToSection('theme')}
            >
              Theme
            </button>
            <button
              className={`nav-link ${activeSection === 'question' ? 'active' : ''}`}
              onClick={() => scrollToSection('question')}
            >
              Research Question
            </button>
            <button
              className={`nav-link ${activeSection === 'methods' ? 'active' : ''}`}
              onClick={() => scrollToSection('methods')}
            >
              Methods
            </button>
            <button
              className={`nav-link ${activeSection === 'materials' ? 'active' : ''}`}
              onClick={() => scrollToSection('materials')}
            >
              Materials
            </button>
            <button
              className={`nav-link ${activeSection === 'techniques' ? 'active' : ''}`}
              onClick={() => scrollToSection('techniques')}
            >
              Techniques
            </button>
            <button
              className={`nav-link ${activeSection === 'audience' ? 'active' : ''}`}
              onClick={() => scrollToSection('audience')}
            >
              Audience & Impact
            </button>
          </div>
        </div>
        
        <div className="webdev-modal-content">
          <div id="webdev-theme" className="webdev-section">
            <h3 className="section-title">Theme</h3>
            <p className="section-content">{project.theme}</p>
          </div>
          
          <div id="webdev-question" className="webdev-section">
            <h3 className="section-title">Research Question</h3>
            <p className="section-content">{project.researchQuestion}</p>
          </div>
          
          <div id="webdev-methods" className="webdev-section">
            <h3 className="section-title">Methods</h3>
            <div className="section-content methods-content">
              {project.methods.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
              ))}
            </div>
          </div>

          {project.images.length > 0 && (
            <div className="webdev-images-grid">
              {project.images.map((image, index) => (
                <div key={index} className="webdev-image-wrapper">
                  <div className="webdev-image-container">
                    <img src={image.url} alt={image.legend} className="webdev-image" />
                  </div>
                  <p className="image-legend">{image.legend}</p>
                </div>
              ))}
            </div>
          )}
          
          <div id="webdev-materials" className="webdev-section">
            <h3 className="section-title">Mediums & Materials</h3>
            <div className="section-content materials-content">
              {mediumsMaterials.map((material, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{material}</p>
              ))}
            </div>
          </div>
          
          <div id="webdev-techniques" className="webdev-section">
            <h3 className="section-title">Techniques & Technologies</h3>
            <div className="section-content techniques-content">
              {project.techniquesTechnologies.split('\n').map((line, index) => (
                <p key={index} style={{ marginBottom: line.startsWith('-') ? '0.5rem' : '1rem' }}>
                  {line}
                </p>
              ))}
            </div>
          </div>
          
          <div id="webdev-audience" className="webdev-section">
            <h3 className="section-title">Audience & Impact</h3>
            <div className="section-content audience-content">
              {project.audienceImpact.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnicornMarkModal;

