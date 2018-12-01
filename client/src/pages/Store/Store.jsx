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
		var cartItems = this.state.cartItems;
		var cartTotal = this.state.cartTotal;
		cartItems.push(e);
		this.setState({
			cartTotal: cartTotal + e.price,
			cartItems: cartItems
		}, () => console.log(this.state.cartTotal + " / " + this.state.cartItems))
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