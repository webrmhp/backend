const sliderService = require('../services/slider.service');
// Add add Slider
const addSlider = async (req, res) => {
  const data = await sliderService.add(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};
const getSilder = async (req, res) => {
  const data = await sliderService.getList(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// Get all un read messages
const updateSlider = async (req, res) => {
  const data = await sliderService.update(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// remove slider
const removeSlider = async (req, res) => {
  const data = await sliderService.remove(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

module.exports = { addSlider, updateSlider, removeSlider, getSilder };
