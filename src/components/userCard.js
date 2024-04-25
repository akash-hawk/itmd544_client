import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useMutation, gql } from '@apollo/client';

const CHANGE_USER_ACTIVE_STATUS = gql`
  mutation ChangeUserActiveStatus($userId: String!) {
    changeUserActiveStatus(userId: $userId) {
      message
      success
    }
  }
`;

function UserCard({ user }) {
  const activeUserId = localStorage.getItem("userId");
  const [changeUserActiveStatus, { loading }] = useMutation(CHANGE_USER_ACTIVE_STATUS);

  const handleBlock = async () => {
    try {
      const { data } = await changeUserActiveStatus({ variables: { userId: user.id } });
      if (data.changeUserActiveStatus.success) {
        // Reload the page if successful
        window.location.reload();
      } else {
        // Display error message if not successful
        alert(data.changeUserActiveStatus.message);
      }
    } catch (error) {
      // Display error message if mutation fails
      alert(error.message);
    }
  };

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
          {
            activeUserId != user.id
            ?          <div>
            {user.active ? (
              <Button
                onClick={handleBlock}
                variant="outline-danger"
                size="sm"
                disabled={loading}
              >
                Block
              </Button>
            ) : (
              <Button
                onClick={handleBlock}
                variant="danger"
                size="sm"
                disabled={loading}
              >
                Unblock
              </Button>
            )}
          </div>
            : null
          }
        </div>
      </Card.Body>
    </Card>
  )
}

export default UserCard;
