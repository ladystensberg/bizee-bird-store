import React from 'react';
import './ProductItem.css';
import { PromiseProvider } from 'mongoose';
// import paymentService from '../../utilities/paymentService';

const ProductItem = ({product, handleAddToCart}) => (
	<div className="ProductItem">
		<h3>{product.brand}</h3>
		<h4>{product.name}</h4>
		<p>{product.price} / {product.unitPrice}</p>
		<p>Qty:
			<select id={product._id}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>
		</p>
		<button onClick={(e) => handleAddToCart(product)}>Add to Cart</button>
	</div>
)


export default ProductItem;