import React, { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import useScrollAnimation from "../hooks/useScrollAnimation";
import { useTranslation } from "react-i18next";   // <-- ADD
import "../styles/Components/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const scrollY = useScrollAnimation();

  const { t, i18n } = useTranslation(); // <-- ADD

  const navLinks = [
    { name: t("home"), link: "home", path: "#hero" },
    { name: t("courses"), link: "offerings", path: "/Pages/offerings" },
    { name: t("faculties"), link: "faculties", path: "#faculties" },
    { name: t("services"), link: "services", path: "#services" },
    { name: t("about"), link: "about", path: "#about" },
    { name: t("contact"), link: "contact", path: "#contact" },
  ];

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ur" : "en");
  };

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavClick = (link, path) => {
    setActiveLink(link);
    setMenuOpen(false);

    if (path) {
      if (path.startsWith("#")) {
        setTimeout(() => {
          const targetId = path.substring(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
          } else {
            navigate("/");
            setTimeout(() => {
              document.getElementById(targetId)?.scrollIntoView({
                behavior: "smooth",
              });
            }, 200);
          }
        }, 100);
      } else {
        navigate(path);
      }
    }
  };

  const handleLoginClick = ({ signup = false } = {}) => {
    const DASHBOARD_BASE =
      import.meta.env.VITE_DASHBOARD_URL || "http://localhost:5174";
    const returnTo = encodeURIComponent(window.location.href);
    const path = signup ? "/signup" : "/login";
    const target = `${DASHBOARD_BASE.replace(/\/$/, "")}${path}?return_to=${returnTo}`;
    window.open(target, "_blank", "noopener,noreferrer");
    setMenuOpen(false);
  };

  return (
    <header
      className={`header ${isScrolled ? "scrolled" : ""}`}
      dir={i18n.language === "ur" ? "rtl" : "ltr"} // <-- RTL auto apply
      style={{
        zIndex: 30,
      }}
    >
      {/* Logo style block as is */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600&family=Poppins:wght@400;600&display=swap');
        .logo {
          display: flex;
          align-items: center;
          font-family: 'Playfair Display', serif;
          font-weight: 600;
          font-size: 22px;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          gap: 8px;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .logo-img { height: 40px; width: auto; }
        .logo:hover { color: #007bff; }
        @media (max-width: 768px) {
          .logo { font-size: 18px; }
        }
      `}</style>

      <nav className="nav-wrapper">
        <div className="content">
          <NavLink to="/" className="logo" onClick={() => setActiveLink("home")}>
            <img src="/images/Logo.png" alt="Logo" className="logo-img" />
            <span>The Suffah Education</span>
          </NavLink>

          {/* Desktop Menu */}
          <ul className="menu-web">
            {navLinks.map((item) => (
              <li key={item.link}>
                <a
                  href={item.path}
                  className={`menuitem ${
                    activeLink === item.link ? "active" : ""
                  }`}
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
                {t("register")}
              </button>
            </li>

            {/* 🌙 Language Button */}
            <li>
              <button
                onClick={toggleLanguage}
                className="login-btn-desktop"
                style={{ marginLeft: "12px" }}
              >
                {i18n.language === "en" ? "اردو" : "English"}
              </button>
            </li>
          </ul>

          <button className="menu-btn" onClick={toggleMenu}>
            {menuOpen ? <IoClose className="icon-style" /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        <ul className="mobile-menu-list">
          {navLinks.map((item) => (
            <li key={item.link}>
              <a
                href={item.path}
                className={`mobile-menu-item ${
                  activeLink === item.link ? "active" : ""
                }`}
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
              {t("startLearning")}
            </button>
          </li>

          {/* Mobile language button */}
          <li>
            <button className="login-btn-mobile" onClick={toggleLanguage}>
              {i18n.language === "en" ? "اردو" : "English"}
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
