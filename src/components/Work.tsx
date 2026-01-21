import React, { useState } from 'react';
import { projects, getProjectCategories } from '../data/projects';
import { researchProjects } from '../data/researchProjects';
import { webDevProjects } from '../data/webDevProjects';
import ProjectCard from './ProjectCard';
import ResearchCard from './research/ResearchCard';
import WebDevCard from './webdev/WebDevCard';
import '../styles/Work.css';

const Work: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const categories = ['All', 'Software Engineering', 'Research'];
  
  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const filteredResearch = researchProjects.filter(research => {
    const matchesCategory = activeCategory === 'All' || activeCategory === 'Research';
    const matchesSearch = research.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          research.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  const filteredWebDev = webDevProjects.filter(webdev => {
    const matchesCategory = activeCategory === 'All' || activeCategory === 'Software Engineering';
    const matchesSearch = webdev.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          webdev.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="work" className="section work-section">
      <div className="container">
        <h2 className="section-title">My Work</h2>
        <p className="section-description">
          A selection of projects that showcase my skills in design and development.
        </p>
        
        <div className="work-filters">
          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category}
                className={`category-filter ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="search-container">
            <input
              type="text"
              placeholder="Search projects..."
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        
        {(filteredProjects.length > 0 || filteredResearch.length > 0 || filteredWebDev.length > 0) ? (
          <>
            {filteredProjects.length > 0 && (
              <div className="projects-grid">
                {filteredProjects.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            )}
            {filteredWebDev.length > 0 && (
              <div className="webdev-section">
                <h3 className="subsection-title">Software Engineering Projects</h3>
                <div className="projects-grid">
                  {filteredWebDev.map(webdev => (
                    <WebDevCard key={webdev.id} project={webdev} />
                  ))}
                </div>
              </div>
            )}
            {filteredResearch.length > 0 && (
              <div className="research-section">
                <h3 className="subsection-title">Research Projects</h3>
                <div className="projects-grid">
                  {filteredResearch.map(research => (
                    <ResearchCard key={research.id} research={research} />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="no-results">
            <p>No projects found. Try adjusting your search criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Work;