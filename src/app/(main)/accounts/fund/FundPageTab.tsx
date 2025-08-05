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
  const _id = useUserStore(state => state.user?._id);
  // const type = useUserStore(state => state.user?.type);
  const [item, setItem] = useState<Iproduct[]>();

  useEffect(() => {
    const getData = async () => {
      const result = await getProducts({});

      if (result.ok === 1) {
        setItem(result.item);
      }
    };

    getData();
  }, []);

  // 현재 판매자가 등록한 물건의 정보가 배열로 들어있음
  // 이걸 JSX형태로 만들어서 출력할 것

  // 이거 판매자, 일반 유저 구현 데이터에 type으로 구별하면 되겠다
  // console.log('현재 유저의 타입은:::', type);

  let nowProductList: LikeProductListProps[] | undefined = [];
  nowProductList = item?.filter(item => _id === item.seller_id);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-4">
        {nowProductList?.map((item, index) => (
          <div key={`${item?._id}-${index}`} className="mb-6">
            <LikeProduct product={item} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
