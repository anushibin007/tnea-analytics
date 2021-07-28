import "../App.css";
import "../css/navbar.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
	return (
		<React.Fragment>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand as={Link} to="/">
						TNEA Analytics
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/search/cutoff">
							Cut-off data
						</Nav.Link>
						<Nav.Link as={NavLink} to="/search/ranking">
							Ranking data
						</Nav.Link>
						<Nav.Link as={NavLink} to="/search/analytics" activeClassName="active">
							Analytics
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
