import React from 'react';

const OrderItem = ({order, handleOrderCancel}) => (
	<div className="OrderItem">
		<h3>{order.lineItems.map(item => <div key={item._id}>{item._id}</div>)}</h3>
		<h4>{order.total}</h4>
		<button onClick={() => handleOrderCancel(order._id)}>Cancel Order</button>
	</div>
)


export default OrderItem;