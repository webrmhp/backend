const express = require('express');
const logoController = require('../controllers/logo.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Add logo

router.post('/add', authMiddleware,logoController.addLogo);
router.get('/get-list', logoController.getLogo);
router.delete('/remove',authMiddleware, logoController.removeLogo);
router.patch('/update',authMiddleware, logoController.updateLogo);

module.exports = router;
