import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = (props) => (
	<div className="ShoppingCart MiddleContent">
		<h1>Your Cart</h1>
		{props.cartItems.map((product) => <p key={product._id}>{product.name} / qty: {product.qty}</p>)}
		<h4>Total: {Math.round(props.cartTotal * 100) / 100}</h4>
	</div>
)
export default ShoppingCart;