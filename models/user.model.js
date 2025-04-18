const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  phone: { type: String, required: false },
  name: { type: String, required: false },
  profilePhoto: { type: String, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  verified: { type: Boolean, required: false },
  userType: { type: String, required: false, default: 'Student' },
  address: { type: String, required: false },
  CNIC: { type: String, required: false },
  previousDigree: { type: String, required: false },
  registerDate: { type: Date, default: Date.now },
  lmsPassword: { type: String, required: true },
  ashPassword: { type: String, required: true },
  LMSStatus:{ type: Boolean, required: true, default:true }
});

module.exports = mongoose.model('User', userSchema);
