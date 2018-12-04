import React from 'react';

const CheckoutButton = (props) => {
	if (props.user) {
		return (
			<button className="checkout" onClick={props.handleCheckout}>Checkout</button>
		)
	} else {
		return (
			<p>You must be logged in to checkout.</p>
		)
	}

}


export default CheckoutButton;