// create card token
// this is sent to back end
// back end creates the charge and sends to stripe for processing

require('dotenv').config()

var axios = require('axios');
var stripe = require('stripe')(process.env.REACT_APP_STRIPE_PK_TEST);

stripe.tokens.create({
	card: {
		"number": '4242424242424242',
		"exp_month": 12,
		"exp_year": 2019,
		"cvc": '123'
	}
}, function (err, token) {
	axios.post('/api/payments', token)
		.then(response => console.log(response))
		.catch(err => console.log(err));
});