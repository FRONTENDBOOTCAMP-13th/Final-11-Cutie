'use client';

import { useEffect, useState } from 'react';
import { Star } from 'lucide-react';
import { getProductDetail } from '@data/functions/product';
import { getSellerReviews } from '@data/functions/getMyReviews';
import { IReview } from '@models/review'; 
import ReviewImageList from '@components/review/ReviewSummary';

const innerPadding = 'p-[20px]';
const selleRatingSort = 'flex flex-col items-center ';
const allScoreSort = 'flex gap-[10px] items-center ';
const nowScoreText = 'font-[700] normal-18 ' + 'mobile:text-[24px] ';
const maxScoreText = 'font-[400] normal-14 ' + 'mobile:text-[14px] ';
const sizeStar = 'w-[18px] h-[18px] ' + 'mobile:w-[24px] mobile:h-[24px] ';
const filterOptionSort = 'flex justify-end pt-[40px] ';
const filterOptionText = 'normal-14 font-[400]';
const sortCommentList = 'grid gap-[40px] justify-center ';
const titleText = 'normal-14 mobile:text-[20px] ' ;


interface ReviewSectionProps {
  productId: number;
}

export default function ReviewSection({ productId }: ReviewSectionProps) { 
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [loading, setLoading] = useState(true);
  const [averageRating, setAverageRating] = useState(0);

  // 리뷰 데이터 로드
  useEffect(() => {
    const loadReviews = async () => {
      try {
        setLoading(true);
        
        // 상품 ID로 상품 정보 조회하여 판매자 ID 가져오기
        const productResponse = await getProductDetail(productId);
        
        if (productResponse.ok === 1 && productResponse.item) {
          const sellerId = productResponse.item.seller_id?.toString() || productResponse.item.seller_id;
          
          // 판매자 ID로 리뷰 목록 조회
          const reviewResponse = await getSellerReviews(String(sellerId));
          
          if (reviewResponse.ok === 1 && reviewResponse.item) {
            const firstProduct = reviewResponse.item[0];
            const replies = firstProduct.replies || [];
  
            setReviews(replies);
            
            // 평균 평점 계산
            if (replies.length > 0) {
              const totalRating = replies.reduce((sum, review) => sum + (review.rating || 0), 0);
              const avgRating = totalRating / replies.length;

              setAverageRating(Math.round(avgRating * 10) / 10);
            } else {
              setAverageRating(0);
            }
          } else if (reviewResponse.ok === 0) {
            console.error('리뷰 조회 실패:', reviewResponse.message);
            setAverageRating(0);
          }
        }
        } catch (err) {
          console.error('리뷰 로딩 오류:', err);
        } finally {
          setLoading(false);
        }
      };

    if (productId) {
      loadReviews();
    }
  }, [productId]);

  // 로딩 상태
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
        {/* 해당 판매자에 대한 구매 만족도 */}
        <div className={selleRatingSort}>
          <span className={titleText}>해당 판매자에 대한 구매 만족도</span>
          <div className={allScoreSort}>
            <Star size={18} className={sizeStar} fill="#e3fb2d" stroke="#e3fb2d" />
            <div>
              <span className={nowScoreText}>
                {isNaN(averageRating) ? '0.0' : averageRating}
              </span>
              <span className={maxScoreText}>/5.0</span>
            </div>
          </div>
        </div>

        {/* 사진후기 | 높은평점순 | 낮은평점순 | 최신순 */}
        <div className={filterOptionSort + filterOptionText}>
          <ul className="flex gap-[5px] whitespace-nowrap cursor-pointer">
            <li>사진 후기</li>
            <li>|</li>
            <li>높은평점순</li>
            <li>|</li>
            <li>낮은평점순</li>
            <li>|</li>
            <li>최신순</li>
          </ul>
        </div>

        {/* 리뷰 목록 */}
        <div className={sortCommentList + 'mobile:pt-10 pt-6'}>
          {reviews.length > 0 ? (
            reviews.map((review) => (
              <ReviewImageList 
                key={review._id}
                review={review}
              />
            ))
          ) : (
            <div className="text-center py-10 text-font-400">
              등록된 후기가 없습니다.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}