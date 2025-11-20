import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaAndroid,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import PrivacyModal from "./PrivacyModal";
import TermsModal from "./TermsModal";

const Footer = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  return (
    <>
      <style>{`
        .footer {
          background: #f4f4f4;
          color: #333;
          padding: 40px 0 10px;
          font-family: 'Poppins', sans-serif;
        }

        .footer-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 30px;
          padding: 0 40px;
        }

        .footer-col h4 {
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 15px;
          border-bottom: 2px solid #ccc;
          display: inline-block;
          padding-bottom: 5px;
        }

        .footer-col ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-col ul li {
          margin: 8px 0;
        }

        /* Default link style */
        .footer-link {
          color: inherit;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        /* Hover only for QUICK LINKS and SOCIAL LINKS */
        .footer-links-section .footer-link:hover,
        .footer-links-section .footer-link:focus,
        .footer-links-section button.footer-link:hover,
        .footer-links-section button.footer-link:focus,
        .social-icons a:hover {
          color: #00bfff; /* sky blue */
          text-decoration: none;
        }

        /* Remove hover color for contact and address */
        .footer-contact a:hover,
        .footer-address a:hover {
          color: inherit;
          text-decoration: none;
        }

        .footer-col p {
          margin: 8px 0;
          line-height: 1.6;
        }

        .icon {
          margin-right: 8px;
          color: #007bff;
        }

        .app-download {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 15px;
        }

        .social-heading {
          margin-top: 10px;
        }

        .social-icons {
          display: flex;
          gap: 15px;
          margin-top: 10px;
        }

        .social-icons a {
          color: #333;
          font-size: 18px;
          transition: transform 0.3s, color 0.3s;
        }

        .social-icons a:hover {
          transform: scale(1.1);
        }

        .footer-bottom {
          text-align: center;
          border-top: 1px solid #ddd;
          padding-top: 10px;
          font-size: 14px;
          margin-top: 30px;
          color: #555;
        }

        @media (max-width: 600px) {
          .footer-container {
            padding: 0 20px;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-container">
          {/* QUICK LINKS */}
          <div className="footer-col footer-links-section">
            <h4>QUICK LINKS</h4>
            <ul>
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/all-teachers" className="footer-link">All Teachers</Link></li>
              <li><Link to="/Pages/offerings" className="footer-link">Offerings</Link></li>
              <li><button onClick={() => setPrivacyOpen(true)} className="footer-link cursor-pointer" style={{background: 'none', border: 'none', padding: '0', font: 'inherit'}}>Privacy Policy</button></li>
              <li><button onClick={() => setTermsOpen(true)} className="footer-link cursor-pointer" style={{background: 'none', border: 'none', padding: '0', font: 'inherit'}}>Terms and Conditions</button></li>
            </ul>
          </div>

          {/* QUICK CONTACT */}
          <div className="footer-col footer-contact">
            <h4>QUICK CONTACT</h4>
            <p>
              <a href="tel:+917082189797" className="footer-link">
                <FaPhoneAlt className="icon" /> +91-7082189797
              </a>
            </p>
            <p>
              <a href="https://wa.me/917082189797" target="_blank" rel="noreferrer" className="footer-link">
                <FaWhatsapp className="icon" /> +91-7082189797
              </a>
            </p>
            <p>
              <a href="mailto:info@suffaheducation.com" className="footer-link">
                <FaEnvelope className="icon" /> info@suffaheducation.com
              </a>
            </p>
          </div>

          {/* OFFICE ADDRESS */}
          <div className="footer-col footer-address">
            <h4>OFFICE ADDRESS</h4>
            <a
              href="https://www.google.com/maps?q=A-16,+The+Suffah+Education+Pvt.+Ltd,+Beed,+Maharashtra"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <p>
                A-16, The Suffah Education Pvt. Ltd.<br />
                Near Metro pillar no-80,<br />
                Panchwati, Adarsh Nagar<br />
                Beed – 431122, Maharashtra, India
              </p>
            </a>
          </div>

          {/* APP DOWNLOAD + SOCIAL */}
          <div className="footer-col">
            <h4>APP DOWNLOAD</h4>
            <div className="app-download">
              <FaAndroid className="icon" />
              <span>Coming Soon on Play Store</span>
            </div>

            <h4 className="social-heading">SOCIAL LINK</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaXTwitter /></a> {/* ✅ Updated icon */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="footer-bottom">
          <p>
            Copyright © {new Date().getFullYear()} The Suffah Education. All Rights Reserved.
          </p>
          <p>
            Developed by{" "}
            <a href="https://metafuturetech.com" target="_blank" rel="noreferrer" className="footer-link">
              Meta Future Technology
            </a>
          </p>
        </div>
      </footer>

      {/* MODALS */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />

      {/* Hide body scroll when modal is open */}
      <style>{`
        ${privacyOpen || termsOpen ? 'body { overflow: hidden; }' : ''}
      `}</style>
    </>
  );
};

export default Footer;
