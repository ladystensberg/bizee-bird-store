const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productCategories = [
	'food', 'toys', 'merchandise'
]

const produtSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	category: {
		type: String,
		enum: [productCategories],
		required: true
	},
	description: String,
	price: {
		type: Number,
		required: true
	},
	sku: Number,
	photo: String
})

module.exports = mongoose.model('Product', produtSchema);