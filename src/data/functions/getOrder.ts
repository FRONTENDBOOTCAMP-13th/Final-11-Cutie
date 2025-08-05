'use client'

import { ApiResPromise } from '@models/api';
import { ISellerOrderDetail, IUserOrderList } from '@models/order'; // 상세 타입과 동일한 구조 사용

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 판매자 주문 목록 조회 함수
 * @param accessToken - 로그인된 판매자의 액세스 토큰
 * @returns 주문 목록 배열
 * @description
 * 판매자가 수신한 모든 주문 목록을 가져옵니다.
 * GET /seller/orders
 */
export async function getSellerOrderList(accessToken: string): ApiResPromise<ISellerOrderDetail[]> {
  try {
    const res = await fetch(`${API_URL}/seller/orders`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('주문 목록 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 판매자 주문 상세 조회
 * @param orderId - 조회할 주문 ID
 * @param accessToken - 판매자 액세스 토큰
 * @returns 주문 상세 데이터
 * @description
 * 판매자가 주문 상세 내역을 확인할 수 있습니다.
 * GET /seller/orders/{_id}
 */
export async function getSellerOrderDetail(orderId: number, accessToken: string): ApiResPromise<ISellerOrderDetail> {
  try {
    const res = await fetch(`${API_URL}/seller/orders/${orderId}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('주문 상세 조회 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}


/**
 * 구매자 주문 내역 상세 조회
 * @param accessToken - 구매자 액세스 토큰
 * @returns 주문 상세 데이터
 * @description
 * 구매자의 구매 리스트를 확인할 수 있습니다.
 * GET /orders
 */
export async function getUserOrderList( accessToken: string ): ApiResPromise<IUserOrderList[]> {
  try {
    const res = await fetch(`${API_URL}/orders`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('주문 상세 조회 실패');
    }

   return res.json();
  } catch (error) {
    console.error('getUserOrderList 에러:', error);
    throw error;
  }
}
