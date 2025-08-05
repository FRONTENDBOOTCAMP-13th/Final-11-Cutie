import { create } from 'zustand';

interface OrderedProduct {
  _id: number;
  name: string;
  price: number;
  count: number;
  imageUrl: string;
  sellerName: string;
  achievementRate: number;
  expectedDate: string;
}

interface OrderState {
  orderedProduct: OrderedProduct | null;
  setOrderedProduct: (product: OrderedProduct) => void;
  resetOrderedProduct: () => void;
}

const useOrderStore = create<OrderState>(set => ({
  orderedProduct: null,
  setOrderedProduct: product => set({ orderedProduct: product }),
  resetOrderedProduct: () => set({ orderedProduct: null }),
}));

export default useOrderStore;
