import { Pizza } from '@/interfaces/interfaces';

export const deletePizza = (id: string, pizzas: Array<Pizza>) =>
  pizzas.filter((pizza: Pizza) => pizza.id !== id);
