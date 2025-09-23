import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import '../styles/Navigation.css';

interface NavigationProps {
  activeSection: string;
}

const Navigation: React.FC<NavigationProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightTheme, setIsLightTheme] = useState(true);

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

  const toggleTheme = () => {
    setIsLightTheme(!isLightTheme);
  };

  const navStyle = {
    backgroundColor: isLightTheme ? '#FFD588' : '#6094FF',
  };

  const textStyle = {
    color: isLightTheme ? '#1B1B1B' : '#FFFFFF',
  };

  return (
    <header className={`navigation ${isScrolled ? 'scrolled' : ''}`} style={navStyle}>
      <div className="container nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          <span className="logo-text" style={textStyle}>GDN</span>
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
          <div className="theme-switch">
            {isLightTheme ? <Moon size={18} style={textStyle} /> : <Sun size={18} style={{ color: '#FFFFFF' }} />}
            <label className="switch-label">
              <input
                type="checkbox"
                className="switch-input"
                checked={!isLightTheme}
                onChange={toggleTheme}
              />
              <span className="switch-slider"></span>
            </label>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;