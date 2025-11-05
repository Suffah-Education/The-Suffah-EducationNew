import React, { useState, useEffect } from "react";
import useScrollAnimation from "../hooks/useScrollAnimation";
import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { Navigate, useNavigate } from "react-router-dom";

const images = [
  "/images/hero1.png",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.png",
];

const HeroSection = () => {
  const scrollY = useScrollAnimation();
  const navigate = useNavigate();
  const [heroRef, isVisible] = useIntersectionObserver();
  const [currentImage, setCurrentImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const doubledImages = [...images, ...images]; // duplicate images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000); // every 4 sec
    return () => clearInterval(interval);
  }, []);

  // Reset smoothly when reaching the duplicate set
  useEffect(() => {
    if (currentImage === images.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false); // disable transition
        setCurrentImage(0); // instantly reset to first
      }, 1000); // wait for last slide transition
      return () => clearTimeout(timeout);
    }
  }, [currentImage, images.length]);

  return (
    <section id="home" className="hero-section" ref={heroRef}>
      {/* Slideshow Container */}
      <div className="slideshow-container">
        <div
          className="slideshow-track"
          style={{
            transform: `translateX(-${currentImage * 100}%)`,
            transition: isTransitioning ? "transform 1s ease-in-out" : "none",
          }}
        >
          {doubledImages.map((img, i) => (
            <div key={i} className="slide">
              <div
                className="slide-bg"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Existing hero content */}
      <div className="hero-container">
        <div className={`hero-content ${isVisible ? "animate" : ""}`}>
          <div className="hero-badge">
            <span>✨ Welcome to Excellence</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Transform Your</span>
            <span className="title-line gradient-text">Learning Journey</span>
          </h1>
          <p className="hero-card floating">
            Experience world-class education with cutting-edge technology and
            personalized care
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => navigate('/Pages/LoginPage')}>
              <span>Start Learning</span>
              <div className="btn-shine"></div>
            </button>
            <button className="btn-secondary">
              <span>Watch Demo</span>
              <div className="play-icon">▶</div>
            </button>
          </div>
        </div>

        <div className={`hero-visual ${isVisible ? "animate" : ""}`}>
          <div className="hero-card floating">
            <div className="card-content">
              <h3>  بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  </h3>
              <p>رَّبِّ زِدْنِيْ عِلْمًا</p>
            </div>
            <div className="card-glow"></div>
          </div>

          <div className="floating-elements">
            <div className="float-element element-1">📚</div>
            <div className="float-element element-2">🎓</div>
            <div className="float-element element-3">💡</div>
            <div className="float-element element-4">🌟</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
