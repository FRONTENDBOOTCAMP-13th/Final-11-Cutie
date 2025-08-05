import { IcartProductRes } from '@models/cart';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 장바구니 목록을 조회합니다.(로그인)
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 장바구니 상품 목록과 비용 정보
 * @description
 * 로그인 한 사용자의 장바구니 목록을 조회합니다.
 * GET /carts/
 */
export async function getCartItems(accessToken: string): Promise<IcartProductRes> {
  try {
    const res = await fetch(`${API_URL}/cart`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      // 캐시상태 넣어놔서 업데이트가 느림
      // 빠르게 확인하려면 설정에서 캐시 삭제하기
      cache: 'force-cache',
    });

    if (!res.ok) {
      throw new Error('장바구니 목록 조회 실패');
    }

    return res.json();
  } catch (err) {
    console.error('getCartItems error:', err);
    throw err;
  }
}
