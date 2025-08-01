'use client';

import { useParams } from 'next/navigation';

export default function EditProduct() {
  const params = useParams();
  const id = params.id;

  return <div>상품 수정 페이지 - ID: {id}</div>;
}
