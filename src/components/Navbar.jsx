import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Phone, CreditCard, BookOpen, GraduationCap, Shield, Eye, EyeOff, CheckCircle } from 'lucide-react';
import './auth/login-styles.css'; // Import styles globally for login modal

// Custom hook for scroll animation (placeholder)
const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return scrollY;
};

// Authentication System Component
const AuthenticationSystem = ({ onClose }) => {
  const [currentView, setCurrentView] = useState('login');
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
    institution: '',
    qualification: '',
    experience: '',
    subjects: '',
    grade: '',
    parentPhone: '',
    address: '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  // Admin is predefined in database - no new admin registration allowed
  const isAdminExists = true; // Admin always exists in database

  const platformFees = {
    teacher: 500,
    student: 300
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { role: selectedRole, email: formData.email });
    alert(`Login successful for ${selectedRole}: ${formData.email}`);
    // Close modal after successful login
    if (onClose) onClose();
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (registrationStep < 3) {
      setRegistrationStep(prev => prev + 1);
    } else {
      // Complete registration
      console.log('Registration completed:', formData);
      alert('Registration completed! You can now set your login credentials.');
      setCurrentView('setCredentials');
    }
  };

  const handleSetCredentials = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log('Credentials set for:', formData.email);
    alert('Credentials set successfully! You can now login.');
    setCurrentView('login');
    setFormData({ ...formData, password: '', confirmPassword: '' });
  };

  const RoleSelector = () => (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => setSelectedRole('student')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
          selectedRole === 'student' 
            ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <GraduationCap size={20} />
        <span>Student</span>
      </button>
      <button
        onClick={() => setSelectedRole('teacher')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
          selectedRole === 'teacher' 
            ? 'bg-green-500 text-white shadow-lg transform scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <BookOpen size={20} />
        <span>Teacher</span>
      </button>
      <button
        onClick={() => setSelectedRole('admin')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
          selectedRole === 'admin' 
            ? 'bg-purple-500 text-white shadow-lg transform scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <Shield size={20} />
        <span>Admin</span>
      </button>
    </div>
  );

  // Role selector for registration (excludes admin)
  const RegistrationRoleSelector = () => (
    <div className="flex justify-center space-x-4 mb-8">
      <button
        onClick={() => setSelectedRole('student')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
          selectedRole === 'student' 
            ? 'bg-blue-500 text-white shadow-lg transform scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <GraduationCap size={20} />
        <span>Student</span>
      </button>
      <button
        onClick={() => setSelectedRole('teacher')}
        className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
          selectedRole === 'teacher' 
            ? 'bg-green-500 text-white shadow-lg transform scale-105' 
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
      >
        <BookOpen size={20} />
        <span>Teacher</span>
      </button>
      <div className="flex items-center space-x-2 px-6 py-3 rounded-lg bg-gray-200 text-gray-400 cursor-not-allowed">
        <Shield size={20} />
        <span>Admin</span>
        <span className="text-xs">(Predefined)</span>
      </div>
    </div>
  );

  const LoginForm = () => (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
          selectedRole === 'student' ? 'bg-blue-100' : 
          selectedRole === 'teacher' ? 'bg-green-100' : 'bg-purple-100'
        }`}>
          {selectedRole === 'student' ? <GraduationCap className="text-blue-500" size={32} /> :
           selectedRole === 'teacher' ? <BookOpen className="text-green-500" size={32} /> :
           <Shield className="text-purple-500" size={32} />}
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Welcome Back</h2>
        <p className="text-gray-600 mt-2">Sign in to your {selectedRole} account</p>
      </div>

      <RoleSelector />

      <div className="space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="button"
          onClick={handleLogin}
          className={`w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
            selectedRole === 'student' ? 'bg-blue-500 hover:bg-blue-600' :
            selectedRole === 'teacher' ? 'bg-green-500 hover:bg-green-600' :
            'bg-purple-500 hover:bg-purple-600'
          }`}
        >
          Sign In as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
        </button>
      </div>

      {selectedRole !== 'admin' && (
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <button
              onClick={() => {
                setCurrentView('register');
                setRegistrationStep(1);
              }}
              className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300"
            >
              Register Now
            </button>
          </p>
        </div>
      )}
    </div>
  );

  const RegistrationForm = () => {
    const renderStep1 = () => (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h3>
        
        <div className="relative">
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={(e) => handleInputChange('fullName', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        </div>

        <input
          type="text"
          placeholder={selectedRole === 'student' ? 'School/College Name' : 'Institution Name'}
          value={formData.institution}
          onChange={(e) => handleInputChange('institution', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
    );

    const renderStep2 = () => (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          {selectedRole === 'teacher' ? 'Professional Details' : 'Academic Details'}
        </h3>

        {selectedRole === 'teacher' ? (
          <>
            <input
              type="text"
              placeholder="Highest Qualification"
              value={formData.qualification}
              onChange={(e) => handleInputChange('qualification', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={(e) => handleInputChange('experience', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <input
              type="text"
              placeholder="Subjects You Teach (comma separated)"
              value={formData.subjects}
              onChange={(e) => handleInputChange('subjects', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Current Grade/Class"
              value={formData.grade}
              onChange={(e) => handleInputChange('grade', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                placeholder="Parent's Phone Number"
                value={formData.parentPhone}
                onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </>
        )}

        <textarea
          placeholder="Address"
          value={formData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent h-24 resize-none"
          required
        />
      </div>
    );

    const renderStep3 = () => (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Platform Fee Payment</h3>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">Registration Fee:</span>
            <span className="text-2xl font-bold text-blue-600">₹{platformFees[selectedRole]}</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">One-time platform registration fee</p>
        </div>

        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => handleInputChange('paymentMethod', 'card')}
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.paymentMethod === 'card' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              <CreditCard className="mx-auto mb-1" size={20} />
              Card
            </button>
            <button
              type="button"
              onClick={() => handleInputChange('paymentMethod', 'upi')}
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.paymentMethod === 'upi' 
                  ? 'border-blue-500 bg-blue-50 text-blue-700' 
                  : 'border-gray-300 text-gray-600 hover:border-gray-400'
              }`}
            >
              <Phone className="mx-auto mb-1" size={20} />
              UPI
            </button>
          </div>
        </div>

        {formData.paymentMethod === 'card' ? (
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              value={formData.cardNumber}
              onChange={(e) => handleInputChange('cardNumber', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <input
                type="text"
                placeholder="CVV"
                value={formData.cvv}
                onChange={(e) => handleInputChange('cvv', e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
          </div>
        ) : (
          <input
            type="text"
            placeholder="UPI ID (e.g., user@paytm)"
            value={formData.upiId}
            onChange={(e) => handleInputChange('upiId', e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
          />
        )}
      </div>
    );

    return (
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Register as {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}</h2>
          <div className="flex items-center justify-center mt-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  step <= registrationStep ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-600'
                }`}>
                  {step < registrationStep ? <CheckCircle size={16} /> : step}
                </div>
                {step < 3 && <div className={`w-12 h-1 mx-2 ${step < registrationStep ? 'bg-blue-500' : 'bg-gray-300'}`} />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <RegistrationRoleSelector />

        <div onSubmit={handleRegistrationSubmit}>
          {registrationStep === 1 && renderStep1()}
          {registrationStep === 2 && renderStep2()}
          {registrationStep === 3 && renderStep3()}

          <div className="flex space-x-4 mt-8">
            {registrationStep > 1 && (
              <button
                type="button"
                onClick={() => setRegistrationStep(prev => prev - 1)}
                className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-300"
              >
                Previous
              </button>
            )}
            <button
              type="button"
              onClick={handleRegistrationSubmit}
              className={`${registrationStep === 1 ? 'w-full' : 'flex-1'} py-3 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedRole === 'student' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-green-500 hover:bg-green-600'
              }`}
            >
              {registrationStep < 3 ? 'Next' : 'Complete Registration'}
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setCurrentView('login')}
            className="text-blue-500 hover:text-blue-700 font-semibold transition-colors duration-300"
          >
            Already have an account? Sign In
          </button>
        </div>
      </div>
    );
  };

  const SetCredentialsForm = () => (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
          <CheckCircle className="text-green-500" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">Set Login Credentials</h2>
        <p className="text-gray-600 mt-2">Create your login password to complete setup</p>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            value={formData.email}
            disabled
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-600"
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Create Password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            minLength="6"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="password"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            required
            minLength="6"
          />
        </div>

        <button
          type="button"
          onClick={handleSetCredentials}
          className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
        >
          Set Credentials & Complete Setup
        </button>
      </div>
    </div>
  );

  return (
    <div className="auth-modal-content">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Platform Authentication</h1>
          <p className="text-lg text-gray-600">Secure access for Students, Teachers, and Administrators</p>
        </div>

        {currentView === 'login' && <LoginForm />}
        {currentView === 'register' && <RegistrationForm />}
        {currentView === 'setCredentials' && <SetCredentialsForm />}
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const scrollY = useScrollAnimation();
     
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);
     
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
    setIsMenuOpen(false); // Close mobile menu when opening login
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
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
              <a href="#home" className="navbar-link active" onClick={() => setIsMenuOpen(false)}>
                <span>Home</span>
              </a>
              <a href="#faculties" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                <span>Faculties</span>
              </a>
              <a href="#services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                <span>Services</span>
              </a>
              <a href="#about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                <span>About</span>
              </a>
              <a href="#contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                <span>Contact</span>
              </a>
            </div>
          </div>

          <div className="navbar-auth">
            <button className="login-btn" onClick={openLoginModal}>
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

      {/* Login Modal Backdrop */}
      {showLoginModal && (
        <div className="login-modal-backdrop" onClick={closeLoginModal}>
          <div className="login-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeLoginModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <AuthenticationSystem onClose={closeLoginModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;