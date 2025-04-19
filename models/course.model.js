const mongoose = require('mongoose');

// Sub-schema for courseData
const courseDataItemSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['defination', 'outLine', 'content', 'scope'],
    required: true
  },
  heading: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // description: {
  //   type: mongoose.Schema.Types.Mixed, // Allows String or [String]
  //   required: true,
  //   validate: {
  //     validator: function (value) {
  //       if (this.type === 'defination') {
  //         return typeof value === 'string';
  //       } else {
  //         return Array.isArray(value);
  //       }
  //     },
  //     message: props => `Invalid description type for "${props.value}"`
  //   }
  // }
});

// Main course schema
const courseSchema = new mongoose.Schema({
  title: { type: String, default: '' },
  prize: { type: Number },
  duration: { type: String },
  courseType: { type: String },
  subject: { type: String, default: '' },
  skill: { type: String, default: '' },
  language: { type: String, default: '' },
  courseTag: { type: [String], required: true },
  courseImage: { type: String },
  addedAt: { type: Date, default: Date.now },
  launchedDate: { type: String, required: false },
  courseData: [courseDataItemSchema],
  discription: { type: String, required: true, default: '' }
});

module.exports = mongoose.model('Course', courseSchema);
