const Slider = require('../models/slider.model');
const mongoose = require('mongoose');

const add = async (req, res) => {
  try {
    const notification = new Slider(req.body);
    const Added = await notification.save();
    return {
      status: true,
      statusCode: 200,
      message: 'Slider added successfully',
      data: Added,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};
const getList = async (req, res) => {
  try {
    const result = await Slider.find();
    return {
      status: true,
      statusCode: 200,
      message: 'Your all Slider list',
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
    const result = await Slider.findByIdAndUpdate(
      { _id }, // No condition, updates the entire collection
      req.body // Update operation: set the `read` field to true
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Slider is updated  messages',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const remove = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.query?.id);

    const result = await Slider.findByIdAndDelete(
      { _id } // No condition, updates the entire collection
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Slider is removed successfully',
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
