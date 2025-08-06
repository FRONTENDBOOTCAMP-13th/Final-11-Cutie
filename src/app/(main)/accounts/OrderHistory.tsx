'use client';

import { getUserOrderList } from '@data/functions/getOrder';
import { getProductDetail } from '@data/functions/product';
import { IOrderProduct } from '@models/order';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import { SyncLoader } from 'react-spinners';
import { useRouter } from 'next/navigation';

interface OrderedProductProps {
  className?: string;
  orderProduct: IOrderProduct;
  orderId: number;
  sellerName: string;
  sellerId: number | null;
}

// 구매내역 아이템 리스트
export default function PurchaseHistoryItemWrap() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const [uniqueProducts, setUniqueProducts] = useState<
    { product: IOrderProduct; orderId: number; sellerName: string; sellerId: number | null }[]
  >([]);

  const accessToken = useUserStore().user?.token?.accessToken;

  const router = useRouter();

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (!accessToken) {
      router.replace('/');
    }
  }, [hydrated, accessToken, router]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!accessToken) return;

      try {
        const response = await getUserOrderList(accessToken);

        if (response.ok === 1) {
          const orderData = Array.isArray(response.item) ? response.item : [response.item];

          const uniqueMap = new Map<number, { product: IOrderProduct; orderId: number }>();

          orderData.forEach(order => {
            order.products.forEach(product => {
              if (!uniqueMap.has(product._id)) {
                uniqueMap.set(product._id, { product, orderId: order._id });
              }
            });
          });

          const uniqueList = Array.from(uniqueMap.values());

          // 각 상품에 대한 판매자 정보 가져오기
          const withSellerData = await Promise.all(
            uniqueList.map(async ({ product, orderId }) => {
              try {
                const detailRes = (await getProductDetail(product._id, accessToken)) as {
                  ok: number;
                  item?: {
                    seller?: { name?: string };
                    seller_id?: number;
                  };
                };

                const sellerName = detailRes.item?.seller?.name || '판매자 정보 없음';
                const sellerId = detailRes.item?.seller_id ?? null;

                return { product, orderId, sellerName, sellerId };
              } catch {
                return { product, orderId, sellerName: '판매자 정보 없음', sellerId: null };
              }
            }),
          );

          setUniqueProducts(withSellerData);
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

  if (!hydrated) return null;

  if (!accessToken) return null;

  if (loading) return <SyncLoad />;

  if (error) return <div>오류: {error}</div>;

  if (uniqueProducts.length === 0) return <PurchaseMessage />;

  return (
    <div className="flex flex-wrap w-full">
      {uniqueProducts.map(({ product, orderId, sellerName, sellerId }) => (
        <div key={product._id} className="w-1/2 tablet:w-1/3 laptop:w-1/4 mb-6">
          <OrderHistoryProduct
            orderProduct={product}
            orderId={orderId}
            sellerName={sellerName}
            sellerId={sellerId}
            className="m-1"
          />
        </div>
      ))}
    </div>
  );
}

//구매내역 아이템
function OrderHistoryProduct({ className, orderProduct, orderId, sellerName, sellerId }: OrderedProductProps) {
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
      </div>
      <div>
        {/* 제품명, 가격 */}
        <div className="space-y-[4px]">
          <p className="bold-14 text-font-900 truncate">{sellerName}</p>
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

export function SyncLoad() {
  return (
    <div className="flex justify-center items-center">
      <SyncLoader color="#091fb0" />
    </div>
  );
}
