
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

'use client';
import '@app/globals.css';
import { useState } from 'react';
import Image from 'next/image';
import checkbox from 'assets/icons/checkbox.svg';
import uncheckbox from 'assets/icons/uncheckbox.svg';

// 체크박스 버튼 컴포넌트
export function CheckboxBtn() {
  const [checked, setChecked] = useState(false);

  return (
    <button className="w-6 h-6" onClick={() => setChecked(!checked)} aria-pressed={checked}>
      {checked ? (
        <Image src={checkbox} alt="체크됨" width={24} height={24} className="w-full h-full" />
      ) : (
        <Image src={uncheckbox} alt="체크 해제" width={24} height={24} className="w-full h-full" />
      )}

    </button>
  );
}
