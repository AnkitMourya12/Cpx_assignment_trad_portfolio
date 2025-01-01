const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  stockName: { type: String, required: true },
  ticker: { type: String, required: true },
  buyPrice: { type: Number, required: true },
  quantity: { type: Number, default: 1 },
});

module.exports = mongoose.model('Stock', stockSchema);
