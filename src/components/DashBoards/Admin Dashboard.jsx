import React, { useState } from 'react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  UserCheck, 
  UserX, 
  Calendar, 
  MessageCircle, 
  Settings, 
  Bell, 
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  MoreVertical,
  CheckCircle,
  XCircle,
  Clock,
  Globe,
  BarChart3
} from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Sample data
  const stats = {
    totalStudents: 12543,
    totalTeachers: 487,
    activeClasses: 1256,
    monthlyRevenue: 45678,
    pendingApplications: 23,
    completedLessons: 8945
  };

  const recentTeachers = [
    { id: 1, name: 'Ahmed Al-Rahman', email: 'ahmed@email.com', country: 'Egypt', status: 'pending', experience: '5 years', specialization: 'Tajweed' },
    { id: 2, name: 'Fatima Hassan', email: 'fatima@email.com', country: 'Morocco', status: 'approved', experience: '8 years', specialization: 'Qaida' },
    { id: 3, name: 'Muhammad Ali', email: 'muhammad@email.com', country: 'Pakistan', status: 'pending', experience: '3 years', specialization: 'Hifz' },
    { id: 4, name: 'Aisha Abdullah', email: 'aisha@email.com', country: 'Saudi Arabia', status: 'approved', experience: '10 years', specialization: 'Tafseer' },
    { id: 5, name: 'Omar Khalil', email: 'omar@email.com', country: 'Jordan', status: 'rejected', experience: '2 years', specialization: 'Tajweed' }
  ];

  const recentStudents = [
    { id: 1, name: 'Sarah Johnson', email: 'sarah@email.com', country: 'USA', joinDate: '2024-03-15', status: 'active', lessonsCompleted: 24 },
    { id: 2, name: 'Ali Mahmoud', email: 'ali@email.com', country: 'UAE', joinDate: '2024-03-10', status: 'active', lessonsCompleted: 18 },
    { id: 3, name: 'Emma Wilson', email: 'emma@email.com', country: 'UK', joinDate: '2024-03-08', status: 'inactive', lessonsCompleted: 5 },
    { id: 4, name: 'Hassan Ahmed', email: 'hassan@email.com', country: 'Malaysia', joinDate: '2024-03-05', status: 'active', lessonsCompleted: 32 }
  ];

  const StatCard = ({ icon, title, value, change, color }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">{value.toLocaleString()}</p>
          {change && (
            <p className={`text-sm mt-2 flex items-center ${change > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
              <TrendingUp className="w-4 h-4 mr-1" />
              {change > 0 ? '+' : ''}{change}% from last month
            </p>
          )}
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${color}`}>
          {icon}
        </div>
      </div>
    </div>
  );

  const TableRow = ({ data, type }) => (
    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
      <td className="py-4 px-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-emerald-600" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{data.name}</p>
            <p className="text-sm text-gray-600">{data.email}</p>
          </div>
        </div>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-1">
          <Globe className="w-4 h-4 text-gray-400" />
          <span className="text-gray-700">{data.country}</span>
        </div>
      </td>
      {type === 'teacher' ? (
        <>
          <td className="py-4 px-6 text-gray-700">{data.experience}</td>
          <td className="py-4 px-6">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
              {data.specialization}
            </span>
          </td>
        </>
      ) : (
        <>
          <td className="py-4 px-6 text-gray-700">{data.joinDate}</td>
          <td className="py-4 px-6 text-gray-700">{data.lessonsCompleted}</td>
        </>
      )}
      <td className="py-4 px-6">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          data.status === 'approved' || data.status === 'active' 
            ? 'bg-emerald-100 text-emerald-800' 
            : data.status === 'pending' 
            ? 'bg-yellow-100 text-yellow-800'
            : data.status === 'rejected'
            ? 'bg-red-100 text-red-800'
            : 'bg-gray-100 text-gray-800'
        }`}>
          {data.status}
        </span>
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Eye className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit className="w-4 h-4 text-gray-600" />
          </button>
          {type === 'teacher' && data.status === 'pending' && (
            <>
              <button className="p-2 hover:bg-emerald-50 rounded-lg transition-colors">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </button>
              <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                <XCircle className="w-4 h-4 text-red-600" />
              </button>
            </>
          )}
        </div>
      </td>
    </tr>
  );

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
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
              />
            </div>
            <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Bell className="w-6 h-6 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Settings className="w-6 h-6 text-gray-600" />
            </button>
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold text-sm">A</span>
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
              <BarChart3 className="w-5 h-5" />
              <span className="font-medium">Overview</span>
            </button>
            <button
              onClick={() => setActiveTab('teachers')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'teachers' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <UserCheck className="w-5 h-5" />
              <span className="font-medium">Teachers</span>
              <span className="ml-auto bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                {stats.pendingApplications}
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
              <span className="font-medium">Students</span>
            </button>
            <button
              onClick={() => setActiveTab('classes')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'classes' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Classes</span>
            </button>
            <button
              onClick={() => setActiveTab('revenue')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all ${
                activeTab === 'revenue' 
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <DollarSign className="w-5 h-5" />
              <span className="font-medium">Revenue</span>
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
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Dashboard Overview</h2>
                <div className="flex items-center space-x-3">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download className="w-4 h-4 mr-2 inline" />
                    Export
                  </button>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                    <option>Last year</option>
                  </select>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <StatCard
                  icon={<Users className="w-6 h-6 text-white" />}
                  title="Total Students"
                  value={stats.totalStudents}
                  change={12.5}
                  color="bg-blue-500"
                />
                <StatCard
                  icon={<UserCheck className="w-6 h-6 text-white" />}
                  title="Active Teachers"
                  value={stats.totalTeachers}
                  change={8.2}
                  color="bg-emerald-500"
                />
                <StatCard
                  icon={<Calendar className="w-6 h-6 text-white" />}
                  title="Active Classes"
                  value={stats.activeClasses}
                  change={15.3}
                  color="bg-purple-500"
                />
                <StatCard
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  title="Monthly Revenue"
                  value={stats.monthlyRevenue}
                  change={22.1}
                  color="bg-green-500"
                />
                <StatCard
                  icon={<Clock className="w-6 h-6 text-white" />}
                  title="Pending Applications"
                  value={stats.pendingApplications}
                  change={-5.2}
                  color="bg-yellow-500"
                />
                <StatCard
                  icon={<BookOpen className="w-6 h-6 text-white" />}
                  title="Lessons Completed"
                  value={stats.completedLessons}
                  change={18.7}
                  color="bg-indigo-500"
                />
              </div>

              {/* Recent Activity */}
              <div className="grid lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Teacher Applications</h3>
                  <div className="space-y-4">
                    {recentTeachers.slice(0, 3).map(teacher => (
                      <div key={teacher.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{teacher.name}</p>
                            <p className="text-sm text-gray-600">{teacher.specialization} • {teacher.country}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          teacher.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-emerald-100 text-emerald-800'
                        }`}>
                          {teacher.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Student Enrollments</h3>
                  <div className="space-y-4">
                    {recentStudents.slice(0, 3).map(student => (
                      <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{student.name}</p>
                            <p className="text-sm text-gray-600">{student.country} • {student.lessonsCompleted} lessons</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          student.status === 'active' ? 'bg-emerald-100 text-emerald-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {student.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Teacher Management</h2>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Teacher</span>
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search teachers..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none w-80"
                        />
                      </div>
                      <select 
                        value={selectedFilter}
                        onChange={(e) => setSelectedFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                      >
                        <option value="all">All Status</option>
                        <option value="approved">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Filter className="w-4 h-4" />
                      <span>Filter</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Teacher</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Country</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Experience</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Specialization</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentTeachers
                        .filter(teacher => selectedFilter === 'all' || teacher.status === selectedFilter)
                        .map(teacher => (
                          <TableRow key={teacher.id} data={teacher} type="teacher" />
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'students' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-900">Student Management</h2>
                <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition-colors flex items-center space-x-2">
                  <Plus className="w-4 h-4" />
                  <span>Add Student</span>
                </button>
              </div>

              <div className="bg-white rounded-xl shadow-lg border border-gray-100">
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="text"
                          placeholder="Search students..."
                          className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none w-80"
                        />
                      </div>
                      <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500">
                        <option value="all">All Students</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    </div>
                    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      <Download className="w-4 h-4" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Student</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Country</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Join Date</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Lessons</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Status</th>
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentStudents.map(student => (
                        <TableRow key={student.id} data={student} type="student" />
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;