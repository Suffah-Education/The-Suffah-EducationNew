import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FeaturesSection = () => {
  const [featuresRef, isVisible] = useIntersectionObserver();
  
  const features = [
    { title: "تعلم القرآن", icon: "🤖", description: "Your personalized learning content goes here" },
    { title: "تحفيظ القرآن", icon: "💻", description: "Engaging interactive class content here" },
    { title: "تجويد القرآن", icon: "🎯", description: "Professional mentorship details here" },
    { title: "Flexible Schedule", icon: "⏰", description: "Flexible timing information here" },
    { title: "Global Community", icon: "🌍", description: "Community features description here" },
    { title: "Career Support", icon: "🚀", description: "Career guidance content here" }
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