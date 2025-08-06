'use client';
import PlusIcon from '@assets/icons/plus.svg';
import LocationIcon from '@assets/icons/location.svg';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import '@app/globals.css';
import { useState } from 'react';
import Modal from '@components/modal/Modal';
import { Address } from '@app/(simple)/checkout/Address';
import useOrderStore from 'zustand/orderStore';
import useUserStore from 'zustand/userStore';
import { calculateGoalPercent } from '@utils/goalPercent';

// 후원자 정보
export function BuyerInfo() {
  const { user } = useUserStore();

  return (
    <div className="flex flex-col gap-5 w-full">
      <p className="bold-24 text-font-900">후원자 정보</p>
      <div className="bg-bg p-5 border border-font-400 rounded-lg">
        <ul className="flex flex-col gap-[18px] text-font-900 w-full">
          <li className="flex gap-[57px] bold-12 laptop:text-[14px]">
            <span>이름</span>
            <span className="font-medium text-font-400">{user?.realname || '이름 없음'}</span>
          </li>
          <li className="bold-12 laptop:text-[14px]">
            이메일
            <span className="ml-[45px] font-medium text-font-400">{user?.email || '이메일 없음'}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

// 배송지 정보
export function BuyerAddress() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <p className="font-bold font-pretendard text-[17px] mobile:text-[20px] laptop:text-[24px] text-font-900">
          배송지 정보
        </p>
        <button
          aria-label="배송지 추가"
          type="button"
          className="flex p-5 bg-bg justify-center border border-font-400 rounded-lg gap-[5px] items-center medium-12 tablet:text-[14px] laptop:text-[16px] text-font-400  cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        >
          배송지 추가
          <PlusIcon className="aria-hidden:true" />
        </button>

        {/* 배송지 추가 버튼을 누르면 나오는 모달창 */}
        {
          <Modal isShow={showModal} onClose={handleClick}>
            <Address onClose={handleClick} />
          </Modal>
        }
      </div>
    </>
  );
}

// 결제수단
export function BuyMethod() {
  return (
    <>
      <div className="flex flex-col gap-5 w-full">
        <p className="font-bold font-pretendard text-[17px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] text-font-900">
          결제 수단
        </p>
        <div className="flex flex-col p-5 gap-[13px] bg-bg border border-font-400 rounded-lg">
          <div className="flex border-b gap-[27px] w-full h-[37px]">
            <p className="medium-12 tablet:text-[14px] laptop:text-[16px]">카드 간편결제</p>
            <p className="medium-12 tablet:text-[14px] laptop:text-[16px]">네이버페이</p>
            <p className="medium-12 tablet:text-[14px] laptop:text-[16px]">카카오페이</p>
          </div>
          <div className="flex justify-center h-[19px] items-center gap-[5px] p-5 medium-12 tablet:text-[14px] laptop:text-[16px] text-font-400  cursor-pointer">
            카드등록
            <PlusIcon className="aria-hidden:true" />
          </div>
        </div>
      </div>
    </>
  );
}

// 결제하기 - 주문상품 컴포넌트/주문상품
export function OrderedProductComponent() {
  const { orderedProduct } = useOrderStore();

  if (!orderedProduct) {
    return <div className="text-font-400">주문한 상품이 없습니다.</div>;
  }

  const { name, price, count, imageUrl, sellerName, expectedDate } = orderedProduct;
  const total = price * count;

  return (
    <section className="w-full font-pretendard">
      <p className="font-bold text-[17px] mobile:text-[20px] tablet:text-[24px] laptop:text-[24px] mb-[5px] mobile:mb-[20px] tablet:mb-[20px]">
        주문상품
      </p>
      <div className="flex p-5 bg-white rounded-lg gap-[20px] border border-secondary-200">
        <Image
          src={imageUrl}
          alt={name}
          width={136}
          height={136}
          className="w-[136px] h-[136px] object-cover shrink-0 max-[480px]:w-[100px]"
          priority
        />
        <div className="w-full flex flex-col justify-between gap-[7px]">
          <p className="text-secondary-200 medium-10 tablet:text-[12px] laptop:text-[12px]">{sellerName}</p>
          <p className="text-gray-900 bold-14 tablet:text-[16px] laptop:text-[18px]">{name}</p>
          <div className="flex items-center gap-5">
            <span className="semibold-12 tablet:text-[14px] laptop:text-[14px]">총 {total.toLocaleString()}원</span>
            {orderedProduct.product && (
              <span className="text-primary-800 medium-12">
                달성률 {calculateGoalPercent(orderedProduct.product).toLocaleString()}%
              </span>
            )}
          </div>
          <div className="flex flex-wrap justify-between items-center text-font-400">
            <div className="flex items-center bg-secondary-50 px-2 py-1 mb-1 medium-10  tablet:text-[12px] laptop:text-[12px]">
              예상 배송 시작일 <span className="text-error">{expectedDate}</span>
            </div>
            <span className="medium-10">배송비 무료</span>
          </div>
          <p className="bg-primary-50 rounded-b-xs px-[9px] py-2 normal-12 tablet:text-[14px] laptop:text-[14px] text-gray-900  ">
            선택 1 : {name} {count}장
          </p>
        </div>
      </div>
    </section>
  );
}

