import React, { useState } from 'react';
import { 
  Calendar, 
  Users, 
  BookOpen, 
  DollarSign, 
  Clock, 
  Video, 
  MessageCircle, 
  Settings, 
  Bell, 
  Search,
  Plus,
  Edit,
  Eye,
  CheckCircle,
  XCircle,
  Star,
  TrendingUp,
  FileText,
  Award,
  Globe,
  Play,
  Pause,
  Phone,
  PhoneOff,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Monitor,
  MoreVertical,
  Download
} from 'lucide-react';

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isInClass, setIsInClass] = useState(false);

  // Sample data
  const teacherStats = {
    totalStudents: 45,
    upcomingClasses: 8,
    completedLessons: 234,
    monthlyEarnings: 2450,
    averageRating: 4.9,
    totalReviews: 89
  };

  const upcomingClasses = [
    { 
      id: 1, 
      student: 'Sarah Johnson', 
      time: '10:00 AM', 
      date: '2024-03-20', 
      subject: 'Qaida Basics',
      level: 'Beginner',
      duration: '60 min',
      status: 'confirmed'
    },
    { 
      id: 2, 
      student: 'Ali Mahmoud', 
      time: '2:00 PM', 
      date: '2024-03-20', 
      subject: 'Tajweed Rules',
      level: 'Intermediate',
      duration: '45 min',
      status: 'confirmed'
    },
    { 
      id: 3, 
      student: 'Emma Wilson', 
      time: '4:30 PM', 
      date: '2024-03-20', 
      subject: 'Quran Recitation',
      level: 'Advanced',
      duration: '90 min',
      status: 'pending'
    },
    { 
      id: 4, 
      student: 'Hassan Ahmed', 
      time: '6:00 PM', 
      date: '2024-03-20', 
      subject: 'Hifz Practice',
      level: 'Intermediate',
      duration: '60 min',
      status: 'confirmed'
    }
  ];

  const myStudents = [
    { 
      id: 1, 
      name: 'Sarah Johnson', 
      country: 'USA', 
      level: 'Beginner',
      progress: 65,
      lessonsCompleted: 24,
      nextLesson: '2024-03-20 10:00 AM',
      status: 'active'
    },
    { 
      id: 2, 
      name: 'Ali Mahmoud', 
      country: 'UAE', 
      level: 'Intermediate',
      progress: 80,
      lessonsCompleted: 32,
      nextLesson: '2024-03-20 2:00 PM',
      status: 'active'
    },
    { 
      id: 3, 
      name: 'Emma Wilson', 
      country: 'UK', 
      level: 'Advanced',
      progress: 45,
      lessonsCompleted: 18,
      nextLesson: '2024-03-22 3:00 PM',
      status: 'inactive'
    }
  ];

  const recentMessages = [
    { id: 1, from: 'Sarah Johnson', message: 'Thank you for the great lesson today!', time: '2 hours ago', unread: false },
    { id: 2, from: 'Ali Mahmoud', message: 'Can we reschedule tomorrow\'s class?', time: '4 hours ago', unread: true },
    { id: 3, from: 'Emma Wilson', message: 'I have a question about the tajweed rules', time: '1 day ago', unread: true },
    { id: 4, from: 'Admin', message: 'Your monthly payment has been processed', time: '2 days ago', unread: false }
  ];

  const StatCard = ({ icon, title, value, subtitle, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{typeof value === 'number' ? value.toLocaleString() : value}</p>
          {subtitle && (
            <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  const ClassCard = ({ classData }) => (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{classData.student}</h4>
            <p className="text-sm text-gray-600">{classData.subject}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          classData.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'
        }`}>
          {classData.status}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
        <div className="flex items-center space-x-1">
          <Clock className="w-4 h-4" />
          <span>{classData.time}</span>
        </div>
        <div className="flex items-center space-x-1">
          <Calendar className="w-4 h-4" />
          <span>{classData.duration}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <button className="flex-1 bg-emerald-600 text-white py-2 px-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center justify-center space-x-1">
          <Video className="w-4 h-4" />
          <span>Join Class</span>
        </button>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <MessageCircle className="w-4 h-4 text-gray-600" />
        </button>
        <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <MoreVertical className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>
  );

  const StudentCard = ({ student }) => (
    <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-all duration-200">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{student.name}</h4>
            <p className="text-sm text-gray-600 flex items-center space-x-1">
              <Globe className="w-3 h-3" />
              <span>{student.country}</span>
            </p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
          student.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
        }`}>
          {student.status}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-gray-600">Progress</span>
            <span className="font-medium text-gray-900">{student.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-emerald-500 h-2 rounded-full transition-all duration-300" 
              style={{width: `${student.progress}%`}}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
          <div>Level: <span className="font-medium text-gray-900">{student.level}</span></div>
          <div>Lessons: <span className="font-medium text-gray-900">{student.lessonsCompleted}</span></div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="text-xs text-gray-600">
            Next: {new Date(student.nextLesson).toLocaleDateString()}
          </div>
          <div className="flex space-x-1">
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
              <MessageCircle className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
              <Eye className="w-3.5 h-3.5 text-gray-600" />
            </button>
            <button className="p-1.5 hover:bg-gray-100 rounded transition-colors">
              <Edit className="w-3.5 h-3.5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const VideoCall = () => (
    <div className="fixed inset-0 bg-gray-900 z-50 flex flex-col">
      {/* Video Call Header */}
      <div className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-semibold">Sarah Johnson - Qaida Basics</h3>
            <p className="text-gray-300 text-sm">Class in progress • 25:30</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
            <Monitor className="w-5 h-5 text-white" />
          </button>
          <button 
            onClick={() => setIsInClass(false)}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            End Class
          </button>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative">
        <div className="absolute inset-4 bg-gray-800 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-32 h-32 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Sarah Johnson</h3>
            <p className="text-gray-300">Student Video</p>
          </div>
        </div>

        {/* Teacher's Video (Picture in Picture) */}
        <div className="absolute top-8 right-8 w-48 h-36 bg-gray-700 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <Users className="w-8 h-8 text-white" />
            </div>
            <p className="text-white text-sm">You (Teacher)</p>
          </div>
        </div>

        {/* Shared Screen Indicator */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
          <div className="flex items-center space-x-2">
            <Monitor className="w-4 h-4" />
            <span>Sharing Quran Page</span>
          </div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="bg-gray-800 p-4">
        <div className="flex items-center justify-center space-x-4">
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <Mic className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <Camera className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors">
            <Monitor className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors">
            <MessageCircle className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-colors">
            <PhoneOff className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  if (isInClass) {
    return <VideoCall />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Teacher Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, Ahmed Al-Rahman</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search students..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-lg">A</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-sm h-screen sticky top-0">
          <nav className="p-6 space-y-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'overview' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'schedule' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule</span>
              <span className="ml-auto bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded-full">
                {teacherStats.upcomingClasses}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'students' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="font-medium">My Students</span>
            </button>
            <button
              onClick={() => setActiveTab('resources')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'resources' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Resources</span>
            </button>
            <button
              onClick={() => setActiveTab('earnings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'earnings' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Earnings</span>
            </button>
            <button
              onClick={() => setActiveTab('messages')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'messages' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">Messages</span>
              <span className="ml-auto bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                2
              </span>
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                  <p className="text-gray-600 mt-1">Track your teaching progress and student engagement</p>
                </div>
                <button 
                  onClick={() => setIsInClass(true)}
                  className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
                >
                  <Video className="w-5 h-5" />
                  <span>Start Demo Class</span>
                </button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  icon={<Users className="w-6 h-6 text-white" />}
                  title="Total Students"
                  value={teacherStats.totalStudents}
                  subtitle="Active learners"
                  color="bg-blue-500"
                />
                <StatCard
                  icon={<Calendar className="w-6 h-6 text-white" />}
                  title="Upcoming Classes"
                  value={teacherStats.upcomingClasses}
                  subtitle="This week"
                  color="bg-emerald-500"
                />
                <StatCard
                  icon={<BookOpen className="w-6 h-6 text-white" />}
                  title="Lessons Completed"
                  value={teacherStats.completedLessons}
                  subtitle="Total sessions"
                  color="bg-purple-500"
                />
                <StatCard
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  title="Monthly Earnings"
                  value={`$${teacherStats.monthlyEarnings}`}
                  subtitle="March 2024"
                  color="bg-green-500"
                />
                <StatCard
                  icon={<Star className="w-6 h-6 text-white" />}
                  title="Average Rating"
                  value={teacherStats.averageRating}
                  subtitle={`${teacherStats.totalReviews} reviews`}
                  color="bg-yellow-500"
                />
                <StatCard
                  icon={<Award className="w-6 h-6 text-white" />}
                  title="Achievement Level"
                  value="Gold"
                  subtitle="Top 10% teacher"
                  color="bg-orange-500"
                />
              </div>

              {/* Today's Schedule */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Today's Schedule</h3>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {upcomingClasses.slice(0, 3).map(classItem => (
                      <ClassCard key={classItem.id} classData={classItem} />
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-gray-900">Recent Messages</h3>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      View All
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentMessages.slice(0, 4).map(message => (
                      <div key={message.id} className="flex items-start space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <MessageCircle className="w-5 h-5 text-blue-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-semibold text-gray-900">{message.from}</p>
                            <span className="text-xs text-gray-500">{message.time}</span>
                          </div>
                          <p className="text-sm text-gray-600 truncate">{message.message}</p>
                          {message.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Class Schedule</h2>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Export
                  </button>
                  <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                    <Plus className="w-4 h-4 mr-2 inline" />
                    Schedule Class
                  </button>
                </div>
              </div>

              <div className="grid gap-6">
                {upcomingClasses.map(classItem => (
                  <div key={classItem.id} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center">
                          <Users className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{classItem.student}</h3>
                          <p className="text-gray-600">{classItem.subject} • {classItem.level}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                            <span className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{classItem.time}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{classItem.duration}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          classItem.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {classItem.status}
                        </span>
                        <button 
                          onClick={() => setIsInClass(true)}
                          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2"
                        >
                          <Video className="w-4 h-4" />
                          <span>Join</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">My Students</h2>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Student</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {myStudents.map(student => (
                  <StudentCard key={student.id} student={student} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'resources' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Teaching Resources</h2>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Upload Resource</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Qaida Lessons</h3>
                  <p className="text-gray-600 text-sm mb-4">Basic Arabic alphabet and pronunciation guides</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">24 files</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      View All
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-emerald-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Tajweed Rules</h3>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive tajweed rules with audio examples</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">18 files</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      View All
                    </button>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Play className="w-6 h-6 text-purple-600" />
                    </div>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                      <MoreVertical className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Audio Recitations</h3>
                  <p className="text-gray-600 text-sm mb-4">High-quality Quran recitations for practice</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">36 files</span>
                    <button className="text-emerald-600 hover:text-emerald-700 font-medium">
                      View All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'earnings' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Earnings Overview</h2>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                  <option>March 2024</option>
                  <option>February 2024</option>
                  <option>January 2024</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-600 font-medium">This Month</h3>
                    <DollarSign className="w-8 h-8 text-green-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$2,450</p>
                  <p className="text-sm text-green-600 mt-2">+12% from last month</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-600 font-medium">Total Earned</h3>
                    <TrendingUp className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$18,690</p>
                  <p className="text-sm text-gray-500 mt-2">Since joining</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-600 font-medium">Avg per Hour</h3>
                    <Clock className="w-8 h-8 text-purple-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$25</p>
                  <p className="text-sm text-gray-500 mt-2">Market rate: $22</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-600 font-medium">Pending</h3>
                    <Clock className="w-8 h-8 text-yellow-500" />
                  </div>
                  <p className="text-3xl font-bold text-gray-900">$340</p>
                  <p className="text-sm text-gray-500 mt-2">Processing...</p>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Transactions</h3>
                <div className="space-y-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <DollarSign className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Payment received</p>
                          <p className="text-sm text-gray-600">5 lessons with Sarah Johnson</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">+$125.00</p>
                        <p className="text-sm text-gray-500">March {20 - i}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'messages' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Messages</h2>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors">
                  New Message
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 bg-white rounded-xl shadow-lg border border-gray-100">
                  <div className="p-6 border-b border-gray-100">
                    <div className="relative">
                      <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        placeholder="Search messages..."
                        className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      />
                    </div>
                  </div>
                  <div className="divide-y divide-gray-100">
                    {recentMessages.map(message => (
                      <div key={message.id} className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors ${message.unread ? 'bg-blue-50' : ''}`}>
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <p className={`font-semibold ${message.unread ? 'text-gray-900' : 'text-gray-700'}`}>
                                {message.from}
                              </p>
                              <span className="text-xs text-gray-500">{message.time}</span>
                            </div>
                            <p className={`text-sm truncate ${message.unread ? 'text-gray-900' : 'text-gray-600'}`}>
                              {message.message}
                            </p>
                          </div>
                          {message.unread && (
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col">
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                        <Users className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Sarah Johnson</h3>
                        <p className="text-sm text-gray-600">Online</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-6 space-y-4 min-h-[400px]">
                    <div className="flex justify-end">
                      <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg max-w-xs">
                        <p>Hi Sarah! How was today's lesson? Any questions about the tajweed rules we covered?</p>
                        <span className="text-xs text-emerald-100 mt-1 block">2:30 PM</span>
                      </div>
                    </div>
                    
                    <div className="flex justify-start">
                      <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg max-w-xs">
                        <p>Thank you for the great lesson today! I have a question about the noon sakinah rules. Could you explain it again?</p>
                        <span className="text-xs text-gray-500 mt-1 block">2:45 PM</span>
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <div className="bg-emerald-600 text-white px-4 py-2 rounded-lg max-w-xs">
                        <p>Of course! Let's schedule a quick review session. I'll send you some audio examples to practice with.</p>
                        <span className="text-xs text-emerald-100 mt-1 block">3:00 PM</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
                      />
                      <button className="bg-emerald-600 text-white p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                        <MessageCircle className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default TeacherDashboard;