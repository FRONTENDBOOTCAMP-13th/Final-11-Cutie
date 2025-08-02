import { create } from 'zustand';

interface EditProjectState {
  title: string;
  price: string;
  tag: string;
  category: string;
  startDate: string;
  endDate: string;
  content: string;
  mainImage: string;

  setTitle: (v: string) => void;
  setPrice: (v: string) => void;
  setTag: (v: string) => void;
  setCategory: (v: string) => void;
  setStartDate: (v: string) => void;
  setEndDate: (v: string) => void;
  setContent: (v: string) => void;
  setMainImage: (url: string) => void;
}

export const useEditProjectStore = create<EditProjectState>(set => ({
  title: '',
  price: '',
  tag: '',
  category: '',
  startDate: '',
  endDate: '',
  content: '',
  mainImage: '',

  setTitle: title => set({ title }),
  setPrice: price => set({ price }),
  setTag: tag => set({ tag }),
  setCategory: category => set({ category }),
  setStartDate: startDate => set({ startDate }),
  setEndDate: endDate => set({ endDate }),
  setContent: content => set({ content }),
  setMainImage: url => set({ mainImage: url }),
}));
