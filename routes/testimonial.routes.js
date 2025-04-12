const express = require('express');
const testimonailController = require('../controllers/testimonial.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add Testimonial

router.post('/add', authMiddleware,testimonailController.addTestimonial);
router.get('/get-list', testimonailController.getTestimonial);
router.delete('/remove',authMiddleware, testimonailController.removeTestimonial);
router.patch('/update',authMiddleware, testimonailController.updateTestimonial);

module.exports = router;
