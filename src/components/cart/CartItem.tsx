'use client';
import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';
import Checkbox from '@assets/icons/checkbox.svg';
import UnCheckbox from '@assets/icons/uncheckbox.svg';
import { ChangeButton, ChangeButtonPrimary } from '@components/button/SquareBtn';
import Link from 'next/link';
import { useState } from 'react';

type CartItemProps = {
  checked: boolean;
  onToggle: () => void;
};

// 장바구니 항목 체크o, 반응형o
export function CartItem({ checked, onToggle }: CartItemProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(prev => prev + 1);
  };

  const decrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // 최소 1로 설정
  };

  return (
    <div className="p-1.5 w-full flex flex-col justify-center gap-1 rounded-xl bg-primary-50">
      <div className="flex flex-row w-full h-auto gap-2 pb-4">
        {/* 체크박스 */}
        <button onClick={onToggle} className="w-[18px] h-[18px]">
          {checked ? (
            <Checkbox className="w-full h-full cursor-pointer" />
          ) : (
            <UnCheckbox className="w-full h-full cursor-pointer" />
          )}
        </button>
        <p className="semibold-14 text-font-400">마감까지-7</p>
      </div>

      {/* 상품 이미지 & 상품 정보 */}
      <div className="flex flex-row gap-2 w-full">
        {/* 이미지 */}
        <div className="w-1/4">
          <Image src={productKeroro} alt="상품 이미지" className="rounded-md h-full cursor-pointer" priority />
        </div>

        {/* 상품 정보 */}
        <div className="flex flex-col w-full gap-1 min-w-0">
          <p
            className="semibold-14 laptop:text-[16px] text-font-900 
              [@media(max-width:362px)]:overflow-hidden 
              [@media(max-width:362px)]:whitespace-nowrap 
              [@media(max-width:362px)]:text-ellipsis 
              [@media(max-width:362px)]:max-w-[100%]"
          >
            개구리 중사 케로케로케로케로 티셔츠
          </p>
          <p
            className="normal-14 text-font-400 
              [@media(max-width:347px)]:overflow-hidden 
              [@media(max-width:347px)]:whitespace-nowrap 
              [@media(max-width:347px)]:text-ellipsis 
              [@media(max-width:347px)]:max-w-[100%]"
          >
            케로케로케로케로 힘차게 힘이 나요
          </p>
          <p className="normal-14 text-font-400">(주)1더하기1은귀요미</p>
          <p className="semibold-12 laptop:text-[14px] text-primary-800">달성률 5,394%</p>
        </div>
      </div>

      {/* 상품 수량 정보 */}
      <div className="flex justify-between items-center normal-14 p-2 laptop:text-[16px] text-font-900 rounded-sm bg-[#D9DAFE]">
        수량
        <div>
          {/* 수량 조절 버튼 */}
          {/* 수량 조절 늘어남에 따라 상품 금액과 총 주문 금액 늘어나도록 데이터 연결 필요 */}
          <div className="flex items-center border w-[85px] h-[20px] border-secondary-200 overflow-hidden text-font-500 medium-14">
            <button
              onClick={decrease}
              className="w-[20px] h-full bg-primary-50 border-r border-secondary-200 flex items-center justify-center cursor-pointer"
            >
              <span className="text-font-900">−</span>
            </button>
            <span className="flex-1 bg-bg text-center text-font-900">{quantity}</span>
            <button
              onClick={increase}
              className="w-[20px] h-full bg-primary-50 border-l border-secondary-200 flex items-center justify-center gap-0 cursor-pointer"
            >
              <span className="text-font-900">＋</span>
            </button>
          </div>
        </div>
      </div>

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

      {/* 버튼 */}
      {/* 삭제 버튼 */}
      <div className="flex w-full gap-2.5 justify-between">
        <ChangeButton
          label="삭제"
          className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
        />
        {/* 주문하기 버튼 */}
        <Link href="/checkout" className="flex-1">
          <ChangeButtonPrimary
            label="주문하기"
            className="px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
          />
        </Link>
      </div>
    </div>
  );
}
