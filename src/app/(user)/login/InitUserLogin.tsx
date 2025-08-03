'use client';

import { useEffect } from 'react';
import useUserStore from 'zustand/userStore';

export function InitUserLogin() {
  const setUser = useUserStore(state => state.setUser);

  useEffect(() => {
    if (typeof window == 'undefined') return;

    try {
      const keep = localStorage.getItem('keepLogin') === 'true';
      if (!keep) {
        localStorage.removeItem('user');
      }
      const storage = keep ? localStorage : sessionStorage;
      const saved = storage.getItem('user');

      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          const userData = parsed?.state?.user || parsed;

          // 유효성 검사
          if (userData && userData._id && userData.email) {
            setUser(userData, keep);
          } else {
            // 잘못된 데이터 삭제
            storage.removeItem('user');
          }
        } catch (parseError) {
          console.error('저장된 유저 정보 파싱 오류', parseError);
          localStorage.removeItem('user');
          sessionStorage.removeItem('user');
        }
      }
    } catch (error) {
      console.error('사용자 초기화 오류:', error);
    }
  }, [setUser]);

  return null;
}
