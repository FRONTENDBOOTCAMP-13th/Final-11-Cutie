import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';
import Checkbox from '@assets/icons/checkbox.svg';
import UnCheckbox from '@assets/icons/uncheckbox.svg';
import { ChangeButton, ChangeButtonPrimary } from '@components/button/SquareBtn';

// 장바구니 항목 체크o, 반응형o
export function CartItemChecked() {
  return (
    <>
      <div className="flex gap-3 min-w-[430px] ">
        {/* 체크박스, 클릭 이벤트 넣어야 함 */}
        <Checkbox className="w-[18px] h-[18px]" />
        {/* 상품 박스 */}
        <div className="flex flex-col gap-1 w-[370px] tablet:w-[652px] laptop:w-[813px] laptop:gap-[10px] tablet:gap-[6px] px-5 py-2.5 rounded-xl bg-primary-50">
          <div className="flex gap-[14px] h-[110px] tablet:h-[93px] laptop:h-[127px]">
            {/* 이미지 */}
            <div className="flex flex-col w-[120px] tablet:w-[80px] h-[89px] laptop:w-[120px] gap-2">
              <p className="semibold-10 laptop:text-[14px] text-font-400">마감까지-7</p>
              <Image src={productKeroro} alt="/" className="rounded-md h-[122px]" />
            </div>
            {/* 상품정보 */}
            <div className="flex flex-col gap-1 laptop:gap-[9px] w-full mt-[16px] laptop:mt-[26px]">
              <p className="semibold-14 laptop:text-[16px] text-font-900">
                개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠
              </p>
              <p className="normal-12 laptop:text-[14px] text-font-400">케로케로케로케로 힘차게 힘이 나요</p>
              <p className="normal-12 laptop:text-[14px] text-font-400">(주)1더하기1은귀요미</p>
              <p className="semibold-12 laptop:text-[14px] text-primary-800">달성률 5,394%</p>
            </div>
          </div>
          {/* 상품 주문 정보 */}

          <p className="normal-12 laptop:text-[16px] text-font-900 px-[9px] py-[5px] rounded-sm h-[24px] laptop:h-[29px] bg-[#D9DAFE]">
            선택1 : 케로케로케로 티셔츠 1장
          </p>
          {/* 상품 금액 */}
          <div className="flex w-full justify-between bold-12 laptop:text-[16px]">
            <p>상품 금액</p>
            <p>500,000원</p>
          </div>
          {/* 배송비 */}
          <div className="flex w-full justify-between medium-12 laptop:text-[16px]">
            <p>배송비</p>
            <p>무료</p>
          </div>
          {/* 삭제, 주문수정 주문하기 버튼 */}
          <div className="flex justify-between mt-0.5">
            <ChangeButton label="삭제" className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]" />
            <ChangeButton label="주문수정" className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]" />
            <ChangeButtonPrimary
              label="주문하기"
              className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

// 장바구니 항목 1280+ 체크x, 반응형o
export function CartItemUnchecked() {
  return (
    <>
      <div className="flex gap-3 min-w-[430px] ">
        {/* 체크박스, 클릭 이벤트 넣어야 함 */}
        <UnCheckbox className="w-[18px] h-[18px]" />
        {/* 상품 박스 */}
        <div className="flex flex-col gap-1 w-[370px] tablet:w-[652px] laptop:w-[813px] laptop:gap-[10px] tablet:gap-[6px] px-5 py-2.5 rounded-xl bg-primary-50">
          <div className="flex gap-[14px] h-[110px] tablet:h-[93px] laptop:h-[127px]">
            {/* 이미지 */}
            <div className="flex flex-col w-[120px] tablet:w-[80px] h-[89px] laptop:w-[120px] gap-2">
              <p className="semibold-10 laptop:text-[14px] text-font-400">마감까지-7</p>
              <Image src={productKeroro} alt="/" className="rounded-md h-[122px]" />
            </div>
            {/* 상품정보 */}
            <div className="flex flex-col gap-1 laptop:gap-[9px] w-full mt-[16px] laptop:mt-[26px]">
              <p className="semibold-14 laptop:text-[16px] text-font-900">
                개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠
              </p>
              <p className="normal-12 laptop:text-[14px] text-font-400">케로케로케로케로 힘차게 힘이 나요</p>
              <p className="normal-12 laptop:text-[14px] text-font-400">(주)1더하기1은귀요미</p>
              <p className="semibold-12 laptop:text-[14px] text-primary-800">달성률 5,394%</p>
            </div>
          </div>
          {/* 상품 주문 정보 */}

          <p className="normal-12 laptop:text-[16px] text-font-900 px-[9px] py-[5px] rounded-sm h-[24px] laptop:h-[29px] bg-[#D9DAFE]">
            선택1 : 케로케로케로 티셔츠 1장
          </p>
          {/* 상품 금액 */}
          <div className="flex w-full justify-between bold-12 laptop:text-[16px]">
            <p>상품 금액</p>
            <p>500,000원</p>
          </div>
          {/* 배송비 */}
          <div className="flex w-full justify-between medium-12 laptop:text-[16px]">
            <p>배송비</p>
            <p>무료</p>
          </div>
          {/* 삭제, 주문수정 주문하기 버튼 */}
          <div className="flex justify-between mt-0.5">
            <ChangeButton label="삭제" className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]" />
            <ChangeButton label="주문수정" className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]" />
            <ChangeButtonPrimary
              label="주문하기"
              className="w-[105px] laptop:w-[177px] text-[12px] laptop:text-[14px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}
