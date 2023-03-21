import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function Navigation() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">ethan letourneau</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Home">Home</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                March Madness
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Show Stopper
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Great Outdoors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="About">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;
