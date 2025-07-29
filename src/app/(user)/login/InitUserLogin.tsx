'use client';

import { useEffect } from 'react';
import useUserStore from 'zustand/userStore';

export function InitUserLogin() {
  const setUser = useUserStore(state => state.setUser);

  useEffect(() => {
    if (typeof window == 'undefined') return;

    try {
      const keep = localStorage.getItem('keepLogin') === 'true';
      const storage = keep ? localStorage : sessionStorage;
      const saved = storage.getItem('user');

      if (saved) {
        try {
          const user = JSON.parse(saved);
          // 유효성 검사
          if (user && user._id && user.email) {
            setUser(user);
          } else {
            // 잘못된 데이터 삭제
            storage.removeItem('user');
          }
        } catch (parseError) {
          console.error('저장된 유저 정보 파싱 오류', parseError);
          // 파싱 오류 시 관련 데이터 삭제
          try {
            localStorage.removeItem('user');
            sessionStorage.removeItem('user');
          } catch (cleanupError) {
            console.error('데이터 청소 실패', cleanupError);
          }
        }
      }
    } catch (error) {
      console.error('사용자 초기화 오류:', error);
    }
  }, [setUser]);

  return null;
}
