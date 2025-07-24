'use server';

import { ApiResPromise } from '@models/api';
import {
  INotification,
  INotificationCreateReq,
  INotificationReadReq,
  INotificationReadRes,
} from '@models/notification';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 알림 등록
 * @param payload - 알림 등록 요청 데이터 (target_id, type, content, channel, extra)
 * @param accessToken - 인증 토큰 (관리자 또는 시스템 권한)
 * @returns 생성된 알림 객체
 * @description
 * 알림을 서버에 등록합니다. (POST /notifications)
 */
export async function createNotification(
  payload: INotificationCreateReq,
  accessToken: string,
): ApiResPromise<INotification> {
  try {
    const res = await fetch(`${API_URL}/notifications`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('알림 등록 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 내 알림 목록을 읽음 상태로 수정합니다.
 * @param ids - 읽음 처리할 알림 ID 배열
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 처리된 알림 수 정보
 * @description
 * 서버에 요청하여 사용자의 지정된 알림들을 읽음 상태로 변경합니다.
 * PATCH /notifications/read
 */
export async function readNotification(ids: number[], accessToken: string): ApiResPromise<INotificationReadRes> {
  const payload: INotificationReadReq = { ids };

  try {
    const res = await fetch(`${API_URL}/notifications/read`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('알림 읽음 처리 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
