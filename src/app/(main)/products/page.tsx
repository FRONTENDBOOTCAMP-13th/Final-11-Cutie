'use client';

import { ProductListCategory } from '@components/menu/Category';
import { ProductDBItem } from '@components/product/ProductItem';
import ProductItemSkeleton from '@components/product/productSkeleton';
import { getProducts } from '@data/functions/product';
import { Iproduct } from '@models/product';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState('전체 프로젝트');
  const [products, setProducts] = useState<Iproduct[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // 상품 불러오기
  useEffect(() => {
    getProducts()
      .then(res => {
        if (res.ok && res.item) {
          setProducts(res.item);
        } else if (res.ok === 0) {
          setError(res.message || '상품 로딩 실패');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('상품을 불러오는 중 오류가 발생했습니다.');
        setLoading(false);
      });
  }, []);

  return (
    <main className="p-5 tablet:p-10 laptop:p-[90px]">
      <ProductListCategory selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <div className="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-4 gap-2.5 mobile:pt-10 pt-6">
        {/*상품 데이터 만들면 여기에 map으로 랜더링*/}
        {/* 이후에 카테고리, 필터링 따라 다르게 출력되는 기능 필요 */}
        {loading ? (
          // 로딩동안 스켈레톤 보이도록 설정
          Array.from({ length: 8 }).map((_, idx) => <ProductItemSkeleton key={idx} />)
        ) : error ? (
          // 에러 안내
          <p className="col-span-full medium-14 text-center text-error">{error}</p>
        ) : (
          // 로딩 이후 상품 렌더링
          products.map(product => <ProductDBItem key={product._id} product={product} />)
        )}
      </div>
    </main>
  );
}
