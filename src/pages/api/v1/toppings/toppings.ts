import { MethodNotAllowed } from '@/errors/MethodNotAllowed';
import type { NextApiRequest, NextApiResponse } from 'next';
import { stratingToppings as toppingsList } from '@/data/startingValues';

interface Data {
  toppingsList: Array<string>;
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  try {
    if (req.method !== 'GET') {
      throw new MethodNotAllowed();
    }
    res.status(200).json({ toppingsList });
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500);
  }
};

export default handler;
