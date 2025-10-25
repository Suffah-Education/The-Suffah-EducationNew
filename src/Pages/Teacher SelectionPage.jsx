import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Award, Users, BookOpen, CheckCircle, Filter, Search, ChevronLeft, MessageCircle, Calendar } from 'lucide-react';

export default function TeacherSelectionPage({ courseData = null }) {
  const [selectedCourse, setSelectedCourse] = useState(courseData?.title || 'Basic Qaida Learning');
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [filterSpecialization, setFilterSpecialization] = useState(courseData?.category?.toLowerCase() || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showTeacherSelection, setShowTeacherSelection] = useState(!!courseData);

  const faculties = [
    {
      id: 1,
      name: "Hafiz Sayyed Mohammad Musaib",
      designation: "Aalim",
      image: "/public/images/musaib(1).jpg",
      experience: "8 years",
      email: "mohammad.Musaib@institute.suffah",
      rating: 4,
      specialization: "Qaida",
      graduated: 33,
      achievements: ["15 students completed Quran", "18 Students Completed Qaida"],
      availability: "Mon-Fri, 9AM-5PM",
      teachingStyle: "Patient and structured approach",
      languages: ["Urdu", "English", "Arabic"]
    },
    {
      id: 2,
      name: "Hafiz Musaddik khan Pathan",
      designation: "Hafiz, Aalim, Mufti",
      image: "/public/images/musaddik.jpeg",
      experience: "5 years",
      email: "Musaddik.Khan@institute.Suffah",
      rating: 5,
      specialization: "Qaida, Nazera",
      graduated: 300,
      achievements: ["200 students completed Qaida", "100 students completed Quran"],
      availability: "All Days, 8AM-8PM",
      teachingStyle: "Interactive and engaging",
      languages: ["Urdu", "English", "Arabic", "Hindi"]
    },
    {
      id: 3,
      name: "Hafiz Muzamil khan Pathan",
      designation: "Aalim, Hafiz",
      image: "/public/images/muzammil.jpeg",
      experience: "4 years",
      email: "Muzamil.Khan@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 46,
      achievements: ["40 Students Completed Qaida", "6 students Completed Quran"],
      availability: "Sat-Thu, 10AM-6PM",
      teachingStyle: "Focus on pronunciation",
      languages: ["Urdu", "English", "Arabic"]
    },
    {
      id: 4,
      name: "Hafiz Pathan Mudassir khan",
      designation: "Aalim, Hafiz",
      image: "/public/images/mudassir.jpeg",
      experience: "5 years",
      email: "Mudassir.Khan@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 50,
      achievements: ["40 Students Completed Qaida", "10 students Completed Quran"],
      availability: "Mon-Sat, 9AM-7PM",
      teachingStyle: "Detailed and methodical",
      languages: ["Urdu", "Arabic"]
    },
    {
      id: 5,
      name: "Syed Muhsin syed Yusuf",
      designation: "Aalim",
      image: "/public/images/muhsin.jpeg",
      experience: "6 years",
      email: "Syed.Syed@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 130,
      achievements: ["80 Students Completed Qaida", "50 Students Completed Quran"],
      availability: "Sun-Fri, 8AM-6PM",
      teachingStyle: "Compassionate and encouraging",
      languages: ["Urdu", "English", "Arabic"]
    },
    {
      id: 6,
      name: "Sayyed Ayesha Fatema",
      designation: "Hafiza, Aalima",
      image: "/public/images/F1.webp",
      experience: "12 years",
      email: "Ayesha.Sayyed@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 290,
      achievements: ["210 students completed Qaida", "80 Students completed Quran"],
      availability: "Mon-Sat, 9AM-5PM",
      teachingStyle: "Gentle and supportive (Female students preferred)",
      languages: ["Urdu", "English", "Arabic", "Hindi"]
    },
    {
      id: 7,
      name: "Momin Khatija Ayyub",
      designation: "Aalima",
      image: "/public/images/F1.webp",
      experience: "20 years",
      email: "Khatija.momin@institute.edu",
      rating: 4,
      specialization: "Qaida",
      graduated: 45,
      achievements: ["45 students completed Qaida"],
      availability: "Tue-Sat, 10AM-4PM",
      teachingStyle: "Traditional and thorough (Female students preferred)",
      languages: ["Urdu", "English"]
    },
    {
      id: 8,
      name: "Maulana A. Rashid Alamgiri",
      designation: "Hafiz, Aalim",
      image: "/public/images/Rashid.jpeg",
      experience: "15 years",
      email: "Rashid.Alamgir@institute.suffah",
      rating: 5,
      specialization: "Qaida, Nazera, Tajweed",
      graduated: 500,
      achievements: ["500 students Completed Qaida And Nazera"],
      availability: "All Days, 7AM-9PM",
      teachingStyle: "Comprehensive and experienced",
      languages: ["Urdu", "English", "Arabic", "Persian"]
    },
    {
      id: 9,
      name: "Hafiz Aadil Khan Pathan",
      designation: "Aalim",
      image: "/api/placeholder/400/400",
      experience: "21 years",
      email: "Aadil.Khan@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 150,
      achievements: ["90 Students Completed Qaida", "60 Students Completed Quran"],
      availability: "Mon-Fri, 8AM-6PM",
      teachingStyle: "Experienced and versatile",
      languages: ["Urdu", "English", "Arabic"]
    },
    {
      id: 10,
      name: "Hafiz Umar Sayyed",
      designation: "Aalim, Hafiz",
      image: "/api/placeholder/400/400",
      experience: "13 years",
      email: "Umar.Sayyed@institute.Suffah",
      rating: 4,
      specialization: "Qaida, Nazera",
      graduated: 310,
      achievements: ["210 Students Completed qaida", "100 Students Completed quran"],
      availability: "Sat-Thu, 9AM-7PM",
      teachingStyle: "Motivational and results-oriented",
      languages: ["Urdu", "English", "Arabic", "Hindi"]
    }
  ];

  const filteredTeachers = faculties.filter(teacher => {
    const matchesSearch = teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         teacher.specialization.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterSpecialization === 'all' || 
                         teacher.specialization.toLowerCase().includes(filterSpecialization.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  const handleSelectTeacher = (teacher) => {
    setSelectedTeacher(teacher);
    setShowConfirmation(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-900/80 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <ChevronLeft className="w-5 h-5" />
                Back to Courses
              </button>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Selected Course</div>
              <div className="text-lg font-semibold text-cyan-400">{selectedCourse}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full mix-blend-screen filter blur-xl animate-pulse"
              style={{
                width: Math.random() * 200 + 100 + 'px',
                height: Math.random() * 200 + 100 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                background: `radial-gradient(circle, ${
                  ['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)]
                } 0%, transparent 70%)`,
                animationDelay: Math.random() * 3 + 's'
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Select Your Preferred Teacher
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Choose from our expert instructors who will guide you through your learning journey
          </p>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 p-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={filterSpecialization}
                onChange={(e) => setFilterSpecialization(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan-500 transition-colors appearance-none cursor-pointer"
              >
                <option value="all">All Specializations</option>
                <option value="qaida">Qaida</option>
                <option value="nazera">Nazera</option>
                <option value="tajweed">Tajweed</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Teachers Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher, idx) => (
            <div
              key={teacher.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{
                animation: `fadeInUp 0.5s ease-out ${idx * 0.05}s both`
              }}
            >
              {/* Teacher Image */}
              <div className="relative h-100 bg-gradient-to-br from-purple-600 to-cyan-600 overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1.5 bg-white/20 backdrop-blur-md rounded-full border border-white/30">
                  {renderStars(teacher.rating)}
                </div>

                {/* Experience Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2 px-3 py-1.5 bg-cyan-500/20 backdrop-blur-md rounded-full border border-cyan-500/30">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-semibold">{teacher.experience}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">
                  {teacher.name}
                </h3>
                <p className="text-sm text-purple-400 mb-3">{teacher.designation}</p>

                {/* Specialization */}
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" />
                  <span>{teacher.specialization}</span>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">{teacher.graduated} Graduates</span>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-start gap-2 mb-3 text-sm">
                  <Calendar className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">{teacher.availability}</span>
                </div>

                {/* Teaching Style */}
                <div className="mb-4 p-3 bg-white/5 rounded-lg border border-white/5">
                  <p className="text-sm text-gray-300 italic">{teacher.teachingStyle}</p>
                </div>

                {/* Languages */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {teacher.languages.map((lang, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-xs text-purple-300">
                      {lang}
                    </span>
                  ))}
                </div>

                {/* Achievements Preview */}
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Recent Achievements:</div>
                  {teacher.achievements.slice(0, 2).map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-400 mb-1">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleSelectTeacher(teacher)}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
                  >
                    Select Teacher
                  </button>
                  <button className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredTeachers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold mb-2">No Teachers Found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {showConfirmation && selectedTeacher && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-2xl w-full bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl border border-white/20 p-8 shadow-2xl">
            <button
              onClick={() => setShowConfirmation(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 p-1">
                <img 
                  src={selectedTeacher.image} 
                  alt={selectedTeacher.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                Confirm Your Selection
              </h2>
              <p className="text-gray-300">You've selected {selectedTeacher.name} as your teacher</p>
            </div>

            <div className="bg-white/5 rounded-2xl p-6 mb-6 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Course:</span>
                <span className="font-semibold text-cyan-400">{selectedCourse}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Teacher:</span>
                <span className="font-semibold">{selectedTeacher.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Specialization:</span>
                <span className="font-semibold">{selectedTeacher.specialization}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Availability:</span>
                <span className="font-semibold text-green-400">{selectedTeacher.availability}</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirmation(false)}
                className="flex-1 px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
              >
                Go Back
              </button>
              <button
                onClick={() => alert('Enrollment confirmed! You will be contacted shortly.')}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                Confirm & Enroll
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        select option {
          background: #1e293b;
          color: white;
        }
      `}</style>
    </div>
  );
}