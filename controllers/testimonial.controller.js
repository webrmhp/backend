const testimonialService = require('../services/testimonail.service');
// Add Testimonial
const addTestimonial = async (req, res) => {
  const data = await testimonialService.add(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};
// Get Testimonial
const getTestimonial= async (req, res) => {
  const data = await testimonialService.getList(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// Update Testimonial
const updateTestimonial = async (req, res) => {
  const data = await testimonialService.update(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// remove Testimonial
const removeTestimonial = async (req, res) => {
  const data = await testimonialService.remove(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

module.exports = { addTestimonial, getTestimonial, updateTestimonial, removeTestimonial };
