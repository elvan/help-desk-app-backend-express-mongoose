const express = require('express');

const currentUserController = require('../controllers/user/currentUserController');
const loginUserController = require('../controllers/user/loginUserController');
const registerUserController = require('../controllers/user/registerUserController');

const userRouter = express.Router();

userRouter.get('/current-user', currentUserController);
userRouter.post('/login', loginUserController);
userRouter.post('/register', registerUserController);

module.exports = userRouter;
