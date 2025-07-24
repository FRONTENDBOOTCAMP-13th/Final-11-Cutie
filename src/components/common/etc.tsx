'use client';

import '@app/globals.css';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { OrderedProductComponent, BuyerInfo, BuyerAddress } from '@components/address/DeliveryAddress';
import { CheckboxWithLabel } from '@components/button/SquareBtn';
import CircleCheckIcon from '@assets/icons/circle-check.svg';
import CircleUncheckIcon from '@assets/icons/circle-uncheck.svg';
import PlusIcon from '@assets/icons/plus.svg';
import { useState } from 'react';

interface SpecialPlanName {
  title?: string;
}

// 특별기획/시즌기획
export function SpecialPlan({ title }: SpecialPlanName) {
  return (
    <p className="flex items-center semibold-18  h-[22px] mobile:font-bold mobile:text-[20px] mobile:w-40 mobile:h-[25px] tablet:font-bold tablet:text-[24px] tablet:w-[190px] tablet:h-[30px]  ">
      {title}
    </p>
  );
}

// 더 많은 펀딩보기
export function Addfunding() {
  return (
    <Link
      className="flex items-center h-[20px] gap-[8px] tablet:gap-[10px]  medium-14 tablet:text-[16px] text-font-400 hover:text-primary-800 hover:fill-primary-800"
      href="#"
    >
      <p className="hidden mobile:block ">더 많은 펀딩 보기</p>
      <ChevronRight className="w-[18px] h-[18px] tablet:w-5 tablet:h-5" />
    </Link>
  );
}

//프로젝트 만들기 대제목 및 소제목

export function CreateProjectTitle({
  title,
  sub,
  titleClassName = '',
  subClassName = '',
  gap = 0,
}: {
  title?: React.ReactNode;
  sub?: string;
  titleClassName?: string;
  subClassName?: string;
  gap?: number;
}) {
  return (
    <div className={`flex flex-col gap-[${gap}px]`}>
      {/*대제목*/}
      <p className={'bold-24 text-font-900 whitespace-pre-line' + titleClassName}>
        {/* 멋진 아이디어가 있으시군요!
        <br />
        어떤 프로젝트를 계획 중이신가요? */}
        {title}
      </p>
      {/*소제목*/}
      <p className={'medium-14 text-font-400 ' + subClassName}>
        {/* 나중에 변경 가능하니 너무 걱정마세요. */}
        {sub}
      </p>
    </div>
  );
}

// 보기
export function See() {
  return <span className="underline normal-24 text-[#6A6A6A] hover:text-font-900">보기</span>;
}

// 토글 스위치 (0~480: 28x15 9,  36X20 18)
export function ToggleSwitchBig() {
  return (
    <label className=" inline-flex cursor-pointer">
      <input type="checkbox" className="sr-only peer" />
      <div
        className="relative w-7 h-4 after:h-3 after:w-3 peer-checked:after:translate-x-[14px] peer-checked:bg-primary-800 peer-focus:outline-none after:content-[''] after:absolute 
        after:top-1/2 after:-translate-y-1/2 after:left-[1px]  bg-secondary-200 rounded-full peer 
        after:bg-white  after:rounded-full after:transition-all
        tablet:w-9 tablet:h-5 tablet:after:h-[18px] tablet:after:w-[18px]
        tablet:peer-checked:after:translate-x-4 "
      />
    </label>
  );
}

//결제수단
export function CheckoutMethod() {
  const [selectedMethod, setSelectedMethod] = useState<'card' | 'naver' | 'kakao'>('card');

  const PAYMENT_OPTIONS = [
    { key: 'card', label: '카드 간편결제' },
    { key: 'naver', label: '네이버페이' },
    { key: 'kakao', label: '카카오페이' },
  ];

  return (
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
  );
}

//결제정보 동의 및 결제하기
export function AgreedCheckout() {
  const [isAgreedPersonalInfo, setIsAgreedPersonalInfo] = useState(false);
  const [isAgreedNotice, setIsAgreedNotice] = useState(false);

  const handleSubmit = () => {
    if (!isAgreedPersonalInfo || !isAgreedNotice) {
      alert('개인정보 제공 및 결제 유의사항 모두에 동의해주세요.');
      return;
    }
    alert('선택된 결제수단: ${selectedMethod}');
  };

  return (
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
  );
}
