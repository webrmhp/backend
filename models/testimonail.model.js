const mongoose = require('mongoose');

const testimonailSchema = new mongoose.Schema({
  name: { type: String, required: true },
  status: { type: String, required: true },
  description: { type: String, required: true },
  moreImage:{ type: String, required: true },
  image: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Testimonail', testimonailSchema);
