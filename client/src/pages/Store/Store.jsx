import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';	
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import './Store.css';

class Store extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			products: null,
			cartItems: [],
			cartTotal: 0
		}
		this.handleAddToCart = this.handleAddToCart.bind(this);
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
		var cartItemsCopy = Object.assign([], this.state.cartItems);
		var cartTotalCopy = Object.assign(this.state.cartTotal);
		var qtyOptions = document.getElementById(e._id);
		var qtyValue = parseInt(qtyOptions.options[qtyOptions.selectedIndex].value);
		let item = e;
		item.qty = qtyValue;
		var foundItem = cartItemsCopy.findIndex(element => element.name === item.name);
		if (foundItem < 0) {
			cartItemsCopy.push(item);
		} else {
			cartItemsCopy[foundItem].qty += item.qty;
		}
		this.setState({
			cartTotal: cartTotalCopy + e.price,
			cartItems: cartItemsCopy
		})
	}	

	render() {
		if (this.state.products) {
			return(
				<div className="MiddleContent Store">
					<ShoppingCart cartItems={this.state.cartItems} cartTotal={this.state.cartTotal}/>
					<ProductList handleAddToCart={this.handleAddToCart} products={this.state.products}/>
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