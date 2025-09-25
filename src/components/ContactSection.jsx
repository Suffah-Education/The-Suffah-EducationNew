import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ContactSection = () => {
  const [contactRef, isVisible] = useIntersectionObserver();
  
  return (
    <section id="contact" className="contact-section" ref={contactRef}>
      <div className="container">
        <div className={`section-header ${isVisible ? 'animate' : ''}`}>
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">Ready to start your learning journey? Let's connect!</p>
        </div>
        
        <div className="contact-grid">
          <div className={`contact-info ${isVisible ? 'animate' : ''}`}>
            <div className="content-placeholder">
              <div className="placeholder-box">
                <div className="placeholder-icon">📞</div>
                <h4>Contact Information</h4>
                <p>Phone, email, address, and social media links will be beautifully displayed here.</p>
              </div>
            </div>
          </div>
          
          <div className={`contact-form ${isVisible ? 'animate' : ''}`}>
            <div className="content-placeholder">
              <div className="placeholder-box">
                <div className="placeholder-icon">📝</div>
                <h4>Contact Form</h4>
                <p>Interactive contact form with validation and smooth animations will be placed here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;