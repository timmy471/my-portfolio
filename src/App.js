import React from "react";
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


function App() {
	return (
		<Router>
			<div className="container">
				<Header />
				<Bio />
				<Project />
				<Works />
				<Testimonal />
				<Contact />
				<Footer />
			</div>

		</Router>

	);
}

export default App;
