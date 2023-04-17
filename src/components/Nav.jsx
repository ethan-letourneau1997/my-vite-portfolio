import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-scroll";

function Navigation() {
  return (
    <Navbar className="navigation" bg="dark" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">ethan letourneau</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </Nav.Link>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <Link to="march-madness" smooth={true} duration={500}>
                  March Madness
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="cinegraph" smooth={true} duration={500}>
                  Cinegraph
                </Link>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
