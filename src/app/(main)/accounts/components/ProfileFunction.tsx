'use client';

import ProfileImg from '@assets/icons/profile.svg';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import AlertMessage from './AlertMessage';
import Modal from '@components/modal/Modal';
import { allowScroll, preventScroll } from '@utils/modal';
import { getNotifications } from '@data/functions/getNotification';
import useUserStore from 'zustand/userStore';
import { INotification } from '@models/notification';
import useAlertStore from 'zustand/alertStore';

// 프로필 부분
export default function ProfileClient() {
  const [showModal, setShowModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
  const [alerts, setAlerts] = useState<INotification[]>([]);
  const [error, setError] = useState('');

  const accessToken = useUserStore().user?.token?.accessToken; // 토큰 가져오기

  const deletedAlertId = useAlertStore(state => state.deletedAlertId); // 삭제된 알림 목록 가져오기

  // 알림 목록 조회
  useEffect(() => {
    if (!accessToken) return;
    getNotifications(accessToken)
      .then(res => {
        if (res.ok && res.item) {
          setAlerts(res.item);
        } else {
          setError('알림을 불러오지 못했습니다.');
        }
      })
      .catch(() => setError('알림 요청 중 오류가 발생했습니다.'));
  }, [accessToken]);

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
          {error ? (
            <p className="text-error text-sm px-4">{error}</p>
          ) : alerts.filter(alert => !deletedAlertId.includes(alert._id)).length === 0 ? (
            <p className="text-sm text-font-400 px-4">알림이 없습니다.</p>
          ) : (
            alerts
              .filter(alert => !deletedAlertId.includes(alert._id))
              .map(alert => <AlertMessage key={alert._id} alert={alert} accessToken={accessToken!} />)
          )}
        </div>
      </div>
    </Modal>
  );
}
