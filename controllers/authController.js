const login = async (req, res) => {
  const { email, password } = req.body;

  res.status(201).json({
    email,
    password,
  });
};

module.exports = {
  login,
};
