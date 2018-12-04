import React from 'react';

const UserInfo = ({user}) => (
	<div className="UserInfo">
		<h3>User Information</h3>
		<p>{user.name}</p>
		<p>{user.email}</p>
	</div>
)


export default UserInfo;