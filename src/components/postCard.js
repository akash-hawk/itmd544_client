import React from "react";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substr(0, maxLength) + "...";
}

function PostCard({ post, commPost = false }) {
  const truncatedTitle = truncateText(post.title, 50);
  const truncatedBody = truncateText(post.body, 150);

  return (
    <Card className="mb-2 d-flex flex-column h-100">
      <Card.Body>
        <Card.Title>{truncatedTitle}</Card.Title>
        <Card.Text>
          {truncatedBody}
        </Card.Text>
        <p className="text-secondary">Posted By: {post?.user?.email || "Community"}</p>
        <Link
          type="button"
          variant="dark btn btn-sm"
          to={commPost ? `/community/${post.id}` : `/posts/${post.id}`}
        >
          View Post
        </Link>
      </Card.Body>
    </Card>
  )
}

export default PostCard;
