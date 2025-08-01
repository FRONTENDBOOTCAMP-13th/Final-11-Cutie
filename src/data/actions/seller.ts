'use server';

import { getProductDetail } from '@data/functions/product';
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
      // seller_id: formData.get('seller_id'),
      // seller_id: '',
      name: formData.get('name'),
      price: Number(formData.get('price')),
      shippingFees: Number(formData.get('shippingFees')) || 0,
      quantity: Number(formData.get('quantity')) || 1,
      content: formData.get('content'), // 10자 이상 적을 것
      show: true, // 이거 true로 지정해서 보내기
      seller: {},

      mainImages: [
        {
          path: formData.get('mainImages'),
          name: formData.get('mainImages'),
          originalname: formData.get('mainImages'),
        },
      ],
      extra: {
        category: formData.get('category'),
        status: formData.get('status') || 'upcomming',
        goalAmount: Number(formData.get('goalAmount')) || 100,
        goalPercent: Number(formData.get('goalPercent')) || 0,
        funding: {
          startDate: new Date(formData.get('startDate') as string).getTime() || 'null',
          endDate: new Date(formData.get('endDate') as string).getTime() || 'null',
          deliveryDate: new Date(formData.get('deliveryDate') as string).getTime() || 'null',
        },
        likeCount: Number(formData.get('likeCount')) || 0,
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
 * @param updateData - 수정할 상태 정보 (예: { active: false, show: true, extra:{status: string} })
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
      goalAmount?: number;
      goalPercent?: number;
      funding?: {
        startDate?: string;
        endDate?: string;
        deliveryDate?: string;
      };
      status?: string;
      category?: string;
      likeCount?: number;
    };
  }>,
  accessToken: string,
): ApiResPromise<Iproduct> {
  try {
    // 기존 상품 정보 불러오기
    const existing = await getProductDetail(productId);
    if (!existing.ok || !existing.item) {
      throw new Error('기존 상품 정보를 불러오지 못했습니다.');
    }

    const currentProduct = existing.item;

    // 현재 시간
    const now = new Date().toISOString();
    // 배송일
    const endDate = currentProduct.extra?.funding?.endDate ?? '';

    // extra 병합
    const mergedExtra = {
      ...currentProduct.extra,
      ...updateData.extra,
      funding: {
        ...currentProduct.extra.funding,
        ...updateData.extra?.funding,
        startDate: now,
        deliveryDate: endDate,
      },
    };

    const mergedBody = {
      ...updateData,
      extra: mergedExtra,
    };

    const res = await fetch(`${API_URL}/seller/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(mergedBody),
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
