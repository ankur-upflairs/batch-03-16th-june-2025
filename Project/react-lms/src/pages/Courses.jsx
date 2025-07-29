import React, { useEffect, useState } from 'react'
import { Link } from 'react-router';
import { GetAllCourses } from '../api/courseApi';

// Courses Page Component
const CoursesPage = () => {
    const [courses, setCourses] = useState([])
    useEffect(() => {
        GetAllCourses()
        .then(data=>{
            setCourses(data.courses)
        })        
        
    }, [])
    

  return (
    <div className="container py-4">
      <div className="row mb-4">
        <div className="col">
          <h2 className="mb-4">Courses</h2>
        </div>
      </div>

      <div className="row g-4">
        {courses.map(course => (
          <div key={course.id} className="col-lg-4 col-md-6">
            <div className="card h-100 shadow-sm">
              <img src={course.image} className="card-img-top" alt={course.title} style={{height: '200px', objectFit: 'cover'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{course.title}</h5>
                <p className="text-muted mb-2">by {course.instructor}</p>
                <p className="card-text flex-grow-1">{course.description}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <small className="text-muted">
                      <i className="fas fa-users me-1"></i>
                      {course.students} students
                    </small>
                    <small className="text-muted">
                      <i className="fas fa-clock me-1"></i>
                      {course.duration}
                    </small>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className={`badge ${course.level === 'Beginner' ? 'bg-success' : course.level === 'Intermediate' ? 'bg-warning' : 'bg-danger'}`}>
                      {course.level}
                    </span>
                    <Link to={`/courses/${course._id}`} className="btn btn-primary btn-sm">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage