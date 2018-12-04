const express = require('express');
const router = express.Router();
require('dotenv').config();
const axios = require('axios');
const User = require('../../models/user');
const Order = require('../../models/order');

// 1. send order total and items, and items qty to checkout
// 2. order is created

router.post('/', (req, res, next) => {
	let id = req.body.user._id;
	let items = req.body.lineItems;
	let orderTotal = req.body.orderTotal;
	let itemList = [];
	items.map(item => itemList.push({lineItem: {product: item._id, qty: item.qty}}));
	Order.create({lineItems: itemList, total: orderTotal}, function (err, order) {
		if (err) return handleError(err);
		User.findById(id, function(err, user) {
			user.orders.push(order);
			user.save(function(err) {
				if (err) return next(err);
				console.log(user.orders);
			})
		});
	});

})


module.exports = router;