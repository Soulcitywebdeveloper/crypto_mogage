const mongoose = require('mongoose');

const MortgageSchema = new mongoose.Schema({
  borrower: { type: String, required: true }, // Could be Hedera AccountId
  amount: { type: Number, required: true },
  cryptoAsset: { type: String, required: true },
  collateral: { type: String, required: true }, // e.g. amount/type of crypto held in escrow
  state: { type: String, enum: ['pending', 'active', 'repaid', 'defaulted'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mortgage', MortgageSchema);
