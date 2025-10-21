// src/components/auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Lock, Mail, BookOpen, Shield, Eye, EyeOff, ArrowRight, ArrowLeft } from 'lucide-react';
import { loginUser } from '../../services/authService';

const LoginPage = () => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

  const handleLogin = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
        userType: userType
      });
      
      // Store auth data in memory (you can use Context API)
      const authData = {
        token: response.token,
        user: response.user,
        userType: userType
      };

      // Navigate based on user type
      if (userType === 'student') {
        navigate('/student/dashboard');
      } else if (userType === 'teacher') {
        navigate('/teacher/dashboard');
      } else if (userType === 'admin') {
        navigate('/admin/dashboard');
      }
    } catch (error) {
      setErrors({ general: error.message || 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const userTypeConfig = {
    student: {
      icon: BookOpen,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    teacher: {
      icon: User,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    admin: {
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  };

  const config = userTypeConfig[userType];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="w-full max-w-5xl relative z-10">
        <button
          onClick={() => navigate('/')}
          className="mb-6 flex items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>

        <div className="bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Branding */}
            <div className={`bg-gradient-to-br ${config.color} p-12 flex flex-col justify-center items-center text-white relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 text-center">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                    <IconComponent size={48} />
                  </div>
                  <h1 className="text-4xl font-bold mb-2">The Suffah Education</h1>
                  <p className="text-white/90 text-lg">Premium Learning Platform</p>
                </div>
                <div className="space-y-4 text-left max-w-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold">Quality Education</p>
                      <p className="text-sm text-white/80">Learn from expert teachers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold">Interactive Platform</p>
                      <p className="text-sm text-white/80">Engage with modern tools</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">✓</div>
                    <div>
                      <p className="font-semibold">Track Progress</p>
                      <p className="text-sm text-white/80">Monitor your growth</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="p-12 bg-slate-900/50 backdrop-blur-sm">
              <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
              <p className="text-white/60 mb-8">Sign in to continue your learning journey</p>

              {/* User Type Selector */}
              <div className="grid grid-cols-3 gap-3 mb-8">
                {Object.entries(userTypeConfig).map(([type, typeConfig]) => {
                  const TypeIcon = typeConfig.icon;
                  return (
                    <button
                      key={type}
                      onClick={() => setUserType(type)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        userType === type
                          ? `${typeConfig.bgColor} ${typeConfig.borderColor} scale-105`
                          : 'bg-white/5 border-white/10 hover:bg-white/10'
                      }`}
                    >
                      <TypeIcon className={`mx-auto mb-2 ${userType === type ? 'text-white' : 'text-white/60'}`} size={24} />
                      <p className={`text-sm font-medium capitalize ${userType === type ? 'text-white' : 'text-white/60'}`}>
                        {type}
                      </p>
                    </button>
                  );
                })}
              </div>

              {errors.general && (
                <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                  {errors.general}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && <p className="mt-1 text-red-400 text-sm">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-white/80 mb-2 text-sm font-medium">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-12 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white/60"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <p className="mt-1 text-red-400 text-sm">{errors.password}</p>}
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center text-white/70 cursor-pointer">
                    <input type="checkbox" className="mr-2 rounded" />
                    Remember me
                  </label>
                  <button 
                    onClick={() => navigate('/forgot-password')}
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    Forgot Password?
                  </button>
                </div>

                <button
                  onClick={handleLogin}
                  disabled={isLoading}
                  className={`w-full bg-gradient-to-r ${config.color} text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all flex items-center justify-center gap-2 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isLoading ? 'Signing in...' : 'Sign In'}
                  {!isLoading && <ArrowRight size={20} />}
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-white/60 text-sm">
                  Don't have an account?{' '}
                  <button 
                    onClick={() => navigate('/register')}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Register Now
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
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
      `}</style>
    </div>
  );
};

export default LoginPage;