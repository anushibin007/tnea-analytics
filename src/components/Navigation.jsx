import "../App.css";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

function Navigation() {
	return (
		<React.Fragment>
			<Navbar bg="primary" variant="dark" expand="lg">
				<Container>
					<Navbar.Brand as={Link} to="/">
						🎓 TNEA Analytics
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/search/cutoff">
								Cut-off data
							</Nav.Link>
							<Nav.Link as={NavLink} to="/search/ranking">
								Ranking data
							</Nav.Link>
							<Nav.Link as={NavLink} to="/search/analytics">
								Analytics
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</React.Fragment>
	);
}

export default Navigation;
