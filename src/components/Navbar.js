import React from 'react';
import { Nav, Form, FormControl, Button, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function NavBar() {
  return (
    <div>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Recipe NFT</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#">Features</Nav.Link>
            <Nav.Link href="#">Pricing</Nav.Link>
            <Nav.Link href="#">FoodCommunities</Nav.Link>
            <Nav.Link href="#">Support</Nav.Link>
          </Nav>    
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 rounded-pill" />
            <Button variant="light" className="border">Login</Button> &nbsp;&nbsp;
            <Button variant="dark">Register</Button>
          </Form>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
