'use client';

import { getUserOrderList } from '@data/functions/getOrder';
import { getProductDetail } from '@data/functions/product';
import { IOrderProduct, IUserOrderList } from '@models/order';
import { HeartIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';

interface OrderedProductProps {
  className?: string;
  orderProduct: IOrderProduct;
  orderId: number;
}

//구매내역 아이템
export function OrderHistoryProduct({ className, orderProduct, orderId }: OrderedProductProps) {
  const [sellerName, setSellerName] = useState<string>(''); //상품에서 회사명 가져오기
  const [sellerId, setSellerId] = useState<number | null>(null); //상품에서 판매자 id 가져오기
  const accessToken = useUserStore(state => state.user?.token?.accessToken);

  useEffect(() => {
    async function fetchSeller() {
      try {
        const response = await getProductDetail(Number(orderProduct._id), accessToken); //상품정보 가져오기

        if (response.ok === 1) {
          const productDetail = response.item; // 상품 데이터
          setSellerName(productDetail.seller?.name || '판매자 정보 없음');
          setSellerId(productDetail.seller_id || null);
        }
      } catch {
        setSellerName('판매자 정보 없음');
        setSellerId(null);
      }
    }
    fetchSeller();
  }, [orderProduct._id]);

  const reviewWriteUrl = `/accounts/myReview/writeReview?productId=${orderProduct._id}&orderId=${orderId}&productName=${encodeURIComponent(orderProduct.name)}&price=${orderProduct.price}&sellerId=${sellerId}&sellerName=${encodeURIComponent(sellerName)}`;

  return (
    <div className={`flex flex-col normal-10  ${className || ''}`}>
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
        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-14 text-font-900 truncate">{orderProduct.name}</p>
          <p className="semibold-14 text-font-900">{orderProduct.price.toLocaleString()}원</p>
        </div>

        {/* 회사명 */}
        <p className="mt-[12px] medium-12 text-font-400">{sellerName}</p>
      </div>

      {/* 리뷰 작성 버튼 */}
      <Link href={reviewWriteUrl}>
        <button className="hover:bg-primary-800 hover:text-white cursor-pointer border-1 border-primary-800 p-2 semibold-14 rounded-md mt-[12px] text-primary-800 w-full bg-white">
          리뷰작성
        </button>
      </Link>
    </div>
  );
}

// 구매내역 아이템 리스트
export default function PurchaseHistoryItemWrap() {
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

  // 로그인 안 되어 있으면 메시지 표시
  if (!accessToken) {
    return <div className="p-6 text-center text-font-400">로그인이 필요합니다.</div>;
  }

  if (loading)
    return (
      <div>
        <PurchaseMessage />
      </div>
    );
  if (error) return <div>오류: {error}</div>;

  if (orders.length === 0) {
    return (
      <div>
        <PurchaseMessage />
      </div>
    );
  }

  return (
    <div className="flex flex-wrap w-full  ">
      {orders.map(order => (
        <div key={order._id} className="w-1/2 tablet:w-1/3 laptop:w-1/4 mb-6">
          {order.products.map(orderProduct => (
            <OrderHistoryProduct
              key={orderProduct._id}
              orderProduct={orderProduct}
              orderId={order._id}
              className=" m-1"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function PurchaseMessage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 text-center text-font-400">
      <div className="text-4xl mb-4">🔒</div>
      <div className="text-[12px] font-medium mobile:text-[14px] tablet:text-[16px]">
        <span className="text-primary-800 font-bold">구매</span>한 상품이 없습니다
      </div>
    </div>
  );
}
