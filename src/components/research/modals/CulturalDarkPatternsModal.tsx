import React, { useEffect, useState } from 'react';
import { ResearchProject } from '../../../types/research';
import { getResearchProjectById } from '../../../data/researchProjects';
import '../../../styles/research/ResearchModal.css';
import '../../../styles/research/CulturalDarkPatternsModal.css';

interface CulturalDarkPatternsModalProps {
  researchId: string;
  onClose: () => void;
}

const CulturalDarkPatternsModal: React.FC<CulturalDarkPatternsModalProps> = ({ researchId, onClose }) => {
  const [research, setResearch] = useState<ResearchProject | null>(null);
  const [activeSection, setActiveSection] = useState('theme');

  useEffect(() => {
    const fetchResearch = () => {
      const foundResearch = getResearchProjectById(researchId);
      if (foundResearch) {
        setResearch(foundResearch);
      }
    };

    fetchResearch();
  }, [researchId]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(`research-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  if (!research) {
    return null;
  }

  const mediumsMaterials = Array.isArray(research.mediumsMaterials) 
    ? research.mediumsMaterials 
    : [];

  return (
    <div className="research-modal-overlay">
      <div className="research-modal-container">
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div className="research-modal-header">
          <div className="research-header-content">
            <h2 className="research-title">{research.title}</h2>
            <p className="research-category">{research.category}</p>
          </div>
          <button className="download-paper-btn" onClick={() => {}}>
            Download Paper
          </button>
        </div>
        
        <div className="research-modal-nav">
          <div className="research-nav-links">
            <button
              className={`nav-link ${activeSection === 'theme' ? 'active' : ''}`}
              onClick={() => scrollToSection('theme')}
            >
              Theme
            </button>
            <button
              className={`nav-link ${activeSection === 'questions' ? 'active' : ''}`}
              onClick={() => scrollToSection('questions')}
            >
              Research Questions
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
        
        <div className="research-modal-content">
          <div id="research-theme" className="research-section">
            <h3 className="section-title">Theme</h3>
            <p className="section-content">{research.theme}</p>
            
            {research.images[0] && (
              <div className="research-image-wrapper">
                <div className="research-image-container">
                  <img src={research.images[0].url} alt={research.images[0].legend} className="research-image" />
                </div>
                <p className="image-legend">{research.images[0].legend}</p>
              </div>
            )}
          </div>
          
          <div id="research-questions" className="research-section">
            <h3 className="section-title">Research Questions</h3>
            <div className="research-questions-list cultural-questions">
              {research.researchQuestions.map((question, index) => (
                <div key={index} className="research-question-item cultural-question">
                  <div className={`question-type ${question.type.toLowerCase()}`}>
                    {question.type}
                  </div>
                  <div className="question-content">
                    <p>{question.question}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div id="research-methods" className="research-section">
            <h3 className="section-title">Methods</h3>
            <div className="section-content methods-content">
              {research.methods.split('\n\n').map((paragraph, index) => (
                <div key={index} className="method-paragraph">
                  {paragraph.split('\n').map((line, lineIndex) => (
                    <p key={lineIndex} style={{ marginBottom: line.startsWith('-') || line.match(/^\d+\./) ? '0.5rem' : '1rem' }}>
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
            
            {research.images[1] && (
              <div className="research-image-wrapper">
                <div className="research-image-container">
                  <img src={research.images[1].url} alt={research.images[1].legend} className="research-image" />
                </div>
                <p className="image-legend">{research.images[1].legend}</p>
              </div>
            )}
          </div>
          
          {mediumsMaterials.length > 0 && (
            <div id="research-materials" className="research-section">
              <h3 className="section-title">Mediums & Materials</h3>
              <div className="materials-table-container">
                <table className="materials-table">
                  <thead>
                    <tr>
                      <th>Source</th>
                      <th>Domain</th>
                      <th>Key Contribution</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mediumsMaterials.map((material, index) => (
                      <tr key={index}>
                        <td>{material.source}</td>
                        <td>{material.domain}</td>
                        <td>{material.contribution}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          <div id="research-techniques" className="research-section">
            <h3 className="section-title">Techniques & Technologies</h3>
            <div className="section-content techniques-content">
              {typeof research.techniquesTechnologies === 'string' 
                ? research.techniquesTechnologies.split('\n').map((line, index) => (
                    <p key={index} style={{ marginBottom: line.startsWith('-') ? '0.5rem' : '1rem' }}>
                      {line}
                    </p>
                  ))
                : research.techniquesTechnologies.map((tech, index) => (
                    <p key={index}>{tech}</p>
                  ))
              }
            </div>
          </div>
          
          <div id="research-audience" className="research-section">
            <h3 className="section-title">Audience & Impact</h3>
            <div className="section-content audience-content">
              {typeof research.audienceImpact === 'string'
                ? research.audienceImpact.split('\n\n').map((paragraph, index) => (
                    <div key={index} className="audience-group">
                      {paragraph.split('\n').map((line, lineIndex) => (
                        <p key={lineIndex} style={{ marginBottom: '0.5rem' }}>{line}</p>
                      ))}
                    </div>
                  ))
                : research.audienceImpact.map((item, index) => (
                    <p key={index}>{item}</p>
                  ))
              }
            </div>
            
            {research.images[2] && (
              <div className="research-image-wrapper">
                <div className="research-image-container">
                  <img src={research.images[2].url} alt={research.images[2].legend} className="research-image" />
                </div>
                <p className="image-legend">{research.images[2].legend}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalDarkPatternsModal;

