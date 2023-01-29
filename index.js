const dotenv = require('dotenv');
const express = require('express');

// Load environment variables from .env file
dotenv.config();

// Create Express server
const app = express();

// API routes
app.get('/api', (req, res) => {
  // Return a JSON response
  res.json({
    message: 'Hello from server!',
  });
});

// Start Express server
app.listen(3000, () => {
  console.log('Help Desk app listening on port 3000!');
});
