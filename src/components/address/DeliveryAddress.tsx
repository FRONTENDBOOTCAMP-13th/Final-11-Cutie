import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
export function OrderedProductComponent() {
  return (
    <section className="w-[672px] h-[226px] bg-amber-400">
      <p className="bold-24 mb-5">주문상품</p>
      <div className="flex p-5 bg-white rounded-lg gap-[26px]">
        <Image src={productKeroro} alt="/" className="w-[136px] h-[136px]" />
        <div className="w-full bg-red-300">
          <p className="text-secondary-200 medium-12 mb-[9px]">(주) 1더하기1은귀요미</p>
          <p className="text-gray-900 bold-18 mb-[7px]">개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>
          <div className="flex items-center gap-[21px] bg-amber-200 mb-[7px]">
            <span className="bg-green-300 semibold-14">5,000,000원</span>
            <span>5,394%</span>
          </div>
          <div>
            <span>예상 배송 시작일</span>
            <span>25.08.08</span>
          </div>
          <p>선택1 : 케로케로케로 티셔츠 1장</p>
        </div>
      </div>
    </section>
  );
}
