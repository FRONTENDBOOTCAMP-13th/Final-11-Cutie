import { Iproduct } from '@models/product';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface OrderedProduct {
  _id: number;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
  sellerName: string;
  achievementRate: number;
  expectedDate: string;
  product: Iproduct;
}

interface OrderState {
  orderedProduct: OrderedProduct | null;
  setOrderedProduct: (product: OrderedProduct) => void;
  clearOrderedProduct: () => void;
}

const useOrderStore = create<OrderState>()(
  persist(
    set => ({
      orderedProduct: null,
      setOrderedProduct: product => set({ orderedProduct: product }),
      clearOrderedProduct: () => set({ orderedProduct: null }),
    }),
    {
      name: 'order-storage', // localStorage key 이름
    },
  ),
);

export default useOrderStore;
