'use client';

import { X } from 'lucide-react';
import { useEffect } from 'react';

// 알림 부분
export function Alert() {
  return (
    <div className="hidden max-h-[910px] laptop:max-h-[1265px] overflow-y-auto tablet:flex flex-col gap-[8px] noraml-14 font-[600] border border-primary-800 px-[6px] py-[11px] rounded-[8px] bg-primary-50 min-w-0">
      <span className="px-[24px] py-[6px] semibold-14 border-[1px] border-error w-fit rounded-[13px] text-error bg-white flex-shrink-0">
        알림
      </span>
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
      <AlertMessage />
    </div>
  );
}

// 알림 메세지
export function AlertMessage() {
  return (
    <div className="flex flex-col cursor-pointer semibold-14 gap-[10px] border px-[15px] py-[11px] border-error bg-white rounded-xl min-w-0">
      <span>[알림]</span>
      <div className="flex flex-col semibold-14 gap-[10px] min-w-0">
        <span className="truncate">후원이 완료되었습니다.</span>
        <span className="text-secondary-200 normal-12 flex-shrink-0">2023.05.08</span>
      </div>
    </div>
  );
}

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
