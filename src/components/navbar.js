import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { gql } from 'graphql-tag';

function NavigationBar() {
  const userId = localStorage.getItem('userId');
  const [email, setEmail] = useState("");
  const [getCurrentUser, { data, error }] = useLazyQuery(gql`
  query GetUserById($userId: String!) {
    getUserById(userId: $userId) {
      id
      firstName
      lastName
      email
      profileImage
      userType
    }
  }
  `, {
    variables: { userId }
  });

  useEffect(() => {
    if(!localStorage.getItem("currentUser")) {
      getCurrentUser();
    } else{ 
      setEmail(JSON.parse(localStorage.getItem("currentUser")).email);
    }
  }, []);

  useEffect(() => {
    if (data && data.getUserById) {
      console.log(data);
      setEmail(data.getUserById.email);
      localStorage.setItem('currentUser', JSON.stringify(data.getUserById));
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
              Signed in as: <a href="#login">{email}</a>
            </Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;