import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserCard from '../components/userCard';

function UsersPage() {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  return (
    <p>jhg</p>
    // <Layout>
    //   <div className='mt-5'>
    //     <h2>All Users</h2>
    //     <Row>
    //       {data.getUsers.length ? (
    //         data.getUsers.map((user) => (
    //           <Col key={user.id} xs={6} md={4} className="mb-2">
    //             <UserCard user={user} />
    //           </Col>
    //         ))
    //       ) : (
    //         <div className='d-flex justify-content-center align-items-center' style={{ height: "20vh" }}>
    //           <h5 className='text-dark'>No Users Avaialable !</h5>
    //         </div>
    //       )}
    //     </Row>
    //   </div>
    // </Layout>
  );
}

export default UsersPage;