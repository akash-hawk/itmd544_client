import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostCard from '../components/postCard';
import Layout from '../components/layout';

const query = gql`
  query Query {
    getPosts {
      id
      title
      body
      userId
      user {
        id
        email
      }
      createdAt
    }
  }
`

function HomePage() {

  const { data, loading } = useQuery(query);

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <Layout>
      <Row>
        {
          data.getPosts.length
            ? data.getPosts.map((post) => {
              return (
                <Col key={post.id} xs={6} md={12} className="mb-2">
                  <PostCard post={post} />
                </Col>
              )
            })
            : <p>No Posts available!</p>
        }
      </Row>
    </Layout>
  );
}

export default HomePage;
