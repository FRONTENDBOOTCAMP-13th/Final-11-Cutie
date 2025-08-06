// zustand 프로젝트 동록 시 필요한 정보를 담는곳

import { create } from 'zustand';

type State = {
  reset: () => void; // 전체 리셋함수

  userSubContent: string; // 유저가 미리 입력한 내용
  setSubContent: (subContent: string) => void;

  userGoalPrice: string; // 유저의 목표 금액
  setGoalPrice: (goalPrice: string) => void;

  userMainImage: File | null; // 유저가 선택한 대표 이미지
  setMainImage: (img: File | null) => void; // 메인 이미지 선택

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

  // 계좌 종류 x
  userIndividual: boolean; // 개인 (true면 개인 , false면 사업자용)
  setIndividual: (individual: boolean) => void;

  // 계좌 등록 완료 체크
  userAccountCheck: boolean;
  setAccountCheck: (accountCheck: boolean) => void;

  // 인증하기 (세금 계산서 부분)
  userEmail: string; // 이메일
  setEmail: (email: string) => void;

  userDutyName: string; // 유저 세금 계산서 성명 x
  setDutyName: (DutyName: string) => void;

  userSSN: string; // 주민등록 번호
  setSSN: (SSN: string) => void;

  userAddress: string; // 유저 주소
  setAddress: (Address: string) => void;

  // 인증하기 (사업자)
  userBusinessName: string; // 상호명
  setBusinessName: (BusinessName: string) => void;

  userBusinessPersonNumber: string; // 사업자 번호
  setBusinessPersonNumber: (BusinessPersonNumber: string) => void;

  // 세금 계산서 발행 종류
  userDutyType: boolean; // true = 개인 , false = 사업자
  setDutyType: (DutyType: boolean) => void;

  // 세금 계산서 발행 확인
  userDutyCheck: boolean;
  setDutyCheck: (DutyCheck: boolean) => void;
};

export const userProjectStroe = create<State>(set => ({
  reset: () =>
    set(() => ({
      userSubContent: '',
      userGoalPrice: '',
      userMainImage: null,
      userCategory: '',
      userContent: '',
      userTag: '',
      userDate: '',
      userPrice: '',
      userTitle: '',
      userBirthday: '',
      userBank: '',
      userName: '',
      userAccountNumber: '',
      userIndividual: true,
      userBusinessNumber: '',
      userAccountCheck: false,
      userEmail: '',
      userDutyName: '',
      userSSN: '',
      userAddress: '',
      userBusinessName: '',
      userBusinessPersonNumber: '',
      userDutyType: true,
      userDutyCheck: false,
    })),

  userSubContent: '',
  setSubContent: (subContent: string) => set(() => ({ userSubContent: subContent })),

  userGoalPrice: '',
  setGoalPrice: (goalPrice: string) => set(() => ({ userGoalPrice: goalPrice })),

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

  userEmail: '',
  setEmail: (email: string) => set(() => ({ userEmail: email })),

  userDutyName: '',
  setDutyName: DutyName => set(() => ({ userDutyName: DutyName })),

  userSSN: '',
  setSSN: SSN => set(() => ({ userSSN: SSN })),

  userAddress: '',
  setAddress: Address => set(() => ({ userAddress: Address })),

  userBusinessName: '', // 상호명
  setBusinessName: (BusinessName: string) => set(() => ({ userBusinessName: BusinessName })),

  userBusinessPersonNumber: '', // 사업자 번호
  setBusinessPersonNumber: (BusinessPersonNumber: string) =>
    set(() => ({ userBusinessPersonNumber: BusinessPersonNumber })),

  userDutyType: true, // true = 개인 , false = 사업자
  setDutyType: DutyType => set(() => ({ userDutyType: DutyType })),

  userDutyCheck: false,
  setDutyCheck: DutyCheck => set(() => ({ userDutyCheck: DutyCheck })),
}));
