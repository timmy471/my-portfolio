import React from 'react';
import { Link } from 'react-scroll';


const Header = ({ handleClick, menuToggle, navToggle, hideSlideNav }) => {


	return (

		<header>
			<div className="logo">
				<img src={require("../img/logo.png")} alt="" />
			</div>
			<div className={`menu-btn ${menuToggle ? 'close' : null}` } onClick={handleClick}>
				<div className="menu-btn-line"></div>
				<div className="menu-btn-line"></div>
		 		<div className="menu-btn-line"></div>
			</div>
			<nav className={`nav ${navToggle ? 'close-nav' : null}`} >
				<ul className={`nav-list ${navToggle ? 'close-nav' : null}`} >
					<li className="nav-link ">
						<Link
							to='works'
							spy='true'
							activeClass='active'
							smooth={true}
							duration={100}
							className='hire-btn'
							onClick={hideSlideNav}
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
							onClick={hideSlideNav}
						>
							Contact Me
						</Link>
					</li>
					<li className="nav-link ">
						<a href="http://coolpythoncodes.com/" target='blank' onClick={hideSlideNav}>My blog </a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
