import React from 'react';
import './NavBar.css'
import {
	BrowserRouter as Router,
	Link
} from 'react-router-dom';
import App from '../../pages/App/App';
import logo from '../../images/parrot.svg';

const NavBar = (props) => (
	<Router>
		<nav className="NavBar">
			<div id="logoContainer">
				<img src={logo} alt='logo' id='logo'/>
			</div>
			<div id="name">
				<h2>BiZee Bird Store</h2>
			</div>
			<ul>
				<li><Link to='/' component={App}>Home</Link></li>
			</ul>
			
		</nav>
	</Router>
)

export default NavBar;