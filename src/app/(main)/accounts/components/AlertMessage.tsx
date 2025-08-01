'use client';

import Modal from '@components/modal/Modal';
import { INotification } from '@models/notification';
import { X } from 'lucide-react';
import { useState } from 'react';
import useAlertStore from 'zustand/alertStore';

interface AlertMessageProps {
  alert: INotification;
  accessToken: string;
  onRead?: () => void;
}

// 알림 메세지
export default function AlertMessage({ alert, onRead }: AlertMessageProps) {
  const checkRead = useAlertStore(state => state.checkRead);
  const checkDeleted = useAlertStore(state => state.checkDeleted);
 
  const isAlreadyRead = useAlertStore(state => state.isRead(alert._id));  // 알림 읽은 상태인지 확인
  
  const [showModal, setShowModal] = useState(false);
  const [isRead, setIsRead] = useState(alert.isRead || isAlreadyRead);

  const handleClick = async () => {
    const willShow = !showModal;

    if (!willShow && !isRead) {
      checkRead(alert._id);
      setIsRead(true);
      onRead?.();
    }

    setShowModal(willShow);
  };

  return (
    <div
      className={`
        flex flex-col cursor-pointer semibold-14 gap-[10px] border px-[15px] py-[11px] 
        rounded-xl min-w-0 
        ${isRead ? 'bg-secondary-50 border-secondary-200' : 'bg-white border-error'}
      `}
    >
      <div
        onClick={() => {
          handleClick();
        }}
        className="flex flex-col semibold-14 gap-[10px] min-w-0 text-left cursor-pointer"
      >
        <div className="flex justify-between items-center">
          {/* 알림 타입 */}
          <span>{getAlertLabel(alert.type)}</span>
          {/* 알림 삭제 버튼 */}
          <button
            onClick={e => {
              e.stopPropagation(); // 부모 onClick(handleClick) 막기
              checkDeleted(alert._id); // zustand로 삭제 처리
            }}
            className="cursor-pointer"
          >
            <X className="w-[18px] h-[18px]" />
          </button>
        </div>
        {/* 알림 대상 상품 */}
        <span className="truncate">
          {alert.extra.product_name}
          <br />
          {/* 알림 간략 내용 펀딩 or 배송 */}
          {getAlertSummary(alert.type, alert.content)}
        </span>
        {/* 알림 생성일 */}
        <span className="text-secondary-200 normal-12 flex-shrink-0">{alert.createdAt.slice(0, 10)}</span>
      </div>

      {/* 알림 클릭 시 모달 */}
      <Modal isShow={showModal} onClose={handleClick}>
        <div className="p-10 pt-16 pb-16 text-center">{renderAlertMessage(alert)}</div>
      </Modal>
    </div>
  );
}

// 타입에 따라 알림 타이틀 다르게 출력
export function getAlertLabel(type: string) {
  switch (type) {
    case 'fund':
      return '[펀딩]';
    case 'delivery':
      return '[배송]';
    default:
      return '[알림]';
  }
}

// 타입에 따라 알림 서브 타이틀 다르게 출력
export function getAlertSummary(type: string, fallback: string = '') {
  switch (type) {
    case 'fund':
      return '펀딩이 확정되었습니다.';
    case 'delivery':
      return '배송이 시작되었습니다.';
    default:
      return fallback;
  }
}

// 타입에 따라 알림 상세 다르게 출력
export function renderAlertMessage(alert: INotification) {
  switch (alert.type) {
    case 'fund':
      return (
        <>
          🎉 펀딩이 확정되었어요!
          <br />
          <br />[{alert.extra.product_name}]<br />
          프로젝트가 성공적으로 마감되어, 이제 곧 제작이 시작됩니다.
          <br />
          소중한 참여에 진심으로 감사드려요.
        </>
      );
    case 'delivery':
      return (
        <>
          🚚 배송이 시작되었어요!
          <br />
          <br />[{alert.extra.product_name}]<br />
          제작이 성공적으로 완료되어, 이제 곧 배송이 시작됩니다.
          <br />
          안전히 배송해드리겠습니다.
        </>
      );
    default:
      return <>{alert.content}</>;
  }
}
