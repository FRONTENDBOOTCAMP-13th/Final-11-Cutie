'use client';
import { useState } from 'react';
import CheckIcon from '@assets/icons/checkbutton.svg';

//호버되는 체크박스 버튼 컴포넌트
export function CheckboxBtn() {
  const [checked, setChecked] = useState(false);

  return (
    <button
      className={`w-[18] h-[18] ${checked ? 'text-primary-800' : 'text-secondary-200'}`}
      onClick={() => setChecked(!checked)}
    >
      <CheckIcon className="w-full h-full" />
    </button>
  );
}

//호버체크박스와 라벨이 붙어있는 컴포넌트
export function CheckboxWithLabel() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-2">
      <button
        className={`w-[18] h-[18] ${checked ? 'text-primary-800' : 'text-secondary-200'}`}
        onClick={() => setChecked(!checked)}
      >
        <CheckIcon className="w-full h-full" />
      </button>
      <span className="medium-16 leading-none">대표 창작자는 만 19세 이상의 성인이어야 합니다.</span>
    </div>
  );
}

//호버되는 다음 버튼 컴포넌트
export function NextButton() {
  return (
    <button className="min-w-[100px] h-[41px] px-[32px] py-[12px] medium-14  bg-secondary-200  hover:bg-primary-800  text-white ">
      다음
    </button>
  );
}

// 로그인 입력(기본)
export function LoginButtonDefault() {
  return (
    <button className="w-[28.8125rem] h-[3.5625rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-24 font-pretendard">
      로그인
    </button>
  );
}

// 로그인 입력(480px)
export function LoginButtonMobile() {
  return (
    <button className="w-[17.75rem] h-[2.6875rem] bg-primary-800 text-white rounded-[.25rem] hover:opacity-[70%] semibold-14 font-pretendard">
      로그인
    </button>
  );
}
