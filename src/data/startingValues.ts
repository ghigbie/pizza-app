import { Pizza } from '@/interfaces/interfaces';
import { PizzaSauce, PizzaSize } from '@/enums/enums';

export const stratingToppings = [
  'Chicken',
  'Hamburger',
  'Peperoni',
  'Sausage',
  'Banana peppers',
  'Black olives',
  'Green onions',
  'Green peppers',
  'Jalapenos',
  'Kimchi',
  'Mushrooms',
  'Onions',
];

export const startingSauces = [
  PizzaSauce.BBQ,
  PizzaSauce.Oil,
  PizzaSauce.Red,
  PizzaSauce.White,
];

export const startingPizzas: Array<Pizza> = [
  {
    id: '000000001',
    name: 'Conan the Pizza Destroyer',
    size: PizzaSize.L,
    toppings: ['Jalapenos', 'Kimchi', 'Mushrooms', 'Onions'],
  },
  {
    id: '000000002',
    name: 'Jabba the Pizza Hut',
    size: PizzaSize.X,
    toppings: ['Sausage', 'Banana peppers', 'Black olives', 'Green onions'],
  },
  {
    id: '000000003',
    name: 'Chewybaca',
    size: PizzaSize.M,
    toppings: ['Hamburger', 'Peperoni', 'Sausage', 'Banana peppers'],
  },
  {
    id: '000000004',
    name: 'Pikachewy',
    size: PizzaSize.S,
    toppings: ['Green onions', 'Green peppers', 'Jalapenos', 'Kimchi'],
  },
  {
    id: '000000005',
    name: 'Chi Zee',
    size: PizzaSize.M,
    toppings: [],
  },
];
