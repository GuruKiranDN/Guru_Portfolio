import React from 'react';
import logo from './logo/Logo.svg';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>
        
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} Gurukiran Dinakar Nayak. All rights reserved.
          </p>
          
          {/* <div className="footer-links">
            <a href="#" className="footer-link">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="#" className="footer-link">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;