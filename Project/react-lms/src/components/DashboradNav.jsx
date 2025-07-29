import React from 'react'
import { Link } from 'react-router';

// DashNav Component
const DashNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
      <div className="container">
       
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/create-course">Create Course</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/courses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">Students</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/assignments">Assignments</Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default DashNav