export interface PageOrderItem {
  id: number;
  name: string;
  route: string;
}

export const pageOrderArray: Array<PageOrderItem> = [
  {
    id: 0,
    name: 'Our Team',
    route: 'team',
  },
  {
    id: 1,
    name: 'About',
    route: 'about',
  },
  {
    id: 2,
    name: 'Contact Us',
    route: 'contact',
  },
];
