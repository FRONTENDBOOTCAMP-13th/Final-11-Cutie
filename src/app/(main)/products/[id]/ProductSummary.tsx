'use client';
import '@app/globals.css';
import Image from 'next/image';
import { Share2Icon } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Iproduct, ProductProps } from '@models/product';
import { getDdayText } from '@utils/date';
import { formatDate } from '@utils/formatDate';
import { getProductDetail, getSellerProductDetail } from '@data/functions/product';
import { usePathname, useRouter } from 'next/navigation';
import useUserStore from 'zustand/userStore';
import parse from 'html-react-parser';
import { DetailLikeBtn } from '@components/button/LikeBtn';
import useOrderStore from 'zustand/orderStore';
import { deleteProduct, updateProductStatus } from '@data/actions/seller';
import { createNotification } from '@data/actions/notification';
import { calculateGoalPercent } from '@utils/goalPercent';

// 펀딩 중 상품
export default function ProductHead({ product }: ProductProps) {
  const [count, setCount] = useState(1); // 수량 상태
  const { setOrderedProduct } = useOrderStore();

  const handleClickFunding = () => {
    setOrderedProduct({
      name: product.name,
      price: product.price,
      count: count,
    });
  };

  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';
  const dday = getDdayText(product.extra.funding.startDate, product.extra.funding.endDate);
  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 1 ? prev - 1 : 1)); // 최소값 1 제한
  const user = useUserStore().user;
  // 로그인한 user id와 product의 seller id가 같을 경우
  const isOwner = user?._id === product.seller._id;

  const [update, setUpdate] = useState(false); // 업데이트 상태 관리

  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  const router = useRouter();

  // 삭제 버튼 이벤트
  const handleRegisterClick = async () => {
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

      // 2. 상품 상세 조회 (구매자 확인용)
      const res = await getSellerProductDetail(product._id, accessToken);
      if (res.ok !== 1) throw new Error('상품 상세 조회 실패');

      const result = res.item;
      const productName = result.name;
      const buyerUserId = result.orders?.[0]?.user_id;

      // 구매자가 있을 경우에만 알림 전송
      if (productName && buyerUserId) {
        const notificationPayloadBase = {
          target_id: buyerUserId,
          channel: 'toast',
          extra: {
            product_id: product._id,
            product_name: productName,
            url: `/products/${product._id}`,
          },
        };

        await createNotification(
          {
            ...notificationPayloadBase,
            type: 'delete',
            content: '📢 펀딩이 종료되었어요!',
          },
          accessToken,
        );
      }

      // 3. 상품 삭제
      await deleteProduct(product._id, accessToken);

      // 4. 목록으로 이동
      router.push('/products');
    } catch (err) {
      console.error(err);
    } finally {
      setUpdate(false);
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
                    disabled={update}
                    onClick={handleRegisterClick}
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
            <p className="text-font-900 text-[18px] mobile:text-[24px] font-normal">
              목표 금액 {product.extra.goalPrice.toLocaleString()}원
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
                {/* 수량 */}
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
                {(product.price * count).toLocaleString()}원
              </span>
            </div>

            {/* 공유, 찜, 펀딩 버튼 */}
            <div className="flex flex-wrap gap-[10px] w-full mt-4">
              {/* 공유 버튼 */}
              <button className="w-[40px] h-[40px] border border-secondary-200 flex items-center justify-center cursor-pointer shrink-0">
                <Share2Icon />
              </button>

              {/* 하트(북마크) 버튼 */}
              <DetailLikeBtn productId={product._id} initialBookmarkId={product.myBookmarkId} />
              {/* 결제하기 */}
              <Link
                href="/checkout"
                onClick={handleClickFunding}
                className="flex-1 min-w-0 flex items-center justify-center whitespace-nowrap bg-primary-800 text-white h-[40px] px-[16px] py-[12px] text-[14px] font-bold cursor-pointer"
              >
                펀딩하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

//상품 상세 페이지 (480~1440)
export function ProductDetail() {
  // 현재 상품 데이터
  const [data, setData] = useState<Iproduct>();

  // 현재 주소
  const path = usePathname().split('/');
  // 현재 상품 번호
  const nowProductsNumber = Number(path[path.length - 1]);
  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  useEffect(() => {
    const getData = async () => {
      const relsult = await getProductDetail(nowProductsNumber, accessToken);

      if (relsult.ok === 1) {
        setData(relsult.item);
      }
    };

    getData();
  }, []);

  // 출력할 문자열
  const content = data?.content;
  console.log(content);

  // 태그만 추출
  let parsedElements: React.ReactNode = '';

  if (typeof content === 'string') {
    parsedElements = parse(content);
  }

  return (
    <div className="flex flex-col justify-center items-center w-full gap-5 mobile:gap-10">
      <div className="normal-14 tablet:text-[14px] laptop:text-[16px]">{parsedElements}</div>
    </div>
  );
}
