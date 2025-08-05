import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PaymentState {
  registeredCardNumbers: string[];
  selectedCardNumber: string | null;
  addCardNumber: (card: string) => void;
  removeCardNumber: (card: string) => void;
  selectCardNumber: (card: string) => void;
}

export const usePaymentStore = create<PaymentState>()(
  persist(
    set => ({
      registeredCardNumbers: [],
      selectedCardNumber: null,
      addCardNumber: card =>
        set(state => ({
          registeredCardNumbers: [...state.registeredCardNumbers, card],
        })),
      removeCardNumber: card =>
        set(state => ({
          registeredCardNumbers: state.registeredCardNumbers.filter(c => c !== card),
          selectedCardNumber: state.selectedCardNumber === card ? null : state.selectedCardNumber,
        })),
      selectCardNumber: card =>
        set(() => ({
          selectedCardNumber: card,
        })),
    }),
    {
      name: 'payment-storage', // localStorage에 저장될 키
    },
  ),
);
