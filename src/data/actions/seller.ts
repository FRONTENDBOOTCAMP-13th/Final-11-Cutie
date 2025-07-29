'use server';

import { ApiResPromise } from '@models/api';
import { Iproduct } from '@models/product';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 판매자 상품 등록
 * @param formData - 상품 등록에 필요한 정보 (FormData 객체)
 * @param accessToken - 로그인된 판매자의 액세스 토큰
 * @returns 등록된 상품 정보를 포함한 응답
 * @description
 * 판매자가 새로운 상품을 등록합니다.
 * POST /seller/products
 */
export async function createProduct(formData: FormData, accessToken: string): ApiResPromise<Iproduct> {
  try {
    const body = {
      seller_id: formData.get('seller_id'),
      name: formData.get('name'),
      price: Number(formData.get('price')),
      shippingFees: Number(formData.get('shippingFees')),
      quantity: Number(formData.get('quantity')),
      content: formData.get('content'),
      image: formData.get('image'), // 이미지 경로 문자열일 경우
      mainImages: formData.get('mainImages'), // 배열일 경우 별도 처리 필요
      extra: {
        category: formData.get('category'),
        status: formData.get('status'),
        goalAmount: Number(formData.get('goalAmount')),
        goalPercent: Number(formData.get('goalPercent')) || 0,
        funding: {
          startDate: new Date(formData.get('startDate') as string).getTime(),
          endDate: new Date(formData.get('endDate') as string).getTime(),
          deliveryDate: new Date(formData.get('deliveryDate') as string).getTime(),
        },
      },
    };

    const res = await fetch(`${API_URL}/seller/products`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error('상품 등록 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 상품 상태 수정
 * @param productId - 수정할 상품의 ID
 * @param updateData - 수정할 상태 정보 (예: { active: false, show: true })
 * @param accessToken - 로그인된 판매자의 액세스 토큰
 * @returns 상태 수정 결과 응답
 * @description
 * 판매자가 본인의 상품 상태를 수정합니다.
 * PATCH /seller/products/{_id}
 */
export async function updateProductStatus(
  productId: number,
  updateData: Partial<{
    active: boolean;
    show: boolean;
    extra: {
      status?: string;
    };
  }>,
  accessToken: string,
): ApiResPromise<Iproduct> {
  try {
    const res = await fetch(`${API_URL}/seller/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(updateData),
    });

    if (!res.ok) {
      throw new Error('상품 상태 수정 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * 판매자 상품 삭제
 * @param productId - 삭제할 상품의 ID
 * @param accessToken - 로그인된 판매자의 액세스 토큰
 * @returns 삭제 결과 응답
 * @description
 * 판매자가 등록한 상품을 삭제합니다.
 * DELETE /seller/products/{_id}
 */
export async function deleteProduct(productId: number, accessToken: string): ApiResPromise<{ ok: 1 | 0 }> {
  try {
    const res = await fetch(`${API_URL}/seller/products/${productId}`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      throw new Error('상품 삭제 실패');
    }

    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
