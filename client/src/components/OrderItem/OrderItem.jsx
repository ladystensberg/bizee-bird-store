import React from 'react';

const OrderItem = ({lineItems, total}) => (
	<div className="OrderItem">
		<h3>{lineItems.map(item => <p>{item._id}</p>)}</h3>
		<h4>{total}</h4>
		<button>Cancel Order</button>
	</div>
)


export default OrderItem;