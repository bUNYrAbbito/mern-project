const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  // Define your schema fields here
  title: String,
  description: String,
  price: Number,
  dateOfSale: Date,
  category: String,
  sold: Boolean
});

module.exports = mongoose.model('Transaction', transactionSchema);
