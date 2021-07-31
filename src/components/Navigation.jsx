import "../App.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function Navigation() {
	const [expanded, setExpanded] = useState(false);

	const navToggle = () => {
		setExpanded(expanded ? false : true);
	};

	const closeNav = () => {
		setExpanded(false);
	};

	return (
		<React.Fragment>
			<Navbar bg="primary" variant="dark" expand="lg" expanded={expanded}>
				<Container>
					<Navbar.Brand as={Link} to="/" onClick={closeNav}>
						🎓 TNEA Analytics
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" onClick={navToggle} />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={NavLink} to="/search/cutoff" onClick={closeNav}>
								Cut-off data
							</Nav.Link>
							<Nav.Link as={NavLink} to="/search/ranking" onClick={closeNav}>
								Ranking data
							</Nav.Link>
							<Nav.Link as={NavLink} to="/search/analytics" onClick={closeNav}>
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
