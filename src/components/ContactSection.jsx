import React, { useState } from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { useTranslation } from "react-i18next";

const ContactSection = () => {
  const [contactRef, isVisible] = useIntersectionObserver();
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Enable background scroll
    setShowSuccess(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    
    // Hide success message and close modal after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
      closeModal();
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const modalStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.7)',
      display: isModalOpen ? 'flex' : 'none',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      padding: '20px',
      overflow: 'auto'
    },
    modalContainer: {
      width: '90%',
      maxWidth: '1200px',
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      position: 'relative',
      maxHeight: '90vh',
      animation: isModalOpen ? 'slideIn 0.3s ease-out' : 'none'
    },
    closeButton: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'rgba(255, 255, 255, 0.9)',
      border: 'none',
      borderRadius: '50%',
      width: '40px',
      height: '40px',
      fontSize: '24px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 10,
      color: '#1a472a',
      transition: 'all 0.3s'
    },
    leftSection: {
      background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
      padding: '60px 50px',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    logoSection: {
      marginBottom: '40px'
    },
    logoH1: {
      fontSize: '32px',
      margin: '0 0 10px 0',
      fontWeight: 700
    },
    logoP: {
      fontSize: '18px',
      margin: 0,
      opacity: 0.9
    },
    deenImage: {
      width: '100%',
      maxWidth: '300px',
      height: 'auto',
      margin: '30px auto',
      display: 'block'
    },
    contactInfo: {
      marginTop: '40px'
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '25px',
      cursor: 'pointer',
      transition: 'transform 0.2s'
    },
    contactIcon: {
      width: '45px',
      height: '45px',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '15px',
      fontSize: '20px'
    },
    contactDetailsH3: {
      margin: '0 0 5px 0',
      fontSize: '14px',
      opacity: 0.8,
      fontWeight: 500
    },
    contactDetailsP: {
      margin: 0,
      fontSize: '16px',
      fontWeight: 600
    },
    rightSection: {
      padding: '60px 50px',
      background: 'white',
      overflowY: 'auto'
    },
    formHeaderH2: {
      fontSize: '36px',
      margin: '0 0 10px 0',
      color: '#1a472a',
      fontWeight: 700
    },
    formHeaderP: {
      margin: '0 0 40px 0',
      color: '#666',
      fontSize: '16px'
    },
    formGroup: {
      marginBottom: '25px'
    },
    label: {
      display: 'block',
      marginBottom: '8px',
      color: '#333',
      fontWeight: 600,
      fontSize: '14px'
    },
    input: {
      width: '100%',
      padding: '15px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '15px',
      fontFamily: 'inherit',
      transition: 'border-color 0.3s'
    },
    textarea: {
      width: '100%',
      padding: '15px',
      border: '2px solid #e0e0e0',
      borderRadius: '10px',
      fontSize: '15px',
      fontFamily: 'inherit',
      transition: 'border-color 0.3s',
      resize: 'vertical',
      minHeight: '120px'
    },
    submitBtn: {
      width: '100%',
      padding: '16px',
      background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
      color: 'white',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: 600,
      cursor: 'pointer',
      transition: 'transform 0.2s, box-shadow 0.2s'
    },
    successMessage: {
      padding: '15px',
      background: '#d4edda',
      color: '#155724',
      borderRadius: '10px',
      marginTop: '20px',
      textAlign: 'center',
      fontWeight: 600
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    }
  };

  return (
    <>
      <section id="contact" className="contact-section" ref={contactRef}>
        <div className="container">
          <div className={`section-header ${isVisible ? 'animate' : ''}`}>
            <span className="section-badge">{t("contactBadge")}</span>
            <h2 className="section-title">{t("contactTitle")}</h2>
            <p className="section-subtitle">{t("contactSubtitle")}</p>
          </div>

          <div className="contact-grid">
            <div 
              className={`contact-info ${isVisible ? 'animate' : ''}`}
              onClick={openModal}
              style={{ cursor: 'pointer' }}
            >
              <div className="content-placeholder">
                <div className="placeholder-box">
                  <div className="placeholder-icon">📞</div>
                  <h4>{t("contactInfoTitle")}</h4>
                  <p>{t("contactInfoDesc")}</p>
                </div>
              </div>
            </div>

            <div 
              className={`contact-form ${isVisible ? 'animate' : ''}`}
              onClick={openModal}
              style={{ cursor: 'pointer' }}
            >
              <div className="content-placeholder">
                <div className="placeholder-box">
                  <div className="placeholder-icon">📝</div>
                  <h4>{t("contactFormTitle")}</h4>
                  <p>{t("contactFormDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      <div style={modalStyles.overlay} onClick={closeModal}>
        <style>
          {`
            @keyframes slideIn {
              from {
                transform: scale(0.9);
                opacity: 0;
              }
              to {
                transform: scale(1);
                opacity: 1;
              }
            }
            @media (max-width: 768px) {
              .modal-container-responsive {
                grid-template-columns: 1fr !important;
                max-height: 95vh !important;
              }
              .modal-left-section {
                padding: 40px 30px !important;
              }
              .modal-right-section {
                padding: 40px 30px !important;
              }
              .deen-image-responsive {
                max-width: 200px !important;
              }
            }
          `}
        </style>
        <div 
          style={modalStyles.modalContainer} 
          className="modal-container-responsive"
          onClick={(e) => e.stopPropagation()}
        >
          <button 
            style={modalStyles.closeButton}
            onClick={closeModal}
            onMouseEnter={(e) => {
              e.target.style.transform = 'rotate(90deg)';
              e.target.style.background = '#1a472a';
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'rotate(0deg)';
              e.target.style.background = 'rgba(255, 255, 255, 0.9)';
              e.target.style.color = '#1a472a';
            }}
          >
            ×
          </button>

          <div style={modalStyles.leftSection} className="modal-left-section">
            <div>
              <div style={modalStyles.logoSection}>
                <h1 style={modalStyles.logoH1}>The Suffah Education</h1>
                <p style={modalStyles.logoP}>Contact Us</p>
              </div>

              <svg style={modalStyles.deenImage} className="deen-image-responsive" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#ffed4e', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                <circle cx="70" cy="50" r="25" fill="url(#moonGrad)" opacity="0.9"/>
                <path d="M 230 40 L 235 55 L 250 55 L 238 63 L 243 78 L 230 70 L 217 78 L 222 63 L 210 55 L 225 55 Z" fill="url(#moonGrad)"/>
                
                <ellipse cx="150" cy="140" rx="50" ry="35" fill="rgba(255,255,255,0.9)"/>
                <rect x="100" y="140" width="100" height="80" fill="rgba(255,255,255,0.85)"/>
                
                <ellipse cx="80" cy="160" rx="25" ry="18" fill="rgba(255,255,255,0.8)"/>
                <rect x="55" y="160" width="50" height="60" fill="rgba(255,255,255,0.75)"/>
                
                <ellipse cx="220" cy="160" rx="25" ry="18" fill="rgba(255,255,255,0.8)"/>
                <rect x="195" y="160" width="50" height="60" fill="rgba(255,255,255,0.75)"/>
                
                <rect x="40" y="100" width="15" height="120" fill="rgba(255,255,255,0.9)"/>
                <ellipse cx="47.5" cy="100" rx="10" ry="8" fill="rgba(255,255,255,0.95)"/>
                <rect x="42" y="85" width="11" height="15" fill="rgba(255,255,255,0.9)"/>
                <circle cx="47.5" cy="82" r="5" fill="#ffd700"/>
                
                <rect x="245" y="100" width="15" height="120" fill="rgba(255,255,255,0.9)"/>
                <ellipse cx="252.5" cy="100" rx="10" ry="8" fill="rgba(255,255,255,0.95)"/>
                <rect x="247" y="85" width="11" height="15" fill="rgba(255,255,255,0.9)"/>
                <circle cx="252.5" cy="82" r="5" fill="#ffd700"/>
                
                <path d="M 130 180 Q 130 200 150 200 Q 170 200 170 180 Z" fill="rgba(26,71,42,0.3)"/>
                <rect x="130" y="180" width="40" height="40" fill="rgba(255,255,255,0.85)"/>
                
                <circle cx="120" cy="160" r="4" fill="rgba(26,71,42,0.4)"/>
                <circle cx="150" cy="155" r="4" fill="rgba(26,71,42,0.4)"/>
                <circle cx="180" cy="160" r="4" fill="rgba(26,71,42,0.4)"/>
                
                <text x="150" y="250" fontFamily="Arial" fontSize="32" fill="rgba(255,255,255,0.7)" textAnchor="middle">☪</text>
              </svg>

              <div style={modalStyles.contactInfo}>
                <a href="tel:+15551234567" style={modalStyles.link}>
                  <div style={modalStyles.contactItem}>
                    <div style={modalStyles.contactIcon}>📞</div>
                    <div>
                      <h3 style={modalStyles.contactDetailsH3}>Phone</h3>
                      <p style={modalStyles.contactDetailsP}>+1 (555) 123-4567</p>
                    </div>
                  </div>
                </a>

                <a href="mailto:info@suffaheducation.com" style={modalStyles.link}>
                  <div style={modalStyles.contactItem}>
                    <div style={modalStyles.contactIcon}>✉️</div>
                    <div>
                      <h3 style={modalStyles.contactDetailsH3}>Email</h3>
                      <p style={modalStyles.contactDetailsP}>info@suffaheducation.com</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div style={modalStyles.rightSection} className="modal-right-section">
            <div>
              <h2 style={modalStyles.formHeaderH2}>Get In Touch</h2>
              <p style={modalStyles.formHeaderP}>We'd love to hear from you. Send us a message!</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div style={modalStyles.formGroup}>
                <label htmlFor="name" style={modalStyles.label}>Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  style={modalStyles.input}
                  required 
                />
              </div>

              <div style={modalStyles.formGroup}>
                <label htmlFor="email" style={modalStyles.label}>Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  style={modalStyles.input}
                  required 
                />
              </div>

              <div style={modalStyles.formGroup}>
                <label htmlFor="message" style={modalStyles.label}>Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  style={modalStyles.textarea}
                  required
                />
              </div>

              <button 
                type="submit" 
                style={modalStyles.submitBtn}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = '0 10px 25px rgba(26, 71, 42, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Send Message
              </button>
              
              {showSuccess && (
                <div style={modalStyles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;