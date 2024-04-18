import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostCard from '../components/postCard';
import Layout from '../components/layout';

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
  const userId = localStorage.getItem('userId');

  const { data, loading } = useQuery(GET_POSTS_BY_USER_ID, {
    variables: { userId },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Layout>
      <Row>
        {data.getPostByUserId.length ? (
          data.getPostByUserId.map((post) => (
            <Col key={post.id} xs={6} md={12} className="mb-2">
              <PostCard post={post} />
            </Col>
          ))
        ) : (
          <p>No Posts available!</p>
        )}
      </Row>
    </Layout>
  );
}

export default MyPostsPage;
