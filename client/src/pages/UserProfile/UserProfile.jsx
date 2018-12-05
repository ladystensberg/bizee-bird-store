import React, {Component} from 'react';
import axios from 'axios';
import './UserProfile.css';
import OrderList from '../../components/OrderList/OrderList';
import UserInfo from '../../components/UserInfo/UserInfo';

class UserProfile extends Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: null
		}
		this.handleOrderCancel = this.handleOrderCancel.bind(this);
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

	handleOrderCancel(orderId) {
		axios.post('/api/orders/cancel', {
			order: orderId,
			user: this.props.user
		})
		.then(result => {
			this.componentDidMount()
		})
	}

	render() {
		if (!this.state.orders) {
			return (
				<h1>you have no orders, {this.props.user.name}</h1>
			)
		} else {
			return (
				<div className="UserProfile">
					<h1 className='Header'>User Profile</h1>
					<OrderList handleOrderCancel={this.handleOrderCancel} orders={this.state.orders}/>
					<UserInfo user={this.props.user}/>
				</div>
			)
		}
	}
}


export default UserProfile;