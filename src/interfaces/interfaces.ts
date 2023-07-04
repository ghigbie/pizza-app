import { PizzaSauce, PizzaSize } from '@/enums/enums';

export interface Pizza {
  id: string;
  name: string;
  size: PizzaSize;
  toppings: Array<string> | [];
}
