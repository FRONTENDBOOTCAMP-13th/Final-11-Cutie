'use client';

import { BuyerAddress, BuyerInfo, OrderedProductComponent } from '@components/address/DeliveryAddress';
import { CircleCheckBigIcon, PlusIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { AddCard } from './AddCard';
import Modal from '@components/modal/Modal';
import { usePaymentStore } from 'zustand/cardStore';
import { useAddressStore, AddressState } from 'zustand/addressStore';
import type { Address } from 'zustand/addressStore';
import { useShallow } from 'zustand/shallow';

export function CheckoutMethod() {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'naver' | 'kakao'>('card');
  const { registeredCardNumbers, selectedCardNumber, selectCardNumber, removeCardNumber } = usePaymentStore();

  const [showModal, setShowModal] = useState(false);

  const PAYMENT_OPTIONS = [
    { key: 'card', label: '카드 간편결제' },
    // { key: 'naver', label: '네이버페이' },
    // { key: 'kakao', label: '카카오페이' },
  ];

  useEffect(() => {
    if (registeredCardNumbers.length === 1 && selectedCardNumber !== registeredCardNumbers[0]) {
      selectCardNumber(registeredCardNumbers[0]);
    }
  }, [registeredCardNumbers, selectedCardNumber, selectCardNumber]);

  return (
    <div className="flex-1 flex flex-col gap-[48px] font-pretendard">
      <section className="w-full">
        <OrderedProductComponent />
      </section>

      <section className="w-full">
        <BuyerInfo />
      </section>

      <section className="w-full">
        <BuyerAddress />
        <AddressPreview />
      </section>

      <section className="w-full">
        <div className="flex flex-col gap-5 w-full">
          <p className="font-bold font-pretendard text-[17px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] text-font-900">
            결제 수단
          </p>

          <div className="flex flex-col p-5 gap-[13px] bg-bg border border-font-400 rounded-lg">
            <div className="flex items-start border-b gap-[10px] mobile:gap-[27px] w-full h-[37px]">
              {PAYMENT_OPTIONS.map(({ key, label }) => {
                const isSelected = selectedMethod === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedMethod(key as typeof selectedMethod)}
                    className="flex items-center gap-[6px] medium-12 tablet:text-[14px] laptop:text-[16px] text-font-900"
                  >
                    <CircleCheckBigIcon
                      className={`w-[22px] h-[22px]  ${isSelected ? 'text-primary-800' : 'text-black'}`}
                    />
                    {label}
                  </button>
                );
              })}
            </div>

            {selectedMethod === 'card' && (
              <>
                <div className="flex flex-col gap-2">
                  {registeredCardNumbers.map((card, index) => {
                    const isSelectedCard = selectedCardNumber === card;
                    return (
                      <div
                        key={index}
                        onClick={() => selectCardNumber(card)}
                        className={`p-4 rounded-lg border flex justify-between items-center cursor-pointer transition ${
                          isSelectedCard
                            ? 'bg-primary-50 border-primary-800'
                            : 'bg-bg border-secondary-200 hover:border-primary-400'
                        }`}
                      >
                        <p className="text-font-900">💳 : {card}</p>

                        <button
                          onClick={e => {
                            e.stopPropagation(); // 부모 div 클릭 방지
                            removeCardNumber(card);
                          }}
                          className="text-red-500 underline"
                        >
                          삭제
                        </button>
                      </div>
                    );
                  })}
                </div>

                <div
                  className="flex justify-center items-center gap-[5px] p-5 medium-12 tablet:text-[14px] laptop:text-[16px] text-font-400 cursor-pointer"
                  onClick={() => setShowModal(true)}
                >
                  카드등록
                  <PlusIcon />
                </div>
              </>
            )}

            <Modal isShow={showModal} onClose={() => setShowModal(false)}>
              <AddCard onComplete={() => setShowModal(false)} />
            </Modal>
          </div>
        </div>
      </section>
    </div>
  );
}

function AddressPreview() {
  const { addresses, selectedAddressId, selectAddress, removeAddress } = useAddressStore(
    useShallow((state: AddressState) => ({
      addresses: state.addresses,
      selectedAddressId: state.selectedAddressId,
      selectAddress: state.selectAddress,
      removeAddress: state.removeAddress,
    })),
  );
  useEffect(() => {
    if (addresses.length === 1 && selectedAddressId !== addresses[0].id) {
      selectAddress(addresses[0].id);
    }
  }, [addresses, selectedAddressId, selectAddress]);

  if (addresses.length === 0) return null;

  return (
    <div className="mt-4 flex flex-col gap-4 font-pretendard">
      {addresses.map((addr: Address) => {
        const isSelected = selectedAddressId === addr.id;

        return (
          <div
            key={addr.id}
            onClick={() => selectAddress(addr.id)}
            className={`p-4 rounded-lg border cursor-pointer transition ${
              isSelected ? 'border-primary-800 bg-primary-50' : 'border-secondary-200 bg-bg hover:border-primary-400'
            }`}
          >
            <p className="font-semibold text-[16px] laptop:text-[18px] text-font-900 mb-2">📦 배송지</p>
            <p>받는 사람: {addr.name}</p>
            <p>주소: {addr.address}</p>
            <p>연락처: {formatPhone(addr.phone)}</p>

            <div className="flex gap-2 mt-2">
              <button
                className="text-red-500 underline"
                onClick={e => {
                  e.stopPropagation(); // 부모 div 클릭 방지
                  removeAddress(addr.id);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function formatPhone(raw: string) {
  const cleaned = raw.replace(/\D/g, '').slice(0, 11);
  if (cleaned.length < 4) return cleaned;
  if (cleaned.length < 8) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
  return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 7)}-${cleaned.slice(7)}`;
}
