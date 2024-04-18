import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

function NavigationBar() {
  const [getCurrentUser, { data, error }] = useLazyQuery(gql`
    query GetCurrentUser {
      getCurrentUser {
        id
        email
        firstName
        lastName
        profileImage
        userType
      }
    }
  `);

  useEffect(() => {
    // getCurrentUser();
  }, []);

  useEffect(() => {
    if (data && data.getCurrentUser) {
      console.log(data);
      localStorage.setItem('currentUser', JSON.stringify(data.getCurrentUser));
    }
    if (error && error.message) {
      alert(error.message);
    }
  }, [data, error]);

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">Postit</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts" href="/posts">My Posts</Nav.Link>
            <Nav.Link as={Link} to="/posts/all" href="/posts/all">Community Posts</Nav.Link>
            <Nav.Link as={Link} to="/post/new" href="/post/new">Create Post</Nav.Link>
          </Nav>
          <Nav>
            <Navbar.Text>
              Signed in as: <a href="#login">Mark Otto</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;