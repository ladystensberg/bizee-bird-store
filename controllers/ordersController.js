const User = require('../models/user');
const Order = require('../models/order');
const axios = require('axios');

module.exports = {
	getOrders: (req, res, next) => {
		let id = req.body.user._id
		User.findById(id).populate('orders').exec()
			.then(user => {
				res.status(200).json({user})
			})
	
	},
	createOrder: (req, res, next) => {
		let id = req.body.user._id;
		let items = req.body.lineItems;
		let orderTotal = req.body.orderTotal;
		let itemList = [];
		items.map(item => itemList.push({lineItem: {product: item.name, qty: item.qty}}));
		Order.create({lineItems: itemList, total: orderTotal}, (err, order) => {
			if (err) return handleError(err);
			User.findById(id, (err, user) => {
				user.orders.push(order);
				user.save((err) => {
					if (err) return next(err);
					res.send(order);
				})
			});
		});
	},
	cancelOrder: (req, res, next) => {
		let order = req.body.order;
		console.log(order);
		let id = req.body.user._id;
		User.findById(id, (err, user) => {
			let orders = user.orders;
			console.log(orders);
			var orderToRemove = orders.findIndex(element => element == order);
			console.log(orderToRemove);
			orders.splice(orderToRemove, 1);
			user.save(err => {
				res.send(user);
			})
		})
	}
}