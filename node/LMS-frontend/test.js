import React, { useState, useEffect, createContext, useContext } from 'react';
import { BookOpen, Users, FileText, Home, User, Settings, Plus, Search, Calendar, Award, TrendingUp, LogOut, LogIn } from 'lucide-react';

// Mock API URLs - replace with your actual backend URLs
const API_BASE_URL = 'http://localhost:3001/api';
const API_ENDPOINTS = {
  // Auth endpoints
  login: `${API_BASE_URL}/auth/login`,
  register: `${API_BASE_URL}/auth/register`,
  logout: `${API_BASE_URL}/auth/logout`,
  
  // Data endpoints
  courses: `${API_BASE_URL}/courses`,
  students: `${API_BASE_URL}/students`,
  assignments: `${API_BASE_URL}/assignments`,
  dashboard: `${API_BASE_URL}/dashboard`
};

// Auth Context
const AuthContext = createContext();

// Mock API service (replace with actual axios calls)
const apiService = {
  // Auth methods
  login: async (credentials) => {
    // Mock API call - replace with actual axios.post(API_ENDPOINTS.login, credentials)
    console.log('API Call: POST', API_ENDPOINTS.login, credentials);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock response
    if (credentials.email === 'admin@example.com' && credentials.password === 'password') {
      const mockResponse = {
        success: true,
        data: {
          token: 'mock-jwt-token-12345',
          user: {
            id: 1,
            name: 'Admin User',
            email: 'admin@example.com',
            role: 'admin'
          }
        }
      };
      
      // In real app: localStorage.setItem('token', mockResponse.data.token);
      // In real app: localStorage.setItem('user', JSON.stringify(mockResponse.data.user));
      
      return mockResponse;
    } else {
      throw new Error('Invalid credentials');
    }
  },

  register: async (userData) => {
    console.log('API Call: POST', API_ENDPOINTS.register, userData);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockResponse = {
      success: true,
      data: {
        token: 'mock-jwt-token-67890',
        user: {
          id: 2,
          name: userData.name,
          email: userData.email,
          role: 'user'
        }
      }
    };
    
    return mockResponse;
  },

  logout: async () => {
    console.log('API Call: POST', API_ENDPOINTS.logout);
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // In real app: localStorage.removeItem('token');
    // In real app: localStorage.removeItem('user');
    
    return { success: true };
  },

  // Data fetching methods
  getDashboardData: async () => {
    console.log('API Call: GET', API_ENDPOINTS.dashboard);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      stats: {
        totalCourses: 12,
        activeStudents: 156,
        totalAssignments: 34,
        avgProgress: 78
      },
      recentCourses: [
        { id: 1, title: 'React Fundamentals', instructor: 'John Doe', students: 45, progress: 75, image: 'https://via.placeholder.com/300x200/4F46E5/white?text=React' },
        { id: 2, title: 'Node.js Backend', instructor: 'Jane Smith', students: 32, progress: 60, image: 'https://via.placeholder.com/300x200/059669/white?text=Node.js' },
        { id: 3, title: 'UI/UX Design', instructor: 'Mike Johnson', students: 28, progress: 90, image: 'https://via.placeholder.com/300x200/DC2626/white?text=Design' }
      ],
      recentAssignments: [
        { id: 1, title: 'React Project Setup', course: 'React Fundamentals', dueDate: '2024-01-15', status: 'pending' },
        { id: 2, title: 'API Integration', course: 'Node.js Backend', dueDate: '2024-01-20', status: 'completed' },
        { id: 3, title: 'Wireframe Design', course: 'UI/UX Design', dueDate: '2024-01-18', status: 'in-progress' }
      ]
    };
  },

  getCourses: async () => {
    console.log('API Call: GET', API_ENDPOINTS.courses);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return [
      { id: 1, title: 'React Fundamentals', instructor: 'John Doe', students: 45, progress: 75, image: 'https://via.placeholder.com/300x200/4F46E5/white?text=React', description: 'Learn React from basics to advanced concepts' },
      { id: 2, title: 'Node.js Backend', instructor: 'Jane Smith', students: 32, progress: 60, image: 'https://via.placeholder.com/300x200/059669/white?text=Node.js', description: 'Master backend development with Node.js' },
      { id: 3, title: 'UI/UX Design', instructor: 'Mike Johnson', students: 28, progress: 90, image: 'https://via.placeholder.com/300x200/DC2626/white?text=Design', description: 'Design beautiful and functional user interfaces' },
      { id: 4, title: 'Python Programming', instructor: 'Sarah Wilson', students: 67, progress: 82, image: 'https://via.placeholder.com/300x200/F59E0B/white?text=Python', description: 'Complete Python programming course' }
    ];
  },

  getStudents: async () => {
    console.log('API Call: GET', API_ENDPOINTS.students);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return [
      { id: 1, name: 'Alice Cooper', email: 'alice@example.com', courses: 3, progress: 85, joinDate: '2024-01-10' },
      { id: 2, name: 'Bob Wilson', email: 'bob@example.com', courses: 2, progress: 70, joinDate: '2024-01-12' },
      { id: 3, name: 'Carol Davis', email: 'carol@example.com', courses: 4, progress: 92, joinDate: '2024-01-08' },
      { id: 4, name: 'David Brown', email: 'david@example.com', courses: 1, progress: 45, joinDate: '2024-01-15' }
    ];
  },

  getAssignments: async () => {
    console.log('API Call: GET', API_ENDPOINTS.assignments);
    await new Promise(resolve => setTimeout(resolve, 600));
    
    return [
      { id: 1, title: 'React Project Setup', course: 'React Fundamentals', dueDate: '2024-01-15', status: 'pending', description: 'Set up a new React project with routing' },
      { id: 2, title: 'API Integration', course: 'Node.js Backend', dueDate: '2024-01-20', status: 'completed', description: 'Integrate third-party APIs' },
      { id: 3, title: 'Wireframe Design', course: 'UI/UX Design', dueDate: '2024-01-18', status: 'in-progress', description: 'Create wireframes for mobile app' },
      { id: 4, title: 'Database Design', course: 'Node.js Backend', dueDate: '2024-01-25', status: 'pending', description: 'Design database schema' }
    ];
  },

  // CRUD operations
  createCourse: async (courseData) => {
    console.log('API Call: POST', API_ENDPOINTS.courses, courseData);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: Date.now(),
      ...courseData,
      students: 0,
      progress: 0,
      image: `https://via.placeholder.com/300x200/4F46E5/white?text=${courseData.title.split(' ')[0]}`
    };
  },

  createStudent: async (studentData) => {
    console.log('API Call: POST', API_ENDPOINTS.students, studentData);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: Date.now(),
      ...studentData,
      courses: 0,
      progress: 0,
      joinDate: new Date().toISOString().split('T')[0]
    };
  },

  createAssignment: async (assignmentData) => {
    console.log('API Call: POST', API_ENDPOINTS.assignments, assignmentData);
    await new Promise(resolve => setTimeout(resolve, 800));
    
    return {
      id: Date.now(),
      ...assignmentData,
      status: 'pending'
    };
  }
};

