const guestService = require('../services/guest.service');
// Add add Slider
const addGest = async (req, res) => {
  const data = await guestService.add(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};
const getGest = async (req, res) => {
  const data = await guestService.getList(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// Get all un read messages
const updateGest = async (req, res) => {
  const data = await guestService.update(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// remove slider
const removeGest = async (req, res) => {
  const data = await guestService.remove(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

module.exports = { addGest, removeGest, getGest, updateGest };
