'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Iproduct } from '@models/product';
import { getProductDetail } from '@data/functions/product';

import { ReviewTab } from '@components/button/SquareBtn';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ComingSoonProduct from './ComingSoonProduct';
import ProductHead from './ProductSummary';
import EndProduct from './EndProduct';
import NotSuccessEndProduct from './NotSuccessEndProduct';

export default function ProductIDPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Iproduct | null>(null);
  const [loading, setLoading] = useState(true);

  const goalPercent = Number(product?.extra.goalPercent ?? 0);
  const endDate = new Date(product?.extra.funding?.endDate ?? '');
  const now = new Date();

  // EndProduct OR NotSuccessEndProduct 렌더링 조건
  const isGoalReached = goalPercent >= 100; // 달성률 100이상
  const isGoalNotReached = goalPercent < 100; // 달성률 100 미만
  const isEnded = now > endDate; // 종료일이 현재시간과 비교해서 지났다면

  const router = useRouter();

  // 상품 불러오기
  useEffect(() => {
    if (!id) return;

    setLoading(true);

    getProductDetail(Number(id))
      .then(res => {
        // 상품이 존재하지 않거나 응답 오류 발생한 경우
        if (!res.ok || !res.item) {
          alert('상품 정보를 불러오는 데 실패했습니다.');
          router.push('/products');
          return;
        }

        // 상품 active 상태가 false인 경우
        if (res.item.active === false) {
          alert('해당 상품은 비공개 상태입니다.');
          router.push('/products');
          return;
        }

        setProduct(res.item);
      })
      .catch(() => {
        alert('상품 정보를 불러오는 데 실패했습니다.');
        router.push('/products');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id, router]);

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
  if (product.extra.status === 'upcomming') {
    return (
      <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
        <ComingSoonProduct product={product} />
        <ReviewTab />
      </div>
    );
  }

  // TODO 달성률 기준 맞춰서 조건 변경 필요
  // 달성률 100이상, 종료일 지났을 경우 EndProduct 컴포넌트 출력
  if (isGoalReached && isEnded) {
    return (
      <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
        <EndProduct product={product} />
        <ReviewTab />
      </div>
    );
  }

  // TODO 달성률 기준 맞춰서 조건 변경 필요
  // 미달성 프로젝트일 경우 NotSuccessEndProduct 컴포넌트 출력
  if (isEnded && isGoalNotReached) {
    return (
      <div className="p-6 flex flex-col gap-6 justify-center items-center mobile:pr-[40px] tablet:pr-[90px] laptop:pr-[120px] mobile:pl-[40px] tablet:pl-[90px] laptop:pl-[120px] mobile:pt-[40px] tablet:pt-[64px] mobile:pb-10">
        <NotSuccessEndProduct product={product} />
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
export function ProductDetailSkeleton() {
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
