'use client';

import { useRef, useState, useEffect } from 'react';
import { ChangeButtonFill, PreviewCheckboxWithLabel } from '@components/button/SquareBtn';
import { useAddressStore } from 'zustand/addressStore';

export function Address() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const { addAddress } = useAddressStore();

  const checkboxRef = useRef<HTMLDivElement>(null);

  const isValidPhone = /^\d{10,11}$/.test(phone.replace(/\D/g, ''));
  const canSubmit = name.trim() && address.trim() && isValidPhone && agreed;

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isChecked = checkboxRef.current?.querySelector('svg')?.classList.contains('text-primary-800');
      setAgreed(!!isChecked);
    });

    if (checkboxRef.current) {
      observer.observe(checkboxRef.current, { childList: true, subtree: true, attributes: true });
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = () => {
    if (!canSubmit) {
      alert('모든 항목을 올바르게 입력하고 동의해주세요.');
      return;
    }

    addAddress({ name, address, phone });
    alert('배송지 등록 완료');
  };

  return (
    <div className="p-[24px] mobile:p-[40px] tablet:p-[40px] laptop:p-[43px] w-[300px] mobile:w-[450px] tablet:w-[684px] laptop:w-[684px] flex flex-col gap-[20px]">
      <h2 className="font-[700] normal-18 text-[17px] mobile:text-[20px] laptop:text-[24px]">배송지 추가</h2>

      <InputBlock label="받는 사람" value={name} setValue={setName} placeholder="받는 분 성함을 입력해주세요." />
      <InputBlock label="주소" value={address} setValue={setAddress} placeholder="받는 분 주소를 입력해 주세요." />
      <InputBlock
        label="받는 사람 휴대폰 번호"
        value={formatPhone(phone)}
        setValue={val => setPhone(val.replace(/\D/g, '').slice(0, 11))}
        placeholder="받는 분 휴대폰 번호를 입력해주세요."
      />

      <div ref={checkboxRef}>
        <PreviewCheckboxWithLabel title="개인정보 수집 및 이용 동의" />
      </div>

      <ChangeButtonFill label="등록 완료" className="w-full py-[16px]" onClick={handleSubmit} disabled={!canSubmit} />
    </div>
  );
}

function InputBlock({
  label,
  value,
  setValue,
  placeholder,
}: {
  label: string;
  value: string;
  setValue: (v: string) => void;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-[10px]">
      <p className="font-[600] normal-14 laptop:text-[16px]">{label}</p>
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        className="bg-bg border-secondary-200 border rounded-sm p-[9px] mobile:p-[12px] laptop:p-[15px] normal-12 mobile:text-[14px] laptop:text-[16px] font-[400] w-full h-[32px] mobile:h-[43px] laptop:h-[51px]"
      />
    </div>
  );
}

function formatPhone(raw: string) {
  const cleaned = raw.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length < 4) return cleaned;
  if (cleaned.length < 8) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
}
