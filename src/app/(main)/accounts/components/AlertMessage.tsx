'use client';

import Modal from "@components/modal/Modal";
import { useState } from "react";

// 알림 메세지
export default function AlertMessage() {
  const [showModal, setShowModal] = useState(false);
  const [isRead, setIsRead] = useState(false); 
  
  const handleClick = () => {
    if (showModal) {
      // 모달이 닫힐 때 읽음 처리
      setIsRead(true);
    }
    setShowModal(!showModal);
  };

  return (
    <div className={`
        flex flex-col cursor-pointer semibold-14 gap-[10px] border px-[15px] py-[11px] 
        rounded-xl min-w-0 
        ${isRead ? "bg-secondary-50 border-secondary-200" : "bg-white border-error"}
      `}>
      <button 
          onClick={() => { handleClick();}} 
          type="button" 
          className="flex flex-col semibold-14 gap-[10px] min-w-0 text-left cursor-pointer">
        <span>[알림]</span>
        <span className="truncate">후원이 완료되었습니다.</span>
        <span className="text-secondary-200 normal-12 flex-shrink-0">2023.05.08</span>
      </button>

      <Modal isShow={showModal} onClose={handleClick}>
        <div className="p-10 pt-16 pb-16 text-center">
          🎉 펀딩이 확정되었어요!<br/><br/>
          [펀딩한 상품이름]< br/>
          프로젝트가 성공적으로 마감되어, 이제 곧 제작이 시작됩니다.<br />
          소중한 참여에 진심으로 감사드려요.
        </div>
      </Modal>

    </div>
  );
}