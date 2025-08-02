import { updateProductStatus } from '@data/actions/seller';
import { ProductProps } from '@models/product';
import { getDdayText } from '@utils/date';
import { formatDate } from '@utils/formatDate';
import { HeartIcon, Share2Icon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import useUserStore from 'zustand/userStore';

// 종료 상품
export function EndProduct({ product }: ProductProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [count, setCount] = useState(1); // 수량 상태

  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';

  const dday = getDdayText(product.extra.funding.startDate, product.extra.funding.endDate);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1)); // 최소값 1 제한

  const user = useUserStore().user;
  // 로그인한 user id와 product의 seller id가 같을 경우
  const isOwner = user?._id === product.seller._id;

  const [update, setUpdate] = useState(false);

  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  const handleRegisterClick = async () => {
    if (!product._id) return;

    try {
      setUpdate(true);

      if (!accessToken) throw new Error('로그인이 필요합니다.');

      await updateProductStatus(
        product._id,
        {
          extra: { status: 'success' },
        },
        accessToken,
      );

      // 업데이트 후 새로고침
      location.reload();
    } catch (err) {
      console.error('상품 상태 변경 실패:', err);
      alert('판매자 로그인이 필요합니다.');
    } finally {
      setUpdate(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-w-[320px] font-pretendard px-4">
      {' '}
      {/* 🔧 좌우 패딩 확보 */}
      <div className="flex flex-col tablet:flex-row max-w-[1200px] w-full gap-6">
        {/* 왼쪽 상품 이미지 */}
        <div className="relative aspect-[2/3] h-[315px] mobile:h-[420px] tablet:h-[516px] w-full">
          <Image
            src={imageUrl}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 1024px), (min-width: 768px) 400px, 100vw"
            className="object-cover"
          />
        </div>

        {/* 오른쪽 상품 정보 */}
        <div className="flex flex-col justify-center w-full px-0 pt-[20px] pb-0 mobile:pl-[20px] mobile:py-[50px] tablet:pl-[20px] tablet:py-[84px] laptop:pb-[87px] bg-bg">
          <div className="flex flex-col gap-[10px] w-full break-words">
            <div className="flex justify-between">
              {/* 달성률 */}
              <div className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
                달성률 <span className="text-primary-800 font-bold">{product.extra.goalPercent}%</span>
              </div>

              {/* 완료 버튼 */}
              {isOwner && (
                <button
                  disabled={update}
                  onClick={handleRegisterClick}
                  className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer"
                >
                  완료
                </button>
              )}
            </div>

            {/* 프로젝트 이름 */}
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-bold whitespace-normal break-words">
              {product.name}
            </p>
            {/* 판매자 이름 */}
            <p className="text-font-400 text-[14px] laptop:text-[16px] font-normal">{product.seller.name}</p>
            {/* 펀딩 기간 */}
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              펀딩 기간 <span className="font-bold">{dday}</span>{' '}
              <span className="font-normal">
                {formatDate(product.extra.funding.startDate)} ~ {formatDate(product.extra.funding.endDate)}
              </span>
            </p>
            {/* 목표 달성률 */}
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              목표 달성률 {product.extra.goalAmount}%
            </p>
            {/* 예상 배송일 */}
            <p className="text-font-400 text-[14px] font-normal">
              예상 배송 시작일 {formatDate(product.extra.funding.endDate)}
            </p>
            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[24px]">
                {/* 마이너스 버튼 */}
                <button
                  className="w-[35px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center cursor-pointer"
                  onClick={decrease}
                >
                  <span className="bold-24 text-font-900">−</span>
                </button>
                {/* 숫자 */}
                <span className="flex-1 text-center text-font-900">{count}</span>
                {/* 플러스 버튼 */}
                <button
                  className="w-[35px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center gap-0 cursor-pointer"
                  onClick={increase}
                >
                  <span className="bold-24 text-font-900">＋</span>
                </button>
              </div>
              {/* 가격 */}
              <span className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-bold">
                {product.price.toLocaleString()}원
              </span>
            </div>
            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex flex-wrap gap-[10px] w-full mt-4">
              {/* 공유 버튼 */}
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0">
                <Share2Icon />
              </button>
              {/* 하트 버튼 (북마크) */}
              <button
                onClick={() => setIsLiked(prev => !prev)}
                className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0"
              >
                <HeartIcon
                  className={`w-[20px] h-[20px] transition-colors duration-200 ${
                    isLiked ? 'fill-error text-error' : 'text-red-500'
                  }`}
                />
              </button>
              {/* 펀딩완료 버튼 */}
              <button
                className="flex items-center justify-center bg-secondary-200 text-white 
                w-[330px] h-[40px] px-[32px] py-[12px]
                mobile:w-[233px] 
                tablet:w-[340px] 
                laptop:w-[340px] 
                medium-14 laptop:text-[16px]"
              >
                펀딩완료
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
