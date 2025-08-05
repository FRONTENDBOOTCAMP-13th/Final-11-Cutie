'use client';

import { ProductItem } from '@components/product/ProductItem';
import { getProducts } from '@data/functions/product';
import { Iproduct } from '@models/product';
import { useEffect, useState } from 'react';
import { ProductItemSkeleton } from './products/ProductPageClient';
import useUserStore from 'zustand/userStore';

interface MainProductItemProps {
  title: string;
}

export function MainProductItem({ title }: MainProductItemProps) {
  // 전체 데이터가 들어 있음
  const [item, setItem] = useState<Iproduct[]>([]);

  // 로딩중
  const [loading, setLoading] = useState(true);
  const accessToken = useUserStore(state => state.user?.token?.accessToken);

  useEffect(() => {
    // 서버에서 데이터를 불러옴
    const featchData = async () => {
      const result = await getProducts({
        categorySlug: undefined, // 전체 카테고리
        statusFilter: '전체 프로젝트',
        sortOption: '인기순',
        keyword: undefined,
        accessToken,
      });

      if (result.ok === 1) {
        setItem(result.item);
      }

      setLoading(false);
    };

    featchData();
  }, [accessToken]);

  const styleArr = [
    'w-full',
    'w-full hidden mobile:flex',
    'w-full hidden tablet:flex',
    'w-full hidden min-[930px]:flex',
  ];

  let itemList = [];

  // 로딩중이라면
  if (loading) {
    for (let i = 0; i < 4; i++) {
      itemList.push(
        <div
          key={`special loading ${i}`}
          className={`${i == 1 && 'mobile:block hidden'} ${i == 2 && 'tablet:block hidden'} ${i == 3 && 'laptop:block hidden'}`}
        >
          <ProductItemSkeleton />
        </div>,
      );
    }
  }

  // 로딩중이 아니라면
  else {
    // 특별 기획/시즌 기획
    if (title === '특별기획/시즌기획') {
      const specialList = [];
      let numberSameCheck: number[] = [];

      for (let i = 0; i < item.length; i++) {
        // 특별 기획 , 시즌 기획만 분리
        if (item[i].extra.category === '특별기획 · 시즌기획') {
          specialList.push(item[i]);
        }
      }

      for (let i = 0; i < specialList.length; i++) {
        let radomNumber = 0;

        while (true) {
          radomNumber = Math.floor(Math.random() * item.length);

          // 같은숫자가 없다면 루프나가기
          if (!numberSameCheck.includes(radomNumber)) {
            numberSameCheck.push(radomNumber);
            break;
          }
        }

        itemList.push(
          <ProductItem
            key={item[radomNumber].name}
            imgPath={item[radomNumber].mainImages[0].path}
            name={item[radomNumber].name}
            price={item[radomNumber].price}
            company={item[radomNumber].seller.name}
            startDday={item[radomNumber].extra.funding.startDate}
            endDday={item[radomNumber].extra.funding.endDate}
            _id={item[radomNumber]._id}
            className={styleArr[i]}
            product={item[radomNumber]}
          />,
        );

        if (i === 3) break;
      }
    }

    // // 인기 프로젝트
    if (title === '인기 프로젝트') {
      for (let i = 0; i < item.length; i++) {
        itemList.push(
          <ProductItem
            key={item[i].name}
            imgPath={item[i].mainImages[0].path}
            name={item[i].name}
            price={item[i].price}
            className={styleArr[i]}
            company={item[i].seller.name}
            startDday={item[i].extra.funding.startDate}
            endDday={item[i].extra.funding.endDate}
            _id={item[i]._id}
            product={item[i]}
          />,
        );
        if (i === 3) break;
      }
    }

    // // 에디터 픽
    else if (title === '에디터 픽') {
      let numberSameCheck: number[] = [];

      for (let i = 0; i < item.length; i++) {
        let radomNumber = 0;

        while (true) {
          radomNumber = Math.floor(Math.random() * item.length);

          // 같은숫자가 없다면 루프나가기
          if (!numberSameCheck.includes(radomNumber)) {
            numberSameCheck.push(radomNumber);
            break;
          }
        }

        itemList.push(
          <ProductItem
            key={item[radomNumber].name}
            imgPath={item[radomNumber].mainImages[0].path}
            name={item[radomNumber].name}
            price={item[radomNumber].price}
            company={item[radomNumber].seller.name}
            startDday={item[radomNumber].extra.funding.startDate}
            endDday={item[radomNumber].extra.funding.endDate}
            _id={item[radomNumber]._id}
            className={styleArr[i]}
            product={item[radomNumber]}
          />,
        );
        if (i === 3) break;
      }
    }
  }

  return (
    <div className="flex justify-center gap-8">
      {loading ? (
        <div className="w-full h-full grid grid-cols-[repeat(auto-fit,_minmax(0px,_1fr))] gap-[20px]">{itemList}</div>
      ) : (
        itemList
      )}
    </div>
  );
}
