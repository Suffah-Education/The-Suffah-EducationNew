import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Code, Palette, Calculator, Globe, Microscope, Music, TrendingUp, Users, Award, Clock, Star, ChevronRight, Play, Download, MessageCircle } from 'lucide-react';
import { image } from 'framer-motion/client';

export default function OfferingsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredCourse, setHoveredCourse] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigate = useNavigate();

  const handleEnrollNowClick = () => {
    navigate("/Pages/Teacher SelectionPage");
  };

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'Basics', name: 'Basics(بنیادی)', icon: Code },
    { id: 'Intermediate', name: 'Intermediate(درمیانی)', icon: Palette },
    { id: 'Advance', name: 'Advance(پیشگی)', icon: TrendingUp },
    
  ];

  const courses = [
    {
      id: 1,
  image:"/images/Basic-Qaida-Your-Gateway-to-the-Quran.webp",
      title: 'Basic Qaida Learning(بنیادی قاعدہ سیکھنا)',
      category: 'Basics',
      price: '$25/Month',
      duration: '12 weeks',
      students: '15,234',
      rating: 4.9,
      level: 'Basics',
      description: 'Symbols:Zer, Zabar, Pesh, Tashdeed, Sukoon, Madd, Hamza',
      features: ['Live Classes', 'Practice Sheets', 'Quizzes', 'Certificate'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
  image:"/images/Nazera.png",
      title: 'Qur’an Nāẕera (قرآنِ ناظرہ)',
      category: 'Intermediate',
      price: '$89',
      duration: '10 weeks',
      students: '12,891',
      rating: 4.8,
      level: 'Intermediate',
      description: 'Learn Qirat, Vocal Symbols, Stopage and Completion symbols, and more',
      features: ['Expert Guidance', 'Proper Mentorship', 'Personal Attention', 'Certificate'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
  image:"/images/hq720.jpg",
      title: 'Tajwed-e-Quran(تجویدِ قرآن)',
      category: 'Intermediate',
      price: '$129',
      duration: '16 weeks',
      students: '18,432',
      rating: 4.9,
      level: 'Advanced',
      description: 'Knowledge of the articulation points of the letters (مخرج), Knowledge of the characteristics of the letters (صفت),Knowledge of the common mistakes (اختہ) ',
      features: ['Mentorship', 'Personal Attention', 'Certification', 'Expert Review'],
      color: 'from-green-500 to-teal-500'
    },
    {
      id: 4,
  image:"/images/hifz-e-quran.jpg",
      title: 'Hifz-e-Quran(حفظ قرآن)',
      category: 'Advance',
      price: '$79',
      duration: '8 weeks',
      students: '9,876',
      rating: 4.7,
      level: 'Beginner',
      description: 'Memorization techniques(حفظ کی تکنیک), Proper recitation (تجوید), Revision (نظر ثانی),Assessment(تشخیص) ',
      features: ['Live Doubt session', 'Personal Attentions', 'Expert guidance', 'Certification'],
      color: 'from-orange-500 to-red-500'
    },
  ];

  const tools = [
    {
      name: 'Interactive Live sessionS',
      description: 'Learn in real-time with instant feedback',
      icon: Code,
      color: 'bg-blue-500'
    },
    {
      name: 'Expert Tutor',
      description: 'Get personalized help 24/7 from our Our E',
      icon: MessageCircle,
      color: 'bg-purple-500'
    },
    {
      name: 'Progress Analytics',
      description: 'Track your learning journey with detailed insights',
      icon: TrendingUp,
      color: 'bg-green-500'
    },
    {
      name: 'Peer Learning',
      description: 'Connect with students worldwide in study groups',
      icon: Users,
      color: 'bg-orange-500'
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl opacity-20 animate-pulse"
              style={{
                width: Math.random() * 300 + 100 + 'px',
                height: Math.random() * 300 + 100 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: `radial-gradient(circle, ${
                  ['#3b82f6', '#8b5cf6', '#ec4899', '#10b981'][Math.floor(Math.random() * 4)]
                } 0%, transparent 70%)`,
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's'
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div 
          className="relative z-10 max-w-6xl mx-auto px-6 text-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="inline-block mb-6 px-6 py-2 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 animate-pulse">
            <span className="text-sm font-semibold text-cyan-300">🚀 New Courses Added Every Week</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
            Explore Our Offerings
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transform your future with world-class courses, cutting-edge tools, and a global community of learners
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
              Browse Courses <ChevronRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" /> Watch Demo
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 rotate-90 text-white/50" />
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ${
                    activeCategory === cat.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/30 scale-105'
                      : 'bg-white/5 hover:bg-white/10 border border-white/10'
                  }`}
                  style={{
                    animation: `slideIn 0.5s ease-out ${idx * 0.1}s both`
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className="group relative"
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
              style={{
                animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-lg rounded-3xl border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Gradient Header with Image */}
<div style={{
  height: '192px',
  background: `linear-gradient(to bottom right, ${course.color.split(' ')[0].replace('from-', '#')} ${course.color.split(' ')[1].replace('to-', '#')})`,
  position: 'relative',
  overflow: 'hidden'
}}>
  {/* Image */}
  {course.image && (
      <img 
    src={course.image} 
    alt={course.title}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      transition: 'transform 0.5s ease',
      transform: hoveredCourse === course.id ? 'scale(1.1)' : 'scale(1)'
    }}
  />
  )}
  
  {/* Gradient Overlay */}
  <div style={{ 
    position: 'absolute', 
    inset: 0, 
    background: `linear-gradient(to bottom right, ${course.color.split(' ')[0].replace('from-', 'rgba(59, 130, 246, 0.7)')} ${course.color.split(' ')[1].replace('to-', 'rgba(6, 182, 212, 0.7)')})` 
  }} />
  
  {/* Level Badge */}
  <div style={{
    position: 'absolute',
    top: '16px',
    right: '16px',
    padding: '4px 12px',
    background: 'rgba(255, 255, 255, 0.2)',
    backdropFilter: 'blur(8px)',
    borderRadius: '9999px',
    fontSize: '14px',
    fontWeight: 600,
    transition: 'transform 0.3s',
    transform: hoveredCourse === course.id ? 'scale(1.1)' : 'scale(1)'
  }}>
    {course.level}
  </div>
  
  {/* Title */}
  <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px', zIndex: 10 }}>
    <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
      {course.title}
    </h3>
  </div>
</div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-300 mb-4 line-clamp-2">{course.description}</p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      {course.rating}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {course.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 rounded-full text-xs border border-white/10">
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
                        {course.price}
                      </div>
                      <div className="text-xs text-gray-500">one-time payment</div>
                    </div>
                    
                    <button
                     onClick={handleEnrollNowClick}
                     className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Educational Tools Section */}
      <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              Learning Tools & Resources
            </h2>
            <p className="text-xl text-gray-300">Everything you need to succeed in one place</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="group relative p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.15}s both`
                  }}
                >
                  <div className={`w-14 h-14 ${tool.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                  <p className="text-gray-400">{tool.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500K+', label: 'Active Students', icon: Users },
              { value: '1,200+', label: 'Expert Instructors', icon: Award },
              { value: '50K+', label: 'Courses Completed', icon: BookOpen },
              { value: '95%', label: 'Success Rate', icon: TrendingUp }
            ].map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="group">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:scale-125 transition-transform duration-300" />
                  <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-3xl border border-white/20 p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-gray-300 mb-8">Join thousands of students achieving their goals every day</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
              Get Started Free
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-lg rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
              <Download className="w-5 h-5" /> Download Brochure
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}