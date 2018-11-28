const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statesList = [
	'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC',
	'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY',
	'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT',
	'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH',
	'OK', 'OR', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 
	'UT', 'VT', 'VA', 'VI', 'WA', 'WV', 'WI', 'WY'
]

const addressSchema = new Schema({
	address1: String,
	address2: String,
	city: String,
	state: {
		type: String,
		enum: [statesList]
	},
	zipCode: Number
})

const phoneNumberSchema = new Schema({
	phoneNumber: Number,
	phoneType: {
		type: Number,
		enum: ['mobile', 'home', 'work']
	}
})

const userSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
		maxlength: 99
	},
	phoneNumbers: [phoneNumberSchema],
	addresses: [addressSchema],
	orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]

}, {timestamps: true})

module.exports = mongoose.model('User', userSchema);