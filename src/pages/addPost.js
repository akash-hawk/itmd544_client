import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../components/layout';

const CREATE_POST = gql`
  mutation CreatePost($title: String!, $body: String!) {
    createPost(title: $title, body: $body) {
      success
      message
    }
  }
`;

function AddPostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createPost, { loading, error, data }] = useMutation(CREATE_POST);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await createPost({ variables: { title, body } });
      console.log(data);
      setTitle('');
      setBody('');
      window.location.href = '/myposts';
    } catch (error) {
      alert(error.message);
    }
  };

  function putText() {
    let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    setBody(body + " " + text);
  }

  return (
    <Layout>
      <div className='mt-5'>
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
      <Button onClick={putText} variant='sm text'>Generate Random Text</Button>

      <Button variant="dark btn-md" className='w-100 mt-5' type="submit" disabled={loading}>
        {loading ? 'Adding...' : '+ Add Post'}
      </Button>

      {error && <p className="text-danger mt-2">Error: {error.message}</p>}
      {data && (
        <p className="text-success mt-2">
          Post added successfully. Message: {data.createPost.message}
        </p>
      )}
    </Form>
    </div>
    </Layout>
  );
}

export default AddPostForm;
