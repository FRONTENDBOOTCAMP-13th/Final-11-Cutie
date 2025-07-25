'use server';

import { ApiResPromise } from '@models/api';
import { IcartDeletRes, IcartPostRes, IcartProductRes } from '@models/cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 장바구니 상품 추가 함수
 * @param productId - 장바구니에 담을 상품 ID
 * @param quantity - 담을 수량
 * @param accessToken - 로그인된 유저의 액세스 토큰
 * @returns 장바구니 응답 (추가 후 상태)
 * @description
 * 서버에 POST 요청을 보내 장바구니에 상품을 추가합니다.
 */
export async function addCart(productId: number, quantity: number, accessToken: string): ApiResPromise<IcartPostRes> {
  try {
    const body = {
      products: [{ _id: productId, quantity }],
    };

    const res = await fetch(`${API_URL}/cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error('장바구니 추가 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 장바구니 특정 항목 삭제
 * @param cartItemId - 삭제할 장바구니 아이템 ID
 * @param accessToken - 로그인된 유저의 액세스 토큰
 * @returns 삭제 후 남은 장바구니와 금액 정보
 */
export async function deleteCart(cartItemId: number, accessToken: string): ApiResPromise<IcartDeletRes> {
  try {
    const res = await fetch(`${API_URL}/cart/${cartItemId}`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('장바구니 항목 삭제 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 장바구니 여러 항목을 삭제
 * @param cartItemIds - 삭제할 장바구니 아이템 ID 배열
 * @param accessToken - 로그인된 유저의 액세스 토큰
 * @returns 삭제 후 남은 장바구니와 금액 정보
 */
export async function deleteMultiCart(cartItemIds: number[], accessToken: string): ApiResPromise<IcartDeletRes> {
  try {
    const res = await fetch(`${API_URL}/cart`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ ids: cartItemIds }),
    });

    if (!res.ok) {
      throw new Error('장바구니 항목들 삭제 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 장바구니 상품 수량 수정
 * @param cartItemId - 수정할 장바구니 아이템의 ID
 * @param quantity - 변경할 수량
 * @param accessToken - 로그인된 유저의 액세스 토큰
 * @returns 수량 수정 후 장바구니 상태
 * @description
 * 서버에 PATCH 요청을 보내 장바구니 항목의 수량을 업데이트합니다.
 */
export async function updateCart(
  cartItemId: number,
  quantity: number,
  accessToken: string,
): ApiResPromise<IcartProductRes> {
  try {
    const res = await fetch(`${API_URL}/carts/${cartItemId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ quantity }),
    });

    if (!res.ok) {
      throw new Error('장바구니 수량 수정 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 장바구니 비우기
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 삭제된 장바구니 정보와 비용 정보
 * @description
 * 사용자의 장바구니를 전체 비웁니다.
 * DELETE /carts/cleanup
 */
export async function clearCart(accessToken: string): ApiResPromise<IcartDeletRes> {
  try {
    const res = await fetch(`${API_URL}/carts/cleanup`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('장바구니 비우기 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
