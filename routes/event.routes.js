const express = require('express');
const eventController = require('../controllers/event.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add events
router.post('/add', authMiddleware,eventController.addEvent);
router.get('/get-list', eventController.getEvent);
router.delete('/remove',authMiddleware, eventController.removeEvent);
router.patch('/update',authMiddleware, eventController.updateEvent);

module.exports = router;
