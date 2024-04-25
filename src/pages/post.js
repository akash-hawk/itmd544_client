import React, { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';
import Layout from '../components/layout';
import Button from 'react-bootstrap/esm/Button';

const GET_POSTS_BY_USER_ID = gql`
  query GetPostById($postId: String!) {
    getPostById(postId: $postId) {
      id
      title
      body
      userId
      createdAt
      user {
        id
        email
        active
      }
    }
  }
`;

const GET_COMMENTS_BY_POST_ID = gql`
  query GetCommentsByPostId($postId: String!) {
    getCommentsByPostId(postId: $postId) {
      id
      postId
      body
      userId
      createdAt
    }
  }
`;

const CREATE_COMMENT = gql`
  mutation CreateComment($postId: String!, $body: String!) {
    createComment(postId: $postId, body: $body) {
      success
      message
      comment {
        id
        postId
        body
        userId
        createdAt
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
  const activeUserId = localStorage.getItem("userId");
  const isactiveUser = JSON.parse(localStorage.getItem("user")).active;
  const { id } = useParams();
  const { data: postData, loading: postLoading } = useQuery(GET_POSTS_BY_USER_ID, {
    variables: { postId: id },
  });

  const { data: commentData } = useQuery(GET_COMMENTS_BY_POST_ID, {
    variables: { postId: id },
  });

  const [commentBody, setCommentBody] = useState('');
  const [createComment] = useMutation(CREATE_COMMENT, {
    onCompleted: (data) => {
      if (data.createComment.success) {
        setCommentBody('');
        window.location.reload();
      } else {
        setCommentBody('');
        alert(data.createComment.message);
      }
    },
  });
  const [deletePost] = useMutation(DELETE_POST);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await deletePost({ variables: { postId: id } });
        window.location.href = "/myposts";
      } catch (error) {
        console.error('Error deleting post:', error);
        alert("Something went wrong!");
      }
    }
  };

  const handleCommentSubmit = () => {
    if (commentBody.trim() === '') {
      alert('Please enter a comment');
      return;
    }

    createComment({ variables: { postId: id, body: commentBody } });
  };

  if (postLoading) {
    return (
      <Layout>
        <p>Loading...</p>
      </Layout>
    )
  }

  if (postData && postData.getPostById) {
    return (
      <Layout>
        <div className='mt-5'>
          <img src='https://picsum.photos/800/250' style={{ width: "100%" }} />
          <h2 className='mt-3'>{postData.getPostById.title}</h2>
          <p>{postData.getPostById.body}</p>
          <p>
            <b>Posted By: </b>
            {postData.getPostById.user.email}
          </p>
          {
            postData.getPostById.user.id === activeUserId
              ? <><Button
                className='btn btn-sm btn-dark'
                as={Link}
                to={`/post/edit/${postData.getPostById.id}`}>
                Edit Post
              </Button>

                <Button
                  className='btn btn-sm btn-outline-danger'
                  variant='text'
                  style={{ marginLeft: "12px" }}
                  onClick={handleDelete}>
                  Delete Post
                </Button>
              </>
              : null
          }

          <hr />

          <div className='bg-light p-4'>
            <h3>Add New Comment</h3>
            {
              isactiveUser
                ? <><Form.Group className="mb-3" controlId="body">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    placeholder="Enter Comment"
                    value={commentBody}
                    onChange={(e) => setCommentBody(e.target.value)}
                    required
                  />
                </Form.Group>
                  <br />
                  <Button
                    onClick={handleCommentSubmit}
                    className='btn btn-sm btn-dark'>
                    Make Comment
                  </Button>
                </>
                : <p><b>Comments Disabled!</b> You have been blocked by the admin</p>
            }

          </div>
          <hr />
          <div class="mb-5">
            <h3>Comments</h3>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              {commentData && commentData.getCommentsByPostId.map(comment => (
                <ListGroup.Item key={comment.id}>{comment.body}</ListGroup.Item>
              ))}
            </ListGroup>

          </div>
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
