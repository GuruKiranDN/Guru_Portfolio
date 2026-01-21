import React, { useEffect, useState } from 'react';
import { ResearchProject } from '../../../types/research';
import { getResearchProjectById } from '../../../data/researchProjects';
import '../../../styles/research/ResearchModal.css';
import '../../../styles/research/AILearningImpactModal.css';

interface AILearningImpactModalProps {
  researchId: string;
  onClose: () => void;
}

const AILearningImpactModal: React.FC<AILearningImpactModalProps> = ({ researchId, onClose }) => {
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
            <div className="research-questions-list ai-questions">
              {research.researchQuestions.map((question, index) => (
                <div key={index} className="research-question-item ai-question">
                  <div className="question-type ai-rq">{question.type}</div>
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
                    <p key={lineIndex} style={{ marginBottom: line.startsWith('-') ? '0.5rem' : '1rem' }}>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AILearningImpactModal;

