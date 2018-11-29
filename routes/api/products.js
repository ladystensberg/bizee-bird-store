const express = require('express');
const router = express.Router();
const Product = require('../../models/product');

router.get('/', (req, res, next) => {
	Product.find({})
		.then(products => { res.json(products) })
})

router.get('/:id', (req, res, next) => {
	Product.findById(req.params.id)
		.then(product => { res.json(product) })
})

module.exports = router;