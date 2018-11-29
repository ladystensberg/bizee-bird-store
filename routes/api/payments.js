const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
var stripe = require('stripe')(process.env.STRIPE_SECRET_TEST_KEY);

router.post('/', (req, res, next) => {
	const token = req.body.token.id;
	stripe.charges.create({
		amount: 200,
		currency: 'usd',
		source: token,
		description: 'test charge'
	}, function(err, charge) {
		if (err) {
			res.send(err);
		} else {
			res.send(charge);
		}
	});
})


module.exports = router;