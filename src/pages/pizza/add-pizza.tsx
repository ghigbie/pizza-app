import { useState, ChangeEvent, FormEvent } from 'react';
import { Card, Button, Row, Col, Form, Toast } from 'react-bootstrap';
import styles from './EditToppingsCard.module.scss';
import { useRecoilState } from 'recoil';
import { toppingsState } from 'state/states';

const EditToppingsCard = () => {
  const [toppingsList, setToppingsList] = useRecoilState(toppingsState);
  const [newTopping, setNewTopping] = useState('');
  const [error, setError] = useState('');

  const addNewTopping = (event: ChangeEvent<HTMLInputElement>) => {
    const newToppingValue = event.target.value.trim();
    setNewTopping(newToppingValue);
    setError('');
  };

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toppingsList.includes(newTopping)) {
      setError('Duplicate topping. Please enter a unique topping.');
    } else {
      const newList = toppingsList.concat(newTopping);
      setToppingsList(newList);
      setNewTopping('');
      setError('');
    }
  };

  const finalizeToppings = () => {
    console.log('finalizeToppings called');
  };

  return (
    <Card className={`${styles.cardWrapper} p-4`} style={{ width: '36rem' }}>
      <Card.Body>
        <h5 className={styles.cardTitle}>Add Toppings</h5>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleOnSubmit}>
              <Form.Group controlId="formPizzaName">
                <Form.Label>Add your new topping here!</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Add a topping"
                  value={newTopping}
                  onChange={addNewTopping}
                />
                <Toast
                  show={!!error}
                  onClose={() => setError('')}
                  className={`${styles.toast} ${styles.errorToast}`}
                >
                  <Toast.Header>
                    <strong className="mr-auto">Error</strong>
                  </Toast.Header>
                  <Toast.Body>{error}</Toast.Body>
                </Toast>
                <Button
                  variant="success"
                  type="submit"
                  className="btn-custom mt-2"
                >
                  Add Topping
                </Button>
              </Form.Group>
            </Form>
          </Col>
          <div className={`${styles.buttonContainer}`}>
            <Button
              variant="primary"
              onClick={() => {
                finalizeToppings();
              }}
            >
              Finalize Toppings
            </Button>
          </div>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EditToppingsCard;
