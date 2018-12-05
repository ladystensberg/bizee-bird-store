import React from 'react';
import './ShoppingCart.css';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import plus from '../../images/plus.png';
import minus from '../../images/minus.png';
import trash from '../../images/trash.png';

const ShoppingCart = (props) => {

	if (props.cartItems.length > 0) {
		return (
			<div className="ShoppingCart MiddleContent">
				<h1>Your Cart</h1>
				<table id="cart-items" align="center">
					<tr>
						<th>Item</th>
						<th>Quantity</th>
						<th>Subtotal</th>
						<th></th>
					</tr>
					{props.cartItems.map((product) => <tr key={product._id}>
					<td>{product.name}</td>
					<td><img src={minus} alt='minus' onClick={(e) => props.handleQtyMinus(product)}/>{product.qty}<img src={plus} alt='plus' onClick={(e) => props.handleQtyPlus(product)}/></td>
					<td>{Math.round((product.price * product.qty) * 100) / 100}</td>
					<td><img src={trash} alt='delete' onClick={(e) => props.handleRemoveFromCart(product)}/></td>
					</tr>)}
				</table>
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