'use client';

import { CheckSquareBtn, UnCheckSquareBtn } from '@components/button/SquareBtn';
import { RegisterBankModal, RegisterTaxModal } from '@components/modal/Modal';
import { AlertCircle, User } from 'lucide-react';
import { useState } from 'react';

{
  /* 인증,등록 하기 폼 */
}
interface registerFormProps {
  type: 'auth' | 'account' | 'tax';
}

export default function RegisterForm({ type }: registerFormProps) {
  const [showModal, setShowModal] = useState(false);
  let command = '인증을 완료해주세요';
  let label = '인증하기';

  switch (type) {
    case 'auth':
      command = '인증을 완료해주세요.';
      label = '인증하기';
      break;
    case 'account':
      command = '등록을 완료해주세요.';
      label = '등록하기';
      break;
    case 'tax':
      command = '등록을 완료해주세요.';
      label = '등록하기';
      break;
  }

  const handleClick = () => {
    setShowModal(true);
  };

  const renderModal = () => {
    if (!showModal) return null;

    return (
      <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white rounded-2xl">
            <button className="absolute -top-10 right-0 text-white p-2" onClick={() => setShowModal(false)}>
              ✕
            </button>
            {type === 'account' && <RegisterBankModal onClick={() => setShowModal(false)} />}
            {type === 'auth' && <RegisterBankModal onClick={() => setShowModal(false)} />}
            {type === 'tax' && <RegisterTaxModal onClick={() => setShowModal(false)} />}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="h-[66px] border border-font-400 rounded-sm flex p-[15px]">
        <div className="flex justify-between items-center w-full ">
          <div className="flex flex-row gap-2 semibold-14 items-center">
            <AlertCircle className="stroke-primary-800" />
            <p>{command}</p>
          </div>
          <UnCheckSquareBtn label={label} onClick={handleClick} />
        </div>
      </div>
      {renderModal()}
    </>
  );
}

{
  /* 창작자 본인 인증 후 */
}
export function AuthDone() {
  return (
    <div className="w-[352px] h-[66px] border border-font-400 rounded-sm flex p-[15px]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex flex-col gap-2 normal-14 ">
          <div className="flex gap-2 items-center">
            <User className="stroke-primary-800 fill-primary-800" />
            <p className="font-bold">케로로</p>
          </div>
          <div className="flex gap-2 text-font-400 normal-14 ">
            <p>250808</p>/<p>010-7777-3333</p>
          </div>
        </div>
        <CheckSquareBtn label="인증완료" />
      </div>
    </div>
  );
}
