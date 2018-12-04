const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
	product: String,
	qty: Number
})

const orderSchema = new Schema({
	total: Number,
	lineItems: [lineItemSchema]
}, {
	timestamps: true
})

module.exports = mongoose.model('Order', orderSchema);