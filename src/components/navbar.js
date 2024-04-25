import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';

function NavigationBar() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [active, setActive] = useState(true);
  const location = useLocation();

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem('user'));
    setEmail(localStorage.getItem("email"));
    setRole(user.userType);
    setActive(user.active);
  }, []);

  function signout() {
    localStorage.clear();
    window.location.href = "/signin"
  }

  // Function to determine if a link should be active
  const isActiveLink = (pathname) => {
    return location.pathname.startsWith(pathname);
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Postit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/myposts" active={isActiveLink("/myposts")}>My Posts</Nav.Link>
            <Nav.Link as={Link} to="/posts/all" active={isActiveLink("/posts/all")}>All Posts</Nav.Link>
            <Nav.Link as={Link} to="/community/all" active={isActiveLink("/community/all")}>Community</Nav.Link>
            {role === "admin" && <Nav.Link as={Link} to="/users" active={isActiveLink("/users")}>All Users</Nav.Link>}
          </Nav>
          <Nav>
            {active && <Button className='sm btn-light' as={Link} to="/post/new">Create Post</Button>}
            <Button variant='sm' className='btn-outline-danger' style={{marginLeft: "16px"}} onClick={signout}>Signout</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
