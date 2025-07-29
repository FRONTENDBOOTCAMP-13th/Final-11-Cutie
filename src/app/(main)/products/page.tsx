import { Suspense } from 'react';
import ProductPageClient from './ProductPageClient';

export default function ProductPage() {
  return (
    <Suspense>
      <ProductPageClient />
    </Suspense>
  );
}
