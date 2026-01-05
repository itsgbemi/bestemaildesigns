
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Categories' },
  { id: 'minimalist', label: 'Minimalist' },
  { id: 'ecommerce', label: 'E-commerce' },
  { id: 'newsletter', label: 'Newsletter' },
  { id: 'welcome', label: 'Welcome Series' },
  { id: 'abandoned', label: 'Cart Abandoned' },
  { id: 'holiday', label: 'Holiday' },
  { id: 'corporate', label: 'Corporate' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Abodio – A Hand-Painted Editorial Template',
    author: 'Komet & Flicker',
    category: 'newsletter',
    price: 17,
    image: 'https://picsum.photos/seed/abodio/600/400',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Noël 02 | Holiday Social & Email Kit',
    author: 'Simple co',
    category: 'holiday',
    price: 30,
    image: 'https://picsum.photos/seed/noel/600/400',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Editorial Society - Luxury Font Duo & Template',
    author: 'Davide Bassu',
    category: 'corporate',
    price: 24,
    image: 'https://picsum.photos/seed/editorial/600/400',
    isFeatured: true
  },
  {
    id: '4',
    title: 'Garden State - Aesthetic E-commerce Series',
    author: 'Bruised Goods',
    category: 'ecommerce',
    price: 25,
    image: 'https://picsum.photos/seed/garden/600/400',
    isFeatured: true
  },
  {
    id: '5',
    title: 'TOMMY - New Classic Minimalist Set',
    author: 'MadeType',
    category: 'minimalist',
    price: 14,
    image: 'https://picsum.photos/seed/tommy/600/400',
    isSale: true
  },
  {
    id: '6',
    title: 'Peachcream - Elegant Welcome Flow',
    author: 'Peachcrem',
    category: 'welcome',
    price: 18,
    image: 'https://picsum.photos/seed/peach/600/400',
    isSale: true
  },
  {
    id: '7',
    title: 'BUNGALOW - 1970s Retro Layouts',
    author: '70s Surf',
    category: 'newsletter',
    price: 22,
    image: 'https://picsum.photos/seed/bungalow/600/400'
  },
  {
    id: '8',
    title: 'The Roman Edition - Serif Email Suite',
    author: 'Silverstag',
    category: 'corporate',
    price: 28,
    image: 'https://picsum.photos/seed/roman/600/400'
  }
];
