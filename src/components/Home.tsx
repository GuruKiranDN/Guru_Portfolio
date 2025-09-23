import React from 'react';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container home-container">
        <div className="profile-container">
          <div className="profile-picture-container">
            <img 
              src="https://res.cloudinary.com/dkv4qdfkz/image/upload/v1747257819/Gurukiran_fkal9j.svg" 
              alt="Gurukiran Dinakar Nayak"
              className="profile-picture" 
            />
          </div>
        </div>
        
        <div className="home-content">
          <h1 className="name animate-slideUp">Gurukiran Dinakar Nayak</h1>
          <h2 className="title animate-slideUp" style={{ animationDelay: "100ms" }}>Full-stack Software Engineer with Human-Centered Design principles.</h2>
          
          <p className="bio animate-slideUp" style={{ animationDelay: "200ms" }}>
            I'm a creative technologist by heart, and I've been building for the web for roughly the last five years. I have three and a half years of professional experience working for Hewlett-Packard as a software engineer. My skill sets are focused on full-stack web development.
          </p>
          
          <p className="bio animate-slideUp" style={{ animationDelay: "300ms" }}>
            I can build products end to end from inception to working prototype to production-level code.
Additionally, I'm a creative artist and have professionally worked as a hybrid designer, designing for brands and communicating their products to their customer base.
          </p>

          <p className="bio animate-slideUp" style={{ animationDelay: "300ms" }}> 
            I believe in taking a human-centered approach to any technical and design challenge I work on, as I believe any technology used by humans needs to be designed with the intricate nuances involved in human behavior and actions.  That's my main motive to pursue a master's in human-computer interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;