import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AboutSection = () => {
  const [aboutRef, isVisible] = useIntersectionObserver();
  
  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <div className="container">
        <div className="about-grid">
          <div className={`about-content ${isVisible ? 'animate' : ''}`}>
            <span className="section-badge">About The Suffah Education</span>
            <h2 className="section-title">Our Story & Mission</h2>
            <div className="content-placeholder">
              <div className="placeholder-text">
                <h4>Your About Content Goes Here</h4>
                <p>• Company history and founding story</p>
                <p>• Mission, vision, and values</p>
                <p>• Achievements and milestones</p>
                <p>• Educational philosophy</p>
                <p>• Future goals and expansion plans</p>
              </div>
            </div>
          </div>
          
          <div className={`about-visual ${isVisible ? 'animate' : ''}`}>
            <div className="visual-placeholder">
              <div className="placeholder-icon">🏛️</div>
              <p>About Visual Content</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;