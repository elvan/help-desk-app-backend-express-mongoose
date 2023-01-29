const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

router.get('/current-user', authController.currentUser);

router.post('/login', authController.login);

module.exports = router;
