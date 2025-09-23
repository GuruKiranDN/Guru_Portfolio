import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Work from './components/Work';
import Reading from './components/Reading';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDetail from './components/ProjectDetail';
import ReadingDetail from './components/ReadingDetail';
import useActiveSection from './hooks/useActiveSection';

function App() {
  const activeSection = useActiveSection(['home', 'work', 'reading', 'contact']);
  const [projectDetailId, setProjectDetailId] = useState<string | null>(null);
  const [readingDetailId, setReadingDetailId] = useState<string | null>(null);
  
  // Listen for hash changes for project and reading detail views
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#project/')) {
        const projectId = hash.replace('#project/', '');
        setProjectDetailId(projectId);
        setReadingDetailId(null);
      } else if (hash.startsWith('#reading/')) {
        const readingId = hash.replace('#reading/', '');
        setReadingDetailId(readingId);
        setProjectDetailId(null);
      } else {
        setProjectDetailId(null);
        setReadingDetailId(null);
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
    </div>
  );
}

export default App;