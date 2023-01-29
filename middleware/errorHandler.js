const errorHandler = (error, req, res, next) => {
  const statusCode = res.statusCode < 400 ? 500 : res.statusCode;
  console.log('error handler');

  return res.status(statusCode).json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? null : error.stack,
  });
};

module.exports = {
  errorHandler,
};
