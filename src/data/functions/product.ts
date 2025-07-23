import { ApiResPromise } from '@models/api';
import { Iproduct } from '@models/product';

export const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function getProducts(): ApiResPromise<Iproduct[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      headers: {
        'Client-Id': CLIENT_ID,
      },
      // 캐시상태 넣어놔서 업데이트가 느림
      // 빠르게 확인용 => cache: 'no-store', 으로 교체
      cache: 'force-cache',
    });
    return res.json();
  } catch (error) {
    // 네트워크 오류 처리
    console.error(error);
    return { ok: 0, message: '일시적인 네트워크 문제로 등록에 실패했습니다.' };
  }
}
