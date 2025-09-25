import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FacultiesSection = () => {
  const [facultiesRef, isVisible] = useIntersectionObserver();
  
  return (
    <section id="faculties" className="faculties-section" ref={facultiesRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-badge">Our Team</span>
          <h2 className="section-title">Meet Our Expert Faculty</h2>
          <p className="section-subtitle">Learn from industry leaders and academic experts</p>
        </div>
        
        <div className="content-placeholder">
          <div className="placeholder-box large">
            <div className="placeholder-icon">👨‍🏫</div>
            <h3>Faculty Profiles Content</h3>
            <p>Expert faculty information, achievements, and specializations will be displayed here with beautiful cards and animations.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultiesSection;