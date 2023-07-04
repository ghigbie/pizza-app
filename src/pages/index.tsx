import { useEffect } from 'react';
import AppLayout from '@/components/AppLayout';
import { Row, Col, Button, Nav } from 'react-bootstrap';
import PageTitle from '@/components/PageTitle';
import ViewPizzaCard from '@/components/pizza/ViewPizzaCard';
import { useRecoilState } from 'recoil';
import { initialDataLoad, pizzasState, toppingsState } from 'state/states';
import styles from './index.module.scss';
import router from 'next/router';
import axios from 'axios';

const Index = () => {
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
      <section className="py-5">
        <PageTitle
          title={`Welcome Chef! ${
            pizzaList.length > 0 ? 'Your pizzas are below:' : ''
          }`}
        />
        <Row>
          <Col className={styles.centeredContainer} md={12}>
            <div className={`${styles.buttonContainer}`}>
              <Nav.Link onClick={() => router.push('/pizza/add-pizza')}>
                <Button variant="primary">Add a New Pizza Masterpiece!</Button>
              </Nav.Link>
            </div>
            {pizzaList.map((pizza) => (
              <ViewPizzaCard pizza={pizza} key={pizza.id} />
            ))}
          </Col>
        </Row>
      </section>
    </AppLayout>
  );
};

export default Index;
