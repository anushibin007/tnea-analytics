import React, { useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import CollegeSearch from "./components/CollegeSearch";
import CutoffRanking from "./components/CutoffRanking";
import Analytics from "./components/Analytics";
import Firebase from "./utils/Firebase";

function App() {
	useEffect(() => {
		Firebase.init();
	}, []);
	return (
		<Router>
			<Container>
				<Navigation />
				<Switch>
					<Route path="/" exact component={Welcome} />
					<Route path="/search/:searchType" exact component={CollegeSearch} />
					<Route path="/data/analytics/:coc" exact component={Analytics} />
					<Route path="/data/:searchType/:coc" exact component={CutoffRanking} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
