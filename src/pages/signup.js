import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { gql } from 'graphql-tag';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SignupPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [createUser] = useMutation(gql`
    mutation CreateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
      createUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
        success
        userId
        message
      }
    }
  `);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await createUser({
        variables: { firstName, lastName, email, password },
      });
      if (data.createUser.success) {
        localStorage.setItem('userId', data.createUser.userId);
        navigate("/login");
      } else {
        alert(data.createUser.message);
      }
    } catch (error) {
      console.error("Error creating user:", error);
      alert(error.message);
    }
  };

  return (
    <Container className="mt-5">
      <h1>Hello,</h1>
      <h1>Let's get familiar</h1>
      <br />
      <Container className="p-5">
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter First Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter Last Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password" />
          </Form.Group>
          <Button variant="dark" type="submit" className="w-100">
            Signup
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default SignupPage;
