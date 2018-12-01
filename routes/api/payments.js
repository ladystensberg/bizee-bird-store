const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
var stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);

// charge amount can come from the client side and passed in as req.body.payment

router.post('/', (req, res, next) => {
	const token = req.body.token.id;
	stripe.charges.create({
		amount: 200, //this is in pennies - convert dollar amount to pennnies and pass in here
		currency: 'usd',
		source: token,
		description: 'test charge',
		capture: true
	}, function(err, charge) {
		if (err) {
			res.send(err);
		} else {
			res.send(charge);
		}
	});
})


module.exports = router;