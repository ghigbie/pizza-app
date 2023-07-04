import { useState, useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { Row } from 'react-bootstrap';
import PageTitle from '@/components/PageTitle';
import ViewPizzaCard from '@/components/pizza/ViewPizzaCard';
import { useRecoilState } from 'recoil';
import { pizzasState } from 'state/states';
import { useRouter } from 'next/router';
import Loading from '@/components/Loading';
import { Pizza } from '@/interfaces/interfaces';
import styles from './id.module.scss';

const EditPizza = () => {
  const router = useRouter();
  const id = router.query.id;
  const [pizzas, pizzaState] = useRecoilState(pizzasState);
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  useEffect(() => {
    const fetchPizza = async () => {
      if (pizzas) {
        const pizza = pizzas.find((pizza) => pizza.id === id);
        setSelectedPizza(pizza || null);
      }
    };

    fetchPizza();
  }, [id, pizzas]);

  return (
    <>
      {selectedPizza !== null && pizzas ? (
        <AppLayout>
          <section className="py-5">
            <Row className={`${styles.centeredContainer} mt-4`}>
              <PageTitle title="Edit Your Pizza" />
              <ViewPizzaCard pizza={selectedPizza} />
            </Row>
          </section>
        </AppLayout>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default EditPizza;
