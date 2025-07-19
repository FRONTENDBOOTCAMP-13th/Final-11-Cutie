import PlusIcon from '@assets/icons/plus.svg';
import LocationIcon from '@assets/icons/location.svg';
import Image from 'next/image';
import productKeroro from 'assets/images/productKeroro.jpg';
import '@app/globals.css';

// 후원자 정보
export function BuyerInfo() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px]">
        <p className="bold-24 text-font-900">후원자 정보</p>
        <div className="bg-bg-200 p-5 border border-font-400 rounded-lg">
          <ul className="flex flex-col gap-[18px] text-font-900">
            <li className="bold-14 ">
              이름<span className="ml-[57px] font-medium text-font-400">홍길동</span>
            </li>
            <li className="bold-14 flex items-baseline">
              <div>
                연락처
                <span className="ml-[45px] font-medium text-font-400">010-1234-5678</span>
              </div>
              {/* ChangeBtn으로 교체 필요 */}
              <button
                type="button"
                className="medium-12 text-font-400 bg-bg border border-font-400 rounded-sm px-[11px] py-1 ml-auto"
              >
                인증하기
              </button>
            </li>
            <li className="bold-14">
              이메일<span className="ml-[45px] font-medium text-font-400">abc@ddd.com</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

// 배송지 정보
export function BuyerAddress() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px]">
        <p className="bold-24 text-font-900">배송지 정보</p>
        <button
          aria-label="배송지 추가"
          type="button"
          className="flex p-5 bg-bg justify-center border border-font-400 rounded-lg gap-[5px] items-center medium-16 text-font-400  cursor-pointer"
        >
          배송지 추가
          <PlusIcon className="aria-hidden:true" />
        </button>
      </div>
    </>
  );
}

// 결제수단
export function BuyMethod() {
  return (
    <>
      <div className="flex flex-col gap-5 max-w-[632px] ">
        <p className="bold-24 text-font-900">결제 수단</p>
        <div className="flex flex-col p-5 gap-[13px] bg-bg border border-font-400 rounded-lg">
          {/* CircleCheckbox.tsx 컴포넌트로 교체 필요 자리만 잡아둔 것 */}
          <div className="flex  border-b gap-[27px] w-full h-[37px]">
            <p className="medium-16">카드 간편결제</p>
            <p className="medium-16">네이버페이</p>
            <p className="medium-16">카카오페이</p>
          </div>
          <div className="flex justify-center h-[19px] items-center gap-[5px] p-5 medium-16 text-font-400  cursor-pointer">
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
  return (
    <>
      <section className="w-[672px] h-[226px]">
        <p className="bold-24 mb-5">주문상품</p>
        <div className="flex p-5 bg-white rounded-lg gap-[26px] border border-secondary-200">
          <Image src={productKeroro} alt="/" className="w-[136px] h-[136px]" />
          <div className="w-full ">
            <p className="text-secondary-200 medium-14 mb-[9px] ">(주) 1더하기1은귀요미</p>
            <p className="text-gray-900 bold-18 mb-[7px] ">개구리 중사 케로케로케로케로 힘차게 케로케로케로 티셔츠</p>
            <div className="flex items-center gap-[21px]  mb-[7px]">
              <span className=" semibold-14 ">5,000,000원</span>
              <span className=" text-primary-800 medium-14 ">5,394%</span>
            </div>
            <div className="flex items-center justify-between text-font-400 mb-[7px]">
              <div className="flex items-center bg-secondary-50  px-2 py-1 ">
                <div className="medium-12 ">
                  예상 배송 시작일 <span className="text-error ">25.08.08</span>
                </div>
              </div>
              <span className="flex items-center medium-12 ">배송비 무료</span>
            </div>
            <p className="flex items-center bg-primary-50 rounded-b-xs px-[9px] py-2 normal-14 text-gray-900 h-[33px] ">
              선택1 : 케로케로케로 티셔츠 1장
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

// 장바구니 - 주문상품 컴포넌트/최종 금액 확인
export function CheckFinalAmount() {
  return (
    <>
      <section className="flex justify-between items-center p-5 border border-secondary-200 w-[672px] rounded-b-lg text-font-900">
        <span className="bold-16">최종 결제 금액</span>
        <div className="text-font-900 bold-16">
          <span>500,000</span>
          <span>원</span>
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
