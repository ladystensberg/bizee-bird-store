import React from 'react';

const ShoppingCart = (props) => (
	<div className="ShoppingCart">
		<h1>This is the shopping cart</h1>
		{props.cartItems.map((product) => <p key={product._id}>{product.name}</p>)}
		{props.cartTotal}
	</div>
)
export default ShoppingCart;