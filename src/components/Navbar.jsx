// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth/login-styles.css';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const scrollY = useScrollAnimation();
     
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);
     
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleNavClick = (link, path) => {
    setActiveLink(link);
    setIsMenuOpen(false);
    if (path) {
      navigate(path);
    }
  };
     
  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-brand">
            <div className="logo">
              <div className="logo-circle">
                <div className="logo-inner"></div>
              </div>
            </div>
            <span className="website-name">𝕿𝖍𝖊 𝕾𝖚𝖋𝖋𝖆𝖍  𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓</span>
          </div>
                   
          <div className="navbar-center">
            <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
              <a 
                href="#home" 
                className={`navbar-link ${activeLink === 'home' ? 'active' : ''}`} 
                onClick={() => handleNavClick('home')}
              >
                <span>Home</span>
              </a>
              
              <a 
                href="#offerings" 
                className={`navbar-link ${activeLink === 'offerings' ? 'active' : ''}`} 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('offerings', 'Pages/offerings');
                }}
              >
                <span>Offerings</span>
              </a>
            </div>
          </div>

          <div className="navbar-auth">
            <button className="login-btn" onClick={handleLoginClick}>
              <span className="login-text">Login</span>
              <div className="login-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 17L15 12L10 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
                   
          <div className="mobile-menu-btn" onClick={toggleMenu}>
            <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;