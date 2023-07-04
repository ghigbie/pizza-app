import { SetStateAction, useEffect, useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import AppLayout from '@/components/AppLayout';
import PageTitle from '@/components/PageTitle';
import FormItemWrapper from '@/components/FormItemWrapper';
import { useRecoilState } from 'recoil';
import { pizzasState, toppingsState } from 'state/states';
import { PizzaSize } from '@/enums/enums';
import { useRouter } from 'next/router';
import { Pizza } from '@/interfaces/interfaces';

const EditPizza = () => {
  const router = useRouter();
  const { id } = router.query;
  const [pizzas, setPizzasState] = useRecoilState(pizzasState);
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);
  const [possibleToppings] = useRecoilState(toppingsState);
  const [selectedSize, setSelectedSize] = useState<PizzaSize>(PizzaSize.S);
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [pizzaName, setPizzaName] = useState('');

  const fetchPizza = async () => {
    if (pizzas) {
      const pizza = pizzas.find((pizza) => pizza.id === id);
      setSelectedPizza(pizza || null);
    }
  };

  useEffect(() => {
    fetchPizza();
  }, [id, pizzas]);

  useEffect(() => {
    if (selectedPizza) {
      setPizzaName(selectedPizza.name);
      setSelectedSize(selectedPizza.size);
      setSelectedToppings(selectedPizza.toppings);
    }
  }, [selectedPizza]);

  const handleSizeChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSelectedSize(event.target.value as PizzaSize);
  };

  const handleToppingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedToppings((prevSelectedToppings) => {
      if (checked) {
        return [...prevSelectedToppings, value];
      } else {
        return prevSelectedToppings.filter((topping) => topping !== value);
      }
    });
  };

  const handlePizzaNameChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPizzaName(event.target.value);
  };

  const updatePizza = () => {
    const updatedPizzas = pizzas.map((pizza) =>
      pizza.id === selectedPizza?.id
        ? {
            ...pizza,
            name: pizzaName,
            toppings: selectedToppings,
            size: selectedSize,
          }
        : pizza
    );

    setPizzasState(updatedPizzas);
    router.push('/');
  };

  return (
    <AppLayout>
      <section className="py-5">
        <PageTitle title="Modify your Pizza Masterpiece!" />
        <Row>
          <Col md={12}>
            <Form>
              <FormItemWrapper>
                <Form.Group controlId="formPizzaName">
                  <Form.Label>Change your pizza name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder={selectedPizza?.name}
                    value={pizzaName}
                    onChange={handlePizzaNameChange}
                  />
                </Form.Group>
              </FormItemWrapper>
              <FormItemWrapper>
                <Form.Group controlId="formPizzaSize">
                  <Form.Label>Select Pizza Size:</Form.Label>
                  <Form.Control
                    as="select"
                    value={selectedSize}
                    onChange={handleSizeChange}
                  >
                    <option value="">Choose...</option>
                    <option value={PizzaSize.S}>{PizzaSize.S}</option>
                    <option value={PizzaSize.M}>{PizzaSize.M}</option>
                    <option value={PizzaSize.L}>{PizzaSize.L}</option>
                    <option value={PizzaSize.X}>{PizzaSize.X}</option>
                  </Form.Control>
                </Form.Group>
              </FormItemWrapper>
              <FormItemWrapper>
                <Form.Group controlId="formPizzaToppings">
                  <Form.Label>Select Toppings:</Form.Label>
                  {possibleToppings.map((topping) => (
                    <Form.Check
                      key={topping}
                      type="checkbox"
                      label={topping}
                      value={topping}
                      checked={selectedToppings.includes(topping)}
                      onChange={handleToppingsChange}
                    />
                  ))}
                </Form.Group>
              </FormItemWrapper>
              <FormItemWrapper>
                <Button
                  variant="primary"
                  type="button"
                  onClick={() => {
                    updatePizza();
                  }}
                  className="btn-custom"
                >
                  Submit
                </Button>
              </FormItemWrapper>
            </Form>
          </Col>
        </Row>
      </section>
    </AppLayout>
  );
};

export default EditPizza;
