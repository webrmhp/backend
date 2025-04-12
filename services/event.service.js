const event = require('../models/event.model');
const mongoose = require('mongoose');
const { uploadImage } = require('../config/cloudinary');

const add = async (req, res) => {
  try {
    let image = '';
    if (req?.body.image) {
      try {
        const url = await uploadImage(req?.body.image, 'event_pictures');
        image = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }

    req.body.image = image;
    const Event = new event(req.body);
    const Added = await Event.save();
    return {
      status: true,
      statusCode: 200,
      message: 'Event added successfully',
      data: Added,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};
const getList = async (req, res) => {
  try {
    const result = await event.find();
    return {
      status: true,
      statusCode: 200,
      message: 'Your all Event list',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const update = async (req, res) => {
  try {
    let image = '';

    if (req?.body.image) {
      try {
        const url = await uploadImage(req?.body.image, 'event_pictures');
        image = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }

    req.body.image = image;

    const _id = new mongoose.Types.ObjectId(req.body?._id);
    req.body.lastUpdated = new Date().toISOString();
    const result = await event.findByIdAndUpdate(
      { _id }, // No condition, updates the entire collection
      req.body // Update operation: set the `read` field to true
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Event is updated  messages',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const remove = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.query?.id);
    const result = await event.findByIdAndDelete({ _id });
    return {
      status: true,
      statusCode: 200,
      message: 'Event is removed successfully',
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
