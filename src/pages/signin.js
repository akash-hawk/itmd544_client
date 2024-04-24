import React, { useEffect, useState } from "react";
import { useLazyQuery } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { gql } from 'graphql-tag';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function SigninPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [getUserToken, { data, error }] = useLazyQuery(gql`
    query GetUserToken($email: String!, $password: String!) {
      getUserToken(email: $email, password: $password) {
        token
        success
        message
        user {
          id
          firstName
          lastName
          email
          active
          profileImage
          userType
        }
      }
    }
  `);

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    await getUserToken({ variables: { email, password } });
  };

  useEffect(()=>{
    if(data) {
      const {getUserToken} = data;
      console.log(getUserToken.user);
      if (getUserToken.success) {
        localStorage.setItem('token', getUserToken.token);
        localStorage.setItem('user', JSON.stringify(getUserToken.user));
        localStorage.setItem('email', getUserToken.user.email);
        localStorage.setItem('userId', getUserToken.user.id);
        navigate("/");
      } else {
        alert(getUserToken.message);
      }
    }
    if (error) {
      alert(error.message);
    }
  }, [data, error]);

  return (
    <Container className="mt-5">
      <h1>Hello,</h1>
      <h1>Let's get started</h1>
      <br />
      <Container className="p-5">
        <Form onSubmit={handleSubmit}>
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
            Signin
          </Button>
        </Form>
      </Container>
    </Container>
  )
}

export default SigninPage;
