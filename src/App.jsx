import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CollegeSearch from "./components/CollegeSearch";
import Cutoffs from "./components/Cutoffs";

function App() {
	return (
		<Router>
			<Container>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Welcome} />
					<Route path="/cutoffs" exact component={CollegeSearch} />
					<Route path="/cutoffs/coc/:coc" exact component={Cutoffs} />
					<Route path="/cutoffs/con/:con" exact component={Cutoffs} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
