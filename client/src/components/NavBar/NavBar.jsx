import React from 'react';
import './NavBar.css'
import {
	BrowserRouter as Router
} from 'react-router-dom';
import logo from '../../images/parrot.svg';

const NavBar = (props) => (
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

export default NavBar;