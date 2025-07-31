import { ApiResPromise } from '@models/api';
import {
  categorySlugMap,
  Iproduct,
  IproductCategory,
  ProductSortOption,
  ProductStatusFilter,
  statusMap,
} from '@models/product';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 전체 상품 조회 함수
 * @returns 상품 리스트를 반환하는 Promise
 * @description
 * 등록된 전체 상품을 조회합니다.
 * GET /products/
 */
interface GetProductsParams {
  categorySlug?: IproductCategory;
  statusFilter?: ProductStatusFilter;
  sortOption?: ProductSortOption;
  keyword?: string;
}

export async function getProducts({
  categorySlug,
  statusFilter,
  sortOption,
  keyword,
}: GetProductsParams): ApiResPromise<Iproduct[]> {
  try {
    let url = `${API_URL}/products`;

    const categories = categorySlug ? categorySlugMap[categorySlug] : undefined;
    const status = statusFilter && statusFilter !== '전체 프로젝트' ? statusMap[statusFilter] : undefined;

    let customQuery = '';
    let sortQuery = '';
    let keywordQuery = '';

    if (categories && categories.length === 1 && !status) {
      // 단일 카테고리 필터일 경우(푸드, 문구, 테크, 키즈, 게임)
      customQuery = `custom=${encodeURIComponent(JSON.stringify({ 'extra.category': categories[0] }))}`;
    } else if (categories && categories.length > 1 && !status) {
      // 다중 카테고리 필터일 경우(의류/잡화, 홈/리빙, 뷰티/향수, 특별기획/시즌기획)
      customQuery = `custom=${encodeURIComponent(
        JSON.stringify({
          $or: categories.map(cat => ({ 'extra.category': cat })),
        }),
      )}`;
    } else if (!categories && status) {
      // 상태만 필터링
      customQuery = `custom=${encodeURIComponent(JSON.stringify({ 'extra.status': status }))}`;
    } else if (categories && status) {
      // 카테고리 + 상태 필터링
      const base =
        categories.length === 1
          ? { 'extra.category': categories[0] }
          : { $or: categories.map(cat => ({ 'extra.category': cat })) };

      customQuery = `custom=${encodeURIComponent(
        JSON.stringify({
          ...base,
          'extra.status': status,
        }),
      )}`;
    }

    // 정렬 쿼리 추가
    if (sortOption === '인기순') {
      sortQuery = `sort=${encodeURIComponent(JSON.stringify({ 'extra.likeCount': -1 }))}`;
    } else if (sortOption === '최신순') {
      sortQuery = `sort=${encodeURIComponent(JSON.stringify({ createdAt: -1 }))}`;
    } else if (sortOption === '마감임박순') {
      sortQuery = `sort=${encodeURIComponent(JSON.stringify({ 'extra.funding.endDate': 1 }))}`;
    }
    // '추천순'은 sort 생략

    // 키워드 추가
    if (keyword) {
      keywordQuery = `keyword=${encodeURIComponent(keyword)}`;
    }

    // 최종 URL 조합
    const queryParams = [customQuery, sortQuery, keywordQuery].filter(Boolean).join('&');
    if (queryParams) url += `?${queryParams}`;

    console.log('[최종 요청 URL]', decodeURIComponent(url));

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
