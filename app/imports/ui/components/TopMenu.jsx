import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Instagram, Facebook, Twitter, Youtube, Tiktok, Person, Search, Bag } from 'react-bootstrap-icons';

const TopMenu = () => (
  <div className="bg-image img-fluid w-100" id="image">
    <Container fluid className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-start">
            <Nav>
              <Nav.Link href="#">Links</Nav.Link>
              <Nav.Link href="#">Gift Cards</Nav.Link>
              <Nav.Link href="#">FAQ</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#" className="p-2"><Instagram /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Facebook /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Youtube /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Twitter /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Tiktok /></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>

    <Container fluid className="py-3">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link><h1><strong>GRYFFIN</strong></h1></Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse>
            <Nav.Link href="#" className="p-2"><strong>SHOWS</strong></Nav.Link>
            <Nav.Link href="#" className="p-2"><strong>MERCH</strong></Nav.Link>
            <Nav.Link href="#" className="p-2"><strong>MUSIC</strong></Nav.Link>
            <Nav.Link href="#" className="p-2"><strong>CONTACT</strong></Nav.Link>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#" className="p-2"><Person /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Search /></Nav.Link>
            <Nav.Link href="#" className="p-2"><Bag /></Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  </div>
);

export default TopMenu;
