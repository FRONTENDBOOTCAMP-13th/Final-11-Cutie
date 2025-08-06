import { ApiResPromise } from '@models/api';
import { IReview } from '@models/review';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 내 구매 후기 목록 조회 함수
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 내가 작성한 리뷰 리스트
 * @description
 * 내가 등록한 모든 구매 후기 목록을 조회합니다.
 * GET /replies/
 */
export async function getMyReviews(accessToken: string): ApiResPromise<IReview[]> {
  try {
    const res = await fetch(`${API_URL}/replies`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-store', //캐시 저장안함으로 변경
    });

    if (!res.ok) {
      throw new Error('구매 후기 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 판매자의 상품에 대한 구매 후기 목록을 조회
 * @param sellerId - 판매자 고유 ID (또는 고유 문자열)
 * @returns 해당 판매자가 받은 전체 리뷰 배열
 * @description
 * 판매자의 상품별로 등록된 모든 구매 후기 목록을 조회합니다.
 * GET /replies/seller/{seller_id}
 */
export async function getSellerReviews(sellerId: string): ApiResPromise<IReview[]> {
  try {
    const res = await fetch(`${API_URL}/replies/seller/${sellerId}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('판매자 후기 목록 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 구매 후기 상세 조회 함수
 * @param reviewId - 조회할 후기 ID
 * @returns 해당 후기 상세 정보
 * @description
 * 구매 후기를 상세 조회합니다.
 * GET /replies/{_id}
 */
export async function getReviewDetail(reviewId: number): ApiResPromise<IReview> {
  try {
    const res = await fetch(`${API_URL}/replies/${reviewId}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('구매 후기 상세 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
