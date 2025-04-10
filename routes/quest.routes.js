const express = require('express');
const guestController = require('../controllers/guest.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add logo
router.post('/add', authMiddleware,guestController.addGest);
router.get('/get-list', guestController.getGest);
router.delete('/remove',authMiddleware, guestController.removeGest);
router.patch('/update',authMiddleware, guestController.updateGest);

module.exports = router;
