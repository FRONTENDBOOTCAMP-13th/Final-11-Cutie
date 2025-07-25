// 알림 항목 타입
export interface INotification {
  _id: number;
  user_id: number; // DB상 사용자 ID
  type: string;
  content: string;
  channel: string;
  isRead: boolean;
  createdAt: string;
  updatedAt: string;
}

// 알림 등록 요청 타입
export interface INotificationCreateReq {
  type: 'qna' | 'order' | 'shipping' | 'event' | 'message' | string;
  target_id: number; // 알림 받을 사용자 ID
  channel: 'toast' | 'push' | 'email' | string;
  content: string;
}

// 알림 읽음 처리
export interface INotificationReadReq {
  ids: number[]; // 읽은 알림들에 대한 배열
}

export interface INotificationReadRes {
  ok: 0 | 1;
  updatedCount: number; //
}
