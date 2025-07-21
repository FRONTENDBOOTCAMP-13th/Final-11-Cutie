'use client';

import { ProductListCategory } from "@components/menu/Category";
import { ProductItem } from "@components/product/ProductItem";
import { useState } from "react";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체 프로젝트');

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory}/>
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-2.5 mobile:pt-10 pt-6">
        {/*상품 데이터 만들면 여기에 map으로 랜더링*/}
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    </main>
  );
}
