const dotenv = require('dotenv');
const express = require('express');

// Load environment variables from .env file
dotenv.config();

// Load middleware
const { errorHandler } = require('./middleware/errorHandler');

// Load routers
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

// Set port
const PORT = process.env.PORT || 3000;

// Create Express server
const app = express();

// Middleware
app.use(errorHandler);

// Use JSON parser
app.use(express.json());

// Use URL encoded parser
app.use(express.urlencoded({ extended: true }));

// API routes
app.get('/api', (req, res) => {
  // Return a JSON response
  res.json({
    message: 'Hello from server!',
  });
});

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);

// Start Express server
app.listen(3000, () => {
  console.log(`Help Desk app listening on port ${PORT}!`);
});
