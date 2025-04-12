const testimonail = require('../models/testimonail.model');
const mongoose = require('mongoose');
const { uploadImage } = require('../config/cloudinary');

const add = async (req, res) => {
  try {
    let image = '';
    let moreImage = '';
    if (req?.body.image) {
      try {
        const url = await uploadImage(req?.body.image, 'testimonail_pictures');
        image = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }
    if (req?.body.moreImage) {
      try {
        const url = await uploadImage(
          req?.body.moreImage,
          'testimonail_pictures'
        );
        moreImage = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }

    req.body.image = image;
    req.body.moreImage = moreImage;
    const Logo = new testimonail(req.body);
    const Added = await Logo.save();
    return {
      status: true,
      statusCode: 200,
      message: 'Testimonail added successfully',
      data: Added,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};
const getList = async (req, res) => {
  try {
    const result = await testimonail.find();
    return {
      status: true,
      statusCode: 200,
      message: 'Your all Testimonail list',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const update = async (req, res) => {
  try {
    let image = '';
    let moreImage = '';

    if (req?.body.image) {
      try {
        const url = await uploadImage(req?.body.image, 'testimonail_pictures');
        image = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }

    if (req?.body.moreImage) {
      try {
        const url = await uploadImage(
          req?.body.moreImage,
          'testimonail_pictures'
        );
        moreImage = url;
      } catch (error) {
        console.error('Error during Cloudinary upload:', error);
      }
    }

    req.body.image = image;
    req.body.moreImage = moreImage;

    const _id = new mongoose.Types.ObjectId(req.body?._id);
    req.body.lastUpdated = new Date().toISOString();
    const result = await testimonail.findByIdAndUpdate(
      { _id }, // No condition, updates the entire collection
      req.body // Update operation: set the `read` field to true
    );
    return {
      status: true,
      statusCode: 200,
      message: 'Testimonail is updated  messages',
      data: result,
    };
  } catch (error) {
    return { status: false, statusCode: 400, message: error.message, data: [] };
  }
};

const remove = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.query?.id);
    const result = await testimonail.findByIdAndDelete({ _id });
    return {
      status: true,
      statusCode: 200,
      message: 'Testimonail is removed successfully',
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
