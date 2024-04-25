import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';

function NavigationBar() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    setEmail(localStorage.getItem("email"));
  }, []);

  function signout() {
    localStorage.clear();
    window.location.href = "/signin"
  }

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Postit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts">My Posts</Nav.Link>
            <Nav.Link as={Link} to="/posts/all">All Posts</Nav.Link>
            <Nav.Link as={Link} to="/community/all">Community</Nav.Link>
            <Nav.Link as={Link} to="/users">All Users</Nav.Link>
            <Nav.Link as={Link} to="/post/new">Create Post</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              Hi, {email}
            </Navbar.Text>
            <Button variant='btn-sm' onClick={signout}>Signout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;