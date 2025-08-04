import { addBookmark, deleteBookmark } from '@data/actions/like';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';

interface ProductLikeBtnProps {
  productId: number; // 좋아요 누를 상품 ID
  initialIsLiked?: boolean; // 초기 좋아요 여부 (false)
  initialBookmarkId?: number | null; // 초기 북마크 ID (좋아요가 이미 되어있을 경우)
  onBookmarkChange?: (isLiked: boolean, bookmarkId?: number) => void;
}

export function ProductLikeBtn({
  productId,
  initialIsLiked = false,
  initialBookmarkId,
  onBookmarkChange,
}: ProductLikeBtnProps) {
  const [isLiked, setIsLiked] = useState(initialIsLiked); // 현재 좋아요 상태
  const [bookmarkId, setBookmarkId] = useState<number | null>(initialBookmarkId || null); // 현재 북마크 ID(좋아요 추가 후 서버에서 받은 ID)
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const router = useRouter();

  // 초기 상태 동기화
  useEffect(() => {
    setIsLiked(initialIsLiked);
    setBookmarkId(initialBookmarkId || null);
  }, [initialIsLiked, initialBookmarkId]);

  /**
   * 좋아요 버튼 클릭
   */
  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 방지
    e.preventDefault(); // 이벤트 전파 방지

    // 로그인 여부 체크 (accessToken 유무)
    if (!accessToken) {
      console.error('로그인이 필요합니다.');
      const currentPath = window.location.pathname + window.location.search;
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    if (isLoading) return;
    setIsLoading(true);

    try {
      // 현재 좋아요 상태라면 -> 삭제
      if (isLiked && bookmarkId) {
        const res = await deleteBookmark(bookmarkId, accessToken);

        // 상태 업데이트
        if (res?.ok) {
          setIsLiked(false);
          setBookmarkId(null);
          onBookmarkChange?.(false);
          console.log('북마크 삭제 완료');
        } else {
          console.error('북마크 삭제 실패', res?.message);
        }
      } else {
        // 현재 좋아요가 아니라면 -> 추가
        const res = await addBookmark(productId, 'product', accessToken);

        // 상태 업데이트
        if (res?.ok && res?.item?._id) {
          setIsLiked(true);
          setBookmarkId(res.item._id);
          onBookmarkChange?.(true, res.item._id);
        }
      }
    } catch (error) {
      console.log('좋아요 처리 중 에러 발생:', error);
      // 에러 시 UI 되돌리기
      setIsLiked(initialIsLiked);
      setBookmarkId(initialBookmarkId || null);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div className="absolute group right-4 bottom-4">
        <button onClick={handleToggle} disabled={isLoading}>
          <Heart
            className={`w-[30px] h-[30px] cursor-pointer ${isLiked ? 'text-red-500 fill-red-500' : 'text-font-400'}`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </>
  );
}
