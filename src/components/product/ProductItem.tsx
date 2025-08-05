'use client';

import '@app/globals.css';
import Image from 'next/image';
import { HeartIcon } from 'lucide-react';
import { Iproduct } from '@models/product';
import { getDdayText } from '@utils/date';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';
import Link from 'next/link';
import { ProductLikeBtn } from '@components/button/LikeBtn';
import { calculateGoalPercent } from '@utils/goalPercent';

interface ProductDBProps {
  className?: string;
  product: Iproduct; // api 연결 위해 만든 type 불러오기
}

interface ProductItemProps {
  className?: string;
  imgPath: string;
  name: string;
  price: number;
  company: string;
  startDday: number;
  endDday: number;
  _id: number;
}

// db 연결 완료된거
export function ProductDBItem({ className, product }: ProductDBProps) {
  // product의 상품 이미지 경로
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';
  // 이미지 에러 상태 관리
  const [imageError, setImageError] = useState(false);

  // 펀딩 남은 기간 설정 (디데이 관련 유틸함수 불러와서 사용)
  const dday = getDdayText(product.extra.funding.startDate, product.extra.funding.endDate);

  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 mb-6 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <Link href={`/products/${product._id}`}>
        <div className="relative">
          {/* 이미지가 db에 없다면 스켈레톤 이미지 출력(테스트 완료) */}
          {imageUrl && !imageError ? (
            <Image
              src={imageUrl}
              width={400}
              height={400}
              alt={product.name}
              className="w-full h-[194px] rounded-2xl object-cover cursor-pointer"
              onError={() => setImageError(true)} // 에러라면 스켈레톤 실행되도록 상태 설정
              priority
            />
          ) : (
            <Skeleton height={194} borderRadius={16} className="w-full h-full rounded-2xl" />
          )}

          {/* 로딩중이 아닐때만 표시 */}
          <ProductLikeBtn key={`${product._id}`} productId={product._id} initialBookmarkId={product.myBookmarkId} />
        </div>
      </Link>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          {/* (현재 모금액 / 목표 금액) × 100 */}
          <p className="text-primary-800 ">{calculateGoalPercent(product).toLocaleString()}% 달성</p>
          <p className="text-font-400">{dday}</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold truncate">{product.name}</p>
          {product.price && <p className="text-font-900">{product.price.toLocaleString()}원</p>}
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">{product.seller.name}</p>
      </div>
    </div>
  );
}

// UI용 상품 아이템 (메인, 상품페이지 전체 리스트에서 사용)
{
  /* 상품 데이터베이스 가져와서 맵 안에 링크 넣어서 이동하게 해야 함 (이미지 클릭하면 경로 이동) */
}
export function ProductItem({
  className,
  imgPath = '',
  name,
  price,
  company,
  startDday,
  endDday,
  _id,
}: ProductItemProps) {
  // 남은 날짜
  const Dday = getDdayText(startDday, endDday);

  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <Link href={`/products/${_id}`}>
        <div className="relative">
          <Image
            width={400}
            height={400}
            className="w-full h-[194px] rounded-2xl object-cover cursor-pointer"
            src={imgPath}
            alt="/"
            priority
          />

          <div className="absolute group right-4 bottom-4">
            <HeartIcon
              className="w-[30px] h-[30px] hover:text-red-500 hover:fill-red-500 cursor-pointer"
              strokeWidth={1.5}
            />
          </div>
        </div>
      </Link>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">{Dday}</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold">{name}</p>
          <p className="text-font-900">{price?.toLocaleString()}원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">{company}</p>
      </div>
    </div>
  );
}
