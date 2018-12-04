import React from 'react';
import './UserProfile.css';

const UserProfile = ({user, logout}) => (
	<div className="UserProfile MiddleContent">
		<h1>Hello, {user.name}!</h1>
		<button onClick={logout}>Log Out!</button>
	</div>	
)


export default UserProfile;