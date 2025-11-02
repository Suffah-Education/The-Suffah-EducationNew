import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaAndroid,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import "../styles/Components/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* QUICK LINKS */}
        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Refund and Cancellation Policy</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        {/* QUICK CONTACT */}
        <div className="footer-col">
          <h4>QUICK CONTACT</h4>
          <p>
            <FaPhoneAlt className="icon" /> +91-7082189797
          </p>
          <p>
            <FaWhatsapp className="icon" /> +91-7082189797
          </p>
          <p>
            <FaEnvelope className="icon" /> info@suffaheducation.com
          </p>
        </div>

        {/* OFFICE ADDRESS */}
        <div className="footer-col">
          <h4>OFFICE ADDRESS</h4>
          <p>
            A-16, The Suffah Education Pvt. Ltd.<br />
            Near Metro pillar no-80,<br />
            Panchwati, Adarsh Nagar<br />
            Beed – 431122, Maharashtra, India
          </p>
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
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>
          Copyright © {new Date().getFullYear()} The Suffah Education. All Rights Reserved.
        </p>
        <p>Developed by Meta Future Technology</p>
      </div>
    </footer>
  );
};

export default Footer;
