import React from 'react';
import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/userCard';

const GET_USERS = gql`
  query GetUsers {
    getUsers {
      id
      firstName
      lastName
      email
      active
      profileImage
      userType
    }
  }
`;

function UsersPage() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (error) return <p>Error: {error.message}</p>;

  if (loading) return (
    <Layout>
      <p>Loading...</p>
    </Layout>
  );

  return (
    <Layout>
      <div className='mt-5'>
        <h2>All Users</h2>
        <Row>
          {data.getUsers.length ? (
            data.getUsers.map((user) => (
              <Col key={user.id} xs={6} md={4} className="mb-2">
                <UserCard user={user} />
              </Col>
            ))
          ) : (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "20vh" }}>
              <h5 className='text-dark'>No Users Available!</h5>
            </div>
          )}
        </Row>
      </div>
    </Layout>
  );
}

export default UsersPage;
