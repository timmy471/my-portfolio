import React, { useState } from "react";
import {
	BrowserRouter as Router,
} from "react-router-dom";

import Header from "./pages/Header";

import "./App.scss";
import Bio from "./pages/Bio";
import Project from "./pages/Project";
import Works from "./pages/Works";
import Testimonal from "./pages/Testimonal";
import Contact from "./pages/Contact";
import Footer from "./Footer";


import SaintMosesImage from './img/saintmoses.jpg';
import SumitRajImage from './img/sumitraj.jpg';
import FortuneImage from './img/fortune.jpg';
import Cursor from "./pages/Cursor";


function App() {

	const testimonial = [
		{
			person: SaintMosesImage,
			name: 'Saintmoses Eromosele',
			text: 'Chijioke is incredible! He was one of our best interns.',
		},
		{
			person: SumitRajImage,
			name: 'Sumit Raj',
			text: 'Very understanding and easy to work with. Even with miles apart.'
		},
		{
			person: FortuneImage,
			name: 'Fortune Ikechi',
			text: 'In our Developer Student Club, He is always available to help.'
		}
	];


	const [index, setIndex] = useState(0);

	const slideRight = () => {
		setIndex((index + 1) % testimonial.length);
	}

	const slideLeft = () => {
		const nextIndex = index - 1;
		nextIndex < 0 ? setIndex(testimonial.length - 1) : setIndex(nextIndex)
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
				<Testimonal name={testimonial[index].name} imgPerson={testimonial[index].person} text={testimonial[index].text} slideLeft={slideLeft} slideRight={slideRight} index={index} setIndex={setIndex} />
				<Contact />
				<Footer />
			</div>

		</Router>

	);
}

export default App;
