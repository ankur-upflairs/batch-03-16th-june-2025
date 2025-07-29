const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  enrolledCourses: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Course', // Assuming 'Course' is the model name
    },
  ],
  joinDate: {
    type: Date,
    default: Date.now,
  },
  avatar: String,
});

module.exports = mongoose.model('Student', studentSchema);
