import { deleteProduct, updateProductStatus } from '@data/actions/seller';
import { ProductProps } from '@models/product';

import { getDdayText } from '@utils/date';
import { formatDate } from '@utils/formatDate';
import { calculateGoalPercent } from '@utils/goalPercent';
import { HeartIcon, Share2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import useUserStore from 'zustand/userStore';

//공개예정 상품
export default function ComingSoonProduct({ product }: ProductProps) {
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

  const [update, setUpdate] = useState(false); // 등록 상태 관리

  const [isDelete, setIsDelete] = useState(false); // 삭제 상태 관리

  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  const router = useRouter();

  // 등록 버튼 이벤트
  const handleRegisterClick = async () => {
    if (!product._id) return;

    try {
      setUpdate(true);

      if (!accessToken) throw new Error('로그인이 필요합니다.');

      await updateProductStatus(
        product._id,
        {
          extra: { status: 'funding' },
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

  // 삭제 버튼 이벤트
  // TODO 북마크한 사용자들에게 알림 전달 필요, 로직은 NotSuccessEndProduct 참고
  const handleDeleteClick = async () => {
    if (!product._id) return;

    // 확인 안내
    if (!confirm('펀딩을 종료하시겠습니까?')) return;

    try {
      setUpdate(true);

      if (!accessToken) throw new Error('로그인이 필요합니다.');

      // 1. 상품 상태 false로 바꿈
      await updateProductStatus(
        product._id,
        {
          extra: { status: 'false' },
        },
        accessToken,
      );

      // 2. 여기 북마크 한 사용자 알림 전송 로직 추가, 알림 type은 dontShow
      // 알림 메세지 확인 -> AlertMessage 참고

      // 3. 상품 삭제
      await deleteProduct(product._id, accessToken);

      // 4. 목록으로 이동
      router.push('/products');
    } catch (err) {
      console.error(err);
    } finally {
      setIsDelete(false);
    }
  };

  return (
    <div className="w-full flex justify-center items-center min-w-[320px] font-pretendard px-4">
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
                달성률{' '}
                <span className="text-primary-800 font-bold">{calculateGoalPercent(product).toLocaleString()}%</span>
              </div>
              <div className="flex gap-4">
                {/* 등록 버튼 */}
                {isOwner && (
                  <button
                    disabled={update}
                    onClick={handleRegisterClick}
                    className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer"
                  >
                    등록
                  </button>
                )}
                {/* 수정 버튼 */}
                {isOwner && (
                  <Link
                    href={`/products/${product._id}/edit`}
                    className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-primary-800 rounded-[4px] text-primary-800 hover:bg-primary-800 hover:text-white hover:border-primary-800 cursor-pointer"
                  >
                    수정
                  </Link>
                )}
                {/* 종료(삭제) 버튼 */}
                {isOwner && (
                  <button
                    disabled={isDelete}
                    onClick={handleDeleteClick}
                    className="flex items-center justify-center medium-14 laptop:text-[16px] h-[24px] px-[11px] py-[4px] border border-error rounded-[4px] text-error hover:bg-error hover:text-white hover:border-error cursor-pointer"
                  >
                    종료
                  </button>
                )}
              </div>
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

            {/* 목표 금액 */}
            <p className="text-font-900 text-[18px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] font-normal">
              목표 금액 {product.extra.goalPrice.toLocaleString()}원
            </p>

            {/* 예상 배송 시작일 */}
            <p className="text-font-400 text-[14px] font-normal">
              예상 배송 시작일 {formatDate(product.extra.funding.endDate)}
            </p>

            {/* 수량 + 가격 */}
            <div className="flex items-center gap-4">
              <div className="flex items-center border w-[105px] h-[35px] border-secondary-200 overflow-hidden text-font-500 text-[20px]">
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
              {/* 프로젝트 가격 */}
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
              {/* 하트(북마크 버튼) */}
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

              {/* 공개예정 버튼 */}
              <button className="flex-1 min-w-0 flex items-center justify-center whitespace-nowrap bg-secondary-200 text-white h-[40px] px-[16px] py-[12px] bold-14 cursor-pointer">
                공개 예정
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
