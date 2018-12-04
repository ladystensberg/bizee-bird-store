import React from 'react';
import './ProductItem.css';

const ProductItem = ({product, handleAddToCart}) => (
	<div className="ProductItem">
		<h3>{product.brand}</h3>
		<h4>{product.name}</h4>
		<p>{product.price} / {product.unitPrice}</p>
		<button onClick={(e) => handleAddToCart(product)}>Add to Cart</button>
	</div>
)


export default ProductItem;