import React, { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PostCard from '../components/postCard';
import Layout from '../components/layout';

function CommunityPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(6);
  useEffect(() => {
    getCommunityPosts();
  }, []);

  const getCommunityPosts = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const loadMorePosts = () => {
    setVisiblePosts(prevVisiblePosts => prevVisiblePosts + 6);
  };

  if (loading) {
    return (
      <Layout>
        <p>Loading</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='mt-5'>
        <h2>Community Posts</h2>
        <Row>
          {posts.slice(0, visiblePosts).map((post) => (
            <Col key={post.id} xs={12} md={6} className="mb-2">
              <PostCard post={post} commPost={true} />
            </Col>
          ))}
        </Row>
        {visiblePosts < posts.length && (
          <div className='text-center mt-4'>
            <Button variant='dark btn-sm' className='mb-5' onClick={loadMorePosts}>Load More</Button>
          </div>
        )}
        {posts.length === 0 && (
          <div className='d-flex justify-content-center align-items-center' style={{ height: "20vh" }}>
            <h5 className='text-dark'>No Community Posts Available!</h5>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default CommunityPage;
