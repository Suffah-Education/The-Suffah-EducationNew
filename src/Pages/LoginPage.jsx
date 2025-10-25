import React, { useState } from 'react';
import { User, Lock, Mail, BookOpen, Shield, Eye, EyeOff, ArrowRight, ArrowLeft, Github, Linkedin } from 'lucide-react';

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
      gradient: 'from-blue-600 to-cyan-600',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600'
    },
    teacher: {
      icon: User,
      gradient: 'from-purple-600 to-pink-600',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600'
    },
    admin: {
      icon: Shield,
      gradient: 'from-orange-600 to-red-600',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-600'
    }
  };

  const config = userTypeConfig[userType];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Left Side - Design/Branding */}
      <div className={`hidden lg:flex lg:w-1/2 xl:w-2/5 bg-gradient-to-br ${config.gradient} p-6 md:p-8 lg:p-10 xl:p-12 flex-col justify-between text-white relative overflow-hidden`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-8 lg:mb-12">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 lg:w-7 lg:h-7" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold">The Suffah Education</h1>
              <p className="text-white/80 text-xs lg:text-sm">Premium Learning Platform</p>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight">
                Start your learning<br />journey today
              </h2>
              <p className="text-white/90 text-base lg:text-lg">
                Join thousands of students and educators in our innovative learning ecosystem.
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-lg lg:text-2xl">📚</span>
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Expert-Led Courses</h3>
                  <p className="text-white/80 text-sm lg:text-base">Learn from industry professionals and certified educators</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-lg lg:text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Track Your Progress</h3>
                  <p className="text-white/80 text-sm lg:text-base">Monitor achievements and stay motivated with detailed analytics</p>
                </div>
              </div>

              <div className="flex items-start gap-3 lg:gap-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-lg lg:text-2xl">🌟</span>
                </div>
                <div>
                  <h3 className="font-semibold text-base lg:text-lg mb-1">Interactive Learning</h3>
                  <p className="text-white/80 text-sm lg:text-base">Engage with modern tools and collaborative features</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10">
          <p className="text-white/60 text-xs lg:text-sm">
            © 2025 The Suffah Education. All rights reserved.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 xl:w-3/5 flex items-center justify-center p-4 sm:p-6 lg:p-8 xl:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center gap-2 mb-6">
            <div className={`w-10 h-10 bg-gradient-to-br ${config.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <BookOpen size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">The Suffah Education</h1>
              <p className="text-xs text-gray-600">Premium Learning Platform</p>
            </div>
          </div>

          <button 
            onClick={() => alert('Navigate to home')}
            className="mb-6 flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Home</span>
          </button>

          <div className="mb-6 lg:mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
            <p className="text-sm lg:text-base text-gray-600">Please enter your details to sign in</p>
          </div>

          {/* User Type Selector */}
          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">I am a</label>
            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {Object.entries(userTypeConfig).map(([type, typeConfig]) => {
                const TypeIcon = typeConfig.icon;
                const isActive = userType === type;
                return (
                  <button
                    key={type}
                    onClick={() => setUserType(type)}
                    className={`p-2 sm:p-3 rounded-lg border-2 transition-all ${
                      isActive
                        ? `${typeConfig.borderColor} ${typeConfig.bgColor}`
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <TypeIcon 
                      className={`mx-auto mb-1 ${isActive ? typeConfig.textColor : 'text-gray-400'}`} 
                      size={20} 
                    />
                    <p className={`text-xs font-medium capitalize ${isActive ? typeConfig.textColor : 'text-gray-600'}`}>
                      {type}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-2.5 mb-5">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="w-full flex items-center justify-center gap-3 px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 text-sm"
            >
              <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="grid grid-cols-2 gap-2.5">
              <button
                onClick={() => handleSocialLogin('GitHub')}
                className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 text-sm"
              >
                <Github size={18} className="flex-shrink-0" />
                <span>GitHub</span>
              </button>
              <button
                onClick={() => handleSocialLogin('LinkedIn')}
                className="flex items-center justify-center gap-2 px-3 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg bg-white hover:bg-gray-50 hover:border-gray-300 transition-all font-medium text-gray-700 text-sm"
              >
                <Linkedin size={18} className="flex-shrink-0" />
                <span>LinkedIn</span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-3 sm:px-4 bg-gray-50 text-gray-500">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {errors.general && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {errors.general}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 flex-shrink-0" size={18} />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                  placeholder="name@example.com"
                />
              </div>
              {errors.email && <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 flex-shrink-0" size={18} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-11 py-2.5 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none bg-white text-sm"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.password}</p>}
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-2 focus:ring-blue-500 cursor-pointer" 
                />
                <span className="ml-2 text-xs sm:text-sm text-gray-600">Remember me</span>
              </label>
              <button 
                type="button" 
                onClick={() => alert('Forgot password functionality')}
                className="text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <button
              onClick={handleLogin}
              disabled={isLoading}
              className={`w-full bg-gradient-to-r ${config.gradient} text-white py-2.5 sm:py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm sm:text-base ${isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
              {!isLoading && <ArrowRight size={18} />}
            </button>
          </div>

          <p className="mt-5 text-center text-xs sm:text-sm text-gray-600">
            Don't have an account?{' '}
            <button 
              onClick={() => alert('Navigate to registration')}
              className="font-semibold text-blue-600 hover:text-blue-700 transition-colors"
            >
              Sign up for free
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;