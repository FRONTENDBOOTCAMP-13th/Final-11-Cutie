'use client';

import { useEffect } from 'react';
import AlertMessage from './AlertMessage';
import { X } from 'lucide-react';

type alertModalProps = {
  onClose: () => void;
};

// 모바일 모달
export function AlertModal({ onClose }: alertModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed z-50 flex inset-0 items-center justify-center bg-font-900/70">
      <div className="bg-primary-50 mobile:mt-20 rounded-[8px] border border-primary-800 p-[24px] w-[300px] h-[361px] mobile:p-[40px] mobile:w-[450px] mobile:h-[536px] overflow-y-auto custom-scroll">
        <div className="flex items-center justify-between mb-7">
          <span className="px-[12px] py-[4px] semibold-14 border border-error rounded-[13px] text-error bg-white">
            알림
          </span>
          <button onClick={onClose} aria-label="모달 닫기">
            <X className="text-font-900" />
          </button>
        </div>
        <div className="flex flex-col gap-[8px] normal-14 font-[600]">
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
          <AlertMessage />
        </div>
      </div>
    </div>
  );
}
