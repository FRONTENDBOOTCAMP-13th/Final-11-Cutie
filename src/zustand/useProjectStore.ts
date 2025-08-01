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

  // 인증하기 부분 (계좌 인증)
  userBirthday: string; // 현재 유저 생년월일
  setBirthday: (birthday: string) => void; // 현재 생년월일 변경

  userBank: string; // 현재 유저가 선택한 은행
  setBank: (bank: string) => void; // 은행 선택 저장

  userName: string; // 현재 유저의 예금주명
  setName: (name: string) => void; // 예금주명 저장

  userAccountNumber: string; // 현재 유저의 계좌 번호
  setAccountNumber: (accountNumber: string) => void; // 현재 유저의 계좌 번호 저장

  userBusinessNumber: string; // 현재 사업자 번호
  setBusinessNumber: (businessNumber: string) => void;

  // 계좌 종류
  userIndividual: boolean; // 개인 (true면 개인 , false면 사업자용)
  setIndividual: (individual: boolean) => void;

  // 계좌 등록 완료 체크
  userAccountCheck: boolean;
  setAccountCheck: (accountCheck: boolean) => void;
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

  userBirthday: '',
  setBirthday: birthday => set(() => ({ userBirthday: birthday })),

  userBank: '',
  setBank: bank => set(() => ({ userBank: bank })),

  userName: '',
  setName: name => set(() => ({ userName: name })),

  userAccountNumber: '',
  setAccountNumber: accountNumber => set(() => ({ userAccountNumber: accountNumber })),

  userIndividual: true,
  setIndividual: individual => set(() => ({ userIndividual: individual })),

  userBusinessNumber: '',
  setBusinessNumber: businessNumber => set(() => ({ userBusinessNumber: businessNumber })),

  userAccountCheck: false,
  setAccountCheck: accountCheck => set(() => ({ userAccountCheck: accountCheck })),
}));
