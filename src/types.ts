export interface Product {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
}

export interface CartItem {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}
