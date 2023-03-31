import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/react.svg'

const Header = () => {
  return (
    <header>
    <Navbar  expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className='fs-2 fw-bold'>Knowledge Cafe</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 fs-5"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
      
          </Nav>
          <div className="author">
              <img style={{width: '70px'}} src={logo} alt="" />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <hr />
    </header>
  );
};

export default Header;