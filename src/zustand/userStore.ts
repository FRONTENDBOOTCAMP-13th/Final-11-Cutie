import { UserState } from '@models/user';
import { create } from 'zustand';
//import { persist, createJSONStorage } from 'zustand/middleware';

// persist 미들웨어를 사용하지 않는 경우
// const useUserStore = create<UserState>((set) => ({
//   user: null, // 로그인 된 사용자 정보 상태 (초기값: null)
//   setUser: (user) => set({ user }), // 로그인 된 사용자 정보를 설정하는 함수
//   resetUser: () => set({ user: null }), // 로그아웃 시 사용자 정보를 초기화하는 함수
// }));

// zustand 스토어를 생성하고, persist 미들웨어로 상태를 세션 스토리지에 저장
const useUserStore = create<UserState>(set => ({
  user: null,
  setUser: user => {
    set({ user });
    if (typeof window !== 'undefined') {
      const keep = localStorage.getItem('keepLogin') === 'true';
      const storage = keep ? localStorage : sessionStorage;
      try {
        storage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.log('유저 정보 저장 실패', error);
      }
    }
  },
  resetUser: () => {
    set({ user: null });
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.removeItem('user');
        localStorage.removeItem('user');
        localStorage.removeItem('keepLogin');
      } catch (error) {
        console.log('유저 정보 삭제 실패', error);
      }
    }
  },
}));

export default useUserStore;
