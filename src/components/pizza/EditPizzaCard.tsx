import { Pizza } from '@/interfaces/interfaces';
import { Card, Image, Button } from 'react-bootstrap';
import styles from './ViewPizzaCard.module.scss';
import router from 'next/router';

interface PizzaCardProps {
  pizza: Pizza;
}

const EditPizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => {
  const { id, name, size, toppings } = pizza;

  const updatePizza = () => {};

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
          <h6 className={`${styles.cardTitle} text-muted`}>{id}</h6>
        </div>
        <div className="mt-2 card-text">Size: {size}</div>
        {toppings?.length > 0 && (
          <div className="mt-2 card-text">
            Toppings:
            {toppings.map((topping, index) => (
              <span key={index}>
                {index !== 0 && index !== toppings.length && ', '}
                {` ${topping}`}
              </span>
            ))}
          </div>
        )}
        <div className={`${styles.buttonContainer} mt-4`}>
          <a
            onClick={() => router.push(`/pizza/${id}`)}
            className="btn btn-success"
          >
            Edit Pizza
          </a>
          <a onClick={() => router.push('/')} className="btn btn-danger">
            Delete
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EditPizzaCard;
