import { addBookmark, deleteBookmark } from '@data/actions/like';
import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';

interface ProductLikeBtnProps {
  productId: number; // 좋아요 누를 상품 ID
  initialBookmarkId?: number | null; // 초기 북마크 ID (좋아요가 이미 되어있을 경우)
  featchData?: () => void;
}

export function ProductLikeBtn({ productId, initialBookmarkId, featchData }: ProductLikeBtnProps) {
  const [bookmarkId, setBookmarkId] = useState<number | null>(initialBookmarkId || null); // 현재 북마크 ID(좋아요 추가 후 서버에서 받은 ID)
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const router = useRouter();

  useEffect(() => {
    if (initialBookmarkId) {
      setBookmarkId(initialBookmarkId);
    }
  }, [initialBookmarkId]);

  /**
   * 좋아요 버튼 핸들러
   */
  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 방지
    e.preventDefault(); // 이벤트 전파 방지

    // 로그인 여부 체크 (accessToken 유무)
    if (!accessToken) {
      // console.error('로그인이 필요합니다.');
      const currentPath = window.location.pathname + window.location.search;
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    if (isLoading) return;
    setIsLoading(true);

    try {
      // 현재 좋아요 상태라면 -> 삭제
      if (bookmarkId) {
        const res = await deleteBookmark(bookmarkId, accessToken);

        // 상태 업데이트
        if (res?.ok) {
          // setBookmarkId(null);
        } else {
          console.error('북마크 삭제 실패', res?.message);
        }
      } else {
        // 현재 좋아요가 아니라면 -> 추가
        const res = await addBookmark(productId, 'product', accessToken);

        // 상태 업데이트
        if (res.ok && res.item?._id) {
          // setBookmarkId(res.item._id);
        }
      }
      if (featchData) featchData();
    } catch (error) {
      console.log('좋아요 처리 중 에러 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="absolute group right-4 bottom-4">
        <button onClick={handleToggle} disabled={isLoading}>
          <Heart
            className={`w-[30px] h-[30px] cursor-pointer ${bookmarkId ? 'text-red-500 fill-red-500' : 'text-font-400'}`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </>
  );
}

export function DetailLikeBtn({ productId, initialBookmarkId }: ProductLikeBtnProps) {
  const [bookmarkId, setBookmarkId] = useState<number | null>(initialBookmarkId || null); // 현재 북마크 ID(좋아요 추가 후 서버에서 받은 ID)
  const [isLoading, setIsLoading] = useState(false);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const router = useRouter();

  useEffect(() => {
    setBookmarkId(initialBookmarkId || null);
  }, [initialBookmarkId]);

  /**
   * 좋아요 버튼 핸들러
   */
  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 방지
    e.preventDefault(); // 이벤트 전파 방지

    // 로그인 여부 체크 (accessToken 유무)
    if (!accessToken) {
      // console.error('로그인이 필요합니다.');
      const currentPath = window.location.pathname + window.location.search;
      router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
      return;
    }

    if (isLoading) return;
    setIsLoading(true);

    try {
      // 현재 좋아요 상태라면 -> 삭제
      if (bookmarkId) {
        const res = await deleteBookmark(bookmarkId, accessToken);

        // 상태 업데이트
        if (res?.ok) {
          setBookmarkId(null);
        }
      } else {
        // 현재 좋아요가 아니라면 -> 추가
        const res = await addBookmark(productId, 'product', accessToken);

        // 상태 업데이트
        if (res.ok && res.item?._id) {
          setBookmarkId(res.item._id);
        }
      }
    } catch (error) {
      console.log('좋아요 처리 중 에러 발생:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={handleToggle}
        disabled={isLoading}
        className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0"
      >
        <Heart
          className={`w-[20px] h-[20px] transition-colors duration-200 ${
            bookmarkId ? 'fill-error text-error' : 'text-red-500'
          }`}
        />
      </button>
    </>
  );
}
