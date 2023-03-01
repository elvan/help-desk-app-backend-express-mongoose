// @ts-nocheck

const expressAsyncHandler = require('express-async-handler');

const currentUserController = expressAsyncHandler(async (req, res) => {
  const user = {
    id: req.user._id,
    email: req.user.email,
    name: req.user.name,
  };
  res.status(200).json(user);
});

module.exports = currentUserController;
