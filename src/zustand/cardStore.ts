import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useUserStore from './userStore';

interface CardState {
  registeredCardNumbers: string[];
  selectedCardNumber: string | null;
  addCardNumber: (card: string) => void;
  removeCardNumber: (card: string) => void;
  selectCardNumber: (card: string) => void;
}

export const usePaymentStore = create<CardState>()(
  persist(
    (set, get) => ({
      registeredCardNumbers: [],
      selectedCardNumber: null,
      addCardNumber: card =>
        set(state => ({
          registeredCardNumbers: [...state.registeredCardNumbers, card],
        })),
      removeCardNumber: card =>
        set(state => ({
          registeredCardNumbers: state.registeredCardNumbers.filter(c => c !== card),
          selectedCardNumber: get().selectedCardNumber === card ? null : get().selectedCardNumber,
        })),
      selectCardNumber: card => set({ selectedCardNumber: card }),
    }),
    {
      name: typeof window !== 'undefined' ? `payment-${useUserStore.getState().user?._id || 'guest'}` : 'payment-guest',
    },
  ),
);
