import { ApiResPromise } from '@models/api';
import { categorySlugMap, Iproduct, IproductCategory } from '@models/product';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 전체 상품 조회 함수
 * @returns 상품 리스트를 반환하는 Promise
 * @description
 * 등록된 전체 상품을 조회합니다.
 * GET /products/
 */
export async function getProducts(categorySlug?: IproductCategory): ApiResPromise<Iproduct[]> {
  try {
    let url = `${API_URL}/products`;

    if (categorySlug) {
      const categories = categorySlugMap[categorySlug];

      if (categories.length === 1) {
        const query = encodeURIComponent(JSON.stringify({ 'extra.category': categories[0] }));
        url += `?custom=${query}`;
      } else if (categories.length > 1) {
        const orQuery = {
          $or: categories.map(cat => ({ 'extra.category': cat })),
        };
        const query = encodeURIComponent(JSON.stringify(orQuery));
        url += `?custom=${query}`;
      }
    }

    console.log('[상품 요청 URL]', decodeURIComponent(url));

    const res = await fetch(url, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache',
    });

    return res.json();
  } catch (error) {
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}

/**
 * 상품 상세 조회
 * @param productId - 조회할 상품 ID
 * @returns 상품 상세 정보
 * @description
 * 상품 상세 정보를 조회합니다.
 * GET /products/{_id}
 */
export async function getProductDetail(productId: number): ApiResPromise<Iproduct> {
  try {
    const res = await fetch(`${API_URL}/products/${productId}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
      },
      cache: 'no-cache', // 상세 페이지는 최신 상태가 필요하므로 no-cache
    });

    if (!res.ok) {
      throw new Error('상품 상세 조회 실패');
    }

    return res.json();
  } catch (err) {
    console.error('getProductDetail error:', err);
    throw err;
  }
}

/**
 * 판매자 등록 상품 조회
 * @param accessToken - 로그인된 판매자의 액세스 토큰
 * @returns 상품 리스트를 반환하는 Promise
 * @description
 * 자신의 판매 상품 목록을 조회합니다.
 * GET /seller/products/
 */
export async function getSellerProducts(accessToken: string): ApiResPromise<Iproduct[]> {
  try {
    const res = await fetch(`${API_URL}/seller/products`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('판매자 상품 목록 조회 실패');
    }

    return res.json();
  } catch (err) {
    console.error('getSellerProducts error:', err);
    throw err;
  }
}
