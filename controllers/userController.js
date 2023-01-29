const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

const registerUser = asyncHandler(async (req, res) => {
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
    res.status(400);

    // Throw an error
    throw new Error('Invalid user data');
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email } = req.body;

  res.status(200).json({
    message: 'Login successful',
    data: {
      email,
    },
  });
});

const currentUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Current user',
    data: {},
  });
});

module.exports = {
  registerUser,
  loginUser,
  currentUser,
};
