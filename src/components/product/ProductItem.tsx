'use client';

import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import { HeartIcon } from 'lucide-react';
import { Addfunding, SpecialPlan } from '@components/common/etc';
import { Iproduct } from '@models/product';
import { getDdayText } from '@utils/date';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

interface ProductItemProps {
  className?: string;
  product: Iproduct; // api 연결 위해 만든 type 불러오기
}

// db 연결 완료된거
export function ProductDBItem({ className, product }: ProductItemProps) {
  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${process.env.NEXT_PUBLIC_API_URL}/${path}` : '';
  // 이미지 에러 상태 관리
  const [imageError, setImageError] = useState(false);

  // 펀딩 남은 기간 설정
  // 디데이 관련 유틸함수 불러와서 사용
  const dday = getDdayText(product.extra.funding.endDate);

  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
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

        <div className="absolute group right-4 bottom-4">
          <HeartIcon
            className="w-[30px] h-[30px] hover:text-red-500 hover:fill-red-500 cursor-pointer"
            strokeWidth={1.5}
          />
        </div>
      </div>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">{product.extra.goalPercent.toLocaleString()}% 달성</p>
          <p className="text-font-400">{dday}</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold truncate">{product.name}</p>
          <p className="text-font-900">{product.price.toLocaleString()}원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">{product.seller_id}</p>
      </div>
    </div>
  );
}

// UI용
export function ProductItem({ className }: ProductItemProps) {
  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <div className="relative">
        <Image
          width={400}
          height={400}
          className="w-full h-[194px] rounded-2xl object-cover cursor-pointer"
          src={productKeroro}
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

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

//상품 컴포넌트
export function Product() {
  return (
    <div className="flex flex-col normal-10 h-[full] w-[180px]">
      {/* 썸네일 */}
      <div className="relative w-[180px] h-[105px] overflow-hidden">
        <Image className="w-full h-full object-cover" src={productKeroro} alt="상품 썸네일" />
        <div className="absolute right-[8px] bottom-[8px]">
          <HeartIcon className="w-[20px] h-[18px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div>
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 bold-14 mt-[10px] mb-[8px]">
          <p className=" text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-14 text-font-900 ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="semibold-14 text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400 ">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

// 관리자 승인 상품 컴포넌트
export function AdminApproveProduct() {
  return (
    <div className="flex flex-col normal-10 h-[full] w-[176px]">
      {/* 썸네일 */}
      <div className="relative w-[176px] h-[105px] mb-[16px] overflow-hidden">
        <Image className="w-full h-full object-cover" src={productKeroro} alt="상품 썸네일" />
        <div className="absolute right-[8px] bottom-[8px]">
          <HeartIcon className="w-[20px] h-[18px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div>
        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-13 text-font-900 ">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="medium-11 text-font-900">목표 금액 : 500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400 ">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

export function MainProductwrap({ title }: { title: string }) {
  return (
    <>
      <div className="flex  w-full justify-between items-center mb-[10px] ">
        <SpecialPlan title={title} />
        <Addfunding />
      </div>
      <div className="flex justify-center gap-8 ">
        <Product className="w-full" />
        <Product className="w-full  hidden mobile:flex" />
        <Product className="w-full  hidden tablet:flex " />
        <Product className="w-full  hidden min-[930px]:flex" />
      </div>
    </>
  );
}
