const dotenv = require('dotenv');
const express = require('express');

const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');

// Load environment variables from .env file
dotenv.config();

// Set port
const PORT = process.env.PORT || 3000;

// Create Express server
const app = express();

app.use(express.json());

// API routes
app.get('/api', (req, res) => {
  // Return a JSON response
  res.json({
    message: 'Hello from server!',
  });
});

app.use('/api/auth/login', authRouter);
app.use('/api/users', userRouter);

// Start Express server
app.listen(3000, () => {
  console.log(`Help Desk app listening on port ${PORT}!`);
});
