'use client';

import { useState } from 'react';
import { UserSelect } from '@components/button/RoundedBtn';
import { ChangeButtonFill, PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { usePaymentStore } from 'zustand/cardStore';

interface AddCardProps {
  onComplete: () => void;
}

export function AddCard({ onComplete }: AddCardProps) {
  const { addCardNumber } = usePaymentStore();
  const [cardNumber, setCardNumber] = useState('');

  const handleRegister = () => {
    const trimmed = cardNumber.replaceAll(' ', '');
    if (trimmed.length !== 16) {
      alert('카드번호는 총 16자리여야 합니다.');
      return;
    }
    addCardNumber(cardNumber);
    onComplete();
  };

  return (
    <div className="w-full p-[24px] tablet:p-[40px] laptop:p-[43px]">
      <AddCardTitle />
      <SelectUserType />
      <InputCardNumber cardNumber={cardNumber} setCardNumber={setCardNumber} />
      <ExpirationDate />
      <CardPasswordAndBirthday />
      <DefaultPayment />
      <ChangeButtonFill
        label="등록 완료"
        className="w-full py-[8px] tablet:text-[20px] tablet:py-[16px] laptop:py-[20px] cursor-pointer"
        onClick={handleRegister}
      />
    </div>
  );
}

function AddCardTitle() {
  return <p className="normal-18 tablet:text-[20px] laptop:text-[24px] font-[700]">신용/체크 카드 등록</p>;
}

function SelectUserType() {
  return (
    <div className="pt-[20px] pb-[12px]">
      <UserSelect />
    </div>
  );
}

function InputCardNumber({ cardNumber, setCardNumber }: { cardNumber: string; setCardNumber: (val: string) => void }) {
  const formatCardNumber = (value: string) => {
    const onlyNumbers = value.replace(/\D/g, '');
    const limited = onlyNumbers.slice(0, 16);
    return limited.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(formatCardNumber(e.target.value));
  };

  return (
    <div className="pb-[12px] flex flex-col gap-[10px]">
      <p className="normal-14 laptop:text-[16px] font-[600]">카드번호</p>
      <input
        type="tel"
        placeholder="1234 5678 9012 3456"
        value={cardNumber}
        onChange={handleChange}
        maxLength={19}
        className="bg-bg border-secondary-200 border w-full rounded-sm p-[9px] h-[37px] normal-14 laptop:text-[16px] font-[400]"
      />
    </div>
  );
}

function ExpirationDate() {
  const years = Array.from({ length: 30 }, (_, i) => 2025 - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="pb-[12px] flex flex-col gap-[12px]">
      <p className="normal-14 font-[600]">카드유효기간</p>
      <div className="flex gap-[24px] font-[500] normal-14 laptop:text-[16px]">
        <select name="month" className="p-[9px] bg-bg border border-secondary-200 rounded-sm w-[103px]">
          {months.map(m => (
            <option key={m} value={m}>
              {m}월
            </option>
          ))}
        </select>
        <select name="year" className="p-[9px] bg-bg border border-secondary-200 rounded-sm w-[103px]">
          {years.map(y => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function CardPasswordAndBirthday() {
  const [password2, setPassword2] = useState('');
  const [birth, setBirth] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 2); // 숫자만, 2자리 제한
    setPassword2(value);
  };

  const handleBirthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '').slice(0, 6); // 숫자만, 6자리 제한
    setBirth(value);
  };

  return (
    <div className="pb-[12px] grid gap-[10px] mobile:grid-cols-[1fr_1fr] mobile:gap-[33px]">
      <div className="flex flex-col gap-[10px]">
        <p className="normal-14 laptop:text-[16px] font-[600]">카드 비밀번호 앞 2자리</p>
        <input
          type="text"
          inputMode="numeric"
          value={password2}
          onChange={handlePasswordChange}
          placeholder="카드 비밀번호 앞 2자리를 입력해주세요."
          className="bg-bg border-secondary-200 border p-[9px] rounded-[4px] normal-8 tablet:text-[14px] laptop:text-[16px] font-[400]"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <p className="normal-14 laptop:text-[16px] font-[600]">소유주 생년월일</p>
        <input
          type="text"
          inputMode="numeric"
          value={birth}
          onChange={handleBirthChange}
          placeholder="예)250808"
          className="bg-bg border-secondary-200 border p-[9px] rounded-[4px] normal-8 tablet:text-[14px] laptop:text-[16px] font-[400]"
        />
      </div>
    </div>
  );
}

function DefaultPayment() {
  return (
    <div className="pb-[24px]">
      <PreviewCheckboxWithLabel title="기본 결제 수단으로 등록" />
    </div>
  );
}
