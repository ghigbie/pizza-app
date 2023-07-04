import { PizzaSauce } from '@/enums/enums';
import { Pizza } from '@/interfaces/interfaces';
import { atom } from 'recoil';

export const nameState = atom({
  key: 'nameState',
  default: 'Pizza Paradise',
});

export const toppingsState = atom({
  key: 'toppingsState',
  default: [] as Array<string>,
});

export const sauceState = atom({
  key: 'sauceState',
  default: [] as Array<PizzaSauce>,
});

export const pizzasState = atom({
  key: 'pizzasState',
  default: [] as Array<Pizza>,
});

export const initialDataLoad = atom({
  key: 'initalDataLoad',
  default: false,
});
