import '@app/globals.css';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';

// 결제하기 - 주문상품 컴포넌트/주문상품
export function OrderedProductComponent() {
  return (
    <section className="w-[672px] h-[226px]">
      <p className="bold-24 mb-5">주문상품</p>
      <div className="flex p-5 bg-white rounded-lg gap-[26px] border border-secondary-200">
        <Image src={productKeroro} alt="/" className="w-[136px] h-[136px]" />
        <div className="w-full ">
          <p className="text-secondary-200 medium-12 mb-[9px] ">(주) 1더하기1은귀요미</p>
          <p className="text-gray-900 bold-18 mb-[7px] ">개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>
          <div className="flex items-center gap-[21px]  mb-[7px]">
            <span className=" semibold-14 ">5,000,000원</span>
            <span className=" text-primary-800 medium-14 ">5,394%</span>
          </div>
          <div className="flex items-center justify-between text-font-400 mb-[7px]">
            <div className="flex items-center bg-secondary-50 w-[140px] h-[21px] px-2 py-1 ">
              <div className="medium-11 ">
                예상 배송 시작일 <span className="text-error ">25.08.08</span>
              </div>
            </div>
            <span className="flex items-center medium-12 ">배송비 무료</span>
          </div>
          <p className="flex items-center bg-primary-50 rounded-b-xs px-[9px] py-2 normal-14 text-gray-900 h-[33px] ">
            선택1 : 케로케로케로 티셔츠 1장
          </p>
        </div>
      </div>
    </section>
  );
}
