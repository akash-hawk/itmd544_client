import { useQuery, gql } from '@apollo/client';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostCard from '../components/postCard';
import Layout from '../components/layout';
import { GET_ALL_POSTS } from '../controllers/queries/post';


function HomePage() {

  const { data, loading } = useQuery(GET_ALL_POSTS);

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className='mt-5'>
        <h2>All Posts</h2>
        <Row>
          {
            data.getPosts.length
              ? data.getPosts.map((post) => {
                return (
                  <Col key={post.id} xs={12} md={6} className="mb-2">
                    <PostCard post={post} />
                  </Col>
                )
              })
              : <div className='d-flex justify-content-center align-items-center' style={{ height: "20vh" }}>
                <h5 className='text-dark'>No Posts Avaialable !</h5>
              </div>
          }
        </Row>
      </div>
    </Layout>
  );
}

export default HomePage;
