import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);

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
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const styles = {
    contactWrapper: {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      width: '90%',
      maxWidth: '1200px',
      background: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      margin: '40px auto'
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
      background: 'white'
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
    <div style={styles.contactWrapper}>
      <div style={styles.container}>
        <div style={styles.leftSection}>
          <div>
            <div style={styles.logoSection}>
              <h1 style={styles.logoH1}>The Suffah Education</h1>
              <p style={styles.logoP}>Contact Us</p>
            </div>

            <svg style={styles.deenImage} viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
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

            <div style={styles.contactInfo}>
              <a href="tel:+15551234567" style={styles.link}>
                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>📞</div>
                  <div>
                    <h3 style={styles.contactDetailsH3}>Phone</h3>
                    <p style={styles.contactDetailsP}>+1 (555) 123-4567</p>
                  </div>
                </div>
              </a>

              <a href="mailto:info@suffaheducation.com" style={styles.link}>
                <div style={styles.contactItem}>
                  <div style={styles.contactIcon}>✉️</div>
                  <div>
                    <h3 style={styles.contactDetailsH3}>Email</h3>
                    <p style={styles.contactDetailsP}>info@suffaheducation.com</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div style={styles.rightSection}>
          <div>
            <h2 style={styles.formHeaderH2}>Get In Touch</h2>
            <p style={styles.formHeaderP}>We'd love to hear from you. Send us a message!</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="name" style={styles.label}>Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Your Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={styles.input}
                required 
              />
            </div>

            <div style={styles.formGroup}>
              <label htmlFor="message" style={styles.label}>Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                style={styles.textarea}
                required
              />
            </div>

            <button 
              type="submit" 
              style={styles.submitBtn}
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
              <div style={styles.successMessage}>
                Thank you! Your message has been sent successfully.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;