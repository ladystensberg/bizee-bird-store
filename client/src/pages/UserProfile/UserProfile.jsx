import React, {Component} from 'react';
import axios from 'axios';
import './UserProfile.css';
import OrderItem from '../../components/OrderItem/OrderItem';

class UserProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: null
		}
	}

	componentDidMount() {
		axios.post('/api/orders', {
			user: this.props.user
		})
		.then(result => {
			this.setState({
				orders: result.data.user.orders
			})
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	render() {
		if (!this.state.orders) {
			return (
				<h1>you have no orders, {this.props.user.name}</h1>
			)
		} else {
			return (
				<div className="UserProfile MiddleContent">
					<h1>{this.props.user.name}'s Orders: </h1>
					{this.state.orders.map((order => <OrderItem key={order._id} lineItems={order.lineItems} total={order.total} />))}
				</div>
			)
		}
	}
}


export default UserProfile;