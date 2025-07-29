const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  title: { type: String, required: true },
  description: String,
  dueDate: { type: Date, required: true },
  points: { type: Number, default: 0 },
  status: {
    type: String,
    enum: ['active', 'closed'],
    default: 'active'
  }
});

module.exports = mongoose.model('Assignment', assignmentSchema);
