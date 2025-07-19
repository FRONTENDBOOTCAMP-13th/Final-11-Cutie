import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';

// 장바구니 항목 1280+
export function CartItem() {
  return (
    <>
      <div className="bg-amber-300 ">
        <p>마감까지-7</p>
        <Image src={productKeroro} alt="/" />
      </div>
    </>
  );
}
