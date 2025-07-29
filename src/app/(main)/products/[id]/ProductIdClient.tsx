'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Iproduct } from '@models/product';
import { getProductDetail } from '@data/functions/product';

import { ReviewTab } from '@components/button/SquareBtn';
import ProductHead, { ComingSoonProduct } from './ProductSummary';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function ProductIDPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Iproduct | null>(null);
  const [loading, setLoading] = useState(true);

  // 상품 불러오기
  useEffect(() => {
    if (!id) return;

    getProductDetail(Number(id))
      .then(res => {
        if (res.ok && res.item) {
          setProduct(res.item);
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, [id]);

  // 로딩 중에는 스켈레톤 UI 출력
  if (loading) {
    return (
      <div className="p-6 flex flex-col gap-3 justify-center items-center">
        <ProductDetailSkeleton />
      </div>
    );
  }

  if (!product) return <div className="medium-14 text-error">상품을 찾을 수 없습니다.</div>;

  // 상태가 upcoming일 경우 ComingSoon 컴포넌트 출력
  if (product.extra.status === 'upcoming') {
    return (
      <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
        <ComingSoonProduct product={product} />
        <ReviewTab />
      </div>
    );
  }

  // 기본 ProductHead
  return (
    <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
      <ProductHead product={product} />
      <ReviewTab />
    </div>
  );
}

// 스켈레톤
function ProductDetailSkeleton() {
  return (
    <div className="w-full flex justify-center items-center min-w-[320px] tablet:w-[1000px] px-4">
      <div className="flex flex-col tablet:flex-row  w-full">
        {/* 왼쪽 이미지 스켈레톤 */}
        <Skeleton
          className="h-[315px] mobile:h-[420px] tablet:h-[516px] w-full rounded-xl"
          containerClassName="relative w-full aspect-[2/3]"
        />

        {/* 오른쪽 정보 스켈레톤 */}
        <div className="flex flex-col justify-center w-full px-0 pb-0 pl-[20px] py-[20px] laptop:pb-[87px] bg-bg">
          <div className="flex flex-col gap-[10px] w-full">
            <Skeleton height={28} width="50%" />
            <Skeleton height={32} width="80%" />
            <Skeleton height={20} width="40%" />
            <Skeleton height={24} width="70%" />
            <Skeleton height={24} width="40%" />
            <Skeleton height={20} width="50%" />
            <Skeleton height={35} width={105} />
            <Skeleton height={40} width="100%" />
          </div>
        </div>
      </div>
    </div>
  );
}
