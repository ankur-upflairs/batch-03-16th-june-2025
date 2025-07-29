import React, { useState } from 'react';

const CourseCreate = () => {
  const [course, setCourse] = useState({
    title: '',
    instructor: '',
    description: '',
    students: 0,
    duration: '',
    level: 'Beginner',
    image: '',
  });

  const [savedCourses, setSavedCourses] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse({ ...course, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedCourses([...savedCourses, course]);
    setCourse({
      title: '',
      instructor: '',
      description: '',
      students: 0,
      duration: '',
      level: 'Beginner',
      image: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input className="form-control" name="title" value={course.title} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Instructor</label>
          <input className="form-control" name="instructor" value={course.instructor} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label">Description</label>
          <textarea className="form-control" name="description" value={course.description} onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Students</label>
          <input type="number" className="form-control" name="students" value={course.students} onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Duration</label>
          <input className="form-control" name="duration" value={course.duration} onChange={handleChange} />
        </div>
        <div className="col-md-4">
          <label className="form-label">Level</label>
          <select className="form-select" name="level" value={course.level} onChange={handleChange}>
            <option value="Beginner">Beginner</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
        <div className="col-12">
          <label className="form-label">Image URL</label>
          <input className="form-control" name="image" value={course.image} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Create Course</button>
        </div>
      </form>

      <hr />
      <h4>Saved Courses</h4>
      <ul className="list-group">
        {savedCourses.map((c, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{c.title}</strong> by {c.instructor}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseCreate;
import React, { useState } from 'react';

const StudentSignup = () => {
  const [student, setStudent] = useState({
    name: '',
    email: '',
    enrolledCourses: '',
    joinDate: '',
    avatar: '',
  });

  const [studentsList, setStudentsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedStudent = {
      ...student,
      enrolledCourses: student.enrolledCourses.split(',').map((id) => id.trim()),
    };
    setStudentsList([...studentsList, formattedStudent]);
    setStudent({
      name: '',
      email: '',
      enrolledCourses: '',
      joinDate: '',
      avatar: '',
    });
  };

  return (
    <div className="container mt-5">
      <h2>Student Signup</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input className="form-control" name="name" value={student.name} onChange={handleChange} required />
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input className="form-control" name="email" value={student.email} onChange={handleChange} required />
        </div>
        <div className="col-12">
          <label className="form-label">Enrolled Courses (comma separated IDs)</label>
          <input className="form-control" name="enrolledCourses" value={student.enrolledCourses} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Join Date</label>
          <input type="date" className="form-control" name="joinDate" value={student.joinDate} onChange={handleChange} />
        </div>
        <div className="col-md-6">
          <label className="form-label">Avatar URL</label>
          <input className="form-control" name="avatar" value={student.avatar} onChange={handleChange} />
        </div>
        <div className="col-12">
          <button className="btn btn-success" type="submit">Sign Up</button>
        </div>
      </form>

      <hr />
      <h4>Registered Students</h4>
      <ul className="list-group">
        {studentsList.map((s, idx) => (
          <li key={idx} className="list-group-item d-flex align-items-center gap-3">
            <img src={s.avatar} alt="avatar" width={40} height={40} className="rounded-circle" />
            <div>
              <strong>{s.name}</strong> - {s.email}
              <br />
              <small>Courses: {s.enrolledCourses.join(', ')}</small>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentSignup;

import React, { useState } from 'react';

const AssignmentForm = () => {
  const [assignment, setAssignment] = useState({
    courseId: '',
    title: '',
    description: '',
    dueDate: '',
    points: '',
    status: 'active',
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Assignment created:', assignment);
    // Send to backend here using axios/fetch if needed
  };

  return (
    <div className="container mt-4">
      <h3>Create Assignment</h3>
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
        <div className="mb-3">
          <label className="form-label">Course ID</label>
          <input
            type="text"
            className="form-control"
            name="courseId"
            value={assignment.courseId}
            onChange={handleChange}
            placeholder="Enter Course ID"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            name="title"
            value={assignment.title}
            onChange={handleChange}
            placeholder="Assignment Title"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea
            className="form-control"
            name="description"
            value={assignment.description}
            onChange={handleChange}
            placeholder="Describe the assignment"
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input
            type="date"
            className="form-control"
            name="dueDate"
            value={assignment.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Points</label>
          <input
            type="number"
            className="form-control"
            name="points"
            value={assignment.points}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select
            className="form-select"
            name="status"
            value={assignment.status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="closed">Closed</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Create Assignment</button>
      </form>
    </div>
  );
};

export default AssignmentForm;

