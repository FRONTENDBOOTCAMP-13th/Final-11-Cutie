'use client';
import { ReviewTab } from '@components/button/SquareBtn';
import ProductHead, { ComingSoonProduct } from './ProductSummary';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Iproduct } from '@models/product';
import { getProductDetail } from '@data/functions/product';

export default function ProductIDPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Iproduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    getProductDetail(Number(id))
      .then(res => {
        if (res.ok && res.item) {
          setProduct(res.item);
        }
      })
      .catch(err => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div>로딩 중...</div>;
  if (!product) return <div>상품을 찾을 수 없습니다.</div>;

  // 상태가 upcoming이면 ComingSoonProduct 렌더링
  if (product.extra.status === 'upcoming') {
    return (
      <div className="p-6 flex flex-col gap-6 justify-center items-center">
        <ComingSoonProduct product={product} />
        <ReviewTab />
      </div>
    );
  }

  // 기본으로 ProductHead 렌더링
  return (
    <div className="p-6 flex flex-col gap-6 justify-center items-center">
      <ProductHead product={product} />
      <ReviewTab />
    </div>
  );
}
