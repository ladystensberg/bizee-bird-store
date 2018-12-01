import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './ProductList.css';


const ProductList = (props) => (
	<div className="ProductList MiddleContent">
		{props.products.map((product => <ProductItem handleAddToCart={props.handleAddToCart} key={product._id} product={product}/>))}
	</div>
)



export default ProductList;