// 장바구니 - 주문상품 컴포넌트/최종 금액 확인
export function CheckFinalAmount() {
  const { orderedProduct } = useOrderStore();

  if (!orderedProduct) {
    return <div className="text-font-400">주문한 상품이 없습니다.</div>;
  }

  const { price, count } = orderedProduct;
  const total = price * count;

  return (
    <>
      <section className="flex justify-between items-center p-5 border border-secondary-200 w-[672px] rounded-b-lg text-font-900">
        <span className="bold-16">최종 결제 금액</span>
        <div className="text-font-900 bold-16">
          <span>{total.toLocaleString()}원</span>
        </div>
      </section>
    </>
  );
}

// 배송지 박스 컴포넌트
export function DeliveryAddressBox() {
  return (
    <div className="flex items-center justify-between w-fit pl-[20px] pr-[35px] py-[13px] laptop:py-[12px] laptop:pl-[20px] laptop:pr-[10px] bg-secondary-50 rounded-[12px]">
      <div className="flex items-center gap-[8px] flex-wrap text-[14px] leading-none">
        <LocationIcon className="text-primary-800 w-[18px] h-[22px]" />
        <span className="bold-14 laptop:text-[16px] text-font-900">배송지 : 회사</span>
        <span className="normal-14 laptop:text-[16px] ml-[8px] mr-[16px] text-font-400">
          서울 종로구 종로3길17, 광화문D타워 D1동 16층, 17층
        </span>
      </div>
      <button className="whitespace-nowrap min-w-[50px]  flex items-center justify-center px-[11px] py-[4px] border border-font-400 rounded-[4px] text-font-400 medium-14 text-12-at-558 laptop:text-[16px] hover:bg-primary-800 hover:text-white">
        변경
      </button>
    </div>
  );
}

// 주문상품 컴포넌트 여러 건
export function MultiOrderedProductComponent() {
  return (
    <>
      <div className="">
        <section className="w-full">
          <p className="bold-24 mb-5">주문상품</p>
          <div className="flex flex-col p-5 bg-white rounded-t-lg border border-secondary-200">
            <div className="w-full flex gap-6">
              <Image src={productKeroro} alt="/" className="w-[56px] h-[56px] rounded-[5px]" priority />
              <div className="flex flex-col gap-2">
                <p className="text-font-900 bold-18 mb-[9px]">총 2건</p>
                <p className="text-gray-900 bold-14 mb-[7px]">
                  개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠 외
                </p>
              </div>
            </div>

            <p className="flex justify-between pt-[10px] border-t border-secondary-200 medium-14 text-font-400">
              상품 금액<span>500,000원</span>
            </p>
            <p className="flex justify-between pt-0.5 medium-14 text-font-400">
              배송비<span>무료</span>
            </p>
          </div>

          <div className="flex justify-between items-center p-5 border border-t-0 border-secondary-200 rounded-b-lg text-font-900">
            <span className="bold-16">최종 주문 금액</span>
            <div className="text-font-900 bold-16">
              <strong>1,000,000</strong>
              <span>원</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
