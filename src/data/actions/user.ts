'use server';

import { ApiRes, ApiResPromise } from '@models/api';
import { User } from '@models/user';

const API_URL = process.env.NEXT_PUBLIC_API_SERVER || 'https://fesp-api.koyeb.app/market';
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || 'febc13-final11-emjf';

/**
 * 회원가입 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 회원가입 폼 데이터(FormData 객체)
 * @returns 회원가입 결과 응답 객체
 * @description
 * 첨부파일(프로필 이미지)이 있으면 파일 업로드 후, 회원가입 API를 호출합니다.
 */
export async function createUser(state: ApiRes<User> | null, formData: FormData): ApiResPromise<User> {
  let res: Response;
  let data: ApiRes<User>;

  try {
    // 첨부파일(프로필 이미지) 처리
    // 기본 이미지로 설정, 추후 변경은 마이페이지에서 되게끔
    const defaultImage = '../../assets/icons/profile.svg';

    // 회원가입 요청 바디 생성
    // API 참고: https://fesp-api.koyeb.app/market/apidocs/#/%ED%9A%8C%EC%9B%90/post_users_
    const body = {
      email: formData.get('email'),
      password: formData.get('password'),
      name: formData.get('name'),
      type: formData.get('type') || 'user',
      image: defaultImage,
    };

    console.log(`body`, body);

    // 회원가입 API 호출
    res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}

/**
 * 로그인 함수
 * @param state - 이전 상태(사용하지 않음)
 * @param formData - 로그인 폼 데이터(FormData 객체)
 * @returns 로그인 결과 응답 객체
 * @description
 * 이메일/비밀번호로 로그인 API를 호출합니다.
 */
export async function login(state: ApiRes<User> | null, formData: FormData): ApiResPromise<User> {
  const body = Object.fromEntries(formData.entries());

  let res: Response;
  let data: ApiRes<User>;

  try {
    // 로그인 API 호출
    res = await fetch(`${API_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
      },
      body: JSON.stringify(body),
    });

    data = await res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제가 발생했습니다.' };
  }

  return data;
}

/**
 * 회원 정보 수정 함수
 * @param state - 이전 상태 (사용하지 않음)
 * @param formData - 수정할 회원 정보(FormData 객체)
 * @param userId - 수정할 유저의 ID
 * @param accessToken - 로그인된 유저의 액세스 토큰
 * @returns 수정된 유저 정보 또는 에러 응답
 */
export async function updateUser(
  state: ApiRes<User> | null,
  formData: FormData,
  userId: number | string,
  accessToken: string,
): ApiResPromise<User> {
  try {
    const rawExtra = formData.get('extra');
    let parsedExtra = undefined;

    if (typeof rawExtra === 'string') {
      try {
        parsedExtra = JSON.parse(rawExtra);
      } catch {
        parsedExtra = undefined;
      }
    }

    const body = {
      name: formData.get('name')?.toString(),
      phone: formData.get('phone')?.toString(),
      address: formData.get('address')?.toString(),
      image: formData.get('image')?.toString(),
      password: formData.get('password')?.toString(),
      extra: parsedExtra,
    };

    // 빈 값 제거 (null 제거)
    const cleanedBody = Object.fromEntries(Object.entries(body).filter(([, v]) => v != null));

    const res = await fetch(`${API_URL}/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(cleanedBody),
    });

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '회원 정보 수정 중 오류가 발생했습니다.' };
  }
}
