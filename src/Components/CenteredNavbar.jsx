// src/Components/CenteredNavbar.jsx
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './CenteredNavbar.css';

function CenteredNavbar() {
  return (
    <Navbar expand="md" collapseOnSelect className="custom-navbar fixed-top" variant="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="nav-link-custom">Home</Nav.Link>
            <Nav.Link href="#about" className="nav-link-custom">About Me</Nav.Link>
            <Nav.Link href="#skills" className="nav-link-custom">Skills</Nav.Link>
            <Nav.Link href="#projects" className="nav-link-custom">Projects</Nav.Link>
            <Nav.Link href="#contact" className="nav-link-custom">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CenteredNavbar;
