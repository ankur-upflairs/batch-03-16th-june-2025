import React, { useState } from 'react';
import { BookOpen, Users, FileText, BarChart3, Menu, X } from 'lucide-react';
import Navbar from './components/Navbar';
// Custom Router Context
const RouterContext = React.createContext();

// Custom Router Hook
export const useRouter = () => {
  const context = React.useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within RouterProvider');
  }
  return context;
};

// Navigation Component


// Dashboard Component
const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Welcome to EduFlow LMS
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Manage your courses, students, and assignments with our intuitive learning management system.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: 'Total Courses', value: '24', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
          { title: 'Active Students', value: '1,248', icon: Users, color: 'from-green-500 to-green-600' },
          { title: 'Assignments', value: '89', icon: FileText, color: 'from-purple-500 to-purple-600' },
          { title: 'Completion Rate', value: '94%', icon: BarChart3, color: 'from-orange-500 to-orange-600' },
        ].map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                  <p className="text-3xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: 'Create New Course', desc: 'Start building your next course', color: 'from-blue-500 to-blue-600' },
            { title: 'Add Students', desc: 'Enroll new students to your courses', color: 'from-green-500 to-green-600' },
            { title: 'Create Assignment', desc: 'Design new assignments and assessments', color: 'from-purple-500 to-purple-600' },
          ].map((action, index) => (
            <button key={index} className={`bg-gradient-to-r ${action.color} text-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
              <h3 className="font-semibold text-lg mb-2">{action.title}</h3>
              <p className="text-blue-100 text-sm">{action.desc}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Placeholder Components
const Courses = () => (
  <div className="text-center py-20">
    <BookOpen className="w-16 h-16 text-blue-500 mx-auto mb-4" />
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Courses Management</h2>
    <p className="text-gray-600">This is where you'll manage all your courses. Coming up next!</p>
  </div>
);

const Students = () => (
  <div className="text-center py-20">
    <Users className="w-16 h-16 text-green-500 mx-auto mb-4" />
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Students Management</h2>
    <p className="text-gray-600">This is where you'll manage all your students. Coming up next!</p>
  </div>
);

const Assignments = () => (
  <div className="text-center py-20">
    <FileText className="w-16 h-16 text-purple-500 mx-auto mb-4" />
    <h2 className="text-2xl font-bold text-gray-800 mb-2">Assignments Management</h2>
    <p className="text-gray-600">This is where you'll manage all your assignments. Coming up next!</p>
  </div>
);

// Main App Component
function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const navigate = (page) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'courses':
        return <Courses />;
      case 'students':
        return <Students />;
      case 'assignments':
        return <Assignments />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <RouterContext.Provider value={{ currentPage, navigate }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          {renderCurrentPage()}
        </main>
      </div>
    </RouterContext.Provider>
  );
}

export default App;