import React from 'react';
import './ShoppingCart.css';
import CheckoutButton from '../CheckoutButton/CheckoutButton';

const ShoppingCart = (props) => {

	if (props.cartItems.length > 0) {
		return (
			<div className="ShoppingCart MiddleContent">
				<h1>Your Cart</h1>
				{props.cartItems.map((product) => <p key={product._id}>{product.name} / Qty: {product.qty}</p>)}
				<h4>Total: {Math.round(props.cartTotal * 100) / 100}</h4>
				<CheckoutButton user={props.user} handleCheckout={props.handleCheckout}/>
			</div>
		)
	} else if (props.orderPlaced) {
		return (
			<div className="ShoppingCart MiddleContent">
				<h1>Your Cart</h1>
				<h4>Thank you for your order.</h4>
				<p>Please visit your profile to view all orders placed.</p>
			</div>
		)
	} else {
		return (
			<div className="ShoppingCart MiddleContent">
				<h1>Your Cart</h1>
				<h4>You have no items in your shopping cart.</h4>
			</div>
		)
	}


}

export default ShoppingCart;