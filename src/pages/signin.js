import React from "react";

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SigninPage() {
  return (
    <Container className="mt-5">
      <h1>Hello,</h1>
      <h1>Let's get starrted</h1>
      <br />
      <Container className="p-5">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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