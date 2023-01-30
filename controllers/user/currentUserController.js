const expressAsyncHandler = require('express-async-handler');

const currentUserController = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: 'Current user',
    data: {},
  });
});

module.exports = currentUserController;
