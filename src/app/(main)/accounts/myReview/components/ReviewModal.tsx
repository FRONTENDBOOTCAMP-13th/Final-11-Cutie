'use client';

import { ChangeButton, ChangeButtonPrimary } from '@components/button/SquareBtn';
import { X } from 'lucide-react';
import { useEffect } from 'react';

type reviewModalProps = {
  onClose: () => void;
};

export default function ReviewModal({ onClose }: reviewModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed flex inset-0 items-center justify-center bg-font-900/70">
      <div className="bg-primary-50 mobile:mt-20 tablet:mt-34 rounded-[8px] border border-primary-800 p-[24px] w-[300px] h-[361px] mobile:p-[40px] mobile:w-[450px] mobile:h-[536px] flex flex-col">
        {/* 상단 */}
        <div className="flex items-center justify-between mb-7">
          {/* 숫자 */}
          <span className="px-[12px] py-[4px] semibold-14 border border-primary-800 rounded-[13px] text-primary-800 bg-white">
            1
          </span>
          {/* 닫기 버튼 */}
          <button onClick={onClose} aria-label="모달 닫기">
            <X className="text-font-900" />
          </button>
        </div>

        {/* 본문 */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-[8px] semibold-16 mb-4 custom-scroll">
          <span>[ 색깔이 생각보다 너무 어둡네요 ]</span>
          <span className="medium-12 text-secondary-200">2024.05.05</span>
          <span className="medium-14 text-font-900">사진이랑 달라요. 아쉽습니다.</span>
        </div>

        {/* 하단 버튼 */}
        <div className="flex w-full justify-between gap-4">
          <ChangeButton
            label="삭제"
            className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
          />
          <ChangeButtonPrimary
            label="수정"
            className="flex-1 px-4 [@media(min-width:250px)_and_(max-width:394px)]:text-[12px]"
          />
        </div>
      </div>
    </div>
  );
}
