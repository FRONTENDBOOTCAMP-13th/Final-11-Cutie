'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getProductDetail } from '@data/functions/product';
import { getSellerReviews } from '@data/functions/getMyReviews';
import { IReview } from '@models/review';
import ReviewImageList from '@components/review/ReviewSummary';
import useUserStore from 'zustand/userStore';

const innerPadding = 'p-[20px]';
const selleRatingSort = 'flex flex-col items-center ';
const allScoreSort = 'flex gap-[10px] items-center ';
const nowScoreText = 'font-[700] normal-18 ' + 'mobile:text-[24px] ';
const maxScoreText = 'font-[400] normal-14 ' + 'mobile:text-[14px] ';
const sizeStar = 'w-[18px] h-[18px] ' + 'mobile:w-[24px] mobile:h-[24px] ';
// const filterOptionSort = 'flex justify-end pt-[40px] ';
// const filterOptionText = 'normal-14 font-[400]';
const sortCommentList = 'grid gap-[40px] justify-center ';
const titleText = 'normal-14 mobile:text-[20px] ';

interface ReviewSectionProps {
  productId: number;
}

export default function ReviewSection({ productId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  const accessToken = useUserStore().user?.token?.accessToken;

  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);

        // 상품 상세 정보 → 판매자 ID 가져오기
        const productResponse = await getProductDetail(productId, accessToken);

        if (productResponse.ok === 1 && productResponse.item) {
          const sellerId = String(productResponse.item.seller_id);

          // 판매자 리뷰 전체 조회
          const reviewResponse = await getSellerReviews(sellerId);

          if (reviewResponse.ok === 1 && reviewResponse.item) {
            const allProducts = Array.isArray(reviewResponse.item)
              ? reviewResponse.item
              : [reviewResponse.item];

            // 모든 상품의 리뷰를 합쳐서 단일 리스트로 만들기
            const allReplies = allProducts.flatMap((product) => product.replies || []);

            setReviews(allReplies);

            if (allReplies.length > 0) {
              const totalRating = allReplies.reduce((sum, review) => sum + (review.rating || 0), 0);
              const avgRating = totalRating / allReplies.length;
              setAverageRating(Math.round(avgRating * 10) / 10);
            } else {
              setAverageRating(0);
            }
          } else {
            setReviews([]);
            setAverageRating(0);
          }
        }
      } catch (err) {
        console.error("리뷰 로딩 오류:", err);
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      loadReviews();
    }
  }, [productId]);

  // 로딩 중 표시
  if (loading) {
    return (
      <div className={innerPadding}>
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-font-400">리뷰를 불러오는 중...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={innerPadding}>
      <div>
        {/* 평균 평점 */}
        <div className={selleRatingSort}>
          <span className={titleText}>해당 판매자에 대한 구매 만족도</span>
          <div className={allScoreSort}>
            <Star size={18} className={sizeStar} fill="#e3fb2d" stroke="#e3fb2d" />
            <div>
              <span className={nowScoreText}>{isNaN(averageRating) ? "0.0" : averageRating}</span>
              <span className={maxScoreText}>/5.0</span>
            </div>
          </div>
        </div>

        {/* 리뷰 리스트 */}
        <div className={sortCommentList + " mobile:pt-10 pt-6"}>
          {reviews.length > 0 ? (
            reviews.map((review) => <ReviewImageList key={review._id} review={review} />)
          ) : (
            <div className="text-center py-10 text-font-400">등록된 후기가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
