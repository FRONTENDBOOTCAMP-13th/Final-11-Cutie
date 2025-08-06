'use client';

import { useEffect, useState } from 'react';
import { Iproduct } from '@models/product';
import useUserStore from 'zustand/userStore';
import { getProducts } from '@data/functions/product';
import { ProductItem } from '@components/product/ProductItem';
import MainProductItem from '@app/(main)/MainProductItem';

const styleArr = ['w-full', 'w-full hidden mobile:flex', 'w-full hidden tablet:flex', 'w-full hidden min-[930px]:flex'];

export default function MainProductList() {
  // 전체 데이터가 들어 있음
  const [items, setItems] = useState<Iproduct[][] | null>(null);

  // 로딩중
  // const [loading, setLoading] = useState(true);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);

  useEffect(() => {
    // 서버에서 데이터를 불러옴
    const featchData = async () => {
      const result1 = getProducts({
        categorySlug: 'special-and-season',
        statusFilter: '전체 프로젝트',
        keyword: undefined,
        accessToken,
      });

      const result2 = getProducts({
        categorySlug: undefined, // 전체 카테고리
        statusFilter: '전체 프로젝트',
        sortOption: '인기순',
        keyword: undefined,
        accessToken,
      });

      const result3 = getProducts({
        categorySlug: undefined, // 전체 카테고리
        statusFilter: '전체 프로젝트',
        sortOption: '최신순',
        keyword: undefined,
        accessToken,
      });

      const resList = await Promise.all([result1, result2, result3]);

      setItems(resList.map(res => (res.ok ? res.item : [])));
    };

    featchData();
  }, []);

  if (!items) {
    return <div>로딩중..</div>;
  }

  items[0] = [...items[0]].sort(() => Math.random() - 0.5);

  const [item1, item2, item3] = items.map(itemList => {
    return itemList
      .slice(0, 4)
      .map((item, i) => (
        <ProductItem
          key={item.name}
          imgPath={item.mainImages[0].path}
          name={item.name}
          price={item.price}
          company={item.seller.name}
          startDday={item.extra.funding.startDate}
          endDday={item.extra.funding.endDate}
          _id={item._id}
          className={styleArr[i]}
          product={item}
        />
      ));
  });

  return (
    <>
      {/* 메인 페이지 아이템 리스트 */}
      <section className="flex flex-col mx-auto w-full my-6 mobile:my-10 tablet:my-16 px-[24px] mobile:px-[40px] tablet:px-[90px] laptop:px-[120px] max-w-[1280px] gap-5 mobile:gap-[25px] tablet:gap-[30px]">
        <MainProductItem title="특별기획/시즌기획" itemList={item1} />
        <MainProductItem title="인기 프로젝트" itemList={item2} />
        <MainProductItem title="에디터 픽" itemList={item3} />
      </section>
    </>
  );
}
