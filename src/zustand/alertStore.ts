import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AlertStore {
  readAlertId: number[]; // 읽은 알림 ID 목록
  deletedAlertId: number[]; // 삭제한 알림 ID 목록

  checkRead: (id: number) => void; // 읽음으로 표시
  isRead: (id: number) => boolean; // 읽었는지 확인함

  checkDeleted: (id: number) => void; // 삭제로 표시
  isDeleted: (id: number) => boolean; // 삭제 여부 확인

  clearRead: () => void; // 읽은 알림 초기화
  clearDeleted: () => void; // 삭제된 알림 초기화
}

const useAlertStore = create<AlertStore>()(
  // persist 미들웨어 통해 새로고침해도 지워지지 않게 저장
  persist(
    (set, get) => ({
      readAlertId: [], // 읽은 알림 ID 목록 초기화
      deletedAlertId: [], // 삭제한 알림 ID 목록 초기화

      // 알림 읽음 처리
      checkRead: (id: number) => {
        // 현재 읽은 알림 목록
        const current = get().readAlertId;
        // 목록에 알림 ID가 없다면 현재 배열에 추가
        if (!current.includes(id)) {
          set({ readAlertId: [...current, id] });
        }
      },

      // 특정 알림 ID 읽은 상태인지 확인
      isRead: (id: number) => get().readAlertId.includes(id),

      // 알림 삭제 처리
      checkDeleted: (id: number) => {
        const current = get().deletedAlertId;
        if (!current.includes(id)) {
          set({ deletedAlertId: [...current, id] });
        }
      },

      // 특정 알림 ID 읽은 상태인지 확인
      isDeleted: (id: number) => get().deletedAlertId.includes(id),

      
      clearRead: () => set({ readAlertId: [] }), // 읽은 알림 목록 초기화
      clearDeleted: () => set({ deletedAlertId: [] }), // 삭제된 알림 목록 초기화
    }),
    {
      name: 'alert-storage', // localStorage에 저장되는 키 이름
    },
  ),
);

export default useAlertStore;
