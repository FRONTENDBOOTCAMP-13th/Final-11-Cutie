import { Heart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';

interface ProductLikeBtnProps {
  productId: number; // 좋아요 누를 상품 ID
  initialIsLiked?: boolean; // 초기 좋아요 여부 (false)
  initialBookmarkId?: number; // 초기 북마크 ID (좋아요가 이미 되어있을 경우)
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

  // zutand에서 로그인 유저 정보 가져오기
  const { user } = useUserStore();
  const router = useRouter();

  // 초기 상태 동기화
  useEffect(() => {
    setIsLiked(initialIsLiked);
    setBookmarkId(initialBookmarkId || null);
  }, [initialIsLiked, initialBookmarkId]);

  /**
   * 좋아요 버튼 클릭
   */
  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // 이벤트 전파 방지
    e.preventDefault(); // 이벤트 전파 방지
    setIsLiked(!isLiked);
  };

  // 로그인 여부 체크 (accessToken 유무)
  if (!accessToken) {
    const currentPath = window.location.pathname + window.location.search;
    router.push(`/login?redirect=${encodeURIComponent(currentPath)}`);
    return;
  }
  return (
    <>
      <div className="absolute group right-4 bottom-4">
        <button onClick={handleToggle}>
          <Heart
            className={`w-[30px] h-[30px] cursor-pointer ${isLiked ? 'text-red-500 fill-red-500' : 'text-font-400'}`}
            strokeWidth={1.5}
          />
        </button>
      </div>
    </>
  );
}
