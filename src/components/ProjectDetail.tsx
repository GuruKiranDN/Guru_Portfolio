import React, { useEffect, useState } from 'react';
import { Project } from '../types';
import { getProjectById, getRelatedProjects } from '../data/projects';
import ProjectCard from './ProjectCard';
import '../styles/ProjectDetail.css';

interface ProjectDetailProps {
  projectId: string;
  onClose: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ projectId, onClose }) => {
  const [project, setProject] = useState<Project | null>(null);
  const [expandedCaseStudy, setExpandedCaseStudy] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [relatedProjects, setRelatedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProject = () => {
      const foundProject = getProjectById(projectId);
      if (foundProject) {
        setProject(foundProject);
        setRelatedProjects(getRelatedProjects(projectId));
      }
    };

    fetchProject();
  }, [projectId]);

  useEffect(() => {
    // Disable body scrolling when project detail is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable body scrolling when project detail is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(`project-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  if (!project) {
    return null;
  }

  return (
    <div className="project-detail-overlay">
      <div className="project-detail-container">
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div className="project-detail-nav">
          <div className="project-nav-links">
            <button
              className={`nav-link ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button
              className={`nav-link ${activeSection === 'problem' ? 'active' : ''}`}
              onClick={() => scrollToSection('problem')}
            >
              Problem
            </button>
            <button
              className={`nav-link ${activeSection === 'solution' ? 'active' : ''}`}
              onClick={() => scrollToSection('solution')}
            >
              Solution
            </button>
            <button
              className={`nav-link ${activeSection === 'implementation' ? 'active' : ''}`}
              onClick={() => scrollToSection('implementation')}
            >
              Implementation
            </button>
            <button
              className={`nav-link ${activeSection === 'outcome' ? 'active' : ''}`}
              onClick={() => scrollToSection('outcome')}
            >
              Outcome
            </button>
          </div>
        </div>
        
        <div className="project-detail-content">
          <div className="project-header">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-category">{project.category}</p>
          </div>
          
          <div className="project-gallery">
            {project.detailedImages.map((image, index) => (
              <div className="gallery-image-container" key={index}>
                <img src={image} alt={`${project.title} - Image ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
          
          <div className="project-info">
            <div className="project-meta-grid">
              <div className="meta-item">
                <h4 className="meta-title">Role</h4>
                <p className="meta-value">{project.role}</p>
              </div>
              <div className="meta-item">
                <h4 className="meta-title">Technologies</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div id="project-overview" className="project-section">
              <h3 className="section-title">Project Overview</h3>
              <p className="section-content">{project.overview}</p>
            </div>
            
            <div id="project-problem" className="project-section">
              <h3 className="section-title">Problem Statement</h3>
              <p className="section-content">{project.problem}</p>
            </div>
            
            <div id="project-solution" className="project-section">
              <h3 className="section-title">Solution Approach</h3>
              <p className="section-content">{project.solution}</p>
            </div>
            
            <div id="project-implementation" className="project-section">
              <h3 className="section-title">Technical Implementation</h3>
              <p className="section-content">{project.implementation}</p>
            </div>
            
            <div id="project-outcome" className="project-section">
              <h3 className="section-title">Outcomes</h3>
              <p className="section-content">{project.outcome}</p>
            </div>
            
            {project.longCaseStudy && (
              <div className="case-study-container">
                <button 
                  className="case-study-toggle"
                  onClick={() => setExpandedCaseStudy(!expandedCaseStudy)}
                >
                  {expandedCaseStudy ? 'Hide Detailed Case Study' : 'View Detailed Case Study'}
                </button>
                
                {expandedCaseStudy && (
                  <div className="expanded-case-study animate-fadeIn">
                    <p>{project.longCaseStudy}</p>
                  </div>
                )}
              </div>
            )}
          </div>
          
          {relatedProjects.length > 0 && (
            <div className="related-projects">
              <h3 className="related-title">Related Projects</h3>
              <div className="related-grid">
                {relatedProjects.map(relatedProject => (
                  <ProjectCard key={relatedProject.id} project={relatedProject} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;