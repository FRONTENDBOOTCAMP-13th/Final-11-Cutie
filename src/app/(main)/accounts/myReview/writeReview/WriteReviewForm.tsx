'use client'

import { CreateProjectTitle } from "@components/common/etc";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import { IReviewCreateReq } from "@models/review";
import { createReview } from "@data/actions/review";
import useUserStore from "zustand/userStore";
import { useRouter, useSearchParams } from "next/navigation";


interface ReviewFormProps {
  productId: number;
  orderId: number;
}

export default function WriteReviewForm({ productId, orderId }: ReviewFormProps) {
  const [rating, setRating] = useState(5);
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const accessToken = useUserStore().user?.token?.accessToken;
  const router = useRouter();
  const searchParams = useSearchParams(); 
  const sellerId = searchParams.get('sellerId'); // URL에서 sellerId 가져오기

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      // 리뷰 데이터 구성
      const reviewData: IReviewCreateReq = {
        order_id: orderId,
        product_id: productId,
        rating: rating,
        content: content,
        seller_id: Number(sellerId), 
        extra: {
          images: []
        }
      };

      // 액세스 토큰 가져오기 
      const response = await createReview(reviewData, accessToken!);

      if (response) {
        alert('리뷰가 성공적으로 등록되었습니다!');
        router.push('/accounts');
      }
    } catch {
      alert('리뷰 등록 중 오류가 발생했습니다.');
    } 
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-8 normal-14 tablet:normal-18">
      {/* 별점 */}
      <Rating rating={rating} setRating={setRating} />

      {/* 텍스트 후기 작성 */}
      <div>
        <CreateProjectTitle title="후기를 작성해주세요." />
        <div className="pt-2">
          <textarea
            name="review"
            id="review"
            required
            placeholder="구매하신 아이템의 후기를 20자 이상 남겨주시면 다른 구매자들에게도 도움이 됩니다."
            maxLength={100}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-1 border-font-400 rounded-md w-full p-2"
          />
          <span className="text-gray-400 text-right block">
            {content.length} / 100
          </span>
        </div>
      </div>

      {/* 이미지 첨부 */}
      <div>
        <CreateProjectTitle 
          title="사진을 첨부해주세요." 
          sub="최대 3장까지 첨부할 수 있어요. ( jpg, png, webp)" 
          subClassName="pb-[10px]" 
        />

        {/* 이미지 리스트 */}
         {/* 기능 넣기 전 */}
        <div className="flex gap-3">
          {[0, 1, 2].map((index) => (
            <div 
              key={index}
              className="w-24 h-24 flex items-center justify-center border-2 border-dashed border-secondary-200 text-secondary-200 rounded cursor-not-allowed opacity-50"
            >
              +
            </div>
          ))}
        </div>
      </div>

      {/* 리뷰 등록 버튼 */}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`flex items-center justify-center medium-14 px-[31px] py-[8px] border bg-primary-800 rounded-[4px] text-white w-full ${
          isSubmitting 
            ? 'opacity-50 cursor-not-allowed' 
            : 'hover:bg-primary-700 cursor-pointer'
        }`}
      >
        {isSubmitting ? "등록 중..." : "리뷰 등록"}
      </button>
    </form>
  );
}

function Rating({ rating, setRating }: { rating: number; setRating: (rating: number) => void }) {
  return (
    <div>
      <CreateProjectTitle title="이 상품 어때요?" />
      <div className="flex flex-row">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="pt-2 cursor-pointer"
            onClick={() => setRating(star)}
          >
            <StarIcon
              className={
                star <= rating
                  ? 'fill-amber-300 stroke-amber-300 tablet:w-10 tablet:h-10'
                  : 'fill-secondary-200 stroke-secondary-200 tablet:w-10 tablet:h-10'
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}