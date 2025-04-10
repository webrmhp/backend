const guest = require('../models/guest.model');
const mongoose = require('mongoose');

const add = async (req, res) => {
  try {
    const Guest = new guest(req.body);
    const Added = await Guest.save();
    return {
      status: true,
      statusCode: 200,
      message: 'Guest added successfully',
      data: Added,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};
const getList = async (req, res) => {
  try {
    const result = await guest.find();
    return {
      status: true,
      statusCode: 200,
      message: 'Your all guest list',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const update = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.body?._id);
    req.body.lastUpdated = new Date().toISOString();
    const result = await guest.findByIdAndUpdate(
      { _id }, // No condition, updates the entire collection
      req.body // Update operation: set the `read` field to true
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Guest is updated  messages',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const remove = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.query?.id);
    const result = await guest.findByIdAndDelete({_id});
    return {
      status: true,
      statusCode: 200,
      message: 'Guest is removed successfully',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

module.exports = {
  add,
  remove,
  update,
  getList,
};
