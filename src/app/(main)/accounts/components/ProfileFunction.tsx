'use client';

import ProfileImg from '@assets/icons/profile.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AlertMessage from './AlertMessage';
import Modal from '@components/modal/Modal';
import { allowScroll, preventScroll } from '@utils/modal';
import useUserStore from 'zustand/userStore';
import Image from 'next/image';

// 프로필 부분
export default function ProfileClient() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { user } = useUserStore();
  const nickname = user?.name || '사용자';
  const imageUrl = user?.image
    ? user.image.startsWith('http')
      ? user.image
      : `${process.env.NEXT_PUBLIC_API_URL}/${user.image}`
    : null;

  useEffect(() => {
    // 화면이 767px 이하이면 isMobile 상태를 true로 설정
    const checkMobile = () => setIsMobile(window.innerWidth <= 767);

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="flex justify-between px-[21px] py-[15px] mobile:px-[24px] mobile:py-[24px] tablet:px-[39px] tablet:py-[36px] laptop:pt-[33px] laptop:pb-[21px] laptop:px-[44px] rounded-t-[28px] border-b-[1px] bg-white border-primary-800 min-w-0">
        <div className="flex gap-[10px] items-center min-w-0">
          {imageUrl ? (
            <div className="relative w-[27px] h-[27px] tablet:w-[40px] tablet:h-[40px] flex-shrink-0 rounded-full overflow-hidden">
              <Image
                src={imageUrl}
                alt="프로필 이미지"
                fill
                className="object-cover rounded-full"
                sizes="(max-width: 768px) 27px, 40px"
              />
            </div>
          ) : (
            <ProfileImg width={27} height={27} className="tablet:w-[40px] h-[40px] flex-shrink-0" />
          )}
          <span className="normal-14 font-[700] tablet:text-[20px] truncate">{nickname}</span>
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

      {/* 모바일에서만 알림 모달 작동 */}
      {isMobile && showModal && <AlertModal isShow={true} onClose={() => setShowModal(false)} />}
    </>
  );
}

type AlertModalProps = {
  isShow: boolean;
  onClose: () => void;
};

// 알림 클릭 시 나타나는 모달 (모바일에서만, ProfileClient에서 사용)
function AlertModal({ isShow, onClose }: AlertModalProps) {
  useEffect(() => {
    const prevScrollY = preventScroll();
    return () => {
      allowScroll(prevScrollY);
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
