import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './Store.css';

class Store extends Component {
	constructor(props) {
		super(props)
		this.state = {
			products: null,
			cartItems: [],
			cartTotal: 0
		}
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.handleCheckout = this.handleCheckout.bind(this);
	}

	componentDidMount() {
		axios.get('/api/products')
			.then(result => {
				this.setState({
					products: result.data
				})
			})
	}

	handleAddToCart(e) {
		var cartItemsCopy = Array.from(this.state.cartItems)
		var cartTotalCopy = this.state.cartTotal;
		let item = Object.assign({}, e);
		item.qty = 1;
		var foundItem = cartItemsCopy.findIndex(element => element.name === item.name);
		if (foundItem < 0) {
			cartItemsCopy.push(item);
		} else {
			cartItemsCopy[foundItem].qty += 1
		}
		this.setState({
			cartTotal: cartTotalCopy + e.price,
			cartItems: cartItemsCopy
		})
	}

	handleCheckout() {
		axios.post('/api/orders/checkout', {
			lineItems: this.state.cartItems,
			orderTotal: this.state.cartTotal,
			user: this.props.user
		})
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		if (this.state.products) {
			return (
				<div className="MiddleContent Store">
					<ShoppingCart user={this.props.user} handleCheckout={this.handleCheckout} cartItems={this.state.cartItems} cartTotal={this.state.cartTotal} />
					<ProductList handleAddToCart={this.handleAddToCart} products={this.state.products} />
				</div>
			)
		} else {
			return (
				<div className="MiddleContent">
					<h1>There are no products to show.</h1>
				</div>
			)
		}

	}
}

export default Store;