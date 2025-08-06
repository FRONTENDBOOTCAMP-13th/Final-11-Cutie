'use client';
import { getProducts } from '@data/functions/product';
import { Iproduct, LikeProductListProps } from '@models/product';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import Image from 'next/image';
import Link from 'next/link';
import { HeartIcon } from 'lucide-react';

// 펀드 페이지 탭
export default function FundPageTab() {
  // 현재 로그인한 회원 id
  // 현재 사용자가 판매자라면 각 물건에 등록되어 있는
  // seller_id = _id가 같은 것만 가지고 와야함

  const user = useUserStore(state => state.user);
  const _id = user?._id;
  const type = user?.type;

  const [item, setItem] = useState<Iproduct[]>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (type === 'user') return;

    const getData = async () => {
      const result = await getProducts({});

      if (result.ok === 1) {
        setItem(result.item);
      }

      setLoading(false);
    };

    getData();
  }, []);

  // 현재 판매자가 등록한 물건의 정보가 배열로 들어있음
  // 이걸 JSX형태로 만들어서 출력할 것
  let nowProductList: LikeProductListProps[] | undefined = [];
  nowProductList = item?.filter(item => _id === item.seller_id);

  return (
    <div>
      {type === 'user' && <ErrorMessage />}
      {loading && type === 'seller' && <p>상품 목록을 불러오고 있습니다...</p>}
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
        {!loading &&
          type === 'seller' &&
          nowProductList?.map((item, index) => (
            <div key={`${item?._id}-${index}`} className="mb-6">
              <FundProduct product={item} className="h-full" />
            </div>
          ))}
      </div>
    </div>
  );
}

// 구매자가 전용 에러 메세지
function ErrorMessage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-12 text-center text-font-400">
      <div className="text-4xl mb-4">🔒</div>
      <div className="text-[12px] font-medium mobile:text-[14px] tablet:text-[16px]">
        <span className="text-primary-800 font-bold">판매자</span>만 접근할 수 있습니다.
      </div>
    </div>
  );
}

interface FundProductProps {
  className?: string;
  product: LikeProductListProps;
}
// 좋아요 목록 상품
function FundProduct({ className, product }: FundProductProps) {
  return (
    <>
      <div className={`flex flex-col normal-10 h-full w-full ${className || ''}`}>
        {/* 썸네일 */}
        <div className="relative">
          <Image
            width={400}
            height={400}
            className="w-full h-[105px] rounded-md object-cover cursor-pointer"
            src={product.mainImages?.[0]?.path}
            alt={product.name}
            priority
          />
        </div>

        <div>
          {/* 제품명, 가격 */}
          <div className="space-y-[4px] flex justify-between mt-2">
            <p className="bold-14 text-font-900 truncate">{product.name}</p>

            {/* 좋아요(북마크) 개수 표시 */}
            <div className="flex gap-1 semibold-14 text-error">
              <HeartIcon className="w-[16px] h-[16px] text-red-500 fill-red-500" strokeWidth={1.5} />
              <p>{product.bookmarks}</p>
            </div>
          </div>
          {/* 회사명 */}
          <p className="mt-1 medium-12 text-font-400">{product.price}원</p>
        </div>

        {/* 상품 보기 버튼 */}
        <Link href={`/products/${product._id}`}>
          <button className="hover:bg-primary-800 hover:text-white cursor-pointer border-1 border-primary-800 p-2 semibold-14 rounded-md mt-[12px] text-primary-800 w-full">
            상품 보기
          </button>
        </Link>
      </div>
    </>
  );
}
