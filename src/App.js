import React from "react";
import Header from "./components/Header";

import "./App.scss";
import Bio from "./components/Bio";
import Project from "./components/Project";
import Works from "./components/Works";

function App() {
	return (
		<div className="container">
			<Header />
			<Bio />
			<Project />
			<Works />
		</div>
	);
}

export default App;
