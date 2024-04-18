import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostCard from '../components/postCard';
import Layout from '../components/layout';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GET_POSTS_BY_USER_ID = gql`
  query GetPostByUserId($userId: String!) {
    getPostByUserId(userId: $userId) {
      id
      title
      body
      userId
      createdAt
    }
  }
`;

function MyPostsPage() {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');

  useEffect(() => {
    if (!userId) {
      navigate("/signin");
    }
  }, [])

  const { data, loading } = useQuery(GET_POSTS_BY_USER_ID, {
    variables: { userId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <div className='mt-5'>
        <h2>My Posts</h2>
        <Row>
          {data.getPostByUserId.length ? (
            data.getPostByUserId.map((post) => (
              <Col key={post.id} xs={12} md={6} className="mb-2">
                <PostCard post={post} />
              </Col>
            ))
          ) : (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "20vh" }}>
              <h5 className='text-dark'>No Posts Avaialable !</h5>
            </div>
          )}
        </Row>
      </div>
    </Layout>
  );
}

export default MyPostsPage;
