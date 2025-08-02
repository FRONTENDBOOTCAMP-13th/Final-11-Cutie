import { create } from 'zustand';

interface EditProjectState {
  title: string;
  price: string;
  tag: string;
  category: string;
  startDate: string;
  endDate: string;
  content: string;
  mainImage: string | File;

  setTitle: (title: string) => void;
  setPrice: (price: string) => void;
  setTag: (tag: string) => void;
  setCategory: (category: string) => void;
  setStartDate: (startDate: string) => void;
  setEndDate: (endDate: string) => void;
  setContent: (content: string) => void;
  setMainImage: (url: string | File) => void;
}

// 프로젝트 수정하기 상태 관리
export const useEditProjectStore = create<EditProjectState>(set => ({
  // 초기값
  title: '',
  price: '',
  tag: '',
  category: '',
  startDate: '',
  endDate: '',
  content: '',
  mainImage: '',

  // 상태 변경
  setTitle: title => set({ title }),
  setPrice: price => set({ price }),
  setTag: tag => set({ tag }),
  setCategory: category => set({ category }),
  setStartDate: startDate => set({ startDate }),
  setEndDate: endDate => set({ endDate }),
  setContent: content => set({ content }),
  setMainImage: mainImage => set({ mainImage }),
}));
