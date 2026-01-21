import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import Reading from './components/Reading';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ReadingDetail from './components/ReadingDetail';
import { getResearchProjectById } from './data/researchProjects';
import { getResearchModalComponent } from './components/research/modals/ResearchModalRegistry';
import { getWebDevProjectById } from './data/webDevProjects';
import { getWebDevModalComponent } from './components/webdev/modals/WebDevModalRegistry';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection(['home', 'work', 'reading', 'contact']);
  const [projectDetailId, setProjectDetailId] = useState<string | null>(null);
  const [readingDetailId, setReadingDetailId] = useState<string | null>(null);
  const [researchDetailId, setResearchDetailId] = useState<string | null>(null);
  const [webDevDetailId, setWebDevDetailId] = useState<string | null>(null);
  
  // Listen for hash changes for project, reading, research, and webdev detail views
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        setProjectDetailId(projectId);
        setReadingDetailId(null);
        setResearchDetailId(null);
        setWebDevDetailId(null);
      } else if (hash.startsWith('#reading/')) {
        const readingId = hash.replace('#reading/', '');
        setReadingDetailId(readingId);
        setProjectDetailId(null);
        setResearchDetailId(null);
        setWebDevDetailId(null);
      } else if (hash.startsWith('#research/')) {
        const researchId = hash.replace('#research/', '');
        setResearchDetailId(researchId);
        setProjectDetailId(null);
        setReadingDetailId(null);
        setWebDevDetailId(null);
      } else if (hash.startsWith('#webdev/')) {
        const webDevId = hash.replace('#webdev/', '');
        setWebDevDetailId(webDevId);
        setProjectDetailId(null);
        setReadingDetailId(null);
        setResearchDetailId(null);
      } else {
        setProjectDetailId(null);
        setReadingDetailId(null);
        setResearchDetailId(null);
        setWebDevDetailId(null);
      }
    };
    
    // Set initial state based on URL hash
    handleHashChange();
    
    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  
  const closeProjectDetail = () => {
    window.location.hash = '';
    setProjectDetailId(null);
  };

  const closeReadingDetail = () => {
    window.location.hash = '';
    setReadingDetailId(null);
  };

  const closeResearchDetail = () => {
    window.location.hash = '';
    setResearchDetailId(null);
  };

  const closeWebDevDetail = () => {
    window.location.hash = '';
    setWebDevDetailId(null);
  };

  return (
    <div className="app">
      <Navigation activeSection={activeSection} />
      
      <main className="main-content">
        <Home />
        <Work />
        <Reading />
        <Contact />
      </main>
      
      <Footer />
      
      {projectDetailId && (
        <ProjectDetail 
          projectId={projectDetailId} 
          onClose={closeProjectDetail} 
        />
      )}

      {readingDetailId && (
        <ReadingDetail 
          readingId={readingDetailId} 
          onClose={closeReadingDetail} 
        />
      )}

      {researchDetailId && (() => {
        const research = getResearchProjectById(researchDetailId);
        if (!research) return null;
        
        const ResearchModalComponent = getResearchModalComponent(research.modalType);
        
        return (
          <ResearchModalComponent 
            researchId={researchDetailId} 
            onClose={closeResearchDetail} 
          />
        );
      })()}

      {webDevDetailId && (() => {
        const webDev = getWebDevProjectById(webDevDetailId);
        if (!webDev) return null;
        
        const WebDevModalComponent = getWebDevModalComponent(webDev.modalType);
        
        return (
          <WebDevModalComponent 
            webDevId={webDevDetailId} 
            onClose={closeWebDevDetail} 
          />
        );
      })()}
    </div>
  );
}

export default App;