const mongoose = require('mongoose');

// Set strictQuery to true to prevent MongoDB from returning all documents
mongoose.set('strictQuery', true);

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/help-desk-app';

const mongooseConnect = async () => {
  try {
    // Connect to MongoDB
    const conn = await mongoose.connect(MONGO_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);

    // Exit process with failure
    process.exit(1);
  }
};

module.exports = mongooseConnect;
