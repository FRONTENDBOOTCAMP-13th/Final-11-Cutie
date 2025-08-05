import { ApiResPromise } from "@models/api";
import { IOrderProduct } from "@models/order";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

export async function getLikes(accessToken: string | undefined): ApiResPromise<{product: IOrderProduct}[]>{
try {
    const res = await fetch(`${API_URL}/bookmarks/product`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        Authorization: `Bearer ${accessToken}`,
      },
      cache: 'no-cache',
    });

    if (!res.ok) {
      throw new Error('종아요 목록 조회 실패');
    }

   return res.json();
  } catch (error) {
    console.error('좋아요 목록 조회 에러:', error);
    throw error;
  }
}