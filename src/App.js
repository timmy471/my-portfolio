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


import SaintMosesImage from './img/saintmoses.jpg';
import SumitRajImage from './img/sumitraj.jpg';
import FortuneImage from './img/fortune.jpg';


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

		const slideRight = ()=>{
		  setIndex((index + 1) % testimonial.length);
		}
	
		const slideLeft = ()=>{
		  const nextIndex = index - 1;
		  nextIndex < 0 ? setIndex(testimonial.length - 1) : setIndex(nextIndex)
		}
	return (
		<Router>
			<div className="container">
				<Header />
				<Bio />
				<Project />
				<Works />
				<Testimonal testimonial={testimonial} slideLeft={slideLeft} slideRight={slideRight} index={index} setIndex={setIndex}/>
				<Contact />
				<Footer />
			</div>

		</Router>

	);
}

export default App;
