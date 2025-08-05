import { create } from 'zustand';

export const useProductSortStore = create(set => ({
  sortOption: '추천순',
  setSortOption: (sort: string) => set({ sortOption: sort }),
}));
