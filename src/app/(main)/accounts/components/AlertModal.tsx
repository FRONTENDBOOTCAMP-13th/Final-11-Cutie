'use client';

import { useEffect } from 'react';
import AlertMessage from './AlertMessage';
import Modal from '@components/modal/Modal';

type AlertModalProps = {
  isShow: boolean;
  onClose: () => void;
};

export default function AlertModal({ isShow, onClose }: AlertModalProps) {
  useEffect(() => {
    document.body.style.overflow = isShow ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isShow]);

  return (
    <Modal isShow={isShow} onClose={onClose}>
      <div className="relative bg-primary-50 rounded-[8px] border border-primary-800 p-[24px] w-[300px] h-[361px] mobile:p-[40px] mobile:w-[450px] mobile:h-[536px] overflow-y-auto custom-scroll">
        {/* 상단 영역 */}
        <div className="flex items-center justify-between mb-7">
          <span className="px-[12px] py-[4px] semibold-14 border border-error rounded-[13px] text-error bg-white">
            알림
          </span>
        </div>

        {/* 알림 메시지 리스트 */}
        <div className="flex flex-col gap-[8px] normal-14 font-[600]">
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
        </div>
      </div>
    </Modal>
  );
}
