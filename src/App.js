import React, { useState } from "react";
import {
	BrowserRouter as Router,
} from "react-router-dom";

import Header from "./components/Header";

import "./App.scss";
import Bio from "./components/Bio";
import Project from "./components/Project";
import Works from "./components/Works";
import Testimonal from "./components/Testimonal";
import Contact from "./components/Contact";
import Footer from "./Footer";
import Cursor from "./components/Cursor";

import { reviews } from './reviews';


function App() {

	

	const [index, setIndex] = useState(0);

	const slideRight = () => {
		setIndex((index + 1) % reviews.length);
		
	}

	const slideLeft = () => {
		const nextIndex = index - 1;
		nextIndex < 0 ? setIndex(reviews.length - 1) : setIndex(nextIndex)
	}

	const [menuToggle, setmenuToggle] = useState(false);
	const [navToggle, setnavToggle] = useState(true);

	const handleClick = () => {
		setmenuToggle(!menuToggle);
		setnavToggle(!navToggle);
	}

	const mediaQuery = window.matchMedia('(max-width: 767px)');
	let mobileView = mediaQuery.matches;

	const hideSlideNav = () => {
		if (mobileView) {
			setTimeout(() => {
				setmenuToggle(!menuToggle);
				setnavToggle(!navToggle);
			}, 1500);
		}
		
	}

	
	

	return (
		<Router>
			<div className="container">
				<Cursor />
				<Header hideSlideNav={hideSlideNav} handleClick={handleClick} menuToggle={menuToggle} navToggle={navToggle} />
				<Bio />
				<Project />
				<Works />
				<Testimonal reviews={reviews}  slideLeft={slideLeft} slideRight={slideRight} index={index} setIndex={setIndex} />
				<Contact />
				<Footer />
			</div>

		</Router>

	);
}

export default App;
