'use client';

import { useState, useEffect } from 'react';
import useUserStore from 'zustand/userStore';
import { getMyReviews } from '@data/functions/getMyReviews';
import { IReview } from '@models/review';
import { useRouter } from 'next/navigation';
import { SyncLoad } from '../../OrderHistory';

type ReviewItemProps = {
  num: number;
  title: string;
  date: string;
  rating?: number;
};

export default function MyReviewTab() {
  const [myReviews, setMyReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);
  const accessToken = useUserStore().user?.token?.accessToken;

  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!accessToken) {
      router.push('/');
    }
  }, [hydrated, accessToken, router]);

  // 내가 남긴 리뷰 데이터 로드
  useEffect(() => {
    const loadMyReviews = async () => {
      try {
        setLoading(true);

        if (!accessToken) {
          return <div className="p-6 text-center text-font-400">로그인이 필요합니다.</div>;
        }
        // 내가 남긴 리뷰 조회 API 호출
        const response = await getMyReviews(accessToken);

        if (response.ok === 1 && response.item) {
          const reviews = Array.isArray(response.item) ? response.item : [response.item];
          setMyReviews(reviews);
        } else {
          setMyReviews([]);
        }
      } catch (err) {
        console.error('내 리뷰 로딩 오류:', err);
        setMyReviews([]);
      } finally {
        setLoading(false);
      }
    };

    loadMyReviews();
  }, [accessToken]);

  if (!hydrated) return null;

  if (!accessToken) return null;

  if (loading) return <SyncLoad />;

  return (
    <>
      <section className="p-[10px]">
        <div className="w-full text-center bold-14 laptop:text-[16px]">
          {/* 제목 부분 */}
          <div className="grid grid-cols-[auto_1fr_auto] overflow-hidden rounded-lg">
            <p className="bg-primary-800 px-2 min-w-10 py-1.5 text-white">NO</p>
            <p className="bg-primary-800 border-x border-white py-1.5 text-white">제목</p>
            <p className="bg-primary-800 px-2 hidden mobile:block mobile:min-w-24 py-1.5 text-white">날짜</p>
          </div>

          {/* 리뷰 리스트 부분 */}
          <div className="flex flex-col gap-3 normal-14 laptop:text-[16px] text-font-900 mt-3">
            {myReviews.length > 0 ? (
              myReviews.map((review, index) => (
                <div key={review._id} className="cursor-pointer">
                  <ReviewItem
                    num={index + 1}
                    title={review.content}
                    date={review.createdAt?.split(' ')[0] ?? ''}
                    rating={review.rating}
                  />
                </div>
              ))
            ) : (
              <div className="text-center py-10 text-font-400">
                <ReviewMessage />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function ReviewItem({ num, title, date, rating }: ReviewItemProps) {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] border border-gray-200 hover:bg-gray-50 transition-colors">
      <div className="px-2 py-2 border-r border-gray-200 min-w-10 flex items-center justify-center">{num}</div>
      <div className="px-3 py-2 border-r border-gray-200 text-left flex items-center justify-between">
        <span className="whitespace-pre-wrap break-words text-left w-full">{title}</span>
        {rating && (
          <div className="flex items-center gap-1 ml-2">
            <span className="text-amber-400">★</span>
            <span className="text-sm text-gray-600">{rating}</span>
          </div>
        )}
      </div>
      <div className="px-2 py-2 hidden mobile:flex mobile:min-w-24 items-center justify-center text-sm text-gray-600">
        {date}
      </div>
    </div>
  );
}

function ReviewMessage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 text-center text-font-400">
      <div className="text-4xl mb-4">🔒</div>
      <div className="text-[12px] font-medium mobile:text-[14px] tablet:text-[16px]">
        <span className="text-primary-800 font-bold">작성한 리뷰</span>가 없습니다
      </div>
    </div>
  );
}
