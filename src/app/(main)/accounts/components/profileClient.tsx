'use client';

import ProfileImg from '@assets/icons/profile.svg';


import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AlertModal } from './AlertModal';

// 프로필 부분
export default function ProfileClient() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="flex justify-between px-[21px] py-[15px] mobile:px-[24px] mobile:py-[24px] tablet:px-[39px] tablet:py-[36px] laptop:pt-[33px] laptop:pb-[21px] laptop:px-[44px] rounded-t-[28px] border-b-[1px] bg-white border-primary-800 min-w-0">
        <div className="flex gap-[10px] items-center min-w-0">
          <ProfileImg width={27} height={27} className="tablet:w-[40px] h-[40px] flex-shrink-0" />
          <span className="normal-14 font-[700] tablet:text-[20px] truncate">홍길동</span>
        </div>
        <div className="flex gap-[11px] normal-14 font-[600] flex-shrink-0">
          <Link
            href={'/edit'}
            className="cursor-pointer flex items-center px-[7px] py-[4px] border-[1px] rounded-[8px] text-primary-800 whitespace-nowrap"
          >
            프로필 편집
          </Link>

          {/* 모바일에서만 보이는 알림 버튼 */}
          <button
            className="cursor-pointer px-[7px] py-[4px] border-[1px] rounded-[8px] text-error tablet:hidden whitespace-nowrap"
            onClick={() => setShowModal(true)}
          >
            알림
          </button>
        </div>
      </div>

      {/* 모바일에서만 알림 모달 */}
      {isMobile && showModal && <AlertModal onClose={() => setShowModal(false)} />}
    </>
  );
}
