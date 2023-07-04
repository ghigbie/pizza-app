import { Card, Image, Button, Row, Col, ButtonGroup } from 'react-bootstrap';
import styles from './ViewToppingsCard.module.scss';
import { useRecoilState } from 'recoil';
import { toppingsState } from 'state/states';
import EditToppingCard from './ToppingItemCard';

interface ToppingsViewCardProps {
  toppings: Array<string>;
}

const ViewToppingsCard = ({ toppings }: ToppingsViewCardProps) => {
  const [toppingsList, setToppingsList] = useRecoilState(toppingsState);

  const removeTopping = (toppingName: string) => {
    const updatedList = toppingsList.filter(
      (topping) => topping !== toppingName
    );
    setToppingsList(updatedList);
  };

  const editTopping = (toppingName: string, updatedTopping: string) => {
    console.log('edit ', toppingName);
    const updatedList = toppingsList.map((topping) =>
      topping === toppingName ? updatedTopping : topping
    );
    setToppingsList(updatedList);
  };

  return (
    <Card className={`${styles.cardWrapper} p-4`} style={{ width: '36rem' }}>
      <Card.Body>
        <h5 className={styles.cardTitle}>Current Toppings</h5>
        {toppings?.length > 0 ? (
          <Row className={styles.toppingsContainer}>
            {toppings.map((topping, index) => (
              <Col className={styles.editToppingsWrapper}>
                <EditToppingCard
                  key={index}
                  topping={topping}
                  removeTopping={removeTopping}
                  editTopping={editTopping}
                />
              </Col>
            ))}
          </Row>
        ) : (
          <div className={`mt-2 card-text ${styles.noToppings}`}>
            No toppings selected
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ViewToppingsCard;
