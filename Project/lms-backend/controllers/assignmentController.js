const Assignment = require('../models/assignmentModel');

// Get all assignments
exports.getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find().populate('courseId');
    res.json({ success: true, assignments });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Create new assignment
exports.createAssignment = async (req, res) => {
  try {
    const assignment = new Assignment(req.body);
    await assignment.save();
    res.status(201).json({ success: true, assignment });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get assignment by ID
exports.getAssignmentById = async (req, res) => {
  try {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment) {
      return res.status(404).json({ success: false, message: 'Assignment not found' });
    }
    res.json({ success: true, assignment });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

