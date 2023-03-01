// @ts-nocheck

const expressAsyncHandler = require('express-async-handler');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../models/userModel');

const authMiddleware = expressAsyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jsonwebtoken.verify(
        token,
        process.env.JWT_SECRET || 'secret'
      );

      // Get user from token
      req.user = await User.findById(decoded.id).select('-password');

      // Check if a user was found
      if (!req.user) {
        res.status(401);
        throw new Error('Not authorized');
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(401);
      throw new Error('Not authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not authorized');
  }
});

module.exports = authMiddleware;
