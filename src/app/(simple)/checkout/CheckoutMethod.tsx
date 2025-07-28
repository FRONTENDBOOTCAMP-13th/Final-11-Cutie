'use client';
import { BuyerAddress, BuyerInfo, OrderedProductComponent } from '@components/address/DeliveryAddress';
import { CircleCheckIcon, PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { AddCard } from './AddCard';
import Modal from '@components/modal/Modal';

export function CheckoutMethod() {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'naver' | 'kakao'>('card');

  /* 카드 결제 모달창 제어 변수 */
  const [showModal, setShowModal] = useState(false);

  /* 카드 결제 모달창 제어 함수 */
  function clickPayCardButton() {
    setShowModal(!showModal);
  }

  const PAYMENT_OPTIONS = [
    { key: 'card', label: '카드 간편결제' },
    { key: 'naver', label: '네이버페이' },
    { key: 'kakao', label: '카카오페이' },
  ];

  return (
    <div className="flex-1 flex flex-col gap-[48px]">
      {/* 주문 상품 */}
      <section className="w-full">
        <OrderedProductComponent />
      </section>

      {/* 후원자 정보 */}
      <section className="w-full">
        <BuyerInfo />
      </section>

      {/* 배송지 정보 */}
      <section className="w-full">
        <BuyerAddress />
      </section>

      {/* 결제 수단 */}
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
                    {isSelected ? (
                      <CircleCheckIcon className="w-[22px] h-[22px]" />
                    ) : (
                      <CircleCheckIcon className="w-[22px] h-[22px]" />
                    )}
                    {label}
                  </button>
                );
              })}
            </div>

            <div
              className="flex justify-center items-center gap-[5px] p-5 medium-12 tablet:text-[14px] laptop:text-[16px] text-font-400 cursor-pointer"
              onClick={() => {
                clickPayCardButton();
              }}
            >
              카드등록
              <PlusIcon className="aria-hidden:true" />
            </div>

            {
              <Modal isShow={showModal} onClose={clickPayCardButton}>
                <AddCard />
              </Modal>
            }
          </div>
        </div>
      </section>
    </div>
  );
}
