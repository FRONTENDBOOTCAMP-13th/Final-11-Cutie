import { create } from 'zustand';

type State = {
  userCategory: string; // 유저가 선택한 카테고리
  setCategory: (category: string) => void; // 카테고리 선택
};

export const userCategory = create<State>(set => ({
  userCategory: '',
  setCategory: category => set(() => ({ userCategory: category })),
}));
