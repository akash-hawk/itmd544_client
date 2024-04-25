import { gql } from '@apollo/client';

export const GET_ALL_POSTS = gql`
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

export const GET_POSTS_BY_USER_ID = gql`
  query GetPostByUserId($userId: String!) {
    getPostByUserId(userId: $userId) {
      id
      title
      body
      userId
      createdAt
      user {
        id
        email
      }
    }
  }
`;