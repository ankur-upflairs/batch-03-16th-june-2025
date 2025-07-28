import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import CoursesPage from './pages/Courses';
// Dummy Data
const dummyData = {
  courses: [
    {
      id: 1,
      title: "React Fundamentals",
      instructor: "John Doe",
      description: "Learn the basics of React including components, state, and props.",
      students: 45,
      duration: "8 weeks",
      level: "Beginner",
      image: "https://via.placeholder.com/300x200/007bff/ffffff?text=React"
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      instructor: "Jane Smith",
      description: "Deep dive into ES6+, async programming, and advanced concepts.",
      students: 32,
      duration: "10 weeks",
      level: "Advanced",
      image: "https://via.placeholder.com/300x200/ffc107/000000?text=JavaScript"
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      instructor: "Mike Johnson",
      description: "Build scalable backend applications with Node.js and Express.",
      students: 28,
      duration: "12 weeks",
      level: "Intermediate",
      image: "https://via.placeholder.com/300x200/28a745/ffffff?text=Node.js"
    }
  ],
  students: [
    {
      id: 1,
      name: "Alice Cooper",
      email: "alice@example.com",
      enrolledCourses: [1, 2],
      joinDate: "2024-01-15",
      avatar: "https://via.placeholder.com/80x80/6c757d/ffffff?text=AC"
    },
    {
      id: 2,
      name: "Bob Wilson",
      email: "bob@example.com",
      enrolledCourses: [1, 3],
      joinDate: "2024-02-01",
      avatar: "https://via.placeholder.com/80x80/17a2b8/ffffff?text=BW"
    },
    {
      id: 3,
      name: "Carol Davis",
      email: "carol@example.com",
      enrolledCourses: [2, 3],
      joinDate: "2024-01-20",
      avatar: "https://via.placeholder.com/80x80/e83e8c/ffffff?text=CD"
    }
  ],
  assignments: [
    {
      id: 1,
      courseId: 1,
      title: "Create Your First Component",
      description: "Build a simple React component that displays your name and favorite hobby.",
      dueDate: "2024-08-15",
      points: 100,
      status: "active"
    },
    {
      id: 2,
      courseId: 1,
      title: "State Management Exercise",
      description: "Create a counter app using useState hook.",
      dueDate: "2024-08-20",
      points: 150,
      status: "active"
    },
    {
      id: 3,
      courseId: 2,
      title: "Async/Await Implementation",
      description: "Implement a data fetching function using async/await.",
      dueDate: "2024-08-25",
      points: 200,
      status: "upcoming"
    }
  ]
};

