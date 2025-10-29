const mongoose = require('mongoose');

const PricingTierSchema = new mongoose.Schema({
  minQuantity: { type: Number, required: true },
  maxQuantity: { type: Number, required: true },
  price: { type: Number, required: true }
}, { _id: false });

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  pricingTiers: [PricingTierSchema],
  inventory: {
    total: { type: Number, required: true },
    available: { type: Number, required: true }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Product', ProductSchema);
