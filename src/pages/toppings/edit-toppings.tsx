import AppLayout from '@/components/AppLayout';
import PageTitle from '@/components/PageTitle';
import React, { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { initialDataLoad, pizzasState, toppingsState } from 'state/states';
import styles from './edit-toppings.module.scss';
import ViewToppingsCard from '@/components/toppings/ViewToppingsCard';
import AddToppingsCard from '@/components/toppings/AddToppingsCard';
import axios from 'axios';

const EditToppings = () => {
  const [pizzaList, setPizzaList] = useRecoilState(pizzasState);
  const [toppingsList, setToppingsList] = useRecoilState(toppingsState);
  const [hasInitialDataLoaded, setInitialDataLoaded] =
    useRecoilState(initialDataLoad);

  const fetchInitialAppData = async () => {
    if (!hasInitialDataLoaded) {
      const pizzaResponse = await axios.get('/api/v1/pizza/pizzas');
      const toppingsResponse = await axios.get('/api/v1/toppings/toppings');
      setPizzaList(pizzaResponse.data.pizzasList);
      setToppingsList(toppingsResponse.data.toppingsList);
      setInitialDataLoaded(true);
    }
  };

  useEffect(() => {
    fetchInitialAppData();
  }, []);

  return (
    <AppLayout>
      <section className="py-4">
        <Row className={`${styles.centeredContainer} mt-4`}>
          <PageTitle title="Welcome Owner! Change the Available Toppings" />
          <ViewToppingsCard toppings={toppingsList} />
        </Row>
      </section>
      <section className={styles.bottomSection}>
        <Row className={`${styles.centeredContainer} mt-1`}>
          <AddToppingsCard />
        </Row>
      </section>
    </AppLayout>
  );
};

export default EditToppings;
