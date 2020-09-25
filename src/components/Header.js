import React from 'react';

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
							<a href="#">My works</a>
						</li>
						<li className="nav-link ">
							<a href="#">Contact me</a>
						</li>
						<li className="nav-link ">
							<a href="#">My blog </a>
						</li>
					</ul>
				</nav>
			</header>
		);
}

export default Header;
