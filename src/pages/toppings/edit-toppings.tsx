import AppLayout from '@/components/AppLayout';
import PageTitle from '@/components/PageTitle';
import React from 'react';
import { Row } from 'react-bootstrap';
import { useRecoilState } from 'recoil';
import { toppingsState } from 'state/states';
import styles from './edit-toppings.module.scss';
import ViewToppingsCard from '@/components/toppings/ViewToppingsCard';
import AddToppingsCard from '@/components/toppings/AddToppingsCard';
import axios from 'axios';

const EditToppings = () => {
  const [toppingsList, setToppingsList] = useRecoilState(toppingsState);

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
