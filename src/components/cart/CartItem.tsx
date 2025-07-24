import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';
import Checkbox from '@assets/icons/checkbox.svg';
import UnCheckbox from '@assets/icons/uncheckbox.svg';
import { ChangeButton, ChangeButtonPrimary } from '@components/button/SquareBtn';

// 장바구니 항목 체크o, 반응형o
export function CartItemChecked() {
  return (
      <>
        {/* 상품 박스 */}
        <div className="p-1.5 w-full flex flex-col justify-center gap-1 rounded-xl bg-primary-50">

            {/* 체크박스 & 마감디데이 */}
            <div className="flex flex-row w-full h-auto gap-2 pb-4">
              <Checkbox className="w-[18px] h-[18px] cursor-pointer" />
              <p className="semibold-14 text-font-400">마감까지-7</p>
            </div>

            {/* 상품 이미지 & 상품 정보 */}
            <div className='flex flex-row gap-2 w-full'>
              
              <div className='w-1/4'>
                <Image src={productKeroro} alt="/" className="rounded-md h-full cursor-pointer" priority />
              </div>

              <div className="flex flex-col w-full gap-1">
                <p className="semibold-14 laptop:text-[16px] text-font-900">
                개구리 중사 케로케로케로케로 티셔츠
                </p>
                <p className="normal-14 text-font-400">케로케로케로케로 힘차게 힘이 나요</p>
                <p className="normal-14 text-font-400">(주)1더하기1은귀요미</p>
                <p className="semibold-12 laptop:text-[14px] text-primary-800">달성률 5,394%</p>
              </div>
              
            </div>

            {/* 상품 주문 정보 */}
            <p className="normal-14 laptop:text-[16px] text-font-900 rounded-sm bg-[#D9DAFE]">
              선택1 : 케로케로케로 티셔츠 1장
            </p>

            {/* 상품 금액 */}
            <div className="flex w-full justify-between bold-14 laptop:text-[16px]">
              <p>상품 금액</p>
              <p>500,000원</p>
            </div>

            {/* 배송비 */}
            <div className="flex w-full justify-between medium-14 laptop:text-[16px]">
              <p>배송비</p>
              <p>무료</p>
            </div>

            {/* 삭제, 주문수정 주문하기 버튼 */}
            <div className="flex w-full gap-2.5 justify-between ">
              <ChangeButton
                label="삭제"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
              <ChangeButton
                label="주문수정"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
              <ChangeButtonPrimary
                label="주문하기"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
            </div>
      </div>  
    </>
  );
}

// 장바구니 항목 1280+ 체크x, 반응형o
export function CartItemUnchecked() {
  return (
    <>
      <div className="w-full flex flex-col gap-1 rounded-xl bg-primary-50 p-1.5">

            {/* 체크박스 & 마감디데이 */}
            <div className="flex flex-row w-full h-auto gap-2">
              <UnCheckbox className="w-[18px] h-[18px] cursor-pointer" />
              <p className="semibold-14 text-font-400">마감까지-7</p>
            </div>

            {/* 상품 이미지 & 상품 정보 */}
            <div className='flex flex-row gap-2 w-full'>
              
              <div className='w-1/4'>
                <Image src={productKeroro} alt="/" className="rounded-md h-full cursor-pointer" priority />
              </div>

              <div className="flex flex-col w-full gap-1">
                <p className="semibold-14 laptop:text-[16px] text-font-900">
                개구리 중사 케로케로케로케로 티셔츠
                </p>
                <p className="normal-14 text-font-400">케로케로케로케로 힘차게 힘이 나요</p>
                <p className="normal-14 text-font-400">(주)1더하기1은귀요미</p>
                <p className="semibold-12 laptop:text-[14px] text-primary-800">달성률 5,394%</p>
              </div>
              
            </div>

            {/* 상품 주문 정보 */}
            <p className="normal-14 laptop:text-[16px] text-font-900 rounded-sm bg-[#D9DAFE]">
              선택1 : 케로케로케로 티셔츠 1장
            </p>

            {/* 상품 금액 */}
            <div className="flex w-full justify-between bold-14 laptop:text-[16px]">
              <p>상품 금액</p>
              <p>500,000원</p>
            </div>

            {/* 배송비 */}
            <div className="flex w-full justify-between medium-14 laptop:text-[16px]">
              <p>배송비</p>
              <p>무료</p>
            </div>

            {/* 삭제, 주문수정 주문하기 버튼 */}
            <div className="flex w-full gap-2.5 justify-between">
              <ChangeButton
                label="삭제"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
              <ChangeButton
                label="주문수정"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
              <ChangeButtonPrimary
                label="주문하기"
                className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
              />
            </div>

      </div>  
    </>
  );
}
