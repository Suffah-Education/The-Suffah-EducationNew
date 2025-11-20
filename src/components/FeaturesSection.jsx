import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useTranslation } from "react-i18next";

const FeaturesSection = () => {
  const [featuresRef, isVisible] = useIntersectionObserver();
  const { t } = useTranslation();

  const features = [
    { title: t("feature1Title"), icon: "🧠", description: t("feature1Desc") },
    { title: t("feature2Title"), icon: "📚", description: t("feature2Desc") },
    { title: t("feature3Title"), icon: "🎯", description: t("feature3Desc") },
    { title: t("feature4Title"), icon: "👨🏻‍🏫", description: t("feature4Desc") },
    { title: t("feature5Title"), icon: "✅", description: t("feature5Desc") },
    { title: t("feature6Title"), icon: "🌱", description: t("feature6Desc") },
  ];

  return (
    <section id="services" className="features-section" ref={featuresRef}>
      <div className="container">
        
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-badge">{t("servicesBadge")}</span>
          <h2 className="section-title">{t("servicesTitle")}</h2>
          <p className="section-subtitle">{t("servicesSubtitle")}</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card ${isVisible ? 'animate' : ''}`} 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
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
