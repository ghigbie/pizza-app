export interface PageOrderItem {
  id: number;
  name: string;
  route: string;
}

export const pageOrderArray: Array<PageOrderItem> = [
  {
    id: 0,
    name: 'Home',
    route: '/',
  },
  {
    id: 1,
    name: 'Our Team',
    route: 'team',
  },
  {
    id: 2,
    name: 'About',
    route: 'about',
  },
  {
    id: 3,
    name: 'Contact Us',
    route: 'contact',
  },
];
