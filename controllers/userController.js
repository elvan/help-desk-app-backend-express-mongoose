const register = async (req, res) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    name,
    email,
    password,
  });
};

module.exports = {
  register,
};
