const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineItemSchema = new Schema({
	product: { type: Schema.Types.ObjectId, ref: 'Product' },
	qty: Number
})

const orderSchema = new Schema({
	total: Number,
	products: [lineItemSchema]
})

module.exports = mongoose.model('Order', orderSchema);