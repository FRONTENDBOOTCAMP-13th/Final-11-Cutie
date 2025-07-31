'use client';

import Modal from '@components/modal/Modal';
import { readNotification } from '@data/actions/notification';
import { INotification } from '@models/notification';
import { useState } from 'react';

interface AlertMessageProps {
  alert: INotification;
  accessToken: string;
  onRead?: () => void; // <- 읽음 처리 후 알림
}

// 알림 메세지
export default function AlertMessage({ alert, accessToken, onRead }: AlertMessageProps) {
  const [showModal, setShowModal] = useState(false);
  const [isRead, setIsRead] = useState(alert.isRead);

  const handleClick = async () => {
    const willShow = !showModal;

    if (!willShow && !isRead) {
      try {
        await readNotification([alert._id], accessToken);
        setIsRead(true);
        onRead?.(); // 부모에 알림
      } catch (err) {
        console.error('알림 읽음 처리 실패:', err);
      }
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
      <button
        onClick={() => {
          handleClick();
        }}
        type="button"
        className="flex flex-col semibold-14 gap-[10px] min-w-0 text-left cursor-pointer"
      >
        <span>[알림]</span>
        <span className="truncate">
          {alert.extra.product_name} <br />
          펀딩이 확정되었습니다.
        </span>
        <span className="text-secondary-200 normal-12 flex-shrink-0">{alert.createdAt.slice(0, 10)}</span>
      </button>

      <Modal isShow={showModal} onClose={handleClick}>
        <div className="p-10 pt-16 pb-16 text-center">
          🎉 펀딩이 확정되었어요!
          <br />
          <br />[{alert.extra.product_name}]<br /> 프로젝트가 성공적으로 마감되어, 이제 곧 제작이 시작됩니다.
          <br />
          소중한 참여에 진심으로 감사드려요.
        </div>
      </Modal>
    </div>
  );
}
