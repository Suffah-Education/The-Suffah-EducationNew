import React, { useEffect, useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const StatsSection = () => {
  const [statsRef, isVisible] = useIntersectionObserver();

  const stats = [
    { number: 10000, label: "Students", icon: "👥", suffix: "+" },
    { number: 500, label: "Expert Faculty", icon: "👨‍🏫", suffix: "+" },
    { number: 1000, label: "Graduates", icon: "🧑‍🎓", suffix: "+" },
    { number: 98, label: "Success Rate", icon: "🎯", suffix: "%" },
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (isVisible) {
      const duration = 1500; // animation duration in ms
      const interval = 20;   // update every 20ms
      stats.forEach((stat, i) => {
        let start = 0;
        const end = stat.number;
        const step = end / (duration / interval);

        const counter = setInterval(() => {
          start += step;
          if (start >= end) {
            start = end;
            clearInterval(counter);
          }
          setCounts(prev => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
        }, interval);
      });
    }
  }, [isVisible]);

  return (
    <section className="stats-section" ref={statsRef}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`stat-card ${isVisible ? 'animate' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-glow"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
