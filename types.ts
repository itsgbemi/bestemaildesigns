
export interface Product {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  image: string;
  isFeatured?: boolean;
  isSale?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = {
  id: string;
  label: string;
  icon?: string;
};
