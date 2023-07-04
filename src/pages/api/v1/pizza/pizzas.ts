import { PizzaSize } from '@/enums/enums';
import { MethodNotAllowed } from '@/errors/MethodNotAllowed';
import { Pizza } from '@/interfaces/interfaces';
import type { NextApiRequest, NextApiResponse } from 'next';
import { startingPizzas as pizzasList } from '@/data/startingValues';

interface Data {
  pizzasList: Array<Pizza>;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (req.method !== 'GET') {
      throw new MethodNotAllowed();
    }
    res.status(200).json({ pizzasList });
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500);
  }
};

export default handler;