// Home Page Component
const HomePage = () => {
  return (
    <div className="bg-light">
      {/* Hero Section */}
      <div className="bg-primary text-white py-5 mb-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">Welcome to EduPlatform</h1>
              <p className="lead mb-4">
                Your comprehensive learning management system for modern education. 
                Manage courses, track student progress, and streamline assignments.
              </p>
              <Link to="/dashboard" className="btn btn-light btn-lg">
                Go to Dashboard
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <i className="fas fa-chalkboard-teacher" style={{fontSize: '8rem', opacity: 0.8}}></i>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mb-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i className="fas fa-book text-primary mb-3" style={{fontSize: '2.5rem'}}></i>
                <h3 className="card-title">{dummyData.courses.length}</h3>
                <p className="card-text text-muted">Active Courses</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i className="fas fa-users text-success mb-3" style={{fontSize: '2.5rem'}}></i>
                <h3 className="card-title">{dummyData.students.length}</h3>
                <p className="card-text text-muted">Enrolled Students</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body text-center">
                <i className="fas fa-clipboard-list text-warning mb-3" style={{fontSize: '2.5rem'}}></i>
                <h3 className="card-title">{dummyData.assignments.length}</h3>
                <p className="card-text text-muted">Active Assignments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-4">Dashboard</h2>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="row g-4 mb-5">
        <div className="col-lg-3 col-md-6">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{dummyData.courses.length}</h4>
                  <p className="mb-0">Total Courses</p>
                </div>
                <i className="fas fa-book-open fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card bg-success text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{dummyData.students.length}</h4>
                  <p className="mb-0">Students</p>
                </div>
                <i className="fas fa-user-graduate fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card bg-warning text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>{dummyData.assignments.filter(a => a.status === 'active').length}</h4>
                  <p className="mb-0">Active Assignments</p>
                </div>
                <i className="fas fa-tasks fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="card bg-info text-white">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <div>
                  <h4>85%</h4>
                  <p className="mb-0">Completion Rate</p>
                </div>
                <i className="fas fa-chart-pie fa-2x opacity-75"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Recent Courses</h5>
            </div>
            <div className="card-body">
              {dummyData.courses.slice(0, 3).map(course => (
                <div key={course.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img src={course.image} alt={course.title} className="rounded me-3" style={{width: '60px', height: '40px', objectFit: 'cover'}} />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{course.title}</h6>
                    <small className="text-muted">Instructor: {course.instructor}</small>
                  </div>
                  <span className="badge bg-primary">{course.students} students</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Upcoming Deadlines</h5>
            </div>
            <div className="card-body">
              {dummyData.assignments.slice(0, 3).map(assignment => (
                <div key={assignment.id} className="mb-3 pb-3 border-bottom">
                  <h6 className="mb-1">{assignment.title}</h6>
                  <small className="text-muted">Due: {assignment.dueDate}</small>
                  <div className="mt-1">
                    <span className={`badge ${assignment.status === 'active' ? 'bg-success' : 'bg-warning'}`}>
                      {assignment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Course Detail Component
const CourseDetail = () => {
  // const { id } = useParams();
  let id = 1
  const course = dummyData.courses.find(c => c.id === parseInt(id));
  const courseAssignments = dummyData.assignments.filter(a => a.courseId === parseInt(id));
  
  if (!course) {
    return <div className="container py-4"><h3>Course not found</h3></div>;
  }

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-8">
          <div className="card">
            <img src={course.image} className="card-img-top" alt={course.title} style={{height: '300px', objectFit: 'cover'}} />
            <div className="card-body">
              <h2 className="card-title">{course.title}</h2>
              <p className="text-muted mb-3">Instructor: {course.instructor}</p>
              <p className="card-text">{course.description}</p>
              
              <div className="row mt-4">
                <div className="col-md-3">
                  <strong>Duration:</strong><br />
                  <span className="text-muted">{course.duration}</span>
                </div>
                <div className="col-md-3">
                  <strong>Level:</strong><br />
                  <span className={`badge ${course.level === 'Beginner' ? 'bg-success' : course.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'}`}>
                    {course.level}
                  </span>
                </div>
                <div className="col-md-3">
                  <strong>Students:</strong><br />
                  <span className="text-muted">{course.students}</span>
                </div>
                <div className="col-md-3">
                  <strong>Assignments:</strong><br />
                  <span className="text-muted">{courseAssignments.length}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Assignments Section */}
          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">Assignments</h5>
            </div>
            <div className="card-body">
              {courseAssignments.length > 0 ? (
                courseAssignments.map(assignment => (
                  <div key={assignment.id} className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <h6>{assignment.title}</h6>
                        <p className="text-muted mb-2">{assignment.description}</p>
                        <small className="text-muted">Due: {assignment.dueDate}</small>
                      </div>
                      <div className="text-end">
                        <span className={`badge ${assignment.status === 'active' ? 'bg-success' : 'bg-warning'} mb-2`}>
                          {assignment.status}
                        </span>
                        <br />
                        <small className="text-muted">{assignment.points} points</small>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted">No assignments available for this course.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Course Actions</h5>
            </div>
            <div className="card-body">
              <button className="btn btn-primary w-100 mb-2">Enroll Now</button>
              <button className="btn btn-outline-secondary w-100 mb-2">Add to Wishlist</button>
              <button className="btn btn-outline-info w-100">Share Course</button>
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">Enrolled Students</h5>
            </div>
            <div className="card-body">
              {dummyData.students
                .filter(student => student.enrolledCourses.includes(course.id))
                .map(student => (
                  <div key={student.id} className="d-flex align-items-center mb-3">
                    <img src={student.avatar} alt={student.name} className="rounded-circle me-3" style={{width: '40px', height: '40px'}} />
                    <div>
                      <h6 className="mb-0">{student.name}</h6>
                      <small className="text-muted">{student.email}</small>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Students Page Component
const StudentsPage = () => {
  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-4">Students</h2>
        </div>
      </div>

      <div className="row g-4">
        {dummyData.students.map(student => (
          <div key={student.id} className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <div className="card-body text-center">
                <img src={student.avatar} alt={student.name} className="rounded-circle mb-3" style={{width: '80px', height: '80px'}} />
                <h5 className="card-title">{student.name}</h5>
                <p className="text-muted">{student.email}</p>
                <p className="card-text">
                  <small className="text-muted">Joined: {student.joinDate}</small>
                </p>
                <div className="mb-3">
                  <h6>Enrolled Courses:</h6>
                  {student.enrolledCourses.map(courseId => {
                    const course = dummyData.courses.find(c => c.id === courseId);
                    return (
                      <span key={courseId} className="badge bg-primary ms-1">
                        {course?.title}
                      </span>
                    );
                  })}
                </div>
                <Link to={`/students/${student.id}`} className="btn btn-outline-primary btn-sm">
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Student Detail Component
const StudentDetail = () => {
  const { id } = useParams();
  const student = dummyData.students.find(s => s.id === parseInt(id));
  
  if (!student) {
    return <div className="container py-4"><h3>Student not found</h3></div>;
  }

  const enrolledCourses = dummyData.courses.filter(course => 
    student.enrolledCourses.includes(course.id)
  );

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="card-body text-center">
              <img src={student.avatar} alt={student.name} className="rounded-circle mb-3" style={{width: '120px', height: '120px'}} />
              <h3>{student.name}</h3>
              <p className="text-muted">{student.email}</p>
              <p><small>Member since: {student.joinDate}</small></p>
              <button className="btn btn-primary me-2">Send Message</button>
              <button className="btn btn-outline-secondary">Edit Profile</button>
            </div>
          </div>
        </div>

        <div className="col-lg-8">
          <div className="card">
            <div className="card-header">
              <h5 className="mb-0">Enrolled Courses ({enrolledCourses.length})</h5>
            </div>
            <div className="card-body">
              {enrolledCourses.map(course => (
                <div key={course.id} className="d-flex align-items-center mb-3 pb-3 border-bottom">
                  <img src={course.image} alt={course.title} className="rounded me-3" style={{width: '80px', height: '60px', objectFit: 'cover'}} />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{course.title}</h6>
                    <p className="text-muted mb-1">Instructor: {course.instructor}</p>
                    <small className="text-muted">{course.duration} • {course.level}</small>
                  </div>
                  <div className="text-end">
                    <div className="progress mb-2" style={{width: '100px', height: '8px'}}>
                      <div className="progress-bar" style={{width: `${Math.floor(Math.random() * 100)}%`}}></div>
                    </div>
                    <small className="text-muted">Progress</small>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card mt-4">
            <div className="card-header">
              <h5 className="mb-0">Recent Activity</h5>
            </div>
            <div className="card-body">
              <div className="timeline">
                <div className="mb-3">
                  <span className="badge bg-success">Submitted</span>
                  <span className="ms-2">Assignment: Create Your First Component</span>
                  <small className="text-muted d-block">2 days ago</small>
                </div>
                <div className="mb-3">
                  <span className="badge bg-primary">Enrolled</span>
                  <span className="ms-2">Course: Advanced JavaScript</span>
                  <small className="text-muted d-block">1 week ago</small>
                </div>
                <div className="mb-3">
                  <span className="badge bg-info">Completed</span>
                  <span className="ms-2">Quiz: React Fundamentals</span>
                  <small className="text-muted d-block">2 weeks ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Assignments Page Component
const AssignmentsPage = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredAssignments = filter === 'all' 
    ? dummyData.assignments 
    : dummyData.assignments.filter(a => a.status === filter);

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-4">Assignments</h2>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="row mb-4">
        <div className="col">
          <div className="btn-group" role="group">
            <button 
              className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('all')}
            >
              All Assignments
            </button>
            <button 
              className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('active')}
            >
              Active
            </button>
            <button 
              className={`btn ${filter === 'upcoming' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setFilter('upcoming')}
            >
              Upcoming
            </button>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {filteredAssignments.map(assignment => {
          const course = dummyData.courses.find(c => c.id === assignment.courseId);
          return (
            <div key={assignment.id} className="col-lg-6">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <h5 className="card-title">{assignment.title}</h5>
                    <span className={`badge ${assignment.status === 'active' ? 'bg-success' : 'bg-warning'}`}>
                      {assignment.status}
                    </span>
                  </div>
                  
                  <h6 className="text-primary mb-2">{course?.title}</h6>
                  <p className="card-text">{assignment.description}</p>
                  
                  <div className="row mt-3">
                    <div className="col-6">
                      <small className="text-muted">Due Date:</small><br />
                      <strong>{assignment.dueDate}</strong>
                    </div>
                    <div className="col-6">
                      <small className="text-muted">Points:</small><br />
                      <strong>{assignment.points}</strong>
                    </div>
                  </div>
                  
                  <div className="mt-3">
                    <button className="btn btn-primary btn-sm me-2">View Details</button>
                    <button className="btn btn-outline-secondary btn-sm">Edit</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Bootstrap CSS */}
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
        />
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" 
          rel="stylesheet" 
        />
        
        <Navigation />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>

        {/* Bootstrap JS */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      </div>
    </Router>
  );
};

export default App;