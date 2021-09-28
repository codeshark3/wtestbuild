import React from "react";
import { Navbar, Nav, Row, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="sm" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>WaTERTEST</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/tests">
                <Nav.Link>
                  <i className="fa fa-flask"></i>Tests
                </Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i>LogIn
                </Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
