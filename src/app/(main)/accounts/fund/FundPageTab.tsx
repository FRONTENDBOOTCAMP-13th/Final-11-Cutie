'use client';
import { getProducts } from '@data/functions/product';
import { Iproduct, LikeProductListProps } from '@models/product';
import { useEffect, useState } from 'react';
import useUserStore from 'zustand/userStore';
import { LikeProduct } from '../bookmark/LikeProduct';

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
              <LikeProduct product={item} className="h-full" />
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
