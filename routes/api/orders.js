const express = require('express');
const router = express.Router();
const orders = require('../../controllers/ordersController');

router.post('/', orders.getOrders);
router.post('/checkout', orders.createOrder);
router.post('/cancel', orders.cancelOrder);

module.exports = router;