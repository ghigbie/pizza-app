import { Card, Image, Button, ButtonGroup } from 'react-bootstrap';
import { useState } from 'react';
import styles from './ViewToppingsCard.module.scss';

interface EditToppingCardProps {
  topping: string;
  removeTopping: (toppingName: string) => void;
  editTopping: (toppingName: string, updatedTopping: string) => void;
}

const EditToppingCard = ({
  topping,
  removeTopping,
  editTopping,
}: EditToppingCardProps) => {
  const [editing, setEditing] = useState(false);
  const [updatedTopping, setUpdatedTopping] = useState(topping);

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleCancelClick = () => {
    setEditing(false);
    setUpdatedTopping(topping);
  };

  const handleSaveClick = () => {
    editTopping(topping, updatedTopping);
    setEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTopping(event.target.value);
  };

  return (
    <Card className={styles.cardContainer}>
      <Card.Body className="d-flex flex-column align-items-center">
        <Image
          src="/images/pizza_toppings.png"
          alt={topping}
          thumbnail
          style={{ width: '100px', height: '100px' }}
        />
        <div className={styles.buttonContainer}>
          <div className={`float-left ${styles.toppingText}`}>
            {editing ? (
              <div className="mt-2">
                <input
                  type="text"
                  value={updatedTopping}
                  onChange={handleChange}
                />
              </div>
            ) : (
              <div className="mt-2">{topping}</div>
            )}
            <ButtonGroup>
              {editing ? (
                <>
                  <Button
                    variant="success"
                    className={`btn ${styles.smallButton}`}
                    onClick={handleSaveClick}
                  >
                    Save
                  </Button>
                  <Button
                    variant="danger"
                    className={`btn ${styles.smallButton}`}
                    onClick={handleCancelClick}
                  >
                    Cancel
                  </Button>
                </>
              ) : (
                <Button
                  variant="success"
                  className={`btn ${styles.smallButton}`}
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              )}
              <Button
                variant="danger"
                className={`btn ${styles.smallButton}`}
                onClick={() => {
                  removeTopping(topping);
                }}
              >
                Delete
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EditToppingCard;
