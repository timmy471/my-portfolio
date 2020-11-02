import React from 'react';
import { Link } from 'react-scroll';


const Header = () => {

	return (

		<header>
			<div className="logo">
				<img src={require("../img/logo.png")} alt="" />
			</div>
			<div className="menu-btn">
				<div className="menu-btn-line"></div>
				<div className="menu-btn-line"></div>
		 		<div className="menu-btn-line"></div>
			</div>
			<nav className="nav close-nav">
				<ul className="nav-list close-nav ">
					<li className="nav-link ">
						<Link
							to='works'
							spy='true'
							activeClass='active'
							smooth={true}
							duration={100}
							className='hire-btn'
						>
							My Works
						</Link>
					</li>
					<li className="nav-link ">
						<Link
							to='contact'
							spy='true'
							activeClass='active'
							smooth={true}
							duration={100}
						>
							Contact Me
						</Link>
					</li>
					<li className="nav-link ">
						<a href="http://coolpythoncodes.com/" target='blank'>My blog </a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
