import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function UserCard({ user }) {



  const handleBlock = () => {

  }

  return (
    <Card className="mb-2 d-flex flex-column h-100">
      <Card.Body>
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <Card.Subtitle>{`${user.firstName} ${user.lastName}`}</Card.Subtitle>
            <Card.Text>
              {user.email}
            </Card.Text>
          </div>
          <div>
            <Button
              onClick={handleBlock}
              variant="dark btn btn-sm"
            >
              Block
            </Button>
          </div>
        </div>


      </Card.Body>
    </Card>
  )
}

export default UserCard;
