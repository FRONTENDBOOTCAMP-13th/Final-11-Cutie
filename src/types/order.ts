import { Iproduct } from './product';

export interface ISellerOrder {
  _id: number;
  user_id: number;
  product_id: number;
  quantity: number;
  totalPrice: number;
  status: 'paid' | 'shipping' | 'done' | 'cancelled';
  createdAt: string;
  updatedAt: string;
  product: Iproduct;
  user?: {
    name: string;
    email: string;
  };
}
