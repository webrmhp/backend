const logo = require('../models/logo.model');
const mongoose = require('mongoose');

const add = async (req, res) => {
  try {
    const Logo = new logo(req.body);
    const Added = await Logo.save();
    return {
      status: true,
      statusCode: 200,
      message: 'Logo added successfully',
      data: Added,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};
const getList = async (req, res) => {
  try {
    const result = await logo.find();
    return {
      status: true,
      statusCode: 200,
      message: 'Your all Logo list',
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
    const result = await logo.findByIdAndUpdate(
      { _id }, // No condition, updates the entire collection
      req.body // Update operation: set the `read` field to true
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Logo is updated  messages',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const remove = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.query?.id);
    const result = await logo.findByIdAndDelete({_id});
    return {
      status: true,
      statusCode: 200,
      message: 'Logo is removed successfully',
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
