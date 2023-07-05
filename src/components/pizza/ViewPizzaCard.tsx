import { Pizza } from '@/interfaces/interfaces';
import { Card, Image, Button } from 'react-bootstrap';
import styles from './ViewPizzaCard.module.scss';
import { deletePizza } from '@/utils/deletePizza';
import { useRecoilState } from 'recoil';
import { pizzasState } from 'state/states';
import router from 'next/router';

interface PizzaCardProps {
  pizza: Pizza;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { id, name, size, toppings } = pizza;
  const [pizzaList, setPizzaList] = useRecoilState(pizzasState);

  const onClickDelete = () => {
    console.log('on click delete called');
    const pizzas = deletePizza(id, pizzaList);
    setPizzaList(pizzas);
  };

  return (
    <Card className={styles.cardWrapper} style={{ width: '28rem' }}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/pizza_toppings.png"
          alt="Demo pizza image"
          width={300}
          height={200}
          className={styles.centeredImage}
        />
      </div>
      <Card.Body>
        <div className={styles.cardTitle}>
          <h5 className={styles.cardTitle}>{name}</h5>
          <h6 className={`${styles.cardTitle} text-muted`}>
            Order Number: {id}
          </h6>
        </div>
        <div className="mt-2 card-text">Size: {size}</div>
        {toppings?.length > 0 ? (
          <div className="mt-2 card-text">
            Toppings:
            {toppings.map((topping, index) => (
              <span key={index}>
                {index !== 0 && index !== toppings.length && ', '}
                {` ${topping}`}
              </span>
            ))}
          </div>
        ) : (
          <div className="mt-2 card-text">Toppings: No toppings selected</div>
        )}
        <div className={`${styles.buttonContainer} mt-4`}>
          <a
            onClick={() => router.push(`/pizza/edit/${id}`)}
            className="btn btn-success"
          >
            Edit Pizza
          </a>
          <button
            className="btn btn-danger"
            onClick={() => {
              onClickDelete();
            }}
          >
            Delete
          </button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;
