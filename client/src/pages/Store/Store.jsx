import React, { Component } from 'react';
import axios from 'axios';
import ProductList from '../../components/ProductList/ProductList';	

class Store extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			products: null
		}
	}

	componentDidMount() {
		axios.get('/api/products')
		.then(result => {
			this.setState({
				products: result.data
			})
		})
	}

	render() {
		if (this.state.products) {
			return(
				<ProductList products={this.state.products}/>
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