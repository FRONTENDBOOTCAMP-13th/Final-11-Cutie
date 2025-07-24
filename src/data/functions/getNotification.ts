import { ApiResPromise } from '@models/api';
import { INotification } from '@models/notification';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 알림 목록 조회 함수
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 해당 사용자의 알림 목록
 * @description
 * 사용자의 알림(notification) 목록을 조회합니다.
 * GET /notifications/
 */
export async function getNotifications(accessToken: string): ApiResPromise<INotification[]> {
  try {
    const res = await fetch(`${API_URL}/notifications`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('알림 목록 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
