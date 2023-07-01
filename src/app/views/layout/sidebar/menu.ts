import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },
  {
    label: 'Dashboard',
    icon: 'home',
    link: '/dashboard'
  },
  {
    label: 'Book',
    isTitle: true
  },
  {
    label: 'Books',
    icon: 'book',
    link: 'book/books'
  },
  {
    label: 'Sales',
    isTitle: true
  },
  {
    label: 'Book Sales',
    icon: 'layers',
    link: '/booksales'
  },
  {
    label: 'Royalty',
    isTitle: true
  },
  {
    label: 'Royalty Payments',
    icon: 'layers',
    link: 'royalty/royaltypayments'
  }
];
