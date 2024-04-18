import React from "react";

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
        <Button variant="primary btn-sm">View Post</Button>
      </Card.Body>
    </Card>
  )
}

export default PostCard;