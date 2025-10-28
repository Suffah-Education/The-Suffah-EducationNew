import React, { useState } from 'react';
import { User, Lock, Mail, BookOpen, Shield, Eye, EyeOff, ArrowRight, ArrowLeft, Github, Linkedin, Heart, MessageSquare } from 'lucide-react';
import '../styles/Components/loginpage.css'; // Importing the dedicated CSS file
import Footer from '../components/Footer';

// User Type Selector Component
const UserTypeSelector = ({ userType, setUserType, config }) => (
  <div className="user-type-selector">
    <label className="selector-label">I am a</label>
    <div className="type-buttons">
      {Object.entries(config).map(([type, typeConfig]) => {
        const TypeIcon = typeConfig.icon;
        const isActive = userType === type;
        return (
          <button
            key={type}
            onClick={() => setUserType(type)}
            className={`type-btn ${type} ${isActive ? 'active' : ''}`}
          >
            <TypeIcon size={20} />
            <span>{type}</span>
          </button>
        );
      })}
    </div>
  </div>
);


const LoginPage = () => {
  const [userType, setUserType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      alert(`Login successful!\nUser Type: ${userType}\nEmail: ${formData.email}`);
      setIsLoading(false);
    }, 1500);
  };

  const handleSocialLogin = (provider) => {
    alert(`Initiating ${provider} login for ${userType}`);
  };

  const userTypeConfig = {
    student: {
      icon: BookOpen,
      colorClass: 'color-student',
    },
    teacher: {
      icon: User,
      colorClass: 'color-teacher',
    },
    admin: {
      icon: Shield,
      colorClass: 'color-admin',
    }
  };

  const config = userTypeConfig[userType];

  return (
    // MAIN WRAPPER: Centers the content on the screen
    <div className="login-page-wrapper">

      {/* LOGIN CARD CONTAINER: The main box (Left Panel + Right Panel) - Now centered */}
      <div className="login-card-container">
        {/* Left Side - Design/Branding */}
        <div className={`left-panel ${config.colorClass}`}>
          {/* Background Pattern */}
          <div className="bg-pattern"></div>

          {/* Content */}
          <div className="content-area">
            <div className="header">
              <div className="logo-icon-group">
                <div className="logo-icon-bg">
                  <BookOpen size={28} />
                </div>
                <div>
                  <h1 className="logo-title">The Suffah Education</h1>
                  <p className="logo-tagline">Premium Learning Platform</p>
                </div>
              </div>
            </div>

            <div className="main-content-group">
              {/* Arabic Quote */}
              <div className="arabic-quote">
                <span role="img" aria-label="star" className="star-icon">✨</span>
                تم میں سب سے بہتر وہ ہے جو قرآن کو سیکھے اور سکھائے
              </div>

              <h2 className="main-title">Start your learning journey today</h2>
              <p className="main-subtitle">
                Join thousands of students and educators in our innovative learning ecosystem.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-icon-bg"><span className="feature-emoji">📚</span></div>
                  <div>
                    <h3>Expert-Led Courses</h3>
                    <p>Learn from industry professionals and certified educators</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-bg"><span className="feature-emoji">🎯</span></div>
                  <div>
                    <h3>Track Your Progress</h3>
                    <p>Monitor achievements and stay motivated with detailed analytics</p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="feature-icon-bg"><span className="feature-emoji">🌟</span></div>
                  <div>
                    <h3>Interactive Learning</h3>
                    <p>Engage with modern tools and collaborative features</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT PANEL FOOTER */}
          <div className="panel-footer">
            <p><MessageSquare size={16} /> Need Help?</p>
            <p>Powered by Truth & <Heart size={16} className="heart-icon" /></p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="right-panel">
          <div className="login-form-content">

            <div className="mobile-logo-group">
              <div className={`mobile-logo-icon ${config.colorClass}`}>
                <BookOpen size={20} className="text-white" />
              </div>
              <div>
                <h1 className="mobile-logo-title">The Suffah Education</h1>
                <p className="mobile-logo-tagline">Premium Learning Platform</p>
              </div>
            </div>

            <button
              onClick={() => alert('Navigate to home')}
              className="back-to-home-button"
            >
              <ArrowLeft size={18} />
              <span className="text">Back to Home</span>
            </button>

            <div className="form-header">
              <h2 className="welcome-title">Welcome back</h2>
              <p className="signin-prompt">Please enter your details to sign in</p>
            </div>

            {/* User Type Selector */}
            <UserTypeSelector
              userType={userType}
              setUserType={setUserType}
              config={userTypeConfig}
            />

            {/* Social Login Buttons */}
            {/* <div className="social-login-group">
              <button
                onClick={() => handleSocialLogin('Google')}
                className="social-button google"
              >
                Continue with Google
              </button>

              <div className="two-col-social-group">
                <button onClick={() => handleSocialLogin('GitHub')} className="social-button github">
                  <Github size={18} className="icon" />
                  <span>GitHub</span>
                </button>
                <button onClick={() => handleSocialLogin('LinkedIn')} className="social-button linkedin">
                  <Linkedin size={18} className="icon" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div> */}

            {/* Divider */}
            <div className="divider">
              <span className="divider-text">Or continue with email</span>
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="login-form-group">
              {errors.general && (
                <div className="error-alert">
                  {errors.general}
                </div>
              )}

              {/* Email Input */}
              <div className="input-group">
                <label className="input-label">Email</label>
                <div className="input-field-wrapper">
                  <Mail className="input-icon" size={18} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`text-input ${errors.email ? 'input-error' : ''}`}
                    placeholder="name@example.com"
                  />
                </div>
                {errors.email && <p className="error-message">{errors.email}</p>}
              </div>

              {/* Password Input */}
              <div className="input-group">
                <label className="input-label">Password</label>
                <div className="input-field-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`text-input password-input ${errors.password ? 'input-error' : ''}`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="password-toggle-button"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && <p className="error-message">{errors.password}</p>}
              </div>

              {/* Actions Row */}
              <div className="form-actions-row">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleInputChange}
                    className="custom-checkbox"
                  />
                  <span>Remember me</span>
                </label>
                <button
                  type="button"
                  onClick={() => alert('Forgot password functionality')}
                  className="forgot-password-button"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`login-submit-button ${config.colorClass} ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
                {!isLoading && <ArrowRight size={18} className="arrow-icon" />}
              </button>
            </form>

            <p className="signup-text">
              Don't have an account?{' '}
              <button
                onClick={() => alert('Navigate to registration')}
                className="signup-link"
              >
                Sign up for free
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;