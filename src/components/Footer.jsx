import React from 'react';

const Footer = () => {
  // Assuming the main.css file has the centering rule for .container:
  // .container { max-width: 1600px; margin: 0 auto; padding: 0 20px; }
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <div className="logo-circle">
                <div className="logo-inner"></div>
              </div>
            </div>
            <span className="website-name">The Suffah Education</span>
          </div>
          
          <div className="footer-placeholder">
            <div className="placeholder-text">
              <h4>Footer Content Area</h4>
              <p>Links, social media, newsletter, and company information will be organized here in multiple columns.</p>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 The Suffah Education. All rights reserved.</p>
          <p> Developed By Meta Future Technology</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;