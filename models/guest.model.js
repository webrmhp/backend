const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
  image: { type: String, required: true },
  addedAt: { type: Date, default: Date.now },
  name: { type: String, required: true },
  status: { type: String, required: true },
  link: { type: String, required: false },
});

module.exports = mongoose.model('Guest', GuestSchema);
