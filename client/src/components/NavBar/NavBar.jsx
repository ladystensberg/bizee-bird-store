import React from 'react';
import './NavBar.css'
import {
	Link

} from 'react-router-dom';
import logo from '../../images/parrot.svg';

const NavBar = (props) => {

	if (props.user) {
		return (
				<nav className="NavBar">
					<div id="logoContainer">
						<Link to='/'><img src={logo} alt='logo' id='logo'/></Link>
					</div>
					<ul>
						<li><Link to='/profile'>Hi, {props.user.name}</Link>  ||  </li> 
						<li><a onClick={props.logout}>Logout</a>  ||  </li>
						<li><Link to='/store'>Store</Link></li>
					</ul>
				</nav>
		)
	} else {
		return (
				<nav className="NavBar">
					<div id="logoContainer">
						<Link to='/'><img src={logo} alt='logo' id='logo'/></Link>
					</div>
					<div id="name">
						<h2>BiZee Bird Store</h2>
					</div>
					<ul>
						<li><Link to='/login'>Login</Link></li>
						<li><Link to='/signup'>Sign Up</Link></li>
					</ul>
				</nav>
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