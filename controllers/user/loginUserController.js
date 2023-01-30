const expressAsyncHandler = require('express-async-handler');

const loginUserController = expressAsyncHandler(async (req, res) => {
  const { email } = req.body;

  res.status(200).json({
    message: 'Login successful',
    data: {
      email,
    },
  });
});

module.exports = loginUserController;
