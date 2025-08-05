import { User } from '@models/user';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface UserStoreState {
  user: User | null;
  keepLogin: boolean;
  setUser: (user: User, keepLogin?: boolean) => void;
  resetUser: () => void;
}

const useUserStore = create(
  persist<UserStoreState>(
    set => ({
      user: null,
      keepLogin: false,

      setUser: (user, keepLogin = false) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('keepLogin', String(keepLogin));
        }
        set({ user, keepLogin });
      },

      resetUser: () => {
        set({ user: null, keepLogin: false });
        if (typeof window !== 'undefined') {
          localStorage.removeItem('keepLogin');
        }
      },
    }),
    {
      name: 'user',
      storage: createJSONStorage(() =>
        typeof window !== 'undefined' && localStorage.getItem('keepLogin') === 'true' ? localStorage : sessionStorage,
      ),
      onRehydrateStorage: () => state => {
        if (typeof window !== 'undefined' && state) {
          const keepLoginValue = localStorage.getItem('keepLogin');
          if (keepLoginValue !== null) {
            state.keepLogin = keepLoginValue === 'true';
          }
        }
      },
    },
  ),
);

export default useUserStore;
