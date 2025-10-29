const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderItemSchema = new Schema({
  product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true }, // Price per unit at order time
  tier: { type: String }, // Optional: track the tier/level if applicable
}, { _id: false });

const OrderSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [OrderItemSchema],
  status: {
    type: String,
    enum: ['pending', 'paid', 'fulfilled', 'cancelled', 'failed'],
    default: 'pending',
    required: true
  },
  paymentRef: { type: String }, // e.g. hashgraph tx, or fiat processor reference
  paymentProvider: { type: String }, // e.g. 'hedera', 'stripe', etc.
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Mongoose validation schema for order creation
const Joi = require('joi');

const orderValidationSchema = Joi.object({
  user: Joi.string().required(),
  items: Joi.array().items(
    Joi.object({
      product: Joi.string().required(),
      quantity: Joi.number().integer().min(1).required(),
      price: Joi.number().positive().required(),
      tier: Joi.string().optional()
    })
  ).min(1).required(),
  paymentRef: Joi.string().optional(),
  paymentProvider: Joi.string().optional(),
});

module.exports = {
  Order: mongoose.model('Order', OrderSchema),
  orderValidationSchema
};
