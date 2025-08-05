import { User } from '@models/user';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface BookmarkState {
  _id: number,
  product_id: number,
}

interface UserStoreState {
  user: User | null;
  keepLogin: boolean;
  bookmarks: BookmarkState[];
  setUser: (user: User, keepLogin?: boolean) => void;
  setBookmarks: (bookmarks: BookmarkState[]) => void;
  resetUser: () => void;
}

const useUserStore = create(
  persist<UserStoreState>(
    set => ({
      user: null,
      bookmarks: [],
      keepLogin: false,

      setUser: (user, keepLogin = false) => {
        if (typeof window !== 'undefined') {
          localStorage.setItem('keepLogin', String(keepLogin));
        }
        set({ user, keepLogin });
      },

      setBookmarks: (bookmarks: BookmarkState[]) => {
        set({ bookmarks });
      },

      resetUser: () => {
        set({ user: null, bookmarks: [], keepLogin: false });
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
