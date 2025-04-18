const express = require('express');
const userController = require('../controllers/user.controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();


router.get('/state', userController.getState);
router.post('/profile-detail', userController.varifyEmail);
router.post('/account-setup', userController.accountSetup);
router.patch('/reset-password', userController.resetPassword);
router.get('/list',authMiddleware, userController.getUserList);
router.patch('/edit-profile',authMiddleware, userController.editProfile);
router.delete('/delete-profile',authMiddleware, userController.deleteProfile);
router.get('/get-by-id',authMiddleware, userController.getUserById);
router.post('/login', userController.login);
router.get('/get-employees', userController.getEmployeeList);


router.post('/create-lms', userController.createLMS);
router.post('/verify-password', userController.verifyPassword);


module.exports = router;
