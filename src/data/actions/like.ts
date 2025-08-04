'use server';

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID || '';

/**
 * 북마크(좋아요) 추가 함수
 * @param targetId - 북마크 할 대상 id (펀딩 상품 | 게시글)
 * @param type - 북마크 타입 ('product' | 'user' | 'post')
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 추가 결과를 반환하는 Promise
 * @description
 * 서버에 북마크를 추가합니다.
 * POST /bookmarks/{type}
 */
export async function addBookmark(
  targetId: number,
  type: 'product' | 'post' = 'product',
  accessToken: string,
): Promise<{ ok: boolean; item?: { _id: number }; message?: string }> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${type}`, {
      method: 'POST',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        target_id: targetId,
        memo: '',
        extra: {},
      }),
    });
    const data = await res.json();

    if (!res.ok) {
      throw new Error('북마크 추가 실패');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * 북마크 삭제 함수
 * @param bookmarkId - 삭제할 북마크의 ID
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 삭제 결과를 반환하는 Promise
 * @description
 * 북마크를 서버에서 삭제합니다.
 * DELETE /bookmarks/{_id}
 */
export async function deleteBookmark(
  bookmarkId: number,
  accessToken: string,
): Promise<{ ok: boolean; message?: string }> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${bookmarkId}`, {
      method: 'DELETE',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || '북마크 삭제 실패');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * 북마크 목록 조회
 * @param type - 북마크 타입 ('product' | 'user' | 'post')
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 북마크 목록을 반환하는 Promise
 * @description
 * 사용자의 북마크 목록을 조회합니다.
 * GET /bookmarks/{type}
 */

export async function getUserBookmarks(
  type: 'product' | 'post' = 'product',
  accessToken: string,
): Promise<{ ok: boolean; item?: { _id: number; target_id: number; memo: string }[]; message?: string }> {
  try {
    const res = await fetch(`${API_URL}/bookmarks/${type}`, {
      method: 'GET',
      headers: {
        'Client-Id': CLIENT_ID,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error('북마크 목록 조회 실패');
    }

    return data;
  } catch (error) {
    throw error;
  }
}

/**
 * 특정 상품이 북마크되어 있는지 확인하는 함수
 * @param productId - 확인할 상품 ID
 * @param accessToken - 로그인한 유저의 액세스 토큰
 * @returns 북마크 정보를 반환하는 Promise (북마크되어 있지 않으면 null)
 */
export async function checkProductBookmark(
  productId: number,
  accessToken: string,
): Promise<{ _id: number; target_id: number } | null> {
  try {
    const result = await getUserBookmarks('product', accessToken);
    if (!result.ok || !result.item) {
      return null;
    }
    const bookmark = result.item.find(bookmark => bookmark.target_id === productId);
    return bookmark ? { _id: bookmark._id, target_id: bookmark.target_id } : null;
  } catch (error) {
    console.error('북마크 확인 중 오류:', error);
    return null;
  }
}
