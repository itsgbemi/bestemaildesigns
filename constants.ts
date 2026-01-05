
import { Product, Category } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', label: 'All Templates' },
  { id: 'therapy', label: 'Therapy & Wellness' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'beauty', label: 'Beauty & Cosmetics' },
  { id: 'fashion', label: 'Fashion & Apparel' },
  { id: 'ecommerce', label: 'E-commerce Flows' },
  { id: 'welcome', label: 'Welcome Series' },
  { id: 'newsletter', label: 'Monthly Newsletters' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'The Wellness Flow – Mindful Therapy Template',
    author: 'Serene Studio',
    category: 'therapy',
    price: 24,
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Glow Journal – Skincare Routine Series',
    author: 'Radiance Design',
    category: 'skincare',
    price: 29,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '3',
    title: 'Vogue Editorial – High-Fashion E-commerce',
    author: 'Catwalk Creatives',
    category: 'fashion',
    price: 35,
    image: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '4',
    title: 'Pure Beauty – Minimalist Cosmetic Launch',
    author: 'Aura Agency',
    category: 'beauty',
    price: 22,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    isFeatured: true
  },
  {
    id: '5',
    title: 'Self-Care Sundays – Holistic Wellness Flow',
    author: 'Serene Studio',
    category: 'therapy',
    price: 19,
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
    isSale: true
  },
  {
    id: '6',
    title: 'Botanical Dew – Natural Skincare Newsletter',
    author: 'Radiance Design',
    category: 'skincare',
    price: 21,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    isSale: true
  },
  {
    id: '7',
    title: 'Street Style – Urban Fashion Weekly',
    author: 'Catwalk Creatives',
    category: 'fashion',
    price: 25,
    image: 'https://images.unsplash.com/photo-1454165833767-6216d494a023?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '8',
    title: 'Client Connection – Professional Therapy Intro',
    author: 'Clinical Designs',
    category: 'therapy',
    price: 28,
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800'
  }
];
