import React, { useState, useEffect } from 'react';
import { User, Lock, Mail, Phone, CreditCard, BookOpen, GraduationCap, Shield, Eye, EyeOff, CheckCircle, ArrowRight, ArrowLeft, Building, Award, MapPin, Wallet, Check, X } from 'lucide-react';

const AuthenticationSystem = () => {
  const [currentView, setCurrentView] = useState('login');
  const [selectedRole, setSelectedRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationStep, setRegistrationStep] = useState(1);
  const [passwordStrength, setPasswordStrength] = useState(0);
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

  const platformFees = {
    teacher: 500,
    student: 300
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 25;
    return strength;
  };

  useEffect(() => {
    if (formData.password) {
      setPasswordStrength(calculatePasswordStrength(formData.password));
    }
  }, [formData.password]);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { role: selectedRole, email: formData.email });
    alert(`Login successful for ${selectedRole}: ${formData.email}`);
  };

  const handleRegistrationSubmit = (e) => {
    e.preventDefault();
    if (registrationStep < 3) {
      setRegistrationStep(prev => prev + 1);
    } else {
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
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => setSelectedRole('student')}
        className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
          selectedRole === 'student' 
            ? 'bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 text-white shadow-2xl shadow-blue-500/50' 
            : 'bg-white text-gray-600 hover:shadow-xl border-2 border-gray-200'
        }`}
      >
        <GraduationCap size={24} className={selectedRole === 'student' ? 'animate-bounce' : ''} />
        <span>Student</span>
        {selectedRole === 'student' && (
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
        )}
      </button>
      <button
        onClick={() => setSelectedRole('teacher')}
        className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
          selectedRole === 'teacher' 
            ? 'bg-gradient-to-br from-green-500 via-emerald-600 to-teal-600 text-white shadow-2xl shadow-green-500/50' 
            : 'bg-white text-gray-600 hover:shadow-xl border-2 border-gray-200'
        }`}
      >
        <BookOpen size={24} className={selectedRole === 'teacher' ? 'animate-bounce' : ''} />
        <span>Teacher</span>
        {selectedRole === 'teacher' && (
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
        )}
      </button>
      <button
        onClick={() => setSelectedRole('admin')}
        className={`relative flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 ${
          selectedRole === 'admin' 
            ? 'bg-gradient-to-br from-purple-500 via-pink-600 to-rose-600 text-white shadow-2xl shadow-purple-500/50' 
            : 'bg-white text-gray-600 hover:shadow-xl border-2 border-gray-200'
        }`}
      >
        <Shield size={24} className={selectedRole === 'admin' ? 'animate-bounce' : ''} />
        <span>Admin</span>
        {selectedRole === 'admin' && (
          <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
        )}
      </button>
    </div>
  );

  const LoginForm = () => (
    <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md mx-auto transform transition-all duration-500 hover:shadow-3xl">
      <div className="text-center mb-8">
        <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mb-4 shadow-lg">
          <Lock className="text-white" size={32} />
        </div>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome Back
        </h2>
        <p className="text-gray-500 mt-2">Sign in to continue your journey</p>
      </div>

      <RoleSelector />

      <form onSubmit={handleLogin} className="space-y-6">
        <div className="relative group">
          <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            required
          />
        </div>

        <div className="relative group">
          <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={formData.password}
            onChange={(e) => handleInputChange('password', e.target.value)}
            className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition-colors"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500" />
            <span className="ml-2 text-gray-600 group-hover:text-blue-600 transition-colors">Remember me</span>
          </label>
          <a href="#" className="text-blue-600 hover:text-purple-600 font-semibold transition-colors">
            Forgot Password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
        >
          <span>Sign In</span>
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <button
            onClick={() => {
              setCurrentView('register');
              setRegistrationStep(1);
            }}
            className="text-blue-600 hover:text-purple-600 font-semibold transition-colors"
          >
            Create Account
          </button>
        </p>
      </div>
    </div>
  );

  const RegistrationForm = () => {
    const steps = [
      { number: 1, title: 'Basic Info', icon: User },
      { number: 2, title: 'Details', icon: BookOpen },
      { number: 3, title: 'Payment', icon: CreditCard }
    ];

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Create Your Account
          </h2>
          <p className="text-gray-500 mt-2">Join our learning platform today</p>
        </div>

        <RoleSelector />

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'w-full' : ''}`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                    registrationStep >= step.number
                      ? 'bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-lg scale-110'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {registrationStep > step.number ? (
                      <CheckCircle size={24} />
                    ) : (
                      <step.icon size={24} />
                    )}
                  </div>
                  <span className={`mt-2 text-sm font-semibold ${
                    registrationStep >= step.number ? 'text-green-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`flex-1 h-2 mx-4 rounded-full transition-all duration-500 ${
                    registrationStep > step.number
                      ? 'bg-gradient-to-r from-green-500 to-blue-500'
                      : 'bg-gray-200'
                  }`}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleRegistrationSubmit} className="space-y-6">
          {registrationStep === 1 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="relative group">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                  required
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                  required
                />
              </div>

              <div className="relative group">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                  required
                />
              </div>

              {selectedRole === 'student' && (
                <div className="relative group">
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
                  <input
                    type="tel"
                    placeholder="Parent's Phone Number"
                    value={formData.parentPhone}
                    onChange={(e) => handleInputChange('parentPhone', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
                    required
                  />
                </div>
              )}
            </div>
          )}

          {registrationStep === 2 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="relative group">
                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <input
                  type="text"
                  placeholder={selectedRole === 'teacher' ? 'Institution/University' : 'School/College Name'}
                  value={formData.institution}
                  onChange={(e) => handleInputChange('institution', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                  required
                />
              </div>

              {selectedRole === 'teacher' && (
                <>
                  <div className="relative group">
                    <Award className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Qualification (e.g., M.Ed, Ph.D)"
                      value={formData.qualification}
                      onChange={(e) => handleInputChange('qualification', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <BookOpen className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Years of Experience"
                      value={formData.experience}
                      onChange={(e) => handleInputChange('experience', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                      required
                    />
                  </div>

                  <div className="relative group">
                    <BookOpen className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                    <textarea
                      placeholder="Subjects You Teach (comma separated)"
                      value={formData.subjects}
                      onChange={(e) => handleInputChange('subjects', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                      rows="3"
                      required
                    ></textarea>
                  </div>
                </>
              )}

              {selectedRole === 'student' && (
                <div className="relative group">
                  <GraduationCap className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="Grade/Class"
                    value={formData.grade}
                    onChange={(e) => handleInputChange('grade', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none"
                    required
                  />
                </div>
              )}

              <div className="relative group">
                <MapPin className="absolute left-4 top-4 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                <textarea
                  placeholder="Complete Address"
                  value={formData.address}
                  onChange={(e) => handleInputChange('address', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-4 focus:ring-blue-100 transition-all outline-none resize-none"
                  rows="3"
                  required
                ></textarea>
              </div>
            </div>
          )}

          {registrationStep === 3 && (
            <div className="space-y-6 animate-fadeIn">
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl border-2 border-purple-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-semibold text-gray-700">Registration Fee</span>
                  <span className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ₹{platformFees[selectedRole]}
                  </span>
                </div>
                <p className="text-sm text-gray-600">One-time platform registration fee</p>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => handleInputChange('paymentMethod', 'card')}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    formData.paymentMethod === 'card'
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <CreditCard className="inline mr-2" size={20} />
                  Card
                </button>
                <button
                  type="button"
                  onClick={() => handleInputChange('paymentMethod', 'upi')}
                  className={`flex-1 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    formData.paymentMethod === 'upi'
                      ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Wallet className="inline mr-2" size={20} />
                  UPI
                </button>
              </div>

              {formData.paymentMethod === 'card' && (
                <div className="space-y-4">
                  <div className="relative group">
                    <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={20} />
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                      required
                    />
                  </div>
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                      className="flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                      required
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={(e) => handleInputChange('cvv', e.target.value)}
                      className="flex-1 px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                      required
                    />
                  </div>
                </div>
              )}

              {formData.paymentMethod === 'upi' && (
                <div className="relative group">
                  <Wallet className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-purple-500 transition-colors" size={20} />
                  <input
                    type="text"
                    placeholder="UPI ID (e.g., yourname@upi)"
                    value={formData.upiId}
                    onChange={(e) => handleInputChange('upiId', e.target.value)}
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    required
                  />
                </div>
              )}
            </div>
          )}

          <div className="flex gap-4 pt-4">
            {registrationStep > 1 && (
              <button
                type="button"
                onClick={() => setRegistrationStep(prev => prev - 1)}
                className="flex-1 py-4 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <span>Previous</span>
              </button>
            )}
            <button
              type="submit"
              className="flex-1 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>{registrationStep === 3 ? 'Complete Registration' : 'Next Step'}</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>

        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Already have an account?{' '}
            <button
              onClick={() => setCurrentView('login')}
              className="text-blue-600 hover:text-purple-600 font-semibold transition-colors"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    );
  };

  const SetCredentialsForm = () => {
    const getStrengthColor = () => {
      if (passwordStrength < 50) return 'bg-red-500';
      if (passwordStrength < 75) return 'bg-yellow-500';
      return 'bg-green-500';
    };

    const getStrengthText = () => {
      if (passwordStrength < 50) return 'Weak';
      if (passwordStrength < 75) return 'Medium';
      return 'Strong';
    };

    return (
      <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-md mx-auto">
        <div className="text-center mb-8">
          <div className="inline-block p-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 shadow-lg">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            Set Your Credentials
          </h2>
          <p className="text-gray-500 mt-2">Create a secure password for your account</p>
        </div>

        <form onSubmit={handleSetCredentials} className="space-y-6">
          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Create Password"
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {formData.password && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Password Strength:</span>
                <span className={`font-semibold ${passwordStrength < 50 ? 'text-red-500' : passwordStrength < 75 ? 'text-yellow-500' : 'text-green-500'}`}>
                  {getStrengthText()}
                </span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-500 ${getStrengthColor()}`}
                  style={{ width: `${passwordStrength}%` }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mt-3">
                <div className={`flex items-center gap-1 ${formData.password.length >= 8 ? 'text-green-600' : 'text-gray-400'}`}>
                  {formData.password.length >= 8 ? <Check size={14} /> : <X size={14} />}
                  <span>8+ characters</span>
                </div>
                <div className={`flex items-center gap-1 ${formData.password.match(/[A-Z]/) && formData.password.match(/[a-z]/) ? 'text-green-600' : 'text-gray-400'}`}>
                  {formData.password.match(/[A-Z]/) && formData.password.match(/[a-z]/) ? <Check size={14} /> : <X size={14} />}
                  <span>Upper & lowercase</span>
                </div>
                <div className={`flex items-center gap-1 ${formData.password.match(/[0-9]/) ? 'text-green-600' : 'text-gray-400'}`}>
                  {formData.password.match(/[0-9]/) ? <Check size={14} /> : <X size={14} />}
                  <span>Number</span>
                </div>
                <div className={`flex items-center gap-1 ${formData.password.match(/[^a-zA-Z0-9]/) ? 'text-green-600' : 'text-gray-400'}`}>
                  {formData.password.match(/[^a-zA-Z0-9]/) ? <Check size={14} /> : <X size={14} />}
                  <span>Special character</span>
                </div>
              </div>
            </div>
          )}

          <div className="relative group">
            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors" size={20} />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:ring-4 focus:ring-green-100 transition-all outline-none"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-green-500 transition-colors"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {formData.confirmPassword && (
            <div className={`flex items-center gap-2 text-sm ${formData.password === formData.confirmPassword ? 'text-green-600' : 'text-red-600'}`}>
              {formData.password === formData.confirmPassword ? (
                <>
                  <Check size={16} />
                  <span>Passwords match!</span>
                </>
              ) : (
                <>
                  <X size={16} />
                  <span>Passwords do not match</span>
                </>
              )}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <span>Complete Setup</span>
            <CheckCircle size={20} className="group-hover:rotate-12 transition-transform" />
          </button>
        </form>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-50 to-pink-100 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Welcome to EduPlatform
            </span>
          </h1>
          <p className="text-xl text-gray-700 font-medium">
            Secure • Modern • User-Friendly Authentication
          </p>
        </div>

        {currentView === 'login' && <LoginForm />}
        {currentView === 'register' && <RegistrationForm />}
        {currentView === 'setCredentials' && <SetCredentialsForm />}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default AuthenticationSystem;