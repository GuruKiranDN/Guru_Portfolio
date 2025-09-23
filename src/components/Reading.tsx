import React, { useState } from 'react';
import { readings, getReadingCategories } from '../data/readings';
import '../styles/Reading.css';

const Reading: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  
  const categories = ['All', ...getReadingCategories()];
  
  const filteredReadings = readings.filter(reading => 
    activeCategory === 'All' || reading.category === activeCategory
  );

  const handleReadingClick = (readingId: string) => {
    window.location.hash = `reading/${readingId}`;
  };

  return (
    <section id="reading" className="section reading-section">
      <div className="container">
        <h2 className="section-title">Reading & Insights</h2>
        <p className="section-description">
          A curated collection of articles, case studies, and thoughts on design, development, and industry trends.
        </p>
        
        <div className="category-filters reading-filters">
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
        
        <div className="readings-grid">
          {filteredReadings.map(reading => (
            <div className="reading-card" key={reading.id} onClick={() => handleReadingClick(reading.id)}>
              <div className="reading-image-container">
                <img 
                  src={reading.imageUrl} 
                  alt={reading.title} 
                  className="reading-image" 
                />
                <div className="reading-category">{reading.category}</div>
              </div>
              
              <div className="reading-content">
                <p className="reading-date">{reading.date}</p>
                <h3 className="reading-title">{reading.title}</h3>
                <p className="reading-description">{reading.description}</p>
                <span className="reading-link">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reading;