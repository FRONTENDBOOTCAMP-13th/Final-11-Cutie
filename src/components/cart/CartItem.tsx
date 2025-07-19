import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';
import Checkbox from '@assets/icons/checkbox.svg';

// 장바구니 항목 1280+
export function CartItem() {
  return (
    <>
      <div className="flex gap-3 ">
        {/* 체크박스, 클릭 이벤트 넣어야 함 */}
        <Checkbox className="w-[18px]" />
        {/* 상품 박스 */}
        <div className="flex flex-col gap-[10px] w-[813px] px-5 py-2.5 rounded-xl bg-primary-50">
          <div className="flex gap-2 h-[144px]">
            {/* 이미지 */}
            <div className="flex flex-col bg-amber-300 w-[154px] gap-2">
              <p className="semibold-14 text-font-400">마감까지-7</p>
              <Image src={productKeroro} alt="/" className="rounded-md h-[122px]" />
            </div>
            {/* 상품정보 */}
            <div className="w-full mt-[26px] bg-pink-300">
              <p className="semibold-16 text-font-900">개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>
              <p className="normal-14 text-font-400">케로케로케로케로 힘차게 힘이 나요</p>
              <p className="normal-14 text-font-400">(주)1더하기1은귀요미</p>
              <p className="semibold-14 text-primary-800">달성률 5,394%</p>
            </div>
          </div>
          {/* 상품 주문 정보 */}

          <p className="normal-16 text-font-900 px-[9px] py-[5px] rounded-sm w-[773px] h-[29px] normal-16 bg-[#D9DAFE]">
            선택1 : 케로케로케로 티셔츠 1장
          </p>
          {/* 상품 금액 */}
          <div className="flex w-full justify-between bold-16">
            <p>상품 금액</p>
            <p>500,000원</p>
          </div>
          {/* 배송비 */}
          <div className="flex w-full justify-between medium-16">
            <p>배송비</p>
            <p>무료</p>
          </div>
          {/* 삭제, 주문수정 주문하기 버튼 */}
        </div>
      </div>
    </>
  );
}
