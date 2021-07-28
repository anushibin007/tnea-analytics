import "../App.css";
import "../css/navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
	return (
		<React.Fragment>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand as={NavLink} to="/" exact>
						TNEA Analytics
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link as={NavLink} to="/" exact>
							Home
						</Nav.Link>
						<Nav.Link as={NavLink} to="/search/analytics">
							Analytics
						</Nav.Link>
						<Nav.Link as={NavLink} to="/search/cutoff">
							Cutoffs
						</Nav.Link>
						<Nav.Link as={NavLink} to="/search/ranking">
							Rankings
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
