import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Layout from '../components/layout';

const GET_POSTS_BY_USER_ID = gql`
  query GetPostById($postId: String!) {
    getPostById(postId: $postId) {
      id
      title
      body
      userId
      createdAt
      user {
        firstName
        email
        lastName
      }
    }
  }
`;

const DELETE_POST = gql`
  mutation DeletePost($postId: String!) {
    deletePost(postId: $postId) {
      message
      success
    }
  }
`;

function MyPostsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, loading } = useQuery(GET_POSTS_BY_USER_ID, {
    variables: { postId: id },
  });

  const [deletePost] = useMutation(DELETE_POST);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        console.log("Yes");
        await deletePost({ variables: { postId: id } });
        navigate("/posts");
      } catch (error) {
        console.log("No");
        console.error('Error deleting post:', error);
        alert("Something went wrong!");
      }
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (data && data.getPostById) {
    return (
      <Layout>
        <div className='mt-5'>
          <h2>{data.getPostById.title}</h2>
          <p>{data.getPostById.body}</p>
          <p>
            <b>Posted By: </b>
            {data.getPostById.user.email}
          </p>
          <Link
            type='button'
            variant='dark btn btn-sm'
            to={`/post/edit/${data.getPostById.id}`}
          >
            Edit Post
          </Link>
          <button className='btn btn-sm btn-danger ml-2' onClick={handleDelete}>
            Delete Post
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <p>No post found!</p>
    </Layout>
  );
}

export default MyPostsPage;
