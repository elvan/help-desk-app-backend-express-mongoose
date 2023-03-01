const bcrypt = require('bcryptjs');
const expressAsyncHandler = require('express-async-handler');

const generateToken = require('../../helpers/generateToken');
const User = require('../../models/userModel');

const loginUserController = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  // Check user and passwords match
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid credentials');
  }
});

module.exports = loginUserController;
