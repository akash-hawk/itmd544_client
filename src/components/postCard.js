import React from "react";
import {Link} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function PostCard({post}) {
  return(
    <Card className="mb-2">
      {/* <Card.Img variant="top" src="https://picsum.photos/seed/picsum/100/40" /> */}
      <Card.Body>
        <Card.Title>{post.title}</Card.Title>
        <Card.Text>
          {post.body}
        </Card.Text>
        <Link 
          type="button" 
          variant="dark btn btn-sm" to={`/posts/${post.id}`}>View Post</Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard;