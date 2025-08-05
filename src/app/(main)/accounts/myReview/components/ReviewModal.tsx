'use client';

import { ChangeButton, ChangeButtonPrimary } from '@components/button/SquareBtn';
import Modal from '@components/modal/Modal';
import { allowScroll, preventScroll } from '@utils/modal';

import { useEffect } from 'react';

type ReviewModalProps = {
  isShow: boolean;
  onClose: () => void;
};

// 리뷰 항목 클릭 시 나타나는 모달
export default function ReviewModal({ isShow, onClose }: ReviewModalProps) {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
    };
  }, [isShow]);

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="relative bg-primary-50 rounded-[8px] border border-primary-800 p-[24px] w-[300px] h-[361px] mobile:p-[40px] mobile:w-[450px] mobile:h-[536px] flex flex-col">
        {/* 상단 */}
        <div className="flex items-center justify-between mb-7">
          <span className="px-[12px] py-[4px] semibold-14 border border-primary-800 rounded-[13px] text-primary-800 bg-white">
            1
          </span>
          <button onClick={onClose} className="absolute -top-10 right-0 text-white p-2">
            ✕
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
    </Modal>
  );
}
