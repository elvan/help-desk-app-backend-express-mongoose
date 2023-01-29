const asyncHandler = require('express-async-handler');

const login = asyncHandler(async (req, res) => {
  const { email } = req.body;

  res.status(201).json({
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
  login,
  currentUser,
};
