import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom";

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

function MyPostsPage() {
  const { id } = useParams(); 
  const { data, loading } = useQuery(GET_POSTS_BY_USER_ID, {
    variables: { postId: id },
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if(data && data.getPostById) {
    return(
      <Layout>
      <div className='mt-5'>
        <h2>{data.getPostById.title}</h2>
        <p>{data.getPostById.body}</p>
        <p><b>Posted By: </b>{data.getPostById.user.email}</p>
        <Link 
          type="button" 
          variant="dark btn btn-sm" to={`/post/edit/${data.getPostById.id}`}>Edit Post</Link>
      </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <p>No post found!</p>
    </Layout>
  );
}

export default MyPostsPage;
