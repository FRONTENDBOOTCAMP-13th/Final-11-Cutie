// zustand 프로젝트 동록 시 필요한 정보를 담는곳

import { create } from 'zustand';

type State = {
  userMainImage: File | null; // 유저가 선택한 대표 이미지
  setMainImage: (img: File) => void; // 메인 이미지 선택

  userCategory: string; // 유저가 선택한 카테고리
  setCategory: (category: string) => void; // 카테고리 선택

  userContent: string; // 유저가 작성한 내용
  setContent: (content: string) => void; // 유저가 작성한 내용 저장

  userTag: string; // 유저가 작성한 태그
  setUserTag: (tags: string) => void; // 유저가 작성한 태그 저장

  userDate: string; // 유저가 작성한 날짜
  setDate: (date: string) => void; // 유저가 작성한 날짜 저장

  userPrice: string; // 유저가 입력한 가격
  setPrice: (price: string) => void; // 유저가 작성한 가격 저장

  userTitle: string; // 현재 유저가 입력한 타이틀
  setTitle: (title: string) => void; // 유저가 작성한 타이틀 저장
};

export const userProjectStroe = create<State>(set => ({
  userMainImage: null,
  setMainImage: img => set(() => ({ userMainImage: img })),

  userCategory: '',
  setCategory: category => set(() => ({ userCategory: category })),

  userContent: '',
  setContent: content => set(() => ({ userContent: content })),

  userTag: '',
  setUserTag: tags => set(() => ({ userTag: tags })),

  userDate: '',
  setDate: date => set(() => ({ userDate: date })),

  userPrice: '',
  setPrice: price => set(() => ({ userPrice: price })),

  userTitle: '',
  setTitle: title => set(() => ({ userTitle: title })),
}));
