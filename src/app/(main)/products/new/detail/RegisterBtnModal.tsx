'use client';

import { ChangeButtonFill } from '@components/button/SquareBtn';
import Modal from '@components/modal/Modal';
import { useState } from 'react';
import Register from './RegisterCon';

export function RegisterBtnModal() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="flex justify-center items-center tablet:justify-end">
        {/* 등록하기 버튼 */}
        <ChangeButtonFill
          label={'등록하기'}
          className={'mt-[23px] w-[240px] h-[47px] text-[14px] cursor-pointer'}
          onClick={handleClick}
        />
        <Modal onClose={() => setShowModal(false)} isShow={showModal}>
          <Register />
        </Modal>
      </div>
    </>
  );
}
