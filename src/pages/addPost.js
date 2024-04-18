import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../components/layout';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!, $userId: String!) {
    createPost(title: $title, body: $body, userId: $userId) {
      success
      userId
      message
    }
  }
`;

function AddPostForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createPost({ variables: { title, body, userId: '3719ebd2-2357-498a-96ac-2aeece1b4984' } });
      console.log(data);
      alert("Post added successfully!");
      setTitle('');
      setBody('');
      navigate("/posts");
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    }
  };

  return (
    <Layout>
      <h1>Got something to say?</h1>
      <br />
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="body">
        <Form.Label>Body</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="dark btn-md" className='w-100' type="submit" disabled={loading}>
        {loading ? 'Adding...' : '+ Add Post'}
      </Button>

      {error && <p className="text-danger mt-2">Error: {error.message}</p>}
      {data && (
        <p className="text-success mt-2">
          Post added successfully. Message: {data.createPost.message}
        </p>
      )}
    </Form>
    </Layout>
  );
}

export default AddPostForm;
