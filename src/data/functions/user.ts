import { ApiResPromise } from '@models/api';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 이메일 중복 여부 확인
 * @param email - 확인할 이메일 주소
 * @returns 중복 여부 결과 (exists: true | false)
 * @description
 * 이메일 중복 여부를 체크 합니다.
 * GET /users/email?email=example@example.com
 */
export async function checkEmail(email: string): ApiResPromise<{ exists: boolean }> {
  try {
    const res = await fetch(`${API_URL}/users/email?email=${encodeURIComponent(email)}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
    });

    if (!res.ok) {
      throw new Error('이메일 중복 확인 실패');
    }

    return res.json();
  } catch (error) {
    console.error('이메일 확인 에러:', error);
    return { ok: 0, message: '이메일 확인 중 오류가 발생했습니다.' };
  }
}

/**
 * 이름 중복 체크
 * @param name - 중복 확인할 사용자 이름
 * @returns 중복 여부에 대한 응답
 * @description
 * 이름 중복 여부를 체크 합니다.
 * GET /users/name?name=도로로
 */
export async function checkName(name: string): ApiResPromise<{ isDuplicate: boolean }> {
  try {
    const url = new URL(`${API_URL}/users/name`);
    url.searchParams.set('name', name);

    const res = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
    });

    if (!res.ok) {
      throw new Error('이름 중복 확인 실패');
    }

    return res.json();
  } catch (error) {
    console.error('checkDuplicateName error:', error);
    throw error;
  }
}

/**
 * 회원 정보 type 조회
 * @param userId - 유저 ID
 * @returns 유저 타입 정보
 * @description
 * 회원 정보를 type으로 조회합니다.
 * GET /users/{id}/type
 */
export async function checkUserType(userId: number): ApiResPromise<{ type: 'seller' | 'buyer' }> {
  try {
    const res = await fetch(`${API_URL}/users/${userId}/type`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
    });

    if (!res.ok) {
      throw new Error('회원정보 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error('유저 타입 조회 실패:', error);
    throw error;
  }
}
