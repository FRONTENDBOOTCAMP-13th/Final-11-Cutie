'use client';

import { ChangeButton, ChangeButtonFill, ChangeButtonPrimary, CheckboxBtn } from '@components/button/SquareBtn';
import { MapPin } from 'lucide-react';
import Image from 'next/image';
import productKeroro from '@assets/images/productKeroro.jpg';
import Checkbox from '@assets/icons/checkbox.svg';
import UnCheckbox from '@assets/icons/uncheckbox.svg';
import { useState } from 'react';
import Link from 'next/link';

export default function CartTab() {
  // 예시용 3개 상태
  const [checkedStates, setCheckedStates] = useState([true, true, false]);

  // 전체 선택 상태 체크
  const allChecked = checkedStates.every(Boolean);

  // 전체 선택 체크박스 상태 설정
  const toggleAll = () => {
    setCheckedStates(checkedStates.map(() => !allChecked));
  };

  // 단일 선택 체크박스 상태 설정
  const toggleSingle = (index: number) => {
    setCheckedStates(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <>
      <div className="min-w-[250px] p-2.5 normal-14 flex flex-col justify-center gap-6 w-full">
        {/* 배송정보 */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row justify-between [@media(min-width:250px)_and_(max-width:394px)]:flex-col">
            <div className="bold-18 flex gap-2">
              <span>일반배송</span>
              <span>2</span>
            </div>
            <div className="bold-14 text-font-400 flex gap-2.5">
              <span>장바구니</span>
              &gt;
              <span>주문/결제</span>
              &gt;
              <span>완료</span>
            </div>
          </div>

          {/* 배송지 정보 */}
          <div className="items-center flex flex-row p-2.5 gap-2.5 rounded-2xl bg-primary-50">
            <MapPin className="text-primary-800" />
            <div className="flex flex-col min-w-0">
              <div className="flex gap-2 bold-14">
                <span>배송지</span>
                &#58;
                {/* 배송지 대표 이름 */}
                <span>회사</span>
              </div>
              {/* 배송지 상세 주소 */}
              <span
                className="text-font-400 block max-w-full 
              [@media(max-width:510px)]:overflow-hidden
              [@media(max-width:510px)]:whitespace-nowrap
              [@media(max-width:510px)]:text-ellipsis
              [@media(max-width:510px)]:max-w-[100%]"
              >
                서울 종로구 종로3길 17, 광화문 D타워 D1동 16층, 17층
              </span>
            </div>
            {/* 배송지 변경 버튼. 클릭 시 프로필 편집으로 연결 */}
            <Link href="/edit">
              <ChangeButton label="변경" className="min-w-[50px]" />
            </Link>
          </div>
        </div>

        {/* 장바구니 아이템 */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-row justify-between [@media(min-width:250px)_and_(max-width:394px)]:flex-col gap-2.5">
            {/* 전체 선택 버튼 */}
            <div className="bold-18 flex items-center gap-1.5">
              <CheckboxBtn checked={allChecked} onToggle={toggleAll} />
              <span>전체 선택</span>
            </div>
            {/* 삭제 버튼 부분 */}
            <div className="flex flex-row gap-2">
              <ChangeButton label="X 선택 삭제" />
              <ChangeButton label="주문불가삭제" />
            </div>
          </div>

          <div className="flex flex-col gap-5">
            {/* 지금은 3개 고정이지만 서버에서 데이터 가져온 걸 map하도록 기능 업데이트 필요 */}
            {[0, 1, 2].map((_, index) => (
              <CartItem key={index} checked={checkedStates[index]} onToggle={() => toggleSingle(index)} />
            ))}
          </div>
        </div>

        {/* 총 결제액 */}
        <div className="bg-primary-50 w-full h-[100px] flex flex-col gap-2.5 justify-center p-6">
          <div className="flex justify-between text-font-900 bold-18 [@media(min-width:250px)_and_(max-width:394px)]:text-[14px]">
            <span>총 2건 주문 금액</span>
            <span>1,000,000 원</span>
          </div>
          <div className="flex justify-end">
            {/* 주문하기 버튼. 클릭 시 결제 페이지로 이동 */}
            <Link href="/checkout">
              <ChangeButtonFill label="주문하기" className="border-0 w-[197px] cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

type CartItemProps = {
  checked: boolean;
  onToggle: () => void;
};

// 장바구니 항목 체크o, 반응형o
function CartItem({ checked, onToggle }: CartItemProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity(prev => prev + 1); // 1씩 증가
  };

  const decrease = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // 최소 1로 설정
  };

  return (
    <div className="p-1.5 w-full flex flex-col justify-center gap-1 rounded-xl bg-primary-50">
      <div className="flex flex-row w-full h-auto gap-2 pb-4">
        {/* 항목 1개에 대한체크박스 */}
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
