'use client';

import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import { HeartIcon } from 'lucide-react';
import { Iproduct } from '@models/product';
import { getDdayText } from '@utils/date';

import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { IOrderProduct, IUserOrderList } from '@models/order';
import useUserStore from 'zustand/userStore';
import { getUserOrderList } from '@data/functions/getOrder';

interface ProductDBProps {
  className?: string;
  product: Iproduct; // api 연결 위해 만든 type 불러오기
}

interface ProductItemProps {
  className?: string;
}

interface ProductProps {
  className?: string;
  orderProduct: IOrderProduct;
  orderId: number;
}

// db 연결 완료된거
export function ProductDBItem({ className, product }: ProductDBProps) {
  // product의 상품 이미지 경로 매칭
  const path = product.mainImages?.[0]?.path;
  const imageUrl = path ? `${path}` : '';
  // 이미지 에러 상태 관리
  const [imageError, setImageError] = useState(false);

  // 펀딩 남은 기간 설정
  // 디데이 관련 유틸함수 불러와서 사용
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
          <p className="text-primary-800 ">{product.extra.goalPercent.toLocaleString()}% 달성</p>
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
export function ProductItem({ className }: ProductItemProps) {
  return (
    <div className={`flex flex-col gap-[15px] tablet:gap-5 normal-14 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <Link href="/products/1">
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
      </Link>

      <div className="space-y-2.5 tablet:space-y-5">
        {/* 달성율, 디데이 */}
        <div className="flex gap-1 font-bold tablet:text-[20px] laptop:text-[24px]">
          <p className="text-primary-800 ">5,394% 달성</p>
          <p className="text-font-400">D-7</p>
        </div>

        {/* 제품명, 가격 */}
        <div className="tablet:text-[14px] laptop:text-[18px] flex flex-col gap-1.5">
          <p className="text-font-900 font-bold">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="text-font-900">500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="text-font-400 tablet:text-[14px] laptop:text-[18px]">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

//구매내역 아이템
export function Product({ className, orderProduct, orderId }: ProductProps) {

  const reviewWriteUrl = `/accounts/myReview/writeReview?productId=${orderProduct._id}&orderId=${orderId}&productName=${encodeURIComponent(orderProduct.name)}&price=${orderProduct.price}`;

  return (
    <div className={`flex flex-col normal-10 h-full w-full  ${className || ''}`}>
      {/* 썸네일 */}
      <div className="relative">
        <Link href={`/products/${orderProduct._id}`}>
          <Image
            width={400}
            height={400}
            className="w-full h-[105px] rounded-md object-cover cursor-pointer"
            src={orderProduct.image.path}
            alt={orderProduct.name}
            priority
          />
        </Link>

        <div className="absolute group right-4 bottom-4">
          <HeartIcon className="w-[20px] h-[18px] hover:text-red-500 hover:fill-red-500" strokeWidth={1.5} />
        </div>
      </div>

      <div>
        {/* 달성율, 디데이 */}
        {/* <div className="flex gap-1 bold-14 mt-[10px] mb-[8px]">
          <p className="text-primary-800">% 달성</p>
          <p className="text-font-400">d-7</p> 
        </div> */}

        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-14 text-font-900">{orderProduct.name}</p>
          <p className="semibold-14 text-font-900">{orderProduct.price.toLocaleString()}원</p>
        </div>

        {/* 회사명 */}
        {/* 회사명 받아와야함 */}
        <p className="mt-[12px] medium-12 text-font-400">(주) 1더하기1은귀요미</p>
      </div>

      {/* 리뷰 작성 버튼 */}
        <Link href={reviewWriteUrl}>
          <button className="hover:bg-primary-800 hover:text-white cursor-pointer border-1 border-primary-800 p-2 semibold-14 rounded-md mt-[12px] text-primary-800">
            리뷰작성
          </button>
        </Link>
    </div>
  );
}

// 구매내역 아이템 리스트
export function PurchaseHistoryItemWrap() {
  const [orders, setOrders] = useState<IUserOrderList[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const accessToken = useUserStore().user?.token?.accessToken;

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken) return;
      
      try {
        const response = await getUserOrderList(accessToken);
        
        if (response.ok === 1) {
          const orderData = response.item;
          setOrders(Array.isArray(orderData) ? orderData : [orderData]);
        } else {
          setError(response.message);
        }
        
      } catch (error) {
        console.error('주문 내역 조회 에러:', error);
        setError('주문 내역을 불러오는 중 오류가 발생했습니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [accessToken]);

  if (loading) return <div>구매 내역을 불러오는 중...</div>;
  if (error) return <div>오류: {error}</div>;

  if (orders.length === 0) {
    return (
      <div className="p-6 text-center text-font-400">
        구매내역이 없습니다.
      </div>
    );
  }

  return (
    <>
      {orders.map((order) => (
        <div key={order._id} className="mb-8">
          <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-3 min-[930px]:grid-cols-4 gap-4">
            {order.products.map((orderProduct) => (
              <Product 
                key={orderProduct._id}
                orderProduct={orderProduct}
                orderId={order._id} 
                className="w-full"
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}



// 관리자 승인 상품 컴포넌트 (사용안함)
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
          <p className="bold-13 text-font-900">개구리 중사 케로케로케로케로 티셔츠</p>
          <p className="medium-11 text-font-900">목표 금액 : 500,000원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400 ">(주) 1더하기1은귀요미</p>
      </div>
    </div>
  );
}

