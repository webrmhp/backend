const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
  image: { type: String, required: true },
  title: { type: String, required: true,  },
  description: { type: String, required: true,  },
  createdAt: { type: Date, default: Date.now },
  lastUpdated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Slider', sliderSchema);
