import React, { useEffect, useState } from 'react'
import { GetSingleCourse } from '../api/courseApi';
import { dummyData } from '../App';
import { useParams } from 'react-router';

// Course Detail Component
const CourseDetail = () => {
  const { id } = useParams();
  const [course,setCourse] = useState({})
  useEffect(() => {
    GetSingleCourse(id)
    .then(data=>{
        setCourse(data.course)
    })
  }, [])
  
//   const course = dummyData.courses.find(c => c.id === parseInt(id));
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

export default CourseDetail