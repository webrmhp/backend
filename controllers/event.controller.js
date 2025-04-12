const eventService = require('../services/event.service');
// Add Event
const addEvent = async (req, res) => {
  const data = await eventService.add(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};
// Get Event
const getEvent= async (req, res) => {
  const data = await eventService.getList(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// Update Event
const updateEvent = async (req, res) => {
  const data = await eventService.update(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

// remove Event
const removeEvent = async (req, res) => {
  const data = await eventService.remove(req, res);
  return res.status(data.statusCode).send({
    status: data.status,
    statusCode: data.statusCode,
    message: data.message,
    data: data?.data,
  });
};

module.exports = { addEvent, getEvent, updateEvent, removeEvent };
