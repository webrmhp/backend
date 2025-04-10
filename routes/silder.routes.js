const express = require('express');
const sliderController = require('../controllers/slider.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add Slider

router.post('/add', authMiddleware,sliderController.addSlider);
router.get('/get-list', sliderController.getSilder);
router.delete('/remove',authMiddleware, sliderController.removeSlider);
router.patch('/update',authMiddleware, sliderController.updateSlider);

module.exports = router;
