const asyncHandler = require('express-async-handler');

const register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    message: 'User created successfully',
    data: {
      name,
      email,
      password,
    },
  });
});

module.exports = {
  register,
};
