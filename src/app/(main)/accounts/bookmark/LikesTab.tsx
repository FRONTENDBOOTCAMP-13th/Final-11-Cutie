'use client';

import { getLikes } from '@data/functions/like';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import { LikeProduct } from './LikeProduct';

export default function LikesTab() {
  const accessToken = useUserStore(state => state.user?.token?.accessToken);
  const [likes, setLikes] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchLikes() {
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await getLikes(accessToken);
      console.log('좋아요 목록', res);

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

  return (
    <>
      <div className="w-full">
        <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
          {likes.map((like, index) => (
            <div key={`${like.product._id}-${index}`} className="mb-6">
              <LikeProduct product={like.product} className="h-full" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
