import React from 'react';
import OrderItem from '../../components/OrderItem/OrderItem';
import './OrderList.css';

const OrderList = ({orders, handleOrderCancel}) => {
	let displayData;
	if (orders.length !== 0) {
		displayData = <div className="OrderList">
					<h3>Order Information</h3>
					<table id="orders" align="center">
					<thead>
						<tr>
							<th>Order No.</th>
							<th>Order Date</th>
							<th>Order Total</th>
							<th></th>
						</tr>
					</thead>
					{orders.map((order => <OrderItem key={order._id} handleOrderCancel={handleOrderCancel} order={order} />))}
					</table>	
					</div>
					
	} else {
		displayData = <div className="OrderList"><h3>OrderInformation</h3><p>No orders to display.</p></div>
	}
	return displayData;

}


export default OrderList;