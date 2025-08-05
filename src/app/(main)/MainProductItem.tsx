'use client';

import { ProductItem } from '@components/product/ProductItem';
import { getProducts } from '@data/functions/product';
import { Iproduct } from '@models/product';
import { useEffect, useState } from 'react';

interface MainProductItemProps {
  title: string;
}

export function MainProductItem({ title }: MainProductItemProps) {
  // 전체 데이터가 들어 있음
  const [item, setItem] = useState<Iproduct[]>([]);

  useEffect(() => {
    // 서버에서 데이터를 불러옴
    const featchData = async () => {
      const result = await getProducts({
        categorySlug: undefined, // 전체 카테고리
        statusFilter: '전체 프로젝트',
        sortOption: '인기순',
        keyword: undefined,
      });

      if (result.ok === 1) {
        setItem(result.item);
      }
    };

    featchData();
  }, []);

  const styleArr = [
    'w-full',
    'w-full hidden mobile:flex',
    'w-full hidden tablet:flex',
    'w-full hidden min-[930px]:flex',
  ];

  console.log(item);

  let itemList = [];

  // 특별 기획/시즌 기획
  if (title === '특별기획/시즌기획') {
    if (item.length === 0) return;

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
        />,
      );
      if (i === 3) break;
    }
  }

  // 인기 프로젝트
  if (title === '인기 프로젝트') {
    if (item.length === 0) return;

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
        />,
      );
      if (i === 3) break;
    }
  }

  // 에디터 픽
  else if (title === '에디터 픽') {
    if (item.length === 0) return;

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
        />,
      );
      if (i === 3) break;
    }
  }

  return <div className="flex justify-center gap-8">{itemList}</div>;
}
