import React,{useState} from 'react'
import { createCourse } from '../api/courseApi';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createCourse(course)
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
      {/* <h4>Saved Courses</h4>
      <ul className="list-group">
        {savedCourses.map((c, idx) => (
          <li key={idx} className="list-group-item">
            <strong>{c.title}</strong> by {c.instructor}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default CourseCreate;
