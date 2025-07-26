'use client';

import '@app/globals.css';
import { useState } from 'react';
import { PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { TermsModal } from '@components/term/TermsModal';

// 약관 자세히보기 버튼 컴포넌트
export function ReadTerms() {
  return (
    <div className="flex flex-col gap-2">
      <p className="w-fit text-font-400 normal-14 tablet:text-[16px] underline hover:text-error ">자세히 보기</p>
    </div>
  );
}

export function TermsAgreement() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative w-full mt-[12px]">
      <div className="flex">
        <PreviewCheckboxWithLabel title="플랫폼 이용약관 및 개인정보 처리방침에 동의합니다." />
      </div>

      <div onClick={() => setShowModal(true)} className="absolute right-0 top-0 mt-[4px] cursor-pointer">
        <ReadTerms />
      </div>

      {showModal && <TermsModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
