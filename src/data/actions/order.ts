'use server';

import { ApiResPromise } from '@models/api';
import { ISellerOrderDetail } from '@models/order'; // 응답으로 수정된 주문 정보를 받을 경우

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 판매자 주문 상태 수정 액션
 * 일괄 배송이라 상품별 주문 상태 수정은 x
 * @param orderId - 주문 ID
 * @param newState - 수정할 주문 상태 값 (예: 'OS030')
 * @param accessToken - 판매자 액세스 토큰
 * @returns 수정된 주문 객체
 * @description
 * 주문 상태를 변경합니다. (예: 배송중, 배송완료, 취소 등)
 * PATCH /seller/orders/{_id}
 */
export async function updateOrderState(
  orderId: number,
  newState: string,
  accessToken: string,
): ApiResPromise<ISellerOrderDetail> {
  try {
    const res = await fetch(`${API_URL}/seller/orders/${orderId}`, {
      method: 'PATCH',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ state: newState }),
    });

    if (!res.ok) {
      throw new Error('주문 상태 변경 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
