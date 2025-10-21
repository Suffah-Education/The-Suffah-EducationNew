import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FeaturesSection = () => {
  const [featuresRef, isVisible] = useIntersectionObserver();
  
  const features = [
    { title: "Memorizing Quran", icon: "🧠", description: "Your personalized learning content goes here" },
    { title: "Academic Studies", icon: "📚", description: "Engaging interactive class content here" },
    { title: "Facilities In Suffah", icon: "🎯", description: "Professional mentorship details here" },
    { title: "Highly Qualified Staff Staff", icon: "👨🏻", description: "Flexible timing information here" },
    { title: "The Suffah advantages", icon: "✅", description: "Community features description here" },
    { title: "Life After Suffah", icon: "🌱", description: "Career guidance content here" }
  ];
  
  return (
    <section id="services" className="features-section" ref={featuresRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">Why Choose The Suffah Education?</h2>
          <p className="section-subtitle">Discover the features that make us different</p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className={`feature-card ${isVisible ? 'animate' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="feature-icon">
                <span>{feature.icon}</span>
                <div className="icon-bg"></div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;