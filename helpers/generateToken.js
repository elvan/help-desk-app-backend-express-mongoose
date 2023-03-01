const jsonwebtoken = require('jsonwebtoken');

const generateToken = (id) => {
  return jsonwebtoken.sign({ id }, process.env.JWT_SECRET || 'secret', {
    expiresIn: '30d',
  });
};

module.exports = generateToken;
