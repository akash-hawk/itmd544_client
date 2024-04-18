import { useQuery, gql } from '@apollo/client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PostCard from '../components/postCard';
import NavigationBar from '../components/navbar';

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

  const {data, loading} = useQuery(query);

  if(loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <NavigationBar />
      <Container className="mt-5">
        <Row>
          {
            data.getPosts.length
            ? data.getPosts.map((post)=>{
              return (
                <Col xs={6} md={12} class="mb-2">
                  <PostCard key={post.id} post={post} />
                </Col>
              )
            })
            : <p>No Posts available!</p>
          } 
        </Row>
      </Container>
    </>
  );
}

export default HomePage;
