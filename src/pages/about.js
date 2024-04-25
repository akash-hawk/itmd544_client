import React from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container>
      <h1 className="mt-4">Project Overview</h1>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>Project Name: Postit</Card.Title>
          <Card.Text>
            <Row>
              <Col>
                <h5>Frontend: React</h5>
                <h5>Backend: Node.js/Express</h5>
                <h5>API: GraphQL</h5>
                <h5>Database: MongoDB</h5>
                <h5>Tables: USER, POST, COMMENTS</h5>
              </Col>
              <Col>
                <p>3rd Party API: <a target='_blank' href="https://jsonplaceholder.typicode.com/posts">JSONPlaceholder</a></p>
              </Col>
            </Row>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>Security Measures</Card.Title>
          <Card.Text>
            <h5>Frontend</h5>
            <ListGroup>
              <ListGroupItem>Implemented Form Validations to ensure data integrity and prevent malicious input.</ListGroupItem>
              <ListGroupItem>Utilized Protected Routing to restrict unauthorized access to certain routes/pages within the application.</ListGroupItem>
            </ListGroup>

            <h5 className="mt-3">Backend</h5>
            <ListGroup>
              <ListGroupItem>Integrated JWT (JSON Web Token) for user authentication and authorization.</ListGroupItem>
              <ListGroupItem>Implemented Password Hashing to securely store user passwords in the database.</ListGroupItem>
              <ListGroupItem>Utilized Auth Middlewares to authenticate and authorize user requests to GraphQL endpoints.</ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>User Roles</Card.Title>
          <Card.Text>
            <h5>User</h5>
            <ListGroup>
              <ListGroupItem>Create/Delete/Update: Users can create, delete, and update their own posts.</ListGroupItem>
              <ListGroupItem>View all posts: Users can view all posts on the platform.</ListGroupItem>
              <ListGroupItem>Comment on posts: Users can comment on posts created by others.</ListGroupItem>
            </ListGroup>

            <h5 className="mt-3">Admin</h5>
            <ListGroup>
              <ListGroupItem>In addition to the User roles, Admins have the following capabilities:</ListGroupItem>
              <ListGroupItem>Block/Unblock user: Admins can block or unblock users, managing access to the platform.</ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>Learnings</Card.Title>
          <Card.Text>
            <h5>Frontend</h5>
            <ListGroup>
              <ListGroupItem>Protected Routing in React: Learned to implement protected routes in React using `react-router-dom`, ensuring that only authenticated users can access certain parts of the application.</ListGroupItem>
              <ListGroupItem>Fixing Redirection Issues: Gained experience in resolving redirection issues specific to SPA (Single Page Application) deployments on platforms like Netlify.</ListGroupItem>
            </ListGroup>

            <h5 className="mt-3">Backend</h5>
            <ListGroup>
              <ListGroupItem>Prisma Integration with MongoDB: Learned to integrate Prisma with MongoDB, enabling efficient database operations and data modeling.</ListGroupItem>
              <ListGroupItem>Auth Middleware with GraphQL: Implemented Auth Middleware to secure GraphQL endpoints, ensuring that only authenticated users can access certain queries and mutations.</ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>Additional Information</Card.Title>
          <Card.Text>
            <ListGroup>
              <ListGroupItem>The project utilizes the JSONPlaceholder API for fetching sample posts, demonstrating integration with external APIs.</ListGroupItem>
              <ListGroupItem>The MongoDB database schema includes tables for User, Post, and Comments to store relevant data.</ListGroupItem>
              <ListGroupItem>The project aims to provide a secure and user-friendly platform for blogging and community interaction, with a focus on data security and access control.</ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="my-4">
        <Card.Body>
          <Card.Title>Future Improvements</Card.Title>
          <Card.Text>
            <ListGroup>
              <ListGroupItem>Implement additional security measures such as rate limiting and input sanitization to further enhance application security.</ListGroupItem>
              <ListGroupItem>Enhance the user interface with features like pagination, search functionality, and user profiles.</ListGroupItem>
              <ListGroupItem>Implement real-time updates using technologies like WebSockets to provide a more dynamic user experience.</ListGroupItem>
              <ListGroupItem>Conduct regular security audits and performance optimizations to ensure the platform remains robust and scalable.</ListGroupItem>
            </ListGroup>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AboutPage;
