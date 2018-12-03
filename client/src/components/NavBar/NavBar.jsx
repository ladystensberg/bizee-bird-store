import React from 'react';
import './NavBar.css'
import {
	BrowserRouter as Router
} from 'react-router-dom';
import logo from '../../images/parrot.svg';

const NavBar = (props) => {

	if (props.user) {
		return (
			<Router>
				<nav className="NavBar">
					<div id="logoContainer">
						<a href='/'><img src={logo} alt='logo' id='logo'/></a>
					</div>
					<div id="name">
						<h2>BiZee Bird Store</h2>
					</div>
					<ul>
						<li><a href='/profile'>Hi, {props.user.name}</a></li>
						<li><a onClick={props.logout}>Logout</a></li>
					</ul>
				</nav>
			</Router>
		)
	} else {
		return (
			<Router>
				<nav className="NavBar">
					<div id="logoContainer">
						<a href='/'><img src={logo} alt='logo' id='logo'/></a>
					</div>
					<div id="name">
						<h2>BiZee Bird Store</h2>
					</div>
					<ul>
						<li><a href='/login'>Login</a></li>
						<li><a href='/signup'>Sign Up</a></li>
					</ul>
				</nav>
			</Router>
		)
	}


if (props.user) {
	return(
		<h1>Hello</h1>
	)
} else {
	return(
		<h1>Goodbye</h1>
	)
}



}



export default NavBar;