const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const transactionRoutes = require('./routes/transactions');
const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/mern-challenge', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use('/transactions', transactionRoutes);

// Initialize database with seed data
app.get('/initialize', async (req, res) => {
  try {
    const { data } = await axios.get('https://s3.amazonaws.com/roxiler.com/product_transaction.json');
    await Transaction.insertMany(data);
    res.send('Database initialized');
  } catch (error) {
    res.status(500).send('Error initializing database');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
