const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  // Find if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  // Create a salt
  const salt = await bcrypt.genSalt(10);

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  // Check if user was created
  if (user) {
    // If user was created
    res.status(201).json({
      message: 'User created successfully',
      data: {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } else {
    // If user was not created
    res.status(400).json({
      message: 'Invalid user data',
    });
  }
});

module.exports = {
  register,
};
