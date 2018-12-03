import React from 'react';
import './UserProfile.css';

const UserProfile = (props) => {
	if (props.user) {
		return (
			<h1>Hello, {props.user.name}</h1>
		)
	} else {
		return (
			<h1>No user found</h1>
		)
	}

}
	// <div className="MiddleContent">
	// 	<h1> THIS IS THE PROFILE </h1>
	// 	<h1>Hello, {props.user.name}!</h1>
	// 	<button onClick={props.logout}>Log Out!</button>
	// </div>

export default UserProfile;