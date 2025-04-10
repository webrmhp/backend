const sliderService = require('../services/logo.service');
// Add add Slider
const addLogo = async (req, res) => {
  const data = await sliderService.add(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};
const getLogo = async (req, res) => {
  const data = await sliderService.getList(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// Get all un read messages
const updateLogo = async (req, res) => {
  const data = await sliderService.update(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// remove slider
const removeLogo = async (req, res) => {
  const data = await sliderService.remove(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

module.exports = { addLogo, getLogo, updateLogo, removeLogo };
