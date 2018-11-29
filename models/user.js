const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

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
	name: {
		type: String,
		required: [true, 'You must enter a name'],
		minlength: [1, 'Name must be between 1 and 99 characters'],
		maxlength: [99, 'Name must be between 1 and 99 characters']
	},
	email: {
		type: String,
		required: [true, 'You must enter an email'],
		minlength: [5, 'Email must be between 5 and 99 characters'],
		maxlength: [99, 'Email must be between 5 and 99 characters']
	},
	password: {
		type: String,
		required: [true, 'You must enter a password'],
		minlength: [10, 'Password must be between 10 and 128 characters'],
		maxlength: [128, 'Password must be between 10 and 128 characters']
	},
	phoneNumbers: [phoneNumberSchema],
	addresses: [addressSchema],
	orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]

}, { timestamps: true })

userSchema.set('toObject', {
	transform: function (doc, ret, options) {
		let returnJson = {
			_id: ret._id,
			email: ret.email,
			name: ret.name
		}
		return returnJson;
	}
});

userSchema.methods.authenticated = function (password) {
	return bcrypt.compareSync(password, this.password);
};

userSchema.pre('save', function (next) {
	if (this.isNew) {
		let hash = bcrypt.hashSync(this.password, 12);
		this.password = hash;
	}
	next();
});

module.exports = mongoose.model('User', userSchema);