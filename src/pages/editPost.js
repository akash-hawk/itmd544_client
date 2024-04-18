import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery, useMutation, gql } from '@apollo/client';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../components/layout';

const GET_POST_BY_ID = gql`
  query GetPostById($postId: String!) {
    getPostById(postId: $postId) {
      id
      title
      body
      userId
    }
  }
`;

const UPDATE_POST = gql`
  mutation UpdatePost($postId: String!, $title: String!, $body: String!) {
    updatePost(postId: $postId, title: $title, body: $body) {
      success
      message
    }
  }
`;

function EditPostPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { loading, error, data } = useQuery(GET_POST_BY_ID, {
    variables: { postId: id },
  });

  const [updatePost, { loading: updateLoading, error: updateError, data: updateData }] = useMutation(UPDATE_POST);

  useEffect(() => {
    if (data && data.getPostById) {
      const { title, body } = data.getPostById;
      setTitle(title);
      setBody(body);
    }
  }, [data]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await updatePost({ variables: { postId: id, title, body } });
      console.log(data);
      alert("Post Updated Successfully !");
      navigate('/posts/' + id);
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
    <div className='mt-5'>
      <h1>Quick, no one will know !</h1>
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

        <Button variant="primary" type="submit" disabled={updateLoading}>
          {updateLoading ? 'Updating...' : 'Update Post'}
        </Button>

        {updateError && <p className="text-danger mt-2">Error: {updateError.message}</p>}
        {updateData && (
          <p className="text-success mt-2">{updateData.updatePost.success && 'Post updated successfully!'}</p>
        )}
      </Form>
      </div>
    </Layout>
  );
}

export default EditPostPage;
