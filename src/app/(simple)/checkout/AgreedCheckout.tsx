'use client';

import '@app/globals.css';
import { useState } from 'react';
import { CheckboxWithLabel } from '@components/button/SquareBtn';
import useOrderStore from 'zustand/orderStore';
import { usePaymentStore } from 'zustand/cardStore';
import { ReadTerms } from '@components/term/TermsBtn';
import { TermsModal } from '@components/term/TermsModal';
import { useAddressStore } from 'zustand/addressStore';
import { useRouter } from 'next/navigation';
import { requestPayment } from '@data/actions/payment';

//결제정보 동의 및 결제하기
export function AgreedCheckout() {
  const [isAgreedPersonalInfo, setIsAgreedPersonalInfo] = useState(false);
  const [isAgreedNotice, setIsAgreedNotice] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const { selectedAddressId } = useAddressStore();
  const { selectedCardNumber } = usePaymentStore();
  const { orderedProduct } = useOrderStore();
  const router = useRouter();

  if (!orderedProduct) {
    return <div className="text-font-400">주문한 상품이 없습니다.</div>;
  }

  const { price, count } = orderedProduct;
  const total = price * count;

  const handleSubmit = async () => {
    if (!isAgreedPersonalInfo || !isAgreedNotice) {
      alert('약관에 모두 동의해주세요.');
      return;
    }

    if (!selectedAddressId || !selectedCardNumber) {
      alert('배송지와 결제수단을 선택해주세요.');
      return;
    }

    try {
      await requestPayment({
        product: {
          _id: orderedProduct._id,
          quantity: orderedProduct.count,
        },
        addressId: selectedAddressId,
        cardNumber: selectedCardNumber,
      });

      alert(`결제가 완료되었습니다.`);
      router.push('/accounts');
    } catch (err) {
      console.error(err);
      alert('결제에 실패했습니다.');
    }
  };
  return (
    <div className="w-full laptop:min-w-[320px] laptop:max-w-[360px] laptop:sticky laptop:top-40">
      <div className="flex justify-between border border-secondary-200 rounded-[6px] bg-white p-[21px] shadow-md">
        <span className="bold-12 tablet:text-[14px] laptop:text-[16px]">최종 결제 금액</span>
        <span className="text-right bold-12 tablet:text-[14px] laptop:text-[16px]">{total.toLocaleString()}원</span>
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
                <span
                  onClick={() => setShowTermsModal(true)}
                  className="text-[#818189] underline hover:text-error cursor-pointer text-right whitespace-nowrap"
                >
                  <ReadTerms />
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
                <span
                  onClick={() => setShowTermsModal(true)}
                  className="text-[#818189] underline hover:text-error cursor-pointer text-right whitespace-nowrap"
                >
                  <ReadTerms />
                </span>
              </div>
            }
          />
        </div>

        <button className="w-full bg-primary-800 text-white py-3 mt-4 cursor-pointer" onClick={handleSubmit}>
          결제하기
        </button>

        <TermsModal isShow={showTermsModal} onClose={() => setShowTermsModal(false)} />
      </div>
    </div>
  );
}
