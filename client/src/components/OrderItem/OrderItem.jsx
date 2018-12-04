import React from 'react';
import Moment from 'react-moment';

const OrderItem = ({order, handleOrderCancel}) => {
	return (
		<tr>
			<td>{order._id}</td>
			<td><Moment format="MM/DD/YYYY">{order.createdAt}</Moment></td>
			<td><strong>{order.total}</strong></td>
			<td><button onClick={() => handleOrderCancel(order._id)}>Cancel Order</button></td>
		</tr>
	)
}


export default OrderItem;