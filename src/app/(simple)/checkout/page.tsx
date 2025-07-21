'use client';

import { OrderedProductComponent, BuyerInfo, BuyerAddress } from '@components/address/DeliveryAddress';
import { CheckboxWithLabel } from '@components/button/SquareBtn';
import CircleCheckIcon from '@assets/icons/circle-check.svg';
import CircleUncheckIcon from '@assets/icons/circle-uncheck.svg';
import PlusIcon from '@assets/icons/plus.svg';

import { useState } from 'react';

export default function CheckoutPage() {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'naver' | 'kakao'>('card');
  const [isAgreedPersonalInfo, setIsAgreedPersonalInfo] = useState(false);
  const [isAgreedNotice, setIsAgreedNotice] = useState(false);

  const handleSubmit = () => {
    if (!isAgreedPersonalInfo || !isAgreedNotice) {
      alert('개인정보 제공 및 결제 유의사항 모두에 동의해주세요.');
      return;
    }
    alert('선택된 결제수단: ${selectedMethod}');
  };

  const PAYMENT_OPTIONS = [
    { key: 'card', label: '카드 간편결제' },
    { key: 'naver', label: '네이버페이' },
    { key: 'kakao', label: '카카오페이' },
  ];

  return (
    <div className="flex flex-col items-center p-[24px] mobile:p-[40px] tablet:px-[90px] tablet:py-[64px] laptop:px-[120px] laptop:py-[64px]  bg-bg text-font-900">
      <div className="w-full max-w-[1200px] flex flex-col laptop:flex-row gap-[53px] tablet:gap-[57px] laptop:gap-[57px]">
        <div className="flex-1 flex flex-col gap-[48px]">
          <section className="w-full">
            <OrderedProductComponent />
          </section>

          <section className="w-full">
            <BuyerInfo />
          </section>

          <section className="w-full">
            <BuyerAddress />
          </section>

          <section className="w-full">
            <div className="flex flex-col gap-5 w-full">
              <p className="font-bold font-pretendard text-[17px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] text-font-900">
                결제 수단
              </p>

              <div className="flex flex-col p-5 gap-[13px] bg-bg border border-font-400 rounded-lg">
                <div className="flex items-start border-b gap-[27px] w-full h-[37px]">
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
                          <CircleUncheckIcon className="w-[22px] h-[22px]" />
                        )}
                        {label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-center items-center gap-[5px] p-5 medium-12 tablet:text-[14px] laptop:text-[16px] text-font-400 cursor-pointer">
                  카드등록
                  <PlusIcon className="aria-hidden:true" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 💳 결제 정보 박스 */}
        <div className="w-full laptop:min-w-[320px] laptop:max-w-[360px] laptop:sticky laptop:top-40">
          <div className="flex justify-between border border-secondary-200 rounded-[6px] bg-white p-[21px] shadow-md">
            <span className="bold-12 tablet:text-[14px] laptop:text-[16px]">최종 결제 금액</span>
            <span className="text-right bold-12 tablet:text-[14px] laptop:text-[16px]">500,000 원</span>
          </div>
          <div>
            <p className="medium-10 mobile:text-[12px] tablet:text-[12px] laptop:text-[12px] text-font-400 px-[20px] py-[4px] laptop:py-[7px] mb-[21px]">
              프로젝트 성공 시, 배송은{' '}
              <span className="text-red-500 semibold-10 mobile:text-[12px] tablet:text-[12px] laptop:text-[12px]">
                2025.08.08
              </span>
              에 진행됩니다. 프로젝트가 무산되거나 중단된 경우, 진행된 결제는 자동으로 취소됩니다.
            </p>

            <div className="mb-4">
              <CheckboxWithLabel
                checked={isAgreedPersonalInfo}
                onChange={setIsAgreedPersonalInfo}
                label={
                  <div className="flex justify-between items-center w-full">
                    <span className="medium-12 mobile:text-[14px] tablet:text-[14px] laptop:text-[14px]">
                      개인정보 3자 제공 동의
                    </span>
                    <span className="text-[#818189] underline hover:text-error cursor-pointer text-right whitespace-nowrap">
                      내용보기
                    </span>
                  </div>
                }
              />
            </div>

            <div className="mb-[59px]">
              <CheckboxWithLabel
                checked={isAgreedNotice}
                onChange={setIsAgreedNotice}
                label={
                  <div className="flex justify-between items-center w-full">
                    <span className="medium-12 mobile:text-[14px] tablet:text-[14px] laptop:text-[14px]">
                      결제 유의사항 확인
                    </span>
                    <span className="text-[#818189] underline hover:text-error cursor-pointer text-right whitespace-nowrap">
                      내용보기
                    </span>
                  </div>
                }
              />
            </div>

            <button
              className="w-full bg-primary-800 text-white py-3 mt-4 disabled:opacity-50"
              onClick={handleSubmit}
              disabled={!isAgreedPersonalInfo || !isAgreedNotice}
            >
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
