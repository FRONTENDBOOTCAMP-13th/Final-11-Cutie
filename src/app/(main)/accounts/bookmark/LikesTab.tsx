'use client';

import { getLikes } from '@data/functions/like';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import { LikeProduct } from './LikeProduct';
import { LikeProductListProps } from '@models/product';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/navigation';

export default function LikesTab() {
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const [likes, setLikes] = useState<{ product: LikeProductListProps }[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    if (!accessToken) {
      router.replace('/');
    }
  }, [hydrated, accessToken, router]);

  async function fetchLikes() {
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await getLikes(accessToken);
      if (res.ok) {
        setLikes(res.item);
      }
    } catch (error) {
      console.error('좋아요 목록 조회 실패', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchLikes();
  }, [accessToken]);

  if (!hydrated) return null;

  if (!accessToken) return null;

  return (
    <div className="w-full">
      {loading ? (
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="mb-6 flex flex-col gap-2">
              <Skeleton className="w-full h-[105px] rounded-md" />
              <Skeleton className="w-3/4 h-4" />
              <Skeleton className="w-1/2 h-4" />
              <Skeleton className="w-1/3 h-3 mt-2" />
              <Skeleton className="w-full h-[36px] rounded-md mt-2" />
            </div>
          ))}
        </div>
      ) : likes.length === 0 ? (
        <div className="text-center py-10 text-font-400">
          <LikeMessage />
        </div>
      ) : (
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
          {likes.map((like, index) => (
            <div key={`${like.product._id}-${index}`} className="mb-6">
              <LikeProduct product={like.product} className="h-full" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function LikeMessage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 text-center text-font-400">
      <div className="text-4xl mb-4">🔒</div>
      <div className="text-[12px] font-medium mobile:text-[14px] tablet:text-[16px]">
        <span className="text-primary-800 font-bold">좋아요</span>한 상품이 없습니다
      </div>
    </div>
  );
}
