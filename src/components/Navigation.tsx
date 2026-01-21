import React, { useState, useEffect } from 'react';
import logo from './logo/Logo.svg';
import '../styles/Navigation.css';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const navStyle = {
    backgroundColor: 'rgb(255, 213, 136)',
  };

  const textStyle = {
    color: '#000000',
  };

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`} style={navStyle}>
      <div className="container nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        
        <button 
          className={`menu-toggle ${menuOpen ? 'active' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span className="menu-bar" style={textStyle}></span>
          <span className="menu-bar" style={textStyle}></span>
          <span className="menu-bar" style={textStyle}></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`} style={navStyle}>
          <ul className="nav-list">
            <li className="nav-item">
              <a 
                href="#home" 
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
                style={textStyle}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#work" 
                className={`nav-link ${activeSection === 'work' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('work'); }}
                style={textStyle}
              >
                Work
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#reading" 
                className={`nav-link ${activeSection === 'reading' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('reading'); }}
                style={textStyle}
              >
                Reading
              </a>
            </li>
            <li className="nav-item">
              <a 
                href="#contact" 
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                style={textStyle}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;