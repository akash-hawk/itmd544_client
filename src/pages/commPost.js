import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout';

function CommunityPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch post');
        }
        const postData = await response.json();
        setPost(postData);
        setLoading(false);
      } catch (error) {
        alert(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <p>No post found!</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className='mt-5'>
        <img src='https://picsum.photos/800/250' style={{ width: "100%" }} alt="Post cover" />
        <h2 className='mt-3'>{post.title}</h2>
        <p>{post.body}</p>
        <p>
          <b>Posted By: Community</b>
        </p>
      </div>
      <div className="jumbotron jumbotron-fluid mt-5 bg-light rounded p-4">
        <div className="container text-center">
          <h6 className="lead mb-0">Comments are turned off for community posts.</h6>
        </div>
      </div>
    </Layout>
  );
}

export default CommunityPost;
