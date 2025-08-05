import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import useUserStore from './userStore';

export interface Address {
  id: number;
  name: string;
  address: string;
  phone: string;
}

interface AddressState {
  addresses: Address[];
  selectedAddressId: number | null;
  addAddress: (info: Omit<Address, 'id'>) => void;
  removeAddress: (id: number) => void;
  selectAddress: (id: number) => void;
}

export const useAddressStore = () => {
  const userId = useUserStore.getState().user?._id || 'guest';

  const store = create<AddressState>()(
    persist(
      (set, get) => ({
        addresses: [],
        selectedAddressId: null,
        addAddress: info =>
          set(state => ({
            addresses: [...state.addresses, { ...info, id: Date.now() }],
          })),
        removeAddress: id =>
          set(state => ({
            addresses: state.addresses.filter(addr => addr.id !== id),
            selectedAddressId: get().selectedAddressId === id ? null : get().selectedAddressId,
          })),
        selectAddress: id => set({ selectedAddressId: id }),
      }),
      {
        name: `address-${userId}`,
        storage: createJSONStorage(() => localStorage),
      },
    ),
  );

  return store();
};