// Auth Provider Component
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored auth data on mount
    // In real app: const token = localStorage.getItem('token');
    // In real app: const userData = localStorage.getItem('user');
    
    // Mock check for demo
    const mockToken = 'stored-token'; // This would be from localStorage
    const mockUser = null; // This would be parsed from localStorage
    
    if (mockToken && mockUser) {
      setUser(mockUser);
      setIsAuthenticated(true);
    }
    
    setIsLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await apiService.login(credentials);
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const register = async (userData) => {
    try {
      const response = await apiService.register(userData);
      setUser(response.data.user);
      setIsAuthenticated(true);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    try {
      await apiService.logout();
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    isAuthenticated,
    isLoading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

// Simple Router Implementation (since we can't use react-router-dom)
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

const RouterContext = React.createContext();

const useRouter = () => {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within Router');
  }
  return context;
};

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
  </div>
);

// Login Component
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { login, register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      if (isLogin) {
        await login({ email: formData.email, password: formData.password });
      } else {
        await register(formData);
      }
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <BookOpen size={32} className="text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">EduManage</h1>
          </div>
          <p className="text-gray-600">
            {isLogin ? 'Sign in to your account' : 'Create your account'}
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required={!isLogin}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                placeholder="Enter your name"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Processing...
              </>
            ) : (
              <>
                <LogIn size={18} />
                {isLogin ? 'Sign In' : 'Sign Up'}
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="ml-2 text-indigo-600 font-medium hover:text-indigo-700"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        {isLogin && (
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">Demo credentials:</p>
            <p className="text-xs text-gray-500">Email: admin@example.com</p>
            <p className="text-xs text-gray-500">Password: password</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Main LMS Component
const LearningManagementSystem = () => {
  const [currentView, setCurrentView] = useState('dashboard');
  const [courses, setCourses] = useState([]);
  const [students, setStudents] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [dashboardData, setDashboardData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  
  const { user, logout } = useAuth();
  const { navigate, currentPath } = useRouter();

  // Load data on component mount and view change
  useEffect(() => {
    loadData();
  }, [currentView]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      switch (currentView) {
        case 'dashboard':
          const dashData = await apiService.getDashboardData();
          setDashboardData(dashData);
          break;
        case 'courses':
          const coursesData = await apiService.getCourses();
          setCourses(coursesData);
          break;
        case 'students':
          const studentsData = await apiService.getStudents();
          setStudents(studentsData);
          break;
        case 'assignments':
          const assignmentsData = await apiService.getAssignments();
          setAssignments(assignmentsData);
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Navigation handler
  const handleNavigation = (view) => {
    setCurrentView(view);
    navigate(`/${view}`);
  };

  // Sidebar Component
  const Sidebar = () => (
    <div className="w-64 bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col shadow-xl">
      <div className="p-6 border-b border-white border-opacity-20">
        <div className="flex items-center gap-3 text-xl font-bold">
          <BookOpen size={24} />
          <span>EduManage</span>
        </div>
      </div>
      <nav className="flex-1 py-6">
        {[
          { id: 'dashboard', icon: Home, label: 'Dashboard' },
          { id: 'courses', icon: BookOpen, label: 'Courses' },
          { id: 'students', icon: Users, label: 'Students' },
          { id: 'assignments', icon: FileText, label: 'Assignments' }
        ].map(({ id, icon: Icon, label }) => (
          <div 
            key={id}
            className={`flex items-center gap-3 px-6 py-3 mx-4 rounded-lg cursor-pointer transition-all duration-200 hover:bg-white hover:bg-opacity-10 ${
              currentView === id ? 'bg-white bg-opacity-20 font-semibold' : ''
            }`}
            onClick={() => handleNavigation(id)}
          >
            <Icon size={20} />
            <span>{label}</span>
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-white border-opacity-20">
        <div className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10">
          <Settings size={20} />
          <span>Settings</span>
        </div>
        <div 
          className="flex items-center gap-3 px-6 py-3 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 text-red-200"
          onClick={logout}
        >
          <LogOut size={20} />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );

  // Header Component
  const Header = () => (
    <header className="bg-white px-8 py-5 border-b border-gray-200 flex justify-between items-center shadow-sm">
      <h1 className="text-3xl font-bold text-gray-800 capitalize">{currentView}</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg border">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Search..." className="bg-transparent outline-none w-48" />
        </div>
        <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-lg">
          <User size={20} />
          <span>{user?.name || 'Admin'}</span>
        </div>
      </div>
    </header>
  );

  // Dashboard Component
  const Dashboard = () => {
    if (isLoading || !dashboardData) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Total Courses', value: dashboardData.stats.totalCourses, icon: BookOpen, gradient: 'from-blue-500 to-purple-600' },
            { title: 'Active Students', value: dashboardData.stats.activeStudents, icon: Users, gradient: 'from-pink-500 to-rose-500' },
            { title: 'Assignments', value: dashboardData.stats.totalAssignments, icon: FileText, gradient: 'from-cyan-500 to-blue-500' },
            { title: 'Avg Progress', value: `${dashboardData.stats.avgProgress}%`, icon: TrendingUp, gradient: 'from-green-500 to-teal-500' }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center text-white`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{stat.value}</h3>
                  <p className="text-gray-600 font-medium">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Courses</h2>
              <button 
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
                onClick={() => handleNavigation('courses')}
              >
                View All
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dashboardData.recentCourses.map(course => (
                <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
                  <img src={course.image} alt={course.title} className="w-full h-40 object-cover" />
                  <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">Instructor: {course.instructor}</p>
                <div className="flex gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Users size={16} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Award size={16} />
                    <span>{course.progress}% avg progress</span>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Students Component
  const Students = () => {
    const handleAddStudent = async (studentData) => {
      try {
        const newStudent = await apiService.createStudent(studentData);
        setStudents(prev => [...prev, newStudent]);
        setShowModal(false);
      } catch (error) {
        console.error('Error creating student:', error);
      }
    };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">All Students</h2>
          <button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-200"
            onClick={() => { setModalType('student'); setShowModal(true); }}
          >
            <Plus size={18} />
            Add Student
          </button>
        </div>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Name</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Email</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Courses</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Progress</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Join Date</th>
                <th className="px-6 py-4 text-left font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map(student => (
                <tr key={student.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                        {student.name.charAt(0)}
                      </div>
                      <span className="font-medium">{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.email}</td>
                  <td className="px-6 py-4">{student.courses}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
                          style={{ width: `${student.progress}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{student.progress}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{student.joinDate}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="px-3 py-1 text-sm border border-gray-300 text-gray-700 rounded hover:bg-gray-50">
                        Edit
                      </button>
                      <button className="px-3 py-1 text-sm bg-red-500 text-white rounded hover:bg-red-600">
                        Remove
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Assignments Component
  const Assignments = () => {
    const handleAddAssignment = async (assignmentData) => {
      try {
        const newAssignment = await apiService.createAssignment(assignmentData);
        setAssignments(prev => [...prev, newAssignment]);
        setShowModal(false);
      } catch (error) {
        console.error('Error creating assignment:', error);
      }
    };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">All Assignments</h2>
          <button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-200"
            onClick={() => { setModalType('assignment'); setShowModal(true); }}
          >
            <Plus size={18} />
            Add Assignment
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map(assignment => (
            <div key={assignment.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{assignment.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                  assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {assignment.status}
                </span>
              </div>
              <p className="text-indigo-600 font-medium mb-2">{assignment.course}</p>
              {assignment.description && (
                <p className="text-gray-600 text-sm mb-4">{assignment.description}</p>
              )}
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                <Calendar size={16} />
                <span>Due: {assignment.dueDate}</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                  Edit
                </button>
                <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-200">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Modal Component
  const Modal = () => {
    const [formData, setFormData] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!showModal) return null;

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);

      try {
        switch (modalType) {
          case 'course':
            await apiService.createCourse(formData);
            await loadData(); // Reload courses data
            break;
          case 'student':
            await apiService.createStudent(formData);
            await loadData(); // Reload students data
            break;
          case 'assignment':
            await apiService.createAssignment(formData);
            await loadData(); // Reload assignments data
            break;
        }
        setShowModal(false);
        setFormData({});
      } catch (error) {
        console.error(`Error creating ${modalType}:`, error);
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl">
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Add New {modalType}</h2>
            <button 
              className="text-gray-500 hover:text-gray-700 text-2xl"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              {modalType === 'course' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course Title</label>
                    <input 
                      type="text" 
                      name="title"
                      placeholder="Enter course title" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
                    <input 
                      type="text" 
                      name="instructor"
                      placeholder="Enter instructor name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                      name="description"
                      placeholder="Enter course description" 
                      rows="4" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                </>
              )}
              {modalType === 'student' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Student Name</label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder="Enter student name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Enter email address" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                </>
              )}
              {modalType === 'assignment' && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Assignment Title</label>
                    <input 
                      type="text" 
                      name="title"
                      placeholder="Enter assignment title" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Course</label>
                    <select 
                      name="course"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a course</option>
                      {courses.map(course => (
                        <option key={course.id} value={course.title}>{course.title}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Due Date</label>
                    <input 
                      type="date" 
                      name="dueDate"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none" 
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <textarea 
                      name="description"
                      placeholder="Enter assignment description" 
                      rows="3" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none resize-none"
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </>
              )}
              <div className="flex justify-end gap-3 pt-4">
                <button 
                  type="button"
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Adding...
                    </>
                  ) : (
                    `Add ${modalType}`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  // Render current view
  const renderView = () => {
    switch(currentView) {
      case 'dashboard': return <Dashboard />;
      case 'courses': return <Courses />;
      case 'students': return <Students />;
      case 'assignments': return <Assignments />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-8">
          {renderView()}
        </main>
      </div>
      <Modal />
    </div>
  );
};

// Main App Component
const App = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return isAuthenticated ? <LearningManagementSystem /> : <LoginForm />;
};

// Root Component with Providers
const LMSApp = () => {
  return (
    <AuthProvider>
      <Router>
        <App />
      </Router>
    </AuthProvider>
  );
};

export default LMSApp;">
                    <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                    <p className="text-gray-600 mb-4">by {course.instructor}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{course.students} students</span>
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${course.progress}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Recent Assignments</h2>
              <button 
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
                onClick={() => handleNavigation('assignments')}
              >
                View All
              </button>
            </div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">

                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold text-gray-800">{assignment.title}</h4>
                      <p className="text-gray-600 text-sm">{assignment.course}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-gray-500 text-xs mb-1">
                        <Calendar size={12} />
                        <span>{assignment.dueDate}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        assignment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        assignment.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Courses Component
  const Courses = () => {
    const handleAddCourse = async (courseData) => {
      try {
        const newCourse = await apiService.createCourse(courseData);
        setCourses(prev => [...prev, newCourse]);
        setShowModal(false);
      } catch (error) {
        console.error('Error creating course:', error);
      }
    };

    if (isLoading) {
      return (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      );
    }

    return (
      <div>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">All Courses</h2>
          <button 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:shadow-lg transition-all duration-200"
            onClick={() => { setModalType('course'); setShowModal(true); }}
          >
            <Plus size={18} />
            Add Course
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(course => (
            <div key={course.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6