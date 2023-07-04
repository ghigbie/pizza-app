import { useState, ChangeEvent, FormEvent } from 'react';
import { Card, Button, Row, Col, Form, Alert } from 'react-bootstrap';
import styles from './AddToppingsCard.module.scss';
import FormItemWrapper from '../FormItemWrapper';
import { useRecoilState } from 'recoil';
import { toppingsState } from 'state/states';

const AddToppingsCard = () => {
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

  return (
    <Card className={`${styles.cardWrapper} p-4`} style={{ width: '36rem' }}>
      <Card.Body>
        <h5 className={styles.cardTitle}>Add Toppings</h5>
        <Row>
          <Col md={12}>
            <Form onSubmit={handleOnSubmit}>
              <FormItemWrapper>
                <Form.Group controlId="formPizzaName">
                  <Form.Label>Add your new topping here!</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Add a topping"
                    value={newTopping}
                    onChange={addNewTopping}
                  />
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Button
                    variant="success"
                    type="submit"
                    className="btn-custom mt-2"
                  >
                    Add Topping
                  </Button>
                </Form.Group>
              </FormItemWrapper>
            </Form>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default AddToppingsCard;
