import React, { useEffect, useState } from 'react';
import { ReadingItem } from '../types';
import { getReadingById, getRelatedReadings } from '../data/readings';
import '../styles/ReadingDetail.css';

interface ReadingDetailProps {
  readingId: string;
  onClose: () => void;
}

const ReadingDetail: React.FC<ReadingDetailProps> = ({ readingId, onClose }) => {
  const [reading, setReading] = useState<ReadingItem | null>(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [relatedReadings, setRelatedReadings] = useState<ReadingItem[]>([]);

  useEffect(() => {
    const fetchReading = () => {
      const foundReading = getReadingById(readingId);
      if (foundReading) {
        setReading(foundReading);
        setRelatedReadings(getRelatedReadings(readingId));
      }
    };

    fetchReading();
  }, [readingId]);

  useEffect(() => {
    // Disable body scrolling when reading detail is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      // Re-enable body scrolling when reading detail is closed
      document.body.style.overflow = 'auto';
    };
  }, []);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(`reading-${section}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(section);
    }
  };

  if (!reading) {
    return null;
  }

  return (
    <div className="reading-detail-overlay">
      <div className="reading-detail-container">
        <button className="close-button" onClick={onClose}>
          <span className="close-icon">×</span>
        </button>
        
        <div className="reading-detail-nav">
          <div className="reading-nav-links">
            <button
              className={`nav-link ${activeSection === 'overview' ? 'active' : ''}`}
              onClick={() => scrollToSection('overview')}
            >
              Overview
            </button>
            <button
              className={`nav-link ${activeSection === 'key-points' ? 'active' : ''}`}
              onClick={() => scrollToSection('key-points')}
            >
              Key Points
            </button>
            <button
              className={`nav-link ${activeSection === 'insights' ? 'active' : ''}`}
              onClick={() => scrollToSection('insights')}
            >
              Insights
            </button>
            <button
              className={`nav-link ${activeSection === 'takeaways' ? 'active' : ''}`}
              onClick={() => scrollToSection('takeaways')}
            >
              Takeaways
            </button>
          </div>
        </div>
        
        <div className="reading-detail-content">
          <div className="reading-header">
            <h2 className="reading-title">{reading.title}</h2>
            <p className="reading-category">{reading.category}</p>
            <p className="reading-date">{reading.date}</p>
          </div>
          
          <div className="reading-gallery">
            {reading.detailedImages.map((image, index) => (
              <div className="gallery-image-container" key={index}>
                <img src={image} alt={`${reading.title} - Image ${index + 1}`} className="gallery-image" />
              </div>
            ))}
          </div>
          
          <div className="reading-info">
            <div id="reading-overview" className="reading-section">
              <h3 className="section-title">Overview</h3>
              <p className="section-content">{reading.overview}</p>
            </div>
            
            <div id="reading-key-points" className="reading-section">
              <h3 className="section-title">Key Points</h3>
              <div className="key-points-list">
                {reading.keyPoints.map((point, index) => (
                  <div key={index} className="key-point-item">
                    <div className="key-point-number">{index + 1}</div>
                    <div className="key-point-content">
                      <h4 className="key-point-title">{point.title}</h4>
                      <p className="key-point-description">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div id="reading-insights" className="reading-section">
              <h3 className="section-title">Personal Insights</h3>
              <p className="section-content">{reading.insights}</p>
            </div>
            
            <div id="reading-takeaways" className="reading-section">
              <h3 className="section-title">Key Takeaways</h3>
              <div className="takeaways-list">
                {reading.takeaways.map((takeaway, index) => (
                  <div key={index} className="takeaway-item">
                    <span className="takeaway-bullet">•</span>
                    <span className="takeaway-text">{takeaway}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {relatedReadings.length > 0 && (
            <div className="related-readings">
              <h3 className="related-title">Related Articles</h3>
              <div className="related-grid">
                {relatedReadings.map(relatedReading => (
                  <div key={relatedReading.id} className="related-reading-card">
                    <div className="related-reading-image">
                      <img src={relatedReading.imageUrl} alt={relatedReading.title} />
                    </div>
                    <div className="related-reading-content">
                      <h4 className="related-reading-title">{relatedReading.title}</h4>
                      <p className="related-reading-description">{relatedReading.description}</p>
                      <a href={`#reading/${relatedReading.id}`} className="related-reading-link">Read Article</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReadingDetail;