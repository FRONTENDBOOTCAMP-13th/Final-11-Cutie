'use server';

import { ApiResPromise } from '@models/api';
import { IReview, IReviewCreateReq } from '@models/review';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 구매 후기 등록
 * @param payload - 작성할 리뷰 데이터
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 등록된 리뷰 객체
 * @description
 * 구매 후기를 등록합니다.
 * /replies/
 */
export async function createReview(payload: IReviewCreateReq, accessToken: string): ApiResPromise<IReview> {
  try {
    const res = await fetch(`${API_URL}/replies`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      throw new Error('구매 후기 등록 실패');
    }

    return res.json();
  } catch (error) {
    console.error('createReview error:', error);
    throw error;
  }
}

/**
 * 구매 후기 수정
 * @param reviewId - 수정할 리뷰 ID
 * @param formData - 수정할 데이터가 담긴 FormData 객체
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 수정된 리뷰 객체
 * @description
 * 구매 후기를 수정합니다.
 * /replies/{_id}
 */
export async function updateReview(reviewId: number, formData: FormData, accessToken: string): ApiResPromise<IReview> {
  try {
    const res = await fetch(`${API_URL}/replies/${reviewId}`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (!res.ok) {
      throw new Error('구매 후기 수정 실패');
    }

    return res.json();
  } catch (error) {
    console.error('updateReview error:', error);
    throw error;
  }
}

/**
 * 구매 후기 삭제
 * @param reviewId - 삭제할 리뷰 ID
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 삭제 결과
 * @description
 * 구매 후기를 삭제합니다.
 * DELETE /replies/{_id}
 */
export async function deleteReview(reviewId: number, accessToken: string): ApiResPromise<{ _id: number }> {
  try {
    const res = await fetch(`${API_URL}/replies/${reviewId}`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('구매 후기 삭제 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
