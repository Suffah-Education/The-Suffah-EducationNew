// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import useScrollAnimation from '../hooks/useScrollAnimation';
import '../styles/Components/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const scrollY = useScrollAnimation();


  const navLinks = [
    { name: 'Home', link: 'home', path: '#hero' },
    { name: 'Courses', link: 'offerings', path: '/Pages/offerings' },
    { name: 'Faculties', link: 'faculties', path: '#faculties' },
    { name: 'Services', link: 'services', path: '#services' },
    { name: 'About', link: 'about', path: '#about' },
    { name: 'Contact', link: 'contact', path: '#contact' },
  ];

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (link, path) => {
    setActiveLink(link);
    setMenuOpen(false);

    if (path) {
      if (path.startsWith('#')) {
        setTimeout(() => {
          const targetId = path.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          } else {
            navigate('/');
            setTimeout(() => {
              document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
            }, 200);
          }
        }, 100);
      } else {
        navigate(path);
      }
    }
  };



  const handleLoginClick = ({ signup = false } = {}) => {
  const DASHBOARD_BASE = import.meta.env.VITE_DASHBOARD_URL || 'http://localhost:5174';
  // optional return-to so dashboard can send user back after auth
  const returnTo = encodeURIComponent(window.location.href);
  const path = signup ? '/signup' : '/login';
  const target = `${DASHBOARD_BASE.replace(/\/$/, '')}${path}?return_to=${returnTo}`;

  window.open(target, '_blank', 'noopener,noreferrer');
  setMenuOpen(false);
};



  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav-wrapper">
        <div className="content">
          <NavLink to="/Pages/HomePage" className="logo" onClick={() => setActiveLink('home')}>
            <div className='logo'>
              <img src="/images/Logo.png" className='logo-img' />
              𝕿𝖍𝖊 𝕾𝖚𝖋𝖋𝖆𝖍  𝕰𝖉𝖚𝖈𝖆𝖙𝖎𝖔𝖓
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="menu-web">
            {navLinks.map((item) => (
              <li key={item.link}>
                <a
                  href={item.path}
                  className={`menuitem ${activeLink === item.link ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.link, item.path);
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}

            <li>
              <button className="login-btn-desktop" onClick={handleLoginClick}>
                Register
              </button>
            </li>
          </ul>

          <button className='menu-btn' onClick={toggleMenu} aria-label="Toggle menu">
            {menuOpen ? (

              <IoClose className="icon-style" />
            ) : (

              <GiHamburgerMenu className="h-6 w-6 text-gray-800 transition-all duration-300" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <ul className="mobile-menu-list">
          {navLinks.map((item) => (
            <li key={item.link}>
              <a
                href={item.path}
                className={`mobile-menu-item ${activeLink === item.link ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.link, item.path);
                }}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <button className="login-btn-mobile" onClick={handleLoginClick}>
              Start Learning
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